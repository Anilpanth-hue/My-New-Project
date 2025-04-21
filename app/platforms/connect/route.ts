import { NextResponse } from "next/server"

// Simulated delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(request: Request, { params }: { params: { platform: string } }) {
  const platform = params.platform

  // Simulate API processing time
  await delay(Math.random() * 2000 + 1000)

  return NextResponse.json({
    success: true,
    message: `Successfully connected to ${platform}`,
    platform: platform,
  })
}
