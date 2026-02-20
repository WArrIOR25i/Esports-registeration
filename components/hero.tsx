"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("March 15, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-black/80 z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
              NEXUS TOURNAMENT 2026
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            The ultimate esports showdown. Glory awaits the champions.
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 md:p-6">
              <div className="text-3xl md:text-5xl font-bold text-white">
                {timeLeft.days}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">DAYS</div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 md:p-6">
              <div className="text-3xl md:text-5xl font-bold text-white">
                {timeLeft.hours}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">HOURS</div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 md:p-6">
              <div className="text-3xl md:text-5xl font-bold text-white">
                {timeLeft.minutes}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">
                MINUTES
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 md:p-6">
              <div className="text-3xl md:text-5xl font-bold text-white">
                {timeLeft.seconds}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">
                SECONDS
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto text-lg border-purple-500/50 text-white hover:bg-purple-950/30 px-8 py-6"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
