import { NextResponse } from "next/server"

// Simulated delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(request: Request) {
  // Simulate API processing time
  await delay(Math.random() * 3000 + 2000)

  return NextResponse.json({
    success: true,
    message: "Card generated successfully",
    cardId: "card_" + Math.random().toString(36).substring(2, 10),
    imageUrl: "/api/card/image?id=" + Math.random().toString(36).substring(2, 10),
  })
}
