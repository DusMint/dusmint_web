"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import LocationModal from "./LocationModal";
import VendorInterestModal from "./VendorInterestModal";
import ShopQuickViewModal from "./ShopQuickViewModal";
import { Shop, SHOPS } from "./PopularShopsSection";

interface MarketingLayoutClientProps {
  children: React.ReactNode;
}

// React Context for marketing site state so any nested page can open modals
export const MarketingContext = React.createContext<{
  language: "en" | "hi";
  currentLocation: string;
  openVendorModal: () => void;
  openLocationModal: () => void;
  openShopModal: (shop: Shop) => void;
}>({
  language: "en",
  currentLocation: "Salt Lake, Kolkata",
  openVendorModal: () => {},
  openLocationModal: () => {},
  openShopModal: () => {},
});

export default function MarketingLayoutClient({
  children,
}: MarketingLayoutClientProps) {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [currentLocation, setCurrentLocation] = useState("Salt Lake, Kolkata");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <MarketingContext.Provider
      value={{
        language,
        currentLocation,
        openVendorModal: () => setIsVendorModalOpen(true),
        openLocationModal: () => setIsLocationModalOpen(true),
        openShopModal: (shop) => setSelectedShop(shop),
      }}
    >
      <Navbar
        currentLocation={currentLocation}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenVendorModal={() => setIsVendorModalOpen(true)}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      <main style={{ minHeight: "80vh" }}>{children}</main>

      <Footer
        language={language}
        onOpenVendorModal={() => setIsVendorModalOpen(true)}
      />

      <WhatsAppButton language={language} />

      {/* Modals */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        currentLocation={currentLocation}
        onSelectLocation={(loc) => setCurrentLocation(loc)}
        language={language}
      />

      <VendorInterestModal
        isOpen={isVendorModalOpen}
        onClose={() => setIsVendorModalOpen(false)}
        language={language}
      />

      <ShopQuickViewModal
        shop={selectedShop}
        onClose={() => setSelectedShop(null)}
        language={language}
      />
    </MarketingContext.Provider>
  );
}
