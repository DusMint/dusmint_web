"use client";

import React, { useContext } from "react";
import Hero from "@/components/Hero";
import MissionBanner from "@/components/MissionBanner";
import WhyDusmint from "@/components/WhyDusmint";
import AppDownloadBanner from "@/components/AppDownloadBanner";
import { MarketingContext } from "@/components/MarketingLayoutClient";

export default function IntroPage() {
  const { language, openVendorModal } = useContext(MarketingContext);

  const scrollToDownload = () => {
    const el = document.getElementById("download-app");
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

      {/* 4. App Download & QR Code Section */}
      <AppDownloadBanner language={language} />
    </div>
  );
}
