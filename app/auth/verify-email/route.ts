import { NextResponse } from "next/server"

// Simulated delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(request: Request) {
  // Simulate API processing time
  await delay(Math.random() * 1500 + 1000)

  return NextResponse.json({
    success: true,
    message: "Email verification successful",
  })
}
