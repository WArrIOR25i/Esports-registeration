import * as React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-black/80 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Supported by the biggest names in gaming and technology
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            Platinum Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 flex items-center justify-center h-32"
              >
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt={`Platinum Sponsor ${i}`}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-center mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 flex items-center justify-center h-24"
              >
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt={`Gold Sponsor ${i}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Interested in sponsoring the Nexus Tournament? Contact our
            partnership team to learn about sponsorship opportunities.
          </p>
          <button className="inline-flex h-10 items-center justify-center rounded-md border border-purple-500/50 bg-black/50 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-950/30">
            Sponsorship Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
