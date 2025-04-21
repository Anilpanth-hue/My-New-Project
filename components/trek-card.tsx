"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Github, Globe, LineChart, Trophy, Users } from "lucide-react";
import Image from "next/image";
import anillogo from "../assets/anillogo.jpg";

interface PlatformScore {
  platform: string;
  score: number;
  solved: number;
  total: number;
  rank?: string;
  level?: string;
}

interface TrekCardProps {
  name?: string;
  username?: string;
  avatarUrl?: string;
  bio?: string;
  platforms?: PlatformScore[];
  skills?: string[];
}

export default function TrekCard({
  name = "Anil Panth",
  username = "anilcode",
  avatarUrl = anillogo.src,
  bio = "Full-stack developer passionate about algorithms and problem solving",
  platforms = [
    {
      platform: "LeetCode",
      score: 1850,
      solved: 420,
      total: 2500,
      rank: "Guardian",
    },
    {
      platform: "GeeksForGeeks",
      score: 1200,
      solved: 350,
      total: 1500,
      level: "Expert",
    },
    {
      platform: "HackerRank",
      score: 1600,
      solved: 95,
      total: 120,
      rank: "5 Star",
    },
    {
      platform: "CodeChef",
      score: 1750,
      solved: 180,
      total: 500,
      rank: "4 Star",
    },
  ],
  skills = ["Python", "JavaScript", "DSA", "React", "Node.js", "SQL"],
}: TrekCardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const colorMap: Record<string, string> = {
    LeetCode: "from-orange-400 to-yellow-500",
    GeeksForGeeks: "from-green-400 to-emerald-500",
    HackerRank: "from-amber-500 to-red-500",
    CodeChef: "from-indigo-400 to-purple-500",
  };

  // Calculate total stats
  const totalSolved = platforms.reduce(
    (acc, platform) => acc + platform.solved,
    0
  );
  const totalProblems = platforms.reduce(
    (acc, platform) => acc + platform.total,
    0
  );
  const averageScore = Math.round(
    platforms.reduce((acc, platform) => acc + platform.score, 0) /
      platforms.length
  );

  return (
    <Card className="w-full max-w-md overflow-hidden bg-gradient-to-br from-[#0f1129] to-[#0a0b14] text-white border-gray-800 shadow-xl">
      <CardHeader className="relative pb-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-80" />
        <div className="relative z-10 flex flex-col items-center pt-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-sm opacity-70" />
            <Image
              src={anillogo || "/placeholder.svg"}
              alt={name}
              className="relative z-10 h-24 w-24 rounded-full border-4 border-gray-800 bg-gray-800 object-cover"
              width={96}
              height={96}
            />
            <div className="absolute bottom-0 right-0 z-20 rounded-full bg-green-500 p-1.5 ring-4 ring-[#0a0b14]">
              <Trophy className="h-4 w-4 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-bold">{name}</h2>
          <p className="text-gray-400">@{username}</p>
          {bio && (
            <p className="mt-2 text-center text-sm text-gray-400">{bio}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-900/50 p-3 text-center">
                <p className="text-sm text-gray-400">Problems Solved</p>
                <p className="text-2xl font-bold text-indigo-400">
                  {totalSolved}
                </p>
                <p className="text-xs text-gray-500">of {totalProblems}</p>
              </div>
              <div className="rounded-lg bg-gray-900/50 p-3 text-center">
                <p className="text-sm text-gray-400">Avg. Score</p>
                <p className="text-2xl font-bold text-purple-400">
                  {averageScore}
                </p>
                <p className="text-xs text-gray-500">across platforms</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-400">
                Platform Activity
              </p>
              {platforms.map((platform) => (
                <div key={platform.platform} className="space-y-1">
                  <div className="flex justify-between text-xs ">
                    <span>{platform.platform}</span>
                    <span>
                      {platform.solved} / {platform.total}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        colorMap[platform.platform] ||
                        "from-gray-400 to-gray-600"
                      }`}
                      style={{
                        width: `${(platform.solved / platform.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="platforms" className="mt-4">
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div
                  key={platform.platform}
                  className="rounded-lg bg-gray-900/50 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{platform.platform}</span>
                    {platform.rank && (
                      <Badge
                        variant="outline"
                        className="border-indigo-500 text-indigo-400"
                      >
                        {platform.rank}
                      </Badge>
                    )}
                    {platform.level && (
                      <Badge
                        variant="outline"
                        className="border-indigo-500 text-indigo-400"
                      >
                        {platform.level}
                      </Badge>
                    )}
                  </div>
                  <Progress
                    value={(platform.solved / platform.total) * 100}
                    className="mt-2 h-2 bg-gray-800"
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>{platform.solved} solved</span>
                    <span>Score: {platform.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} className="bg-yellow-500 hover:bg-gray-800">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-gray-900/50 p-3">
              <p className="text-sm font-medium">Connect with me</p>
              <div className="mt-2 flex space-x-3">
                <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                  <Github className="h-5 w-5" />
                </button>
                <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                  <Globe className="h-5 w-5" />
                </button>
                <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                  <Code className="h-5 w-5" />
                </button>
                <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                  <Users className="h-5 w-5" />
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-gray-900/70 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-1">
            <LineChart className="h-4 w-4 text-indigo-400" />
            <span className="text-xs text-gray-400">Last updated: Today</span>
          </div>
          <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0">
            CodeTrek
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
