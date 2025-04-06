import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waves, Flame, Wind, CloudRain, Activity } from "lucide-react";

const disasterTypes = [
  {
    type: "earthquake",
    title: "Earthquake",
    icon: Activity,
    description: "Sudden shaking of the ground caused by seismic waves",
    before: [
      "Secure heavy furniture to walls",
      "Create an emergency plan",
      "Prepare emergency kit",
      "Know how to shut off utilities",
    ],
    during: [
      "Drop, cover, and hold on",
      "Stay away from windows",
      "If outdoors, move to open area",
      "If driving, pull over safely",
    ],
    after: [
      "Check for injuries and damage",
      "Be prepared for aftershocks",
      "Listen to emergency broadcasts",
      "Avoid damaged buildings",
    ],
  },
  {
    type: "flood",
    title: "Flood",
    icon: Waves,
    description: "Overflow of water that submerges land that is usually dry",
    before: [
      "Know your flood risk",
      "Prepare emergency kit",
      "Create evacuation plan",
      "Consider flood insurance",
    ],
    during: [
      "Move to higher ground",
      "Avoid walking through water",
      "Do not drive through flooded areas",
      "Follow evacuation orders",
    ],
    after: [
      "Avoid floodwaters",
      "Document damage for insurance",
      "Clean and disinfect everything",
      "Watch for hazards like downed power lines",
    ],
  },
  {
    type: "fire",
    title: "Fire",
    icon: Flame,
    description: "Rapid oxidation causing heat, light, and destruction",
    before: [
      "Install smoke alarms",
      "Create fire escape plan",
      "Clear brush around home",
      "Store flammable items safely",
    ],
    during: [
      "Get out and stay out",
      "Crawl low under smoke",
      "Feel doors before opening",
      "Use wet cloth over nose if needed",
    ],
    after: [
      "Wait for officials to say it's safe",
      "Document damage",
      "Check for hot spots",
      "Contact insurance company",
    ],
  },
  {
    type: "hurricane",
    title: "Hurricane",
    icon: Wind,
    description: "Tropical cyclone with sustained winds of at least 74 mph",
    before: [
      "Board up windows",
      "Secure outdoor objects",
      "Prepare emergency supplies",
      "Know evacuation routes",
    ],
    during: [
      "Stay indoors away from windows",
      "Monitor emergency broadcasts",
      "Turn refrigerator to coldest setting",
      "Fill bathtub with water",
    ],
    after: [
      "Stay away from damaged areas",
      "Avoid downed power lines",
      "Be careful of debris",
      "Document damage for insurance",
    ],
  },
  {
    type: "tornado",
    title: "Tornado",
    icon: CloudRain,
    description: "Violently rotating column of air that touches the ground",
    before: [
      "Know warning signs",
      "Identify safe room or shelter",
      "Practice tornado drills",
      "Secure outdoor objects",
    ],
    during: [
      "Go to basement or interior room",
      "Stay away from windows",
      "Cover head and neck",
      "If outside, lie in a low spot",
    ],
    after: [
      "Watch for downed power lines",
      "Stay out of damaged buildings",
      "Help injured people",
      "Document damage",
    ],
  },
];

const DisasterPreparednessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Disaster Preparedness
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Learn what to do before, during, and after different types of
            disasters
          </p>
        </div>

        <Tabs defaultValue="earthquake" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="earthquake">Earthquake</TabsTrigger>
            <TabsTrigger value="flood">Flood</TabsTrigger>
            <TabsTrigger value="fire">Fire</TabsTrigger>
            <TabsTrigger value="hurricane">Hurricane</TabsTrigger>
            <TabsTrigger value="tornado">Tornado</TabsTrigger>
          </TabsList>
          {disasterTypes.map((disaster) => (
            <TabsContent
              key={disaster.type}
              value={disaster.type}
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-red-100">
                      <disaster.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle>{disaster.title}</CardTitle>
                      <CardDescription>{disaster.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Before</h4>
                      <ul className="space-y-2 text-sm">
                        {disaster.before.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="rounded-full bg-green-100 p-1 mt-0.5">
                              <svg
                                className="h-2 w-2 fill-green-600"
                                viewBox="0 0 6 6"
                              >
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">During</h4>
                      <ul className="space-y-2 text-sm">
                        {disaster.during.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="rounded-full bg-amber-100 p-1 mt-0.5">
                              <svg
                                className="h-2 w-2 fill-amber-600"
                                viewBox="0 0 6 6"
                              >
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">After</h4>
                      <ul className="space-y-2 text-sm">
                        {disaster.after.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                              <svg
                                className="h-2 w-2 fill-blue-600"
                                viewBox="0 0 6 6"
                              >
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Complete {disaster.title} Guide
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DisasterPreparednessSection;
