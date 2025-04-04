import Image from "next/image";
import {
  Search,
  Clock,
  Calendar,
  Activity,
  Waves,
  Flame,
  Wind,
  CloudRain,
  LucideProps,
} from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Disaster {
  type: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  image: string;
  overview: string;
  causes: string[];
  effects: string[];
  before: string[];
  during: string[];
  after: string[];
  history: History[];
}

export interface History {
  name: string;
  year: string;
  date: string;
  magnitude: string;
  description: string;
}

// Sample data
const disasterTypes: Disaster[] = [
  {
    type: "earthquake",
    title: "Earthquake",
    icon: Activity,
    image: "/placeholder.svg?height=400&width=600",
    overview:
      "An earthquake is a sudden shaking of the ground caused by the passage of seismic waves through Earth's rocks. Earthquakes occur when energy stored in elastically strained rocks is suddenly released. This release of energy causes intense ground shaking in the area near the source of the earthquake and can also cause tsunamis, landslides, and occasionally volcanic activity.",
    causes: [
      "Movement of tectonic plates",
      "Volcanic activity",
      "Human activities like mining and reservoir-induced seismicity",
      "Collapse of underground caverns",
    ],
    effects: [
      "Ground shaking and rupture",
      "Landslides and avalanches",
      "Tsunamis in coastal regions",
      "Structural damage to buildings and infrastructure",
      "Fires from damaged gas lines",
    ],
    before: [
      "Secure heavy furniture to walls",
      "Create an emergency plan",
      "Prepare emergency kit",
      "Know how to shut off utilities",
      "Identify safe spots in each room",
      "Practice drop, cover, and hold on",
    ],
    during: [
      "Drop, cover, and hold on",
      "Stay away from windows",
      "If outdoors, move to open area",
      "If driving, pull over safely",
      "Do not use elevators",
      "Protect your head and neck",
    ],
    after: [
      "Check for injuries and damage",
      "Be prepared for aftershocks",
      "Listen to emergency broadcasts",
      "Avoid damaged buildings",
      "Check for gas leaks",
      "Text instead of call to reduce network congestion",
    ],
    history: [
      {
        name: "Great San Francisco Earthquake",
        year: "1906",
        date: "April 18, 1906",
        magnitude: "7.9 Magnitude",
        description:
          "One of the most significant earthquakes of all time, destroying much of San Francisco with both the quake itself and resulting fires.",
      },
      {
        name: "Great Kanto Earthquake",
        year: "1923",
        date: "September 1, 1923",
        magnitude: "7.9 Magnitude",
        description:
          "Devastated Tokyo and Yokohama, causing widespread fires and killing over 140,000 people.",
      },
      {
        name: "Tohoku Earthquake and Tsunami",
        year: "2011",
        date: "March 11, 2011",
        magnitude: "9.0-9.1 Magnitude",
        description:
          "Triggered a powerful tsunami that caused nuclear accidents, most notably the Fukushima Daiichi nuclear disaster.",
      },
      {
        name: "Haiti Earthquake",
        year: "2010",
        date: "January 12, 2010",
        magnitude: "7.0 Magnitude",
        description:
          "Caused catastrophic damage in an already vulnerable region, killing over 200,000 people and displacing millions.",
      },
    ],
  },
  {
    type: "flood",
    title: "Flood",
    icon: Waves,
    image: "/placeholder.svg?height=400&width=600",
    overview:
      "A flood is an overflow of water that submerges land that is usually dry. Floods can occur in rivers, when flow exceeds the capacity of the river channel, or in coastal areas. They can also occur when dams break, snow melts rapidly, or after heavy rainfall.",
    causes: [
      "Heavy rainfall",
      "Snowmelt",
      "Dam or levee failures",
      "Storm surges from hurricanes",
      "Urbanization reducing ground absorption",
    ],
    effects: [
      "Property damage and destruction",
      "Loss of life and injury",
      "Contamination of water supplies",
      "Spread of waterborne diseases",
      "Soil erosion and crop damage",
    ],
    before: [
      "Know your flood risk",
      "Prepare emergency kit",
      "Create evacuation plan",
      "Consider flood insurance",
      "Elevate electrical systems",
      "Install check valves in plumbing",
    ],
    during: [
      "Move to higher ground",
      "Avoid walking through water",
      "Do not drive through flooded areas",
      "Follow evacuation orders",
      "Turn off utilities if instructed",
      "Avoid contact with floodwater",
    ],
    after: [
      "Avoid floodwaters",
      "Document damage for insurance",
      "Clean and disinfect everything",
      "Watch for hazards like downed power lines",
      "Be aware of road damage",
      "Check for structural damage before entering buildings",
    ],
    history: [
      {
        name: "Great Mississippi Flood",
        year: "1927",
        date: "April-May 1927",
        magnitude: "27,000 square miles flooded",
        description:
          "Most destructive river flood in U.S. history, inundating 27,000 square miles and displacing over 630,000 people.",
      },
      {
        name: "China Floods",
        year: "1931",
        date: "July-August 1931",
        magnitude: "88,000 square miles flooded",
        description:
          "Deadliest natural disaster recorded, with death toll estimates between 1-4 million people.",
      },
      {
        name: "Hurricane Katrina Flooding",
        year: "2005",
        date: "August 29, 2005",
        magnitude: "80% of New Orleans flooded",
        description:
          "Catastrophic flooding after levee failures in New Orleans, causing over 1,800 deaths and $125 billion in damage.",
      },
      {
        name: "Thailand Floods",
        year: "2011",
        date: "July 2011-January 2012",
        magnitude: "30,000 square miles flooded",
        description:
          "Affected 13.6 million people and caused $46.5 billion in economic damage across Thailand.",
      },
    ],
  },
  {
    type: "fire",
    title: "Fire",
    icon: Flame,
    image: "/placeholder.svg?height=400&width=600",
    overview:
      "Wildfires are uncontrolled fires that burn in wildland vegetation, often in rural areas. They can burn in forests, grasslands, savannas, or other ecosystems and have been doing so for hundreds of millions of years. They are often caused by human activity or natural phenomena like lightning.",
    causes: [
      "Lightning strikes",
      "Human activities (campfires, cigarettes, etc.)",
      "Arson",
      "Power line failures",
      "Drought conditions increasing flammability",
    ],
    effects: [
      "Destruction of homes and property",
      "Loss of wildlife habitat",
      "Air pollution and reduced visibility",
      "Soil erosion after vegetation loss",
      "Economic impact on communities",
    ],
    before: [
      "Create defensible space around home",
      "Use fire-resistant building materials",
      "Prepare emergency kit",
      "Develop evacuation plan",
      "Keep gutters clean",
      "Remove flammable vegetation near structures",
    ],
    during: [
      "Follow evacuation orders immediately",
      "Close all windows and doors",
      "Turn off gas and propane tanks",
      "Move flammable furniture to center of rooms",
      "Leave lights on to help firefighters see your house",
      "Wear protective clothing if caught outdoors",
    ],
    after: [
      "Wait for officials to say it's safe to return",
      "Document damage for insurance",
      "Check for hot spots and embers",
      "Be aware of hazards like falling trees",
      "Watch for flash flooding in burn areas",
      "Use caution when cleaning up ash and debris",
    ],
    history: [
      {
        name: "Great Chicago Fire",
        year: "1871",
        date: "October 8-10, 1871",
        magnitude: "3.3 square miles burned",
        description:
          "Killed approximately 300 people and destroyed over 17,000 structures, leaving 100,000 homeless.",
      },
      {
        name: "Black Saturday Bushfires",
        year: "2009",
        date: "February 7, 2009",
        magnitude: "1.1 million acres burned",
        description:
          "Series of bushfires in Victoria, Australia that killed 173 people and destroyed over 2,000 homes.",
      },
      {
        name: "Camp Fire",
        year: "2018",
        date: "November 8-25, 2018",
        magnitude: "153,336 acres burned",
        description:
          "Most destructive wildfire in California history, destroying the town of Paradise and killing 85 people.",
      },
      {
        name: "Australian Bushfires",
        year: "2019-2020",
        date: "June 2019-May 2020",
        magnitude: "46 million acres burned",
        description:
          "Catastrophic bushfire season in Australia that killed 34 people directly and an estimated 1 billion animals.",
      },
    ],
  },
  {
    type: "hurricane",
    title: "Hurricane",
    icon: Wind,
    image: "/placeholder.svg?height=400&width=600",
    overview:
      "A hurricane is a type of tropical cyclone with sustained winds of at least 74 mph (119 km/h) that forms over warm ocean waters. These powerful storms bring strong winds, heavy rainfall, storm surges, coastal and inland flooding, rip currents, and tornadoes. They can cause catastrophic damage to coastlines and several hundred miles inland.",
    causes: [
      "Warm ocean waters (at least 80°F/27°C)",
      "Moist air",
      "Converging winds",
      "Coriolis effect from Earth's rotation",
      "Pre-existing weather disturbance",
    ],
    effects: [
      "Storm surge flooding",
      "Extreme wind damage",
      "Heavy rainfall and inland flooding",
      "Tornadoes",
      "Rip currents and dangerous surf",
    ],
    before: [
      "Know your evacuation zone",
      "Board up windows",
      "Secure outdoor objects",
      "Prepare emergency supplies",
      "Fill car with gas",
      "Trim trees and shrubs",
    ],
    during: [
      "Stay indoors away from windows",
      "Monitor emergency broadcasts",
      "Turn refrigerator to coldest setting",
      "Fill bathtub with water",
      "Stay in small interior room on lowest floor",
      "Do not go outside during the eye of the storm",
    ],
    after: [
      "Stay away from damaged areas",
      "Avoid downed power lines",
      "Be careful of debris",
      "Document damage for insurance",
      "Avoid using tap water until safety confirmed",
      "Watch for extended rainfall and flooding",
    ],
    history: [
      {
        name: "Hurricane Katrina",
        year: "2005",
        date: "August 23-31, 2005",
        magnitude: "Category 5, 175 mph winds",
        description:
          "One of the deadliest hurricanes in U.S. history, causing catastrophic flooding in New Orleans and killing over 1,800 people.",
      },
      {
        name: "Hurricane Maria",
        year: "2017",
        date: "September 16-30, 2017",
        magnitude: "Category 5, 175 mph winds",
        description:
          "Devastated Puerto Rico, causing a humanitarian crisis and nearly 3,000 deaths.",
      },
      {
        name: "Great Galveston Hurricane",
        year: "1900",
        date: "September 8, 1900",
        magnitude: "Category 4, 145 mph winds",
        description:
          "Deadliest natural disaster in U.S. history, killing between 6,000-12,000 people in Galveston, Texas.",
      },
      {
        name: "Hurricane Dorian",
        year: "2019",
        date: "August 24-September 10, 2019",
        magnitude: "Category 5, 185 mph winds",
        description:
          "Most intense tropical cyclone on record to strike the Bahamas, causing catastrophic damage.",
      },
    ],
  },
  {
    type: "tornado",
    title: "Tornado",
    icon: CloudRain,
    image: "/placeholder.svg?height=400&width=600",
    overview:
      "A tornado is a violently rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud. Tornadoes come in many shapes and sizes, but they are typically in the form of a visible condensation funnel, whose narrow end touches the Earth and is often encircled by a cloud of debris and dust.",
    causes: [
      "Supercell thunderstorms",
      "Warm, humid air colliding with cool, dry air",
      "Wind shear (changing wind direction and speed with height)",
      "Unstable atmosphere",
      "Mesocyclone formation",
    ],
    effects: [
      "Catastrophic wind damage",
      "Flying debris causing injuries",
      "Destruction of buildings and infrastructure",
      "Uprooted trees",
      "Vehicle displacement",
    ],
    before: [
      "Know warning signs",
      "Identify safe room or shelter",
      "Practice tornado drills",
      "Secure outdoor objects",
      "Create emergency kit",
      "Have a weather radio with battery backup",
    ],
    during: [
      "Go to basement or interior room",
      "Stay away from windows",
      "Cover head and neck",
      "If outside, lie in a low spot",
      "If in a vehicle, do not try to outrun a tornado",
      "Do not shelter under an overpass",
    ],
    after: [
      "Watch for downed power lines",
      "Stay out of damaged buildings",
      "Help injured people",
      "Document damage",
      "Use caution when cleaning up debris",
      "Be alert for gas leaks",
    ],
    history: [
      {
        name: "Tri-State Tornado",
        year: "1925",
        date: "March 18, 1925",
        magnitude: "F5, 219 mph winds",
        description:
          "Deadliest tornado in U.S. history, traveling 219 miles through Missouri, Illinois, and Indiana, killing 695 people.",
      },
      {
        name: "Joplin Tornado",
        year: "2011",
        date: "May 22, 2011",
        magnitude: "EF5, 200+ mph winds",
        description:
          "Deadliest single tornado since modern recordkeeping began in 1950, killing 158 people in Joplin, Missouri.",
      },
      {
        name: "Super Outbreak",
        year: "1974",
        date: "April 3-4, 1974",
        magnitude: "148 tornadoes, 30 F4/F5",
        description:
          "Most violent tornado outbreak ever recorded, with 148 confirmed tornadoes across 13 states.",
      },
      {
        name: "2011 Super Outbreak",
        year: "2011",
        date: "April 25-28, 2011",
        magnitude: "362 tornadoes",
        description:
          "Largest, costliest, and deadliest tornado outbreak ever recorded, with 362 confirmed tornadoes and 324 deaths.",
      },
    ],
  },
];

const userComments = [
  {
    id: 1,
    name: "Robert Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "San Francisco, CA",
    date: "2 weeks ago",
    content:
      "I experienced the 1989 Loma Prieta earthquake in San Francisco. I was in a high-rise building downtown when it hit. The swaying was terrifying, but thankfully the building was designed to withstand it. The most important lesson I learned was to have an emergency kit ready at all times. Water, non-perishable food, flashlights, and a battery-powered radio are absolute essentials.",
    likes: 10,
    replies: 12,
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Miami, FL",
    date: "1 month ago",
    content:
      "Having lived through Hurricane Irma, I can't stress enough how important early evacuation is. We waited too long and got caught in terrible traffic. Now we have a clear plan: when a Category 3 or higher is projected to hit our area, we leave immediately. Don't wait for mandatory evacuation orders if you can help it.",
    likes: 15,
    replies: 15,
  },
  {
    id: 3,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Oklahoma City, OK",
    date: "3 months ago",
    content:
      "Growing up in Tornado Alley, we had frequent drills. The one thing many people don't realize is how quickly tornadoes can form and change direction. Having a weather radio with battery backup has saved my family twice when power was out but warnings were still being issued. Best $30 investment for anyone in tornado-prone areas.",
    likes: 15,
    replies: 1,
  },
];

export default function DisastersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Disaster Information
        </h1>
        <p className="text-slate-600">
          Learn about different types of disasters, their impacts, and how to
          prepare
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          type="search"
          placeholder="Search for disaster information..."
          className="pl-10"
        />
      </div>

      {/* Disaster Type Tabs */}
      <Tabs defaultValue="earthquake" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="earthquake">Earthquake</TabsTrigger>
          <TabsTrigger value="flood">Flood</TabsTrigger>
          <TabsTrigger value="fire">Fire</TabsTrigger>
          <TabsTrigger value="hurricane">Hurricane</TabsTrigger>
          <TabsTrigger value="tornado">Tornado</TabsTrigger>
        </TabsList>

        {disasterTypes.map((disaster) => (
          <TabsContent key={disaster.type} value={disaster.type}>
            <DisasterContent disaster={disaster} />
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}

function DisasterContent({ disaster }: { disaster: Disaster }) {
  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            What is a {disaster.title}?
          </h2>
          <p className="text-slate-600 mb-4">{disaster.overview}</p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Causes</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {disaster.causes.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Effects</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {disaster.effects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={disaster.image || "/placeholder.svg?height=400&width=600"}
            alt={disaster.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <Separator />

      {/* History & Past Incidents */}
      <section>
        <h2 className="text-2xl font-bold mb-4">History & Past Incidents</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200"></div>
          <div className="space-y-8 relative">
            {disaster.history.map((event, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white">
                  <Clock className="h-4 w-4 text-slate-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{event.name}</h3>
                    <Badge variant="outline">{event.year}</Badge>
                  </div>
                  <p className="text-slate-600">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <disaster.icon className="h-4 w-4" />
                      <span>{event.magnitude}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Preparedness & Response Guide */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Preparedness & Response Guide
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-green-100">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <CardTitle>Before</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {disaster.before.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 fill-green-600" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-amber-100">
                  <svg
                    className="h-5 w-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <CardTitle>During</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {disaster.during.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-amber-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 fill-amber-600" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-100">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle>After</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {disaster.after.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 fill-blue-600" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex justify-center">
          <Button>Download Preparedness Checklist (PDF)</Button>
        </div>
      </section>

      <Separator />

      {/* User Comments & Experiences */}
      <section>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">User Comments & Experiences</h2>
          <Button>Share Your Experience</Button>
        </div>

        <div className="space-y-6">
          {userComments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={comment.avatar} alt={comment.name} />
                    <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{comment.name}</CardTitle>
                    <CardDescription>
                      {comment.location} • {comment.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{comment.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    {comment.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                    {comment.replies}
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  Reply
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Add Your Comment</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="comment" className="sr-only">
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Share your experience or tips..."
                    ></textarea>
                  </div>
                  <Button type="submit">Post Comment</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
