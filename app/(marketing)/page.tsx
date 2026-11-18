"use client";

import React, { useContext, useState } from "react";
import Hero from "@/components/Hero";
import MissionBanner from "@/components/MissionBanner";
import CategoriesSection from "@/components/CategoriesSection";
import PopularShopsSection from "@/components/PopularShopsSection";
import DeliveryBanner from "@/components/DeliveryBanner";
import WhyDusmint from "@/components/WhyDusmint";
import HowItWorks from "@/components/HowItWorks";
import AppDownloadBanner from "@/components/AppDownloadBanner";
import { MarketingContext } from "@/components/MarketingLayoutClient";

export default function IntroPage() {
  const { language, openVendorModal, openShopModal } = useContext(MarketingContext);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToDownload = () => {
    const el = document.getElementById("download-app");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNetwork = () => {
    const el = document.getElementById("network");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* 1. Hero Section - Product overview & capabilities */}
      <Hero
        language={language}
        onExploreAppClick={scrollToDownload}
        onPartnerClick={openVendorModal}
      />

      {/* 2. Mission & Impact Section (Zomato-Style with Floating Produce & Dairy) */}
      <MissionBanner language={language} />

      {/* 3. Why Dusmint (Illustrated 4-Card Grid: Local shops, Honest weight, Your time) */}
      <WhyDusmint language={language} />

      {/* 4. Categories digitized on Dusmint */}
      <CategoriesSection
        language={language}
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          if (id) {
            scrollToNetwork();
          }
        }}
      />

      {/* 5. Verified Store Network Showcase */}
      <PopularShopsSection
        language={language}
        selectedCategory={selectedCategory}
        onOpenShopModal={openShopModal}
      />

      {/* 6. Electric Hyperlocal Delivery Fleet & Tracking */}
      <DeliveryBanner
        language={language}
        onExploreApp={scrollToDownload}
      />

      {/* 7. How It Works (3 Steps) */}
      <HowItWorks language={language} />

      {/* 8. App Download & QR Code Section */}
      <AppDownloadBanner language={language} />
    </div>
  );
}
