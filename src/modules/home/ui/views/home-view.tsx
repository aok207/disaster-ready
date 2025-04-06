import { OfflineBanner } from "@/components/offline-banner";
import HeroSection from "../sections/hero-section";
import LatestNewsSection from "../sections/latest-news-section";
import DisasterPreparednessSection from "../sections/disaster-preparedness-section";
import CommunityStories from "../sections/community-stories";
import TherapistSupportSection from "../sections/therapist-support-section";

export default async function HomeView() {
  return (
    <main className="min-h-screen">
      <OfflineBanner />

      {/* Hero Section */}
      <HeroSection />

      {/* Latest News & Updates */}
      <LatestNewsSection />

      {/* Disaster Preparedness Section */}
      <DisasterPreparednessSection />

      {/* Community Stories */}
      <CommunityStories />

      {/* Therapist Support Section */}
      <TherapistSupportSection />
    </main>
  );
}

// Sample data
