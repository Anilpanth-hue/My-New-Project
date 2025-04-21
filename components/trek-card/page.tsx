"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TrekCard from "@/components/trek-card";
import { Download, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

export default function TrekCardPage() {
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [cardGenerated, setCardGenerated] = useState(false);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleGenerateCard = () => {
    setGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGenerating(false);
      setCardGenerated(true);
    }, 2000);
  };

  const handleDownload = () => {
    alert("Card download functionality would be implemented here");
  };

  const handleShare = () => {
    alert("Card sharing functionality would be implemented here");
  };

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen text-white">
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-white mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-center mb-8">
        Your <span className="text-purple-500">CodeTrek</span> Card
      </h1>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <LoadingSpinner />
          <p className="mt-4 text-gray-400">Loading your profile data...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mb-8">
            <TrekCard />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            {!cardGenerated ? (
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={handleGenerateCard}
                disabled={generating}
              >
                {generating ? (
                  <>
                    <span className="mr-2">Generating Card...</span>
                    <LoadingSpinner />
                  </>
                ) : (
                  <>Generate Card</>
                )}
              </Button>
            ) : (
              <>
                <Button
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  onClick={handleShare}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </>
            )}
          </div>

          <Card className="w-full max-w-md mt-8 p-4 bg-gray-900/50 border-gray-800">
            <h3 className="text-lg font-medium mb-2">About CodeTrek Cards</h3>
            <p className="text-gray-400 text-sm">
              Your CodeTrek Card showcases your coding journey across multiple
              platforms. Share it on social media, add it to your portfolio, or
              use it to track your progress.
            </p>
          </Card>
        </div>
      )}
    </div>
  );
}
