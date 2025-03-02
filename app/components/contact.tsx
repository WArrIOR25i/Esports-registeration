import * as React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Have questions about the tournament? Get in touch with our team
          </p>
        </div>

        <div className="grid gap-10 max-w-lg mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  {/* Link to open Google Maps in a new tab */}
                  <a
                    href="https://maps.app.goo.gl/BNdiYa3jMErcH7699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    <p className="text-gray-300">Shoolini University</p>
                    <p className="text-gray-300">Bajhol, Solan</p>
                    <p className="text-gray-300">Himachal Pradesh - 173229</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-300">joypadsymphony@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
            <div className="flex items-start">
              <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-300">+91 9902966717</p>
                <p className="text-gray-300">+91 7905742890</p>
                <p className="text-gray-300">Mon-Fri: 9am - 5pm IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
