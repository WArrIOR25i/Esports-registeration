import * as React from "react";
import { Trophy, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About The Tournament
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Glitch Esports 2025 presented by Shoolini University brings
              together the nation's elite gamers in an epic battle for glory and
              recognition. This premier esports event features multiple game
              titles, professional teams, and rising stars competing at the
              highest level in the University Campus.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With state-of-the-art production, live audience experiences, and
              nationwide broadcasting, Glitch Esports offers an immersive
              experience for both participants and spectators alike.
            </p>
            <p className="text-lg text-gray-300">
              Join us for an unforgettable gaming spectacle that will define the
              future of competitive gaming in our nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-colors">
              <Users className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">National Competition</h3>
              <p className="text-gray-400">
                Top teams from across the country competing for supremacy
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-colors">
              <Zap className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Experience</h3>
              <p className="text-gray-400">
                Immersive in-person event with cutting-edge production
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-colors">
              <Trophy className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Prestigious Titles</h3>
              <p className="text-gray-400">
                Compete for recognition as the best in the nation
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-purple-400 mb-4"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <h3 className="text-xl font-bold mb-2">National Broadcast</h3>
              <p className="text-gray-400">
                Streamed live to viewers across the country
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
