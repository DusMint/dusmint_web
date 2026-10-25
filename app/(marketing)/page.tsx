"use client";

import React, { useContext, useState } from "react";
import Hero from "@/components/Hero";
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

      {/* 2. Categories digitized on Dusmint */}
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

      {/* 3. Verified Store Network Showcase */}
      <PopularShopsSection
        language={language}
        selectedCategory={selectedCategory}
        onOpenShopModal={openShopModal}
      />

      {/* 4. Electric Hyperlocal Delivery Fleet & Tracking */}
      <DeliveryBanner
        language={language}
        onExploreApp={scrollToDownload}
      />

      {/* 5. Why Dusmint (Hyperlocal vs Dark Stores) */}
      <WhyDusmint language={language} />

      {/* 6. How It Works (3 Steps) */}
      <HowItWorks language={language} />

      {/* 7. App Download & QR Code Section */}
      <AppDownloadBanner language={language} />
    </div>
  );
}
