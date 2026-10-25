"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PopularShopsSection.module.css";

export interface Shop {
  id: string;
  name: string;
  categoryTag: string;
  deliveryTime: string;
  rating: number;
  reviewsCount: string;
  freeDeliveryThreshold: number;
  image: string;
  distance: string;
  location: string;
  featuredItems: {
    id: string;
    name: string;
    weight: string;
    price: number;
    originalPrice: number;
  }[];
}

export const SHOPS: Shop[] = [
  {
    id: "sharma-kirana",
    name: "Sharma Kirana Store",
    categoryTag: "groceries",
    deliveryTime: "15 min",
    rating: 4.8,
    reviewsCount: "890",
    freeDeliveryThreshold: 150,
    image: "/images/shop_kirana.jpg",
    distance: "0.8 km",
    location: "Block B, Salt Lake Sector 1",
    featuredItems: [
      { id: "i1", name: "Aashirvaad Shudh Chakki Atta", weight: "5 kg", price: 245, originalPrice: 280 },
      { id: "i2", name: "Tata Salt Vacuum Evaporated", weight: "1 kg", price: 28, originalPrice: 30 },
      { id: "i3", name: "Fortune Sunlite Sunflower Oil", weight: "1 L", price: 142, originalPrice: 165 },
      { id: "i4", name: "Tata Sampann Toor Dal", weight: "1 kg", price: 168, originalPrice: 190 },
    ],
  },
  {
    id: "fresh-basket",
    name: "Fresh Basket",
    categoryTag: "vegetables",
    deliveryTime: "15 min",
    rating: 4.7,
    reviewsCount: "1.2k",
    freeDeliveryThreshold: 199,
    image: "/images/shop_freshbasket.jpg",
    distance: "1.1 km",
    location: "City Centre 1, Salt Lake",
    featuredItems: [
      { id: "i5", name: "Farm Fresh Desi Red Tomatoes", weight: "1 kg", price: 38, originalPrice: 50 },
      { id: "i6", name: "Crisp Green Capsicum", weight: "500 g", price: 45, originalPrice: 60 },
      { id: "i7", name: "Fresh Palak Spinach Leaves", weight: "250 g", price: 20, originalPrice: 30 },
      { id: "i8", name: "Kashmiri Shimla Apples", weight: "1 kg", price: 140, originalPrice: 180 },
    ],
  },
  {
    id: "new-town-dairy",
    name: "New Town Dairy",
    categoryTag: "dairy",
    deliveryTime: "10 min",
    rating: 4.9,
    reviewsCount: "540",
    freeDeliveryThreshold: 120,
    image: "/images/shop_dairy.jpg",
    distance: "0.4 km",
    location: "Action Area 1, New Town",
    featuredItems: [
      { id: "i9", name: "Fresh Farm Cow Milk Pouch", weight: "500 ml", price: 34, originalPrice: 36 },
      { id: "i10", name: "Soft Malai Paneer Block", weight: "200 g", price: 90, originalPrice: 105 },
      { id: "i11", name: "Traditional Mishti Doi Clay Pot", weight: "250 g", price: 55, originalPrice: 65 },
      { id: "i12", name: "Farm Brown Country Eggs", weight: "6 pcs", price: 58, originalPrice: 70 },
    ],
  },
  {
    id: "alam-chicken",
    name: "Alam Chicken Centre",
    categoryTag: "meat",
    deliveryTime: "20 min",
    rating: 4.6,
    reviewsCount: "390",
    freeDeliveryThreshold: 250,
    image: "/images/shop_meat.jpg",
    distance: "1.6 km",
    location: "Sector 3 Market, Salt Lake",
    featuredItems: [
      { id: "i13", name: "Fresh Curry Cut Chicken (Skinless)", weight: "500 g", price: 140, originalPrice: 165 },
      { id: "i14", name: "Tender Chicken Breast Boneless", weight: "500 g", price: 175, originalPrice: 210 },
      { id: "i15", name: "Fresh Goat Mutton Curry Cut", weight: "500 g", price: 440, originalPrice: 490 },
    ],
  },
  {
    id: "bay-seafood",
    name: "Bay Seafood",
    categoryTag: "seafood",
    deliveryTime: "25 min",
    rating: 4.8,
    reviewsCount: "710",
    freeDeliveryThreshold: 300,
    image: "/images/shop_seafood.jpg",
    distance: "2.0 km",
    location: "Ultadanga VIP Road Hub",
    featuredItems: [
      { id: "i16", name: "Fresh Bengal Katla / Rohu Steaks", weight: "500 g", price: 210, originalPrice: 250 },
      { id: "i17", name: "Padma River Fresh Hilsa (Ilish)", weight: "800 g", price: 1100, originalPrice: 1300 },
      { id: "i18", name: "Tiger Prawns Cleaned & Deveined", weight: "300 g", price: 320, originalPrice: 380 },
    ],
  },
];

interface PopularShopsSectionProps {
  language: "en" | "hi";
  selectedCategory: string | null;
  onOpenShopModal: (shop: Shop) => void;
}

export default function PopularShopsSection({
  language,
  selectedCategory,
  onOpenShopModal,
}: PopularShopsSectionProps) {
  const isHi = language === "hi";

  const filteredShops = selectedCategory
    ? SHOPS.filter(
        (shop) =>
          shop.categoryTag === selectedCategory ||
          (selectedCategory === "fruits" && shop.categoryTag === "vegetables")
      )
    : SHOPS;

  return (
    <section id="shops" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <div className={styles.tagWrap}>
              <span className={styles.badgeLive}>🟢 {isHi ? "लाइव स्टोर" : "Stores Open Now"}</span>
              {selectedCategory && (
                <span className={styles.filterChip}>
                  Filtered: {selectedCategory}
                </span>
              )}
            </div>
            <h2 className={styles.sectionTitle}>
              {isHi ? "आपके नज़दीक लोकप्रिय दुकानें" : "Popular Shops Near You"}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isHi
                ? "असली स्थानीय दुकानें, असली मूल्य, 10-30 मिनट में डिलीवरी"
                : "Real neighborhood shops, in-store prices, delivered fast to your doorstep"}
            </p>
          </div>

          <button
            type="button"
            className={styles.seeAllBtn}
            onClick={() => onOpenShopModal(SHOPS[0])}
          >
            <span>{isHi ? "सभी दुकानें देखें" : "See All"}</span>
            <span className={styles.seeAllArrow}>→</span>
          </button>
        </div>

        {/* Shops Card Grid */}
        <div className={styles.grid}>
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              className={styles.card}
              onClick={() => onOpenShopModal(shop)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onOpenShopModal(shop);
              }}
            >
              <div className={styles.imageBox}>
                <Image
                  src={shop.image}
                  alt={shop.name}
                  width={340}
                  height={200}
                  className={styles.shopImage}
                />
                {/* Delivery Time Badge (bottom-left overlay on image, matching photo) */}
                <div className={styles.deliveryBadge}>
                  <span className={styles.lightningIcon}>⚡</span>
                  <span className={styles.timeText}>{shop.deliveryTime}</span>
                </div>
                {/* Distance pill */}
                <div className={styles.distanceBadge}>{shop.distance}</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.nameRow}>
                  <h3 className={styles.shopName}>{shop.name}</h3>
                  <div className={styles.ratingBadge}>
                    <span className={styles.starIcon}>★</span>
                    <span className={styles.ratingScore}>{shop.rating}</span>
                    <span className={styles.reviewsCount}>
                      ({shop.reviewsCount})
                    </span>
                  </div>
                </div>

                <p className={styles.shopLocation}>{shop.location}</p>

                <div className={styles.deliveryThresholdRow}>
                  <span className={styles.deliveryThreshold}>
                    ₹{shop.freeDeliveryThreshold} {isHi ? "पर फ्री डिलीवरी" : "for free delivery"}
                  </span>
                  <span className={styles.viewMenuBtn}>
                    {isHi ? "सामान देखें →" : "View Shop →"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
