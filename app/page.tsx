import * as React from "react";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Games from "@/app/components/games";
import Schedule from "@/app/components/schedule";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";
import Prizes from "./components/prizes";
import Rules from "./components/rules";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Games />
        <Prizes />
        <Rules />
        <Schedule />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
