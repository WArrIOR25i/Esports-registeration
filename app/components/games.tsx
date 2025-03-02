import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Games() {
  const games = [
    {
      id: 1,
      title: "Valorant",
      image:
        "https://static.toiimg.com/thumb/msid-110824701,width-1280,height-720,resizemode-4/110824701.jpg", // Updated image URL
      category: "FPS",
      description:
        "5v5 character-based tactical shooter with precise gunplay and unique agent abilities, *PAN India players who are unable to arrive at the campus venue may play from their respective locations.*",
      formLink: "https://forms.gle/AALWZ923s6t9DuYF6",
    },
    {
      id: 2,
      title: "BGMI",
      image:
        "https://images.firstpost.com/wp-content/uploads/2022/07/Explained-Why-Google-and-Apple-removed-BGMI-from-their-respective-app-stores-2-years-after-PUBG-ban-2.jpg?im=FitAndFill=(596,336)", // Updated image URL
      category: "Battle Royale",
      description:
        "Battlegrounds Mobile India - A battle royale where 100 players fight to be the last one standing.",
      formLink: "https://forms.gle/AALWZ923s6t9DuYF6",
    },
    {
      id: 3,
      title: "FIFA",
      image:
        "https://media.contentapi.ea.com/content/dam/ea/fifa/images/fifa-generic-featured-tile-16x9.png.adapt.crop191x100.1200w.png", // Updated image URL
      category: "Sports",
      description:
        "The world's most popular football simulation game. Open to university students only.",
      formLink: "https://forms.gle/ooJJ9tcXZM1vAy4X6",
    },
    {
      id: 4,
      title: "Tekken",
      image: "https://media.graphassets.com/oB3fliYOQSSi9Za2sjlU", // Updated image URL
      category: "Fighting",
      description:
        "Legendary 3D fighting game featuring martial arts combat. Open to university students only.",
      formLink: "https://forms.gle/vVYM25gv6b3gTcc6A",
    },
  ];

  return (
    <section id="games" className="py-20 bg-black/80 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Games
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Compete in these popular esports titles with custom tournament
            formats designed for maximum excitement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden hover:border-purple-500/60 transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <Badge className="absolute top-3 right-3 bg-purple-600">
                  {game.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{game.title}</h3>
                <p className="text-gray-300 mb-4">{game.description}</p>
                <Link
                  href={game.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Register for {game.title}{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
