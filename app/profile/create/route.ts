import { NextResponse } from "next/server"

// Simulated delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(request: Request) {
  // Simulate API processing time
  await delay(Math.random() * 2000 + 1000)

  return NextResponse.json({
    success: true,
    message: "Profile created successfully",
    profileId: "user_" + Math.random().toString(36).substring(2, 10),
  })
}
