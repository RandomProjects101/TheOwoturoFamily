"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Candle } from "@/components/layout/Candle";
import { BackgroundAudio } from "@/components/layout/BackgroundAudio";
import { ProgressNav } from "@/components/layout/ProgressNav";
import { Hero } from "@/components/landing/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { FamilyGallery } from "@/components/sections/FamilyGallery";
import { FamilySpeaks } from "@/components/sections/FamilySpeaks";
import { FavouriteMemories } from "@/components/sections/FavouriteMemories";
import { Timeline } from "@/components/sections/Timeline";
import { PhotoWall } from "@/components/sections/PhotoWall";
import { ThingsSheLoved } from "@/components/sections/ThingsSheLoved";
import { FinalSection } from "@/components/sections/FinalSection";
import { AudioCoordinatorProvider } from "@/lib/audio-coordinator";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AudioCoordinatorProvider>
        <LoadingScreen visible={isLoading} />

        <a
          href="#intro"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-ink focus:shadow-soft"
        >
          Skip to her story
        </a>

        <main>
          <Hero />
          <IntroSection />
          <FamilyGallery />
          <FamilySpeaks />
          <FavouriteMemories />
          <Timeline />
          <PhotoWall />
          <ThingsSheLoved />
          <FinalSection />
        </main>

        <Candle />
        <BackgroundAudio />
        <ProgressNav />
      </AudioCoordinatorProvider>
    </MotionConfig>
  );
}
