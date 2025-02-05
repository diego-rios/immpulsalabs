import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { randomBytes } from "crypto"

export async function GET() {
  try {
    console.log("🔑 Generating CSRF token...")
    // Generate a random token
    const token = randomBytes(32).toString("hex")

    // Create a response with the token
    const response = NextResponse.json(
      { csrfToken: token },
      { status: 200 }
    )

    // Set cookie with the token
    response.cookies.set({
      name: "csrf-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    })

    console.log("✅ CSRF token generated:", token.slice(0, 10) + "...")
    return response
  } catch (error) {
    console.error("❌ Error generating CSRF token:", error)
    return NextResponse.json(
      { error: "Failed to generate CSRF token" },
      { status: 500 }
    )
  }
} 