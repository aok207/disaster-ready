import React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

const CommunityStories = () => {
  return (
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
  );
};

export default CommunityStories;
