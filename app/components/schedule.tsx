import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Glitch Esports Schedule
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Mark your calendar for these key tournament dates
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger
              value="day1"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Day 1
            </TabsTrigger>
            <TabsTrigger
              value="day2"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Day 2
            </TabsTrigger>
            <TabsTrigger
              value="day3"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Finals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="space-y-4">
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Opening Ceremony</h3>
                  <p className="text-gray-400">
                    Welcome address and tournament overview
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 28, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>10:00 AM - 10:30 AM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>AI Block</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">BGMI - Finals Day-1</h3>
                  <p className="text-gray-400">
                    Teams compete in group matches
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 28, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>11:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>AI Block</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Valorant - Finals Day-1</h3>
                  <p className="text-gray-400">
                    Teams compete in group matches
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 28, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>11:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>AI Block</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="day2" className="space-y-4">
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">BGMI - Finals Day-2</h3>
                  <p className="text-gray-400">Top 8 teams compete</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 29, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>11:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>AI Block</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Valorant - Finals Day-2</h3>
                  <p className="text-gray-400">
                    Top 4 teams battle for finals spot
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 29, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>11:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>AI Block</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="day3" className="space-y-4">
            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Awards Ceremony</h3>
                  <p className="text-gray-400">
                    Trophy presentation and closing
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 30, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Main Stage</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
