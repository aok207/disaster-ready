import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

function LatestNewsSection() {
  return (
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
  );
}

export default LatestNewsSection;
