import Image from "next/image"
import { Search, Filter, ArrowRight, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">News & Updates</h1>
        <p className="text-slate-600">Stay informed with the latest disaster events and updates</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input type="search" placeholder="Search for specific events..." className="pl-10" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Most Recent</SelectItem>
              <SelectItem value="popular">Most Viewed</SelectItem>
              <SelectItem value="relevance">Relevance</SelectItem>
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
              <CardDescription>Refine news results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-medium">Disaster Type</h3>
                <div className="space-y-2">
                  {disasterTypes.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
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
                <h3 className="mb-3 text-sm font-medium">Region</h3>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <div key={region.value} className="flex items-center space-x-2">
                      <Checkbox id={`region-${region.value}`} />
                      <label
                        htmlFor={`region-${region.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {region.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-sm font-medium">Date Range</h3>
                <Select defaultValue="week">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">Past Week</SelectItem>
                    <SelectItem value="month">Past Month</SelectItem>
                    <SelectItem value="year">Past Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* News Articles */}
        <div className="lg:col-span-3">
          <div className="grid gap-6 md:grid-cols-2">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-slate-500">{article.date}</span>
                  </div>
                  <CardTitle className="mt-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {article.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {article.date}
                    </div>
                  </div>
                  <p className="text-slate-600">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-slate-500">Source: {article.source}</span>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

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
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
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
    </main>
  )
}

// Sample data
const disasterTypes = [
  { value: "earthquake", label: "Earthquake" },
  { value: "flood", label: "Flood" },
  { value: "fire", label: "Fire" },
  { value: "hurricane", label: "Hurricane" },
  { value: "tornado", label: "Tornado" },
  { value: "drought", label: "Drought" },
  { value: "landslide", label: "Landslide" },
]

const regions = [
  { value: "north-america", label: "North America" },
  { value: "south-america", label: "South America" },
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "africa", label: "Africa" },
  { value: "oceania", label: "Oceania" },
]

const newsArticles = [
  {
    id: 1,
    title: "Magnitude 6.2 Earthquake Strikes Coastal Region",
    excerpt:
      "A powerful earthquake has affected several coastal communities with reports of damage to infrastructure and some injuries. Local authorities have mobilized emergency response teams.",
    image: "/placeholder.svg?height=300&width=600",
    date: "May 15, 2023",
    location: "Pacific Coast",
    category: "Earthquake",
    source: "National Geological Survey",
  },
  {
    id: 2,
    title: "Flood Warning Issued for River Valley Communities",
    excerpt:
      "Heavy rainfall has prompted authorities to issue evacuation orders for low-lying areas near the river. Residents are advised to move to higher ground immediately.",
    image: "/placeholder.svg?height=300&width=600",
    date: "June 2, 2023",
    location: "Midwest Region",
    category: "Flood",
    source: "Weather Service",
  },
  {
    id: 3,
    title: "Wildfire Contained After Threatening Residential Areas",
    excerpt:
      "Firefighters have successfully contained a wildfire that threatened several neighborhoods. Residents who were evacuated are now being allowed to return to their homes.",
    image: "/placeholder.svg?height=300&width=600",
    date: "July 10, 2023",
    location: "Western Mountains",
    category: "Fire",
    source: "Fire Department",
  },
  {
    id: 4,
    title: "Hurricane Warning: Category 3 Storm Approaching",
    excerpt:
      "A powerful hurricane is expected to make landfall within 48 hours. Mandatory evacuation orders have been issued for coastal communities in the projected path.",
    image: "/placeholder.svg?height=300&width=600",
    date: "August 22, 2023",
    location: "Gulf Coast",
    category: "Hurricane",
    source: "National Hurricane Center",
  },
  {
    id: 5,
    title: "Tornado Outbreak Causes Widespread Damage",
    excerpt:
      "Multiple tornadoes touched down across the region yesterday, causing significant damage to homes and businesses. Search and rescue operations are ongoing.",
    image: "/placeholder.svg?height=300&width=600",
    date: "September 5, 2023",
    location: "Central Plains",
    category: "Tornado",
    source: "Storm Prediction Center",
  },
  {
    id: 6,
    title: "Drought Emergency Declared as Reservoirs Reach Record Lows",
    excerpt:
      "Officials have declared a drought emergency as water supplies continue to dwindle. Water restrictions are now in effect for all residents and businesses.",
    image: "/placeholder.svg?height=300&width=600",
    date: "October 12, 2023",
    location: "Southwest Region",
    category: "Drought",
    source: "Water Resources Board",
  },
]

