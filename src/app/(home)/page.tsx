import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { OfflineBanner } from "@/components/offline-banner";

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen">
      <OfflineBanner />

      {JSON.stringify(session, null, 2)}

      {/* Hero Section */}
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
              Access critical information, resources, and support during times
              of crisis
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

      {/* Latest News & Updates */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Latest News & Updates
              </h2>
              <p className="text-slate-600 mt-2">
                Stay informed with the most recent disaster events
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Link href="/news">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="text-sm text-slate-500">{item.date}</span>
                  </div>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-slate-500">
                    Source: {item.source}
                  </span>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disaster Preparedness Section */}
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
                        <CardDescription>
                          {disaster.description}
                        </CardDescription>
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

      {/* Community Stories */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Community Stories
              </h2>
              <p className="text-slate-600 mt-2">
                Real experiences shared by survivors
              </p>
            </div>
            <Button>Share Your Experience</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityStories.map((story) => (
              <Card key={story.id}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={story.avatar} alt={story.name} />
                      <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>
                        {story.location} • {story.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{story.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapist Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Need Support? Connect with a Therapist
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Professional help is available for those dealing with trauma and
              stress from disasters
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {therapists.map((therapist) => (
              <Card key={therapist.id}>
                <CardHeader className="text-center">
                  <Avatar className="mx-auto h-24 w-24">
                    <AvatarImage src={therapist.avatar} alt={therapist.name} />
                    <AvatarFallback>
                      {therapist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">{therapist.name}</CardTitle>
                  <CardDescription>{therapist.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600">
                    {therapist.description}
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    {therapist.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Request Consultation</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/therapists">
              <Button variant="outline">
                View All Therapists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Sample data
const newsItems = [
  {
    id: 1,
    title: "Magnitude 6.2 Earthquake Strikes Coastal Region",
    excerpt:
      "A powerful earthquake has affected several coastal communities with reports of damage to infrastructure.",
    image: "/placeholder.svg?height=300&width=600",
    date: "May 15, 2023",
    category: "Earthquake",
    source: "National Geological Survey",
  },
  {
    id: 2,
    title: "Flood Warning Issued for River Valley Communities",
    excerpt:
      "Heavy rainfall has prompted authorities to issue evacuation orders for low-lying areas near the river.",
    image: "/placeholder.svg?height=300&width=600",
    date: "June 2, 2023",
    category: "Flood",
    source: "Weather Service",
  },
  {
    id: 3,
    title: "Wildfire Contained After Threatening Residential Areas",
    excerpt:
      "Firefighters have successfully contained a wildfire that threatened several neighborhoods.",
    image: "/placeholder.svg?height=300&width=600",
    date: "July 10, 2023",
    category: "Fire",
    source: "Fire Department",
  },
];

import { Waves, Flame, Wind, CloudRain, Activity } from "lucide-react";
import { auth } from "@/auth";

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

const communityStories = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Portland, OR",
    date: "3 months ago",
    excerpt:
      "When the wildfire approached our neighborhood, we had only 20 minutes to evacuate. Here's how we managed to save what mattered most...",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Houston, TX",
    date: "1 year ago",
    excerpt:
      "After Hurricane Harvey flooded our home, our community came together in ways I never expected. This is our story of recovery...",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "San Juan, PR",
    date: "2 years ago",
    excerpt:
      "Living through Hurricane Maria taught me valuable lessons about preparation and resilience that I want to share with others...",
  },
];

const therapists = [
  {
    id: 1,
    name: "Dr. Amanda Park",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Trauma Specialist",
    description:
      "Specializing in disaster-related PTSD and anxiety disorders with 15 years of experience.",
    tags: ["Trauma", "PTSD"],
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Crisis Counselor",
    description:
      "Helping individuals and families navigate the emotional aftermath of natural disasters.",
    tags: ["Crisis", "Family"],
  },
  {
    id: 3,
    name: "Dr. Maria Sanchez",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Child Psychologist",
    description:
      "Supporting children and adolescents in processing traumatic events and building resilience.",
    tags: ["Children", "Anxiety"],
  },
  {
    id: 4,
    name: "Dr. Robert Lee",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Grief Counselor",
    description:
      "Guiding individuals through the grief process after loss due to disasters.",
    tags: ["Grief", "Loss"],
  },
];
