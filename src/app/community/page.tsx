import Image from "next/image";
import {
  Search,
  Filter,
  ArrowRight,
  MessageSquare,
  Heart,
  Share2,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

// Add these interfaces at the top of the file, before the component definitions

interface CommunityStory {
  id: number;
  name: string;
  avatar: string;
  location: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  likes: number;
  comments: number;
  featured: boolean;
}

interface FeaturedMember {
  id: number;
  name: string;
  avatar: string;
  stories: number;
}

export default function CommunityPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Community Stories
        </h1>
        <p className="text-slate-600">
          Share your experiences and connect with others affected by disasters
        </p>
      </div>

      {/* Share Story Button (Mobile) */}
      <div className="mb-6 md:hidden">
        <ShareStoryDialog />
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            placeholder="Search stories..."
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="comments">Most Comments</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <div className="hidden md:block">
            <ShareStoryDialog />
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
          <TabsTrigger value="all">All Stories</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="yours">Your Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              Load More Stories
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="featured" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityStories
              .filter((story) => story.featured)
              .map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="following" className="mt-6">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-slate-100 p-6 mb-4">
              <MessageSquare className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">
              No followed stories yet
            </h3>
            <p className="text-slate-600 mb-6 max-w-md">
              When you follow other community members, their stories will appear
              here
            </p>
            <Button>Discover People to Follow</Button>
          </div>
        </TabsContent>

        <TabsContent value="yours" className="mt-6">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-slate-100 p-6 mb-4">
              <MessageSquare className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">
              You haven&apos;t shared any stories yet
            </h3>
            <p className="text-slate-600 mb-6 max-w-md">
              Share your experiences to help others learn and prepare for
              disasters
            </p>
            <ShareStoryDialog />
          </div>
        </TabsContent>
      </Tabs>

      {/* Featured Community Members */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Community Members</h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {featuredMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <Avatar className="h-16 w-16 mb-2">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-medium text-sm">{member.name}</h3>
              <p className="text-xs text-slate-500">{member.stories} stories</p>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mt-12 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Community Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Storytelling Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Learn how to effectively share your experiences to help others
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Our standards for respectful and supportive communication
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Read Guidelines
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
                Connect with local and online support groups for disaster
                survivors
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Find Groups
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

// Update the StoryCard component to use proper typing
function StoryCard({ story }: { story: CommunityStory }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      {story.image && (
        <div className="aspect-video relative">
          <Image
            src={story.image || "/placeholder.svg"}
            alt={story.title}
            fill
            className="object-cover"
          />
          {story.featured && (
            <Badge className="absolute top-2 right-2 bg-red-600">
              Featured
            </Badge>
          )}
        </div>
      )}
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
        <h3 className="font-bold mt-2">{story.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {story.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-slate-600">{story.excerpt}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <Heart className="h-4 w-4" />
              {story.likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <MessageSquare className="h-4 w-4" />
              {story.comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function ShareStoryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Share Your Story</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Share Your Experience</DialogTitle>
          <DialogDescription>
            Your story can help others prepare for and recover from disasters.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Give your story a title" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="disaster-type">Disaster Type</Label>
            <Select>
              <SelectTrigger id="disaster-type">
                <SelectValue placeholder="Select disaster type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="earthquake">Earthquake</SelectItem>
                <SelectItem value="flood">Flood</SelectItem>
                <SelectItem value="fire">Fire</SelectItem>
                <SelectItem value="hurricane">Hurricane</SelectItem>
                <SelectItem value="tornado">Tornado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="story">Your Story</Label>
            <Textarea
              id="story"
              placeholder="Share your experience, lessons learned, and advice for others..."
              className="min-h-[150px]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">Add Image (Optional)</Label>
            <Input id="image" type="file" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Post Story</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Update the sample data declaration to use the interfaces
const communityStories: CommunityStory[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Portland, OR",
    date: "3 months ago",
    title: "Surviving the Wildfire: Our 20-Minute Evacuation",
    excerpt:
      "When the wildfire approached our neighborhood, we had only 20 minutes to evacuate. Here's how we managed to save what mattered most and the lessons we learned about preparation.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Wildfire", "Evacuation", "Preparation"],
    likes: 128,
    comments: 45,
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Houston, TX",
    date: "1 year ago",
    title: "Hurricane Harvey: A Community's Resilience",
    excerpt:
      "After Hurricane Harvey flooded our home, our community came together in ways I never expected. This is our story of recovery and the support system that made it possible.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Hurricane", "Flooding", "Community"],
    likes: 256,
    comments: 72,
    featured: true,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "San Juan, PR",
    date: "2 years ago",
    title: "Life After Hurricane Maria: Lessons in Resilience",
    excerpt:
      "Living through Hurricane Maria taught me valuable lessons about preparation and resilience that I want to share with others who might face similar situations.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Hurricane", "Recovery", "Mental Health"],
    likes: 189,
    comments: 53,
    featured: false,
  },
  {
    id: 4,
    name: "David Park",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Los Angeles, CA",
    date: "6 months ago",
    title: "What I Wish I Knew Before the Earthquake",
    excerpt:
      "The 5.8 magnitude earthquake caught us unprepared. Here are the critical preparations I wish we had made and what we've done since to be ready for the next one.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Earthquake", "Preparation", "Safety"],
    likes: 143,
    comments: 37,
    featured: false,
  },
  {
    id: 5,
    name: "Jennifer Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "New Orleans, LA",
    date: "4 years ago",
    title: "Rebuilding After the Flood: Our Five-Year Journey",
    excerpt:
      "It's been five years since the flood destroyed our home. This is the story of our rebuilding process, the challenges we faced, and how we've created a more resilient home.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Flood", "Rebuilding", "Resilience"],
    likes: 215,
    comments: 61,
    featured: false,
  },
  {
    id: 6,
    name: "Robert Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Moore, OK",
    date: "2 years ago",
    title: "In the Path of the Tornado: Our Shelter Saved Us",
    excerpt:
      "When the EF-5 tornado hit our town, our storm shelter made the difference between life and death. Here's what everyone in tornado-prone areas should know.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Tornado", "Storm Shelter", "Safety"],
    likes: 176,
    comments: 48,
    featured: false,
  },
];

const featuredMembers: FeaturedMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=60&width=60",
    stories: 12,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=60&width=60",
    stories: 8,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "/placeholder.svg?height=60&width=60",
    stories: 15,
  },
  {
    id: 4,
    name: "David Park",
    avatar: "/placeholder.svg?height=60&width=60",
    stories: 6,
  },
  {
    id: 5,
    name: "Jennifer Williams",
    avatar: "/placeholder.svg?height=60&width=60",
    stories: 9,
  },
  {
    id: 6,
    name: "Robert Thompson",
    avatar: "/placeholder.svg?height=60&width=60",
    stories: 7,
  },
];
