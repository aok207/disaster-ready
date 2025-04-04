import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  Phone,
  Video,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Add these interfaces at the top of the file, before the component definitions

interface Therapist {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
  description: string;
  tags: string[];
  location: string;
  nextAvailable: string;
  rating: number;
  reviewCount: number;
}

interface FilterOption {
  value: string;
  label: string;
}

export default function TherapistsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Find Support</h1>
        <p className="text-slate-600">
          Connect with mental health professionals specializing in
          disaster-related trauma
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            placeholder="Search by name, specialty, or location..."
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="availability">Soonest Available</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Refine your search</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-medium">Specialties</h3>
                <div className="space-y-2">
                  {specialties.map((specialty) => (
                    <div
                      key={specialty.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox id={`specialty-${specialty.value}`} />
                      <label
                        htmlFor={`specialty-${specialty.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {specialty.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-sm font-medium">Session Type</h3>
                <div className="space-y-2">
                  {sessionTypes.map((type) => (
                    <div
                      key={type.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox id={`type-${type.value}`} />
                      <label
                        htmlFor={`type-${type.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-sm font-medium">Insurance</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Insurance</SelectItem>
                    <SelectItem value="bluecross">
                      Blue Cross Blue Shield
                    </SelectItem>
                    <SelectItem value="aetna">Aetna</SelectItem>
                    <SelectItem value="cigna">Cigna</SelectItem>
                    <SelectItem value="medicare">Medicare</SelectItem>
                    <SelectItem value="medicaid">Medicaid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-sm font-medium">Availability</h3>
                <div className="space-y-2">
                  {availability.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox id={`availability-${option.value}`} />
                      <label
                        htmlFor={`availability-${option.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-sm font-medium">Languages</h3>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <div
                      key={language.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox id={`language-${language.value}`} />
                      <label
                        htmlFor={`language-${language.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {language.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Therapist Listings */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="grid" className="w-full mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">48 Therapists Available</h2>
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {therapists.map((therapist) => (
                  <TherapistCard key={therapist.id} therapist={therapist} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-6">
              <div className="space-y-4">
                {therapists.map((therapist) => (
                  <TherapistListItem key={therapist.id} therapist={therapist} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-primary text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <section className="mt-12 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Mental Health Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Crisis Hotlines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Immediate support for those in emotional distress or suicidal
                crisis
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <span className="font-medium">988</span>
                  <span className="text-sm text-slate-500">
                    Suicide & Crisis Lifeline
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <span className="font-medium">1-800-985-5990</span>
                  <span className="text-sm text-slate-500">
                    Disaster Distress Helpline
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Support Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Connect with others who have experienced similar trauma
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-600">
                <li>Virtual support groups</li>
                <li>In-person community meetings</li>
                <li>Specialized groups for specific disasters</li>
                <li>Family support resources</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Find Support Groups
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Self-Help Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Tools and techniques for managing stress and trauma
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-600">
                <li>Guided meditation exercises</li>
                <li>Trauma-informed coping strategies</li>
                <li>Sleep improvement techniques</li>
                <li>Anxiety management resources</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Access Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

// Update the TherapistCard component to use proper typing
function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="text-center pb-2">
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
        <div className="flex items-center justify-center mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < therapist.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-500 ml-2">
            ({therapist.reviewCount})
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-600 text-center mb-4">
          {therapist.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {therapist.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-400" />
            <span>{therapist.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>Next available: {therapist.nextAvailable}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <ConsultationDialog therapist={therapist} />
        <Button variant="outline">View Profile</Button>
      </CardFooter>
    </Card>
  );
}

// Update the TherapistListItem component to use proper typing
function TherapistListItem({ therapist }: { therapist: Therapist }) {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row">
        <div className="p-4 flex items-center justify-center sm:w-1/4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={therapist.avatar} alt={therapist.name} />
            <AvatarFallback>
              {therapist.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg">{therapist.name}</h3>
              <p className="text-slate-500">{therapist.specialty}</p>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < therapist.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-500 ml-2">
                ({therapist.reviewCount})
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-3">{therapist.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {therapist.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span>{therapist.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span>Next available: {therapist.nextAvailable}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-3 sm:mt-0">
              <ConsultationDialog therapist={therapist} />
              <Button variant="outline">View Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Update the ConsultationDialog component to use proper typing
function ConsultationDialog({ therapist }: { therapist: Therapist }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Request Consultation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Request a Consultation</DialogTitle>
          <DialogDescription>
            Schedule a consultation with {therapist.name} to discuss your needs.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={therapist.avatar} alt={therapist.name} />
              <AvatarFallback>
                {therapist.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{therapist.name}</h3>
              <p className="text-sm text-slate-500">{therapist.specialty}</p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <Label htmlFor="consultation-type">Consultation Type</Label>
            <RadioGroup defaultValue="video" id="consultation-type">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="video" id="video" />
                <Label htmlFor="video" className="flex items-center gap-2">
                  <Video className="h-4 w-4" /> Video Call
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone Call
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-person" id="in-person" />
                <Label htmlFor="in-person" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> In-Person
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input id="date" type="date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Select>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                <SelectItem value="afternoon">
                  Afternoon (12PM - 5PM)
                </SelectItem>
                <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reason">Reason for Consultation</Label>
            <Textarea
              id="reason"
              placeholder="Briefly describe what you'd like to discuss..."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Update the sample data declaration to use the interfaces
const therapists: Therapist[] = [
  {
    id: 1,
    name: "Dr. Amanda Park",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Trauma Specialist",
    description:
      "Specializing in disaster-related PTSD and anxiety disorders with 15 years of experience.",
    tags: ["Trauma", "PTSD", "Anxiety"],
    location: "New York, NY",
    nextAvailable: "Tomorrow",
    rating: 5,
    reviewCount: 48,
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Crisis Counselor",
    description:
      "Helping individuals and families navigate the emotional aftermath of natural disasters.",
    tags: ["Crisis", "Family", "Grief"],
    location: "Chicago, IL",
    nextAvailable: "This week",
    rating: 4,
    reviewCount: 36,
  },
  {
    id: 3,
    name: "Dr. Maria Sanchez",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Child Psychologist",
    description:
      "Supporting children and adolescents in processing traumatic events and building resilience.",
    tags: ["Children", "Anxiety", "Trauma"],
    location: "Los Angeles, CA",
    nextAvailable: "Next week",
    rating: 5,
    reviewCount: 52,
  },
  {
    id: 4,
    name: "Dr. Robert Lee",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Grief Counselor",
    description:
      "Guiding individuals through the grief process after loss due to disasters.",
    tags: ["Grief", "Loss", "Depression"],
    location: "Houston, TX",
    nextAvailable: "Today",
    rating: 4,
    reviewCount: 29,
  },
  {
    id: 5,
    name: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Cognitive Behavioral Therapist",
    description:
      "Using evidence-based approaches to help clients overcome trauma and anxiety.",
    tags: ["CBT", "Anxiety", "Depression"],
    location: "Boston, MA",
    nextAvailable: "This week",
    rating: 5,
    reviewCount: 41,
  },
  {
    id: 6,
    name: "Dr. Michael Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    specialty: "Family Therapist",
    description:
      "Helping families rebuild relationships and communication after traumatic events.",
    tags: ["Family", "Relationships", "Communication"],
    location: "Seattle, WA",
    nextAvailable: "Tomorrow",
    rating: 4,
    reviewCount: 33,
  },
];

const specialties: FilterOption[] = [
  { value: "trauma", label: "Trauma & PTSD" },
  { value: "anxiety", label: "Anxiety" },
  { value: "depression", label: "Depression" },
  { value: "grief", label: "Grief & Loss" },
  { value: "children", label: "Child Psychology" },
  { value: "family", label: "Family Therapy" },
];

const sessionTypes: FilterOption[] = [
  { value: "video", label: "Video Call" },
  { value: "phone", label: "Phone Call" },
  { value: "in-person", label: "In-Person" },
];

const availability: FilterOption[] = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "this-week", label: "This Week" },
  { value: "next-week", label: "Next Week" },
];

const languages: FilterOption[] = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "mandarin", label: "Mandarin" },
  { value: "arabic", label: "Arabic" },
];
