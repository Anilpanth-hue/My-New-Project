"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConnectModal } from "@/components/profile/connect-modal";
import Link from "next/link";

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrackProfile = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(true);
    }, 1500);
  };

  return (
    <section className="relative bg-gradient-to-b from-background to-background/80 container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        LeveL UP YouR CodinG JourneY With{" "}
        <span className="text-purple-500">CodeTreK</span>
      </h1>
      <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        <span className="text-orange-500 font-bold">CODE</span>
        <span className="text-orange-500 font-bold">TREK </span>
        simplifies tracking coding progress and provides valuable insights. It
        helps developers improve their skills by offering a centralized
        dashboard and performance analytics.
      </p>
      {loading && <LoadingSpinner />}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="cursor-pointer relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
          onClick={handleTrackProfile}
          disabled={loading}
        >
          Track Your Profile
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Link href="/trek-card" passHref>
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer relative z-10 border-purple-500 text-purple-500 hover:bg-purple-500/10 w-full"
            disabled={loading}
          >
            Get Your CodeTrek Card
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <ConnectModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
