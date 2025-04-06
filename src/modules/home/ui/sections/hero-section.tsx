import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Disaster response"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Stay Informed. Stay Prepared.
          </h1>
          <p className="mb-8 text-lg text-slate-200 md:text-xl">
            Access critical information, resources, and support during times of
            crisis
          </p>
          <div className="mx-auto mb-8 flex max-w-md flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search disasters, news, or tips..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              View Latest Updates
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="border-white/30 text-white">
              Earthquake
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white">
              Flood
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white">
              Fire
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white">
              Hurricane
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white">
              Tornado
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
