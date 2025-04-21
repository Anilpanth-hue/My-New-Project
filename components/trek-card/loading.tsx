import type React from "react"
export default function TrekCardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen text-white">{children}</div>
}
