import * as React from "react";
import { Trophy } from "lucide-react";

const hoverEffect = "transform hover:scale-105 transition-transform";
const highlightColor =
  "bg-gradient-to-r from-purple-500 to-purple-400 text-transparent bg-clip-text";

export default function Rules() {
  return (
    <section id="rules" className="py-20 bg-black/80 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tournament Rules
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Please make sure to read and follow all the tournament rules to
            ensure a fair and fun experience for everyone.
          </p>
          <p>
            Failure to comply with the rules may result in disqualification.
          </p>
        </div>

        {/* BGMI Rules */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">
            <span className={highlightColor}>BGMI RULES</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`bg-gradient-to-b from-gray-700/20 to-black/80 backdrop-blur-sm border border-gray-600/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <h3 className="text-2xl font-bold mb-2">General Rules</h3>
              <ul className="text-gray-300 space-y-2">
                <li>No cheating or hacking.</li>
                <li>Respect all participants and organizers.</li>
                <li>All players must be present at the venue for the games.</li>
                <li>
                  Any disputes must be reported immediately to the organizers.
                </li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-gray-700/20 to-black/80 backdrop-blur-sm border border-gray-600/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <h3 className="text-2xl font-bold mb-2">In-Game Rules</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Players must use their own accounts.</li>
                <li>No abusive language or behavior.</li>
                <li>All matches must be played on the official servers.</li>
                <li>Any form of teaming up or collusion is prohibited.</li>
                <li>Follow the in-game rules and regulations.</li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-gray-700/20 to-black/80 backdrop-blur-sm border border-gray-600/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <h3 className="text-2xl font-bold mb-2">Technical Rules</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Players must ensure stable internet connection.</li>
                <li>No use of third-party software.</li>
                <li>Report any technical issues to organizers.</li>
                <li>Follow the technical guidelines provided.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Valorant Rules */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">
            <span className={highlightColor}>VALORANT RULES</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`bg-gradient-to-b from-gray-700/20 to-black/80 backdrop-blur-sm border border-gray-600/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <h3 className="text-2xl font-bold mb-2">General Rules</h3>
              <ul className="text-gray-300 space-y-2">
                <li>No cheating or hacking.</li>
                <li>Respect all participants and organizers.</li>
                <li>Participants must use their own devices.</li>
                <li>
                  PAN India players who are unable to come to the university
                  campus may play from their respective locations.
                </li>
                <li>
                  Any disputes must be reported immediately to the organizers.
                </li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-gray-700/20 to-black/80 backdrop-blur-sm border border-gray-600/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <h3 className="text-2xl font-bold mb-2">In-Game Rules</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Players must use their own accounts.</li>
                <li>No abusive language or behavior.</li>
                <li>All matches must be played on the official servers.</li>
                <li>Any form of teaming up or collusion is prohibited.</li>
                <li>Follow the in-game rules and regulations.</li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-b from-gray-700/20 to-black/80 backdrop-blur-sm border border-gray-600/30 rounded-lg p-8 text-center ${hoverEffect}`}
            >
              <h3 className="text-2xl font-bold mb-2">Technical Rules</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Players must ensure stable internet connection.</li>
                <li>No use of third-party software.</li>
                <li>Report any technical issues to organizers.</li>
                <li>Follow the technical guidelines provided.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
