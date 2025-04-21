import { NextResponse } from "next/server"

// Simulated delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function GET() {
  // Simulate API processing time
  await delay(Math.random() * 1000 + 500)

  return NextResponse.json({
    success: true,
    message: "Verification successful",
  })
}

export async function POST() {
  // Simulate API processing time
  await delay(Math.random() * 1000 + 500)

  return NextResponse.json({
    success: true,
    message: "Verification successful",
  })
}
