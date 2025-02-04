import { serialize, parse } from "cookie"
import DOMPurify from "isomorphic-dompurify"

// Generate a CSRF token (server-side only)
export function generateCSRFToken() {
  if (typeof window === "undefined") {
    const crypto = require("crypto")
    return crypto.randomBytes(32).toString("hex")
  }
  return ""
}

// Verify CSRF token (server-side only)
export function verifyCSRFToken(token: string, storedToken: string) {
  if (typeof window === "undefined") {
    const crypto = require("crypto")
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(storedToken))
  }
  return false
}

// Set CSRF token in cookie (server-side only)
export function setCSRFCookie(res: any, token: string) {
  if (typeof window === "undefined") {
    res.setHeader(
      "Set-Cookie",
      serialize("csrfToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 3600, // 1 hour
      }),
    )
  }
}

// Get CSRF token from cookie (server-side only)
export function getCSRFTokenFromCookie(req: any) {
  if (typeof window === "undefined") {
    const cookies = parse(req.headers.cookie || "")
    return cookies.csrfToken
  }
  return ""
}

// Sanitize user input (can be used on both client and server)
export function sanitizeInput(input: string) {
  return DOMPurify.sanitize(input)
}

