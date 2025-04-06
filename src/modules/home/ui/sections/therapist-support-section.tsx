import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

const TherapistSupportSection = () => {
  return (
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
  );
};

export default TherapistSupportSection;
