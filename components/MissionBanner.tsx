"use client";

import React from "react";
import Image from "next/image";
import {
  IconBuildingStore,
  IconBolt,
  IconShieldCheck,
} from "@tabler/icons-react";
import styles from "./MissionBanner.module.css";

interface MissionBannerProps {
  language?: "en" | "hi";
}

export default function MissionBanner({ language = "en" }: MissionBannerProps) {
  const isHi = language === "hi";

  return (
    <section className={styles.missionSection} aria-label="DusMint Mission & Impact">
      {/* 1. Decorative Hand-Drawn Organic Curved Line Trails (Zomato Style) */}
      <svg
        className={styles.decorativeCurves}
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-40 220 C180 120, 240 20, 160 80 C80 140, 120 480, 260 520 C420 560, 520 280, 720 280 C920 280, 1020 80, 1160 40 C1280 0, 1400 80, 1360 220 C1300 420, 1160 620, 1280 660 C1380 690, 1480 580, 1480 580"
          stroke="rgba(34, 197, 94, 0.22)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M60 620 C220 540, 340 620, 500 580"
          stroke="rgba(34, 197, 94, 0.16)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>

      {/* 2. Floating Farm-Fresh Produce & Artisanal Dairy Items */}
      {/* Item 1: Farm-Fresh Vegetables Arrangement (Left) */}
      <div className={`${styles.floatingItem} ${styles.itemVegetables}`}>
        <Image
          src="/images/mission_vegetables.jpg"
          alt="Farm fresh vegetables"
          width={280}
          height={280}
          className={styles.itemImage}
          priority
        />
      </div>

      {/* Item 2: Artisanal Dairy, Paneer & Clay Matka Dahi (Top Right) */}
      <div className={`${styles.floatingItem} ${styles.itemDairy}`}>
        <Image
          src="/images/mission_dairy.jpg"
          alt="Fresh artisanal dairy and paneer"
          width={260}
          height={260}
          className={styles.itemImage}
          priority
        />
      </div>

      {/* Item 3: Fresh Harvest Basket with Carrots & Peas (Bottom Right) */}
      <div className={`${styles.floatingItem} ${styles.itemHarvest}`}>
        <Image
          src="/images/mission_harvest.jpg"
          alt="Fresh harvest basket with carrots and herbs"
          width={270}
          height={270}
          className={styles.itemImage}
        />
      </div>

      {/* Floating Garnishes: Mint leaf & dewy cherry tomato accents */}
      <div className={`${styles.floatingGarnish} ${styles.garnishMint}`}>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#22C55E">
          <path d="M12 2C8 6 4 11 6 16C8 21 15 22 18 19C21 16 20 8 12 2Z" opacity="0.85" />
          <path d="M12 2C13 8 15 14 18 19" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className={`${styles.floatingGarnish} ${styles.garnishTomato}`}>
        <div className={styles.cherryTomatoGarnish} />
      </div>

      {/* 3. Center Mission Headline & Description */}
      <div className={styles.centerContent}>
        <h2 className={styles.sectionHeading}>
          {isHi ? (
            <>
              ताज़ा और खरा सामान,
              <br />
              <span className={styles.headingAccent}>हर घर के लिए</span>
            </>
          ) : (
            <>
              Better food for
              <br />
              <span className={styles.headingAccent}>more people</span>
            </>
          )}
        </h2>

        <p className={styles.sectionSubtitle}>
          {isHi
            ? "स्थानीय किराना, सुबह की ताज़ी मंडी और डेयरी किसानों के साथ मिलकर — 100% ताज़ा और शुद्ध सामान सीधे आपके घर तक।"
            : "Partnering with trusted neighbourhood kiranas, morning mandis, and local dairy farms to deliver 100% farm-fresh produce right to your doorstep."}
        </p>
      </div>

      {/* 4. Bottom Floating Impact & Stats Card (Zomato Style) */}
      <div className={styles.statsCardWrapper}>
        <div className={styles.statsCard}>
          {/* Stat 1: Verified Local Stores */}
          <div className={styles.statItem}>
            <div className={styles.statTextCol}>
              <span className={styles.statNumber}>5,000+</span>
              <span className={styles.statLabel}>
                {isHi ? "स्थानीय दुकानें" : "local stores"}
              </span>
            </div>
            <div className={styles.statIconBadge}>
              <IconBuildingStore size={26} stroke={1.75} className={styles.statIcon} />
            </div>
          </div>

          <div className={styles.statDivider} />

          {/* Stat 2: Express Delivery */}
          <div className={styles.statItem}>
            <div className={styles.statTextCol}>
              <span className={styles.statNumber}>10–30 mins</span>
              <span className={styles.statLabel}>
                {isHi ? "एक्सप्रेस डिलीवरी" : "express delivery"}
              </span>
            </div>
            <div className={styles.statIconBadge}>
              <IconBolt size={26} stroke={1.75} className={styles.statIcon} />
            </div>
          </div>

          <div className={styles.statDivider} />

          {/* Stat 3: 100% Fresh Guaranteed */}
          <div className={styles.statItem}>
            <div className={styles.statTextCol}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>
                {isHi ? "पूरा तोला, पूरा भरोसा" : "farm-fresh & poora tola"}
              </span>
            </div>
            <div className={styles.statIconBadge}>
              <IconShieldCheck size={26} stroke={1.75} className={styles.statIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
