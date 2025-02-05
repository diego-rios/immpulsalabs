import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { cookies } from "next/headers"
import { supabase } from "@/lib/supabase"
import { sanitizeInput } from "@/utils/security"
import type { Database } from "@/types/supabase"

export async function POST(request: Request) {
  try {
    console.log("📝 Form submission started")
    const headersList = headers()
    const cookieStore = cookies()
    
    // Get CSRF tokens from header and cookie
    const headerToken = headersList.get("x-csrf-token")
    const cookieToken = cookieStore.get("csrf-token")?.value

    console.log("🔒 CSRF Validation:", {
      headerToken: headerToken?.slice(0, 10) + "...",
      cookieToken: cookieToken?.slice(0, 10) + "...",
      match: headerToken === cookieToken,
    })

    // Validate CSRF token
    if (!headerToken || !cookieToken || headerToken !== cookieToken) {
      console.error("❌ CSRF validation failed")
      return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 })
    }

    const data = await request.json()
    console.log("📊 Received form data:", {
      ...data,
      email: data.email?.slice(0, 3) + "..." + data.email?.slice(-4), // Mask email
      whatsapp: "XXXXX" + data.whatsapp?.slice(-4), // Mask phone
    })

    // Basic validation
    if (!data.nombre || !data.apellido || !data.email || !data.whatsapp || !data.countryCode) {
      console.error("❌ Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get UTM parameters and other tracking info from headers
    const referer = headersList.get("referer") || null
    const userAgent = headersList.get("user-agent") || null
    const ip = headersList.get("x-forwarded-for")?.split(",")[0] || headersList.get("x-real-ip") || null

    console.log("🔍 Request metadata:", { referer, ip: ip?.slice(0, 10) + "..." })

    // Parse UTM parameters from referer
    const utmParams = {
      utm_source: null as string | null,
      utm_medium: null as string | null,
      utm_campaign: null as string | null,
      utm_term: null as string | null,
      utm_content: null as string | null,
    }

    if (referer) {
      try {
        const url = new URL(referer)
        const searchParams = url.searchParams
        utmParams.utm_source = searchParams.get("utm_source")
        utmParams.utm_medium = searchParams.get("utm_medium")
        utmParams.utm_campaign = searchParams.get("utm_campaign")
        utmParams.utm_term = searchParams.get("utm_term")
        utmParams.utm_content = searchParams.get("utm_content")
        console.log("📈 UTM Parameters:", utmParams)
      } catch (e) {
        console.error("❌ Error parsing referer URL:", e)
      }
    }

    // Get browser info
    const browserInfo = userAgent
      ? {
          userAgent,
          language: headersList.get("accept-language") || "unknown",
          platform: "web",
          vendor: "unknown",
        }
      : null

    // Check for duplicate leads
    console.log("🔄 Checking for duplicates...")
    const { data: isDuplicate, error: duplicateError } = await supabase.rpc("check_duplicate_lead", {
      p_email: sanitizeInput(data.email),
      p_phone: sanitizeInput(data.whatsapp),
      p_timeframe_minutes: 30,
    })

    if (duplicateError) {
      console.error("❌ Error checking duplicates:", duplicateError)
      return NextResponse.json({ error: "Error checking duplicates" }, { status: 500 })
    }

    if (isDuplicate) {
      console.log("⚠️ Duplicate submission detected")
      return NextResponse.json({ error: "Duplicate submission" }, { status: 409 })
    }

    console.log("💾 Inserting lead into database...")
    // Insert into Supabase
    const { error: insertError } = await supabase.from("leads").insert({
      first_name: sanitizeInput(data.nombre),
      last_name: sanitizeInput(data.apellido),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.whatsapp),
      country_code: sanitizeInput(data.countryCode),
      source: "exit_intent",
      page_url: referer,
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_term: utmParams.utm_term,
      utm_content: utmParams.utm_content,
      browser_info: browserInfo,
      ip_address: ip,
    })

    if (insertError) {
      console.error("❌ Error inserting lead:", insertError)
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
    }

    console.log("✅ Form submission completed successfully")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Error processing form submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
} 