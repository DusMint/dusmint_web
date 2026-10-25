"use client";

import React, { useContext, useState } from "react";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import PopularShopsSection, { SHOPS } from "@/components/PopularShopsSection";
import DeliveryBanner from "@/components/DeliveryBanner";
import WhyDusmint from "@/components/WhyDusmint";
import HowItWorks from "@/components/HowItWorks";
import AppDownloadBanner from "@/components/AppDownloadBanner";
import { MarketingContext } from "@/components/MarketingLayoutClient";

export default function IntroPage() {
  const { language, openVendorModal, openShopModal } = useContext(MarketingContext);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToShops = () => {
    const el = document.getElementById("shops");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* 1. Hero Section matching reference photo */}
      <Hero
        language={language}
        onShopNowClick={scrollToShops}
        onPartnerClick={openVendorModal}
      />

      {/* 2. Shop by Category matching reference photo */}
      <CategoriesSection
        language={language}
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          if (id) {
            const el = document.getElementById("shops");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* 3. Popular Shops Near You matching reference photo */}
      <PopularShopsSection
        language={language}
        selectedCategory={selectedCategory}
        onOpenShopModal={openShopModal}
      />

      {/* 4. Bottom Delivery Banner matching reference photo */}
      <DeliveryBanner
        language={language}
        onOrderNow={() => openShopModal(SHOPS[0])}
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
