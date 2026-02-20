import * as React from "react";
import { Trophy } from "lucide-react";

const hoverEffect = "transform hover:scale-105 transition-transform";
const bronzeBg = "bg-gradient-to-b from-bronze-500/20 to-black/80";
const bronzeBorder = "border-bronze-500/30";
const bronzeText = "text-bronze-400";

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-black/80 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prize Pool</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Compete for a share of the prize pool for BGMI and Valorant{" "}
          </p>
          <p>Prizes may increase but won't decrease</p>
        </div>

        {/* BGMI Prizes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">BGMI Prizes</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`bg-gradient-to-b from-amber-500/20 to-black/80 backdrop-blur-sm border border-amber-500/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <div className="bg-amber-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-amber-400">
                1st Place
              </h3>
              <p className="text-3xl font-bold mb-4">₹10,000</p>
              <ul className="text-gray-300 space-y-2">
                <li>Championship Trophy</li>
                <li>Championship Certificates</li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-gray-400/20 to-black/80 backdrop-blur-sm border border-gray-400/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <div className="bg-gray-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">
                2nd Place
              </h3>
              <p className="text-3xl font-bold mb-4">₹5,000</p>
              <ul className="text-gray-300 space-y-2">
                <li>Runner-up Certificates</li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-bronze-500/20 to-black/80 backdrop-blur-sm border border-bronze-500/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <div className="bg-bronze-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-bronze-400" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${bronzeText}`}>
                3rd Place
              </h3>
              <p className="text-3xl font-bold mb-4">₹2,500</p>
              <ul className="text-gray-300 space-y-2">
                <li>3rd Place Certificates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Valorant Prizes */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">
            Valorant Prizes
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`bg-gradient-to-b from-amber-500/20 to-black/80 backdrop-blur-sm border border-amber-500/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <div className="bg-amber-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-amber-400">
                1st Place
              </h3>
              <p className="text-3xl font-bold mb-4">₹10,000</p>
              <ul className="text-gray-300 space-y-2">
                <li>Championship Trophy</li>
                <li>Championship Certificates</li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-gray-400/20 to-black/80 backdrop-blur-sm border border-gray-400/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <div className="bg-gray-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">
                2nd Place
              </h3>
              <p className="text-3xl font-bold mb-4">₹5,000</p>
              <ul className="text-gray-300 space-y-2">
                <li>Runner-up Certificates</li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-bronze-500/20 to-black/80 backdrop-blur-sm border border-bronze-500/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <div className="bg-bronze-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-bronze-400" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${bronzeText}`}>
                3rd Place
              </h3>
              <p className="text-3xl font-bold mb-4">₹2,500</p>
              <ul className="text-gray-300 space-y-2">
                <li>3rd Place Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FIFA & Clash Royle Prizes */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center mt-16">
          FIFA & Clash Royale
        </h3>
        <div className="grid md:grid-cols-20 gap-8 max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-b from-amber-500/20 to-black/80 backdrop-blur-sm border border-amber-500/30 rounded-lg p-8 text-center ${hoverEffect}`}
          >
            <div className="bg-amber-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-10 w-10 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-amber-400">
              1st Place
            </h3>
            <p className="text-3xl font-bold mb-4">
              Cash prize from the entry pool
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>In-House</li>
              <li>Championship Certificates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
