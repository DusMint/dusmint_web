"use client";

import React from "react";
import Image from "next/image";
import {
  IconBolt,
  IconStarFilled,
  IconDeviceMobile,
  IconBuildingStore,
  IconArrowRight,
} from "@tabler/icons-react";
import styles from "./PopularShopsSection.module.css";

export interface Shop {
  id: string;
  name: string;
  categoryTag: string;
  categoryName: string;
  deliveryTime: string;
  rating: number;
  reviewsCount: string;
  freeDeliveryThreshold: number;
  image: string;
  distance: string;
  location: string;
  merchantStory: string;
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
    categoryName: "Kirana & Staples",
    deliveryTime: "10–15 min",
    rating: 4.8,
    reviewsCount: "890",
    freeDeliveryThreshold: 150,
    image: "/images/shop_kirana.jpg",
    distance: "0.8 km",
    location: "Block B, Salt Lake Sector 1",
    merchantStory: "Family-run neighbourhood grocery for over 22 years. Partnered with Dusmint to offer instant digital delivery across Sector 1.",
    featuredItems: [
      { id: "i1", name: "Aashirvaad Shudh Chakki Atta", weight: "5 kg", price: 245, originalPrice: 280 },
      { id: "i2", name: "Tata Salt Vacuum Evaporated", weight: "1 kg", price: 28, originalPrice: 30 },
      { id: "i3", name: "Fortune Sunlite Sunflower Oil", weight: "1 L", price: 142, originalPrice: 165 },
      { id: "i4", name: "Tata Sampann Toor Dal", weight: "1 kg", price: 168, originalPrice: 190 },
    ],
  },
  {
    id: "fresh-basket",
    name: "Fresh Basket Mandi",
    categoryTag: "vegetables",
    categoryName: "Morning Mandi",
    deliveryTime: "10–15 min",
    rating: 4.7,
    reviewsCount: "1.2k",
    freeDeliveryThreshold: 199,
    image: "/images/shop_freshbasket.jpg",
    distance: "1.1 km",
    location: "City Centre 1, Salt Lake",
    merchantStory: "Fresh greens and seasonal vegetables brought in every morning from local Bengal mandis. Sorted and hand-inspected daily.",
    featuredItems: [
      { id: "i5", name: "Farm Fresh Desi Red Tomatoes", weight: "1 kg", price: 38, originalPrice: 50 },
      { id: "i6", name: "Crisp Green Capsicum", weight: "500 g", price: 45, originalPrice: 60 },
      { id: "i7", name: "Fresh Palak Spinach Leaves", weight: "250 g", price: 20, originalPrice: 30 },
      { id: "i8", name: "Kashmiri Shimla Apples", weight: "1 kg", price: 140, originalPrice: 180 },
    ],
  },
  {
    id: "new-town-dairy",
    name: "New Town Fresh Dairy",
    categoryTag: "dairy",
    categoryName: "Dairy & Milk",
    deliveryTime: "10 min",
    rating: 4.9,
    reviewsCount: "540",
    freeDeliveryThreshold: 120,
    image: "/images/shop_dairy.jpg",
    distance: "0.4 km",
    location: "Action Area 1, New Town",
    merchantStory: "Pure milk pouches, fresh morning malai paneer, and artisanal Mishti Doi prepared daily according to Kolkata traditions.",
    featuredItems: [
      { id: "i9", name: "Fresh Farm Cow Milk Pouch", weight: "500 ml", price: 34, originalPrice: 36 },
      { id: "i10", name: "Soft Malai Paneer Block", weight: "200 g", price: 90, originalPrice: 105 },
      { id: "i11", name: "Traditional Mishti Doi Clay Pot", weight: "250 g", price: 55, originalPrice: 65 },
      { id: "i12", name: "Farm Brown Country Eggs", weight: "6 pcs", price: 58, originalPrice: 70 },
    ],
  },
  {
    id: "alam-chicken",
    name: "Bengal Fresh Poultry & Catch",
    categoryTag: "meat",
    categoryName: "Poultry & Fish",
    deliveryTime: "15–20 min",
    rating: 4.6,
    reviewsCount: "390",
    freeDeliveryThreshold: 250,
    image: "/images/shop_meat.jpg",
    distance: "1.4 km",
    location: "Sector 3 Market, Salt Lake",
    merchantStory: "Hygienically dressed poultry and daily morning river catch. Cut, cleaned, and packed to custom specifications upon order.",
    featuredItems: [
      { id: "i13", name: "Fresh Curry Cut Chicken (Skinless)", weight: "500 g", price: 140, originalPrice: 165 },
      { id: "i14", name: "Tender Chicken Breast Boneless", weight: "500 g", price: 175, originalPrice: 210 },
      { id: "i15", name: "Fresh Katla Bengali Cut Fish", weight: "500 g", price: 220, originalPrice: 250 },
      { id: "i16", name: "Cleaned Medium Tiger Prawns", weight: "250 g", price: 210, originalPrice: 245 },
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

  const handleScrollToApp = () => {
    const el = document.getElementById("download-app");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="network" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <div className={styles.badgeSection}>
              <IconBuildingStore size={16} />
              <span>{isHi ? "सत्यापित पार्टनर स्टोर" : "Verified Merchant Partners"}</span>
            </div>
            <h2 className={styles.sectionTitle}>
              {isHi
                ? "हमारे पड़ोस के स्टोर नेटवर्क को जानें"
                : "Explore our verified neighbourhood store network"}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isHi
                ? "डसमिट वास्तविक पारिवारिक दुकानों को आधुनिक तकनीक से जोड़ता है। ग्राहक मोबाइल ऐप से ऑर्डर करते हैं और 10-30 मिनट में ताज़ा सामान पाते हैं।"
                : "Dusmint integrates real family-run stores into our hyper-dispatch ecosystem. Every merchant operates our POS software with zero warehouse holding."}
            </p>
          </div>

          <button
            type="button"
            className={styles.downloadCtaBtn}
            onClick={handleScrollToApp}
          >
            <IconDeviceMobile size={18} stroke={2} />
            <span>{isHi ? "ऐप पर सभी देखें" : "Explore on customer app"}</span>
          </button>
        </div>

        {/* Shops Card Grid - 4 wide on desktop */}
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
                  width={380}
                  height={220}
                  className={styles.shopImage}
                />
                {/* Delivery Time Badge */}
                <div className={styles.deliveryBadge}>
                  <IconBolt size={14} stroke={2.2} className={styles.deliveryIcon} />
                  <span className={styles.timeText}>{shop.deliveryTime}</span>
                </div>
                {/* Distance */}
                <div className={styles.distanceBadge}>{shop.distance} away</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.categoryLine}>
                  <span>{shop.categoryName}</span>
                </div>

                <div className={styles.nameRow}>
                  <h3 className={styles.shopName}>{shop.name}</h3>
                  <div className={styles.ratingBadge}>
                    <IconStarFilled size={13} className={styles.starIcon} />
                    <span className={styles.ratingScore}>{shop.rating}</span>
                    <span className={styles.reviewsCount}>
                      ({shop.reviewsCount})
                    </span>
                  </div>
                </div>

                <p className={styles.shopLocation}>{shop.location}</p>

                <p className={styles.merchantStory}>{shop.merchantStory}</p>

                <div className={styles.itemsPreview}>
                  <span className={styles.itemsLabel}>
                    {isHi ? "डिजिटाइज़्ड सामान:" : "Digitized catalog:"}
                  </span>
                  <div className={styles.chipsRow}>
                    {shop.featuredItems.slice(0, 3).map((item) => (
                      <span key={item.id} className={styles.itemChip}>
                        {item.name.split(" ").slice(0, 3).join(" ")}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.footerRow}>
                  <span className={styles.viewDetailsText}>
                    {isHi ? "स्टोर प्रोफाइल देखें" : "View store profile"}
                    <IconArrowRight size={14} stroke={2} />
                  </span>
                  <span className={styles.activePill}>
                    {isHi ? "डसमिट ऐप पर लाइव" : "Live on Dusmint"}
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
