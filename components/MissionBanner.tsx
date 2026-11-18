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
      {/* 1. Organic Curved Line Trails (Dipping safely below text) */}
      <svg
        className={styles.decorativeCurves}
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-40 180 C140 80, 180 20, 130 90 C60 180, 60 420, 180 470 C280 510, 360 430, 480 440 C620 450, 720 460, 840 430 C960 400, 1040 120, 1180 60 C1300 10, 1410 80, 1360 250 C1300 460, 1140 580, 1260 630 C1340 660, 1460 580, 1480 560"
          stroke="rgba(21, 128, 61, 0.42)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M40 610 C200 540, 320 620, 480 590 C640 560, 800 660, 1000 620 C1160 580, 1320 640, 1460 600"
          stroke="rgba(21, 128, 61, 0.32)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 8"
        />
      </svg>

      {/* 2. Isolated Single-Item Farm Produce & Dairy (Transparent PNGs, Rotated Free Flow) */}
      {/* Top Left: Pure Farm-Fresh Milk Bottle (Swapped with Broccoli) */}
      <div className={`${styles.singleItem} ${styles.itemMilk}`}>
        <Image
          src="/images/single_milk_bottle.png"
          alt="Fresh pure farm milk bottle"
          width={88}
          height={210}
          className={styles.produceImg}
          priority
        />
      </div>

      {/* Bottom Left: Fresh Cut Red Apple (Replacing Bell Pepper) */}
      <div className={`${styles.singleItem} ${styles.itemApple}`}>
        <Image
          src="/images/single_cut_apple.png"
          alt="Crisp cut fresh red apple"
          width={145}
          height={140}
          className={styles.produceImg}
          priority
        />
      </div>

      {/* Top Right: Fresh Broccoli Crown (Swapped from Top Left) */}
      <div className={`${styles.singleItem} ${styles.itemBroccoli}`}>
        <Image
          src="/images/single_broccoli.png"
          alt="Fresh farm broccoli crown"
          width={145}
          height={145}
          className={styles.produceImg}
          priority
        />
      </div>

      {/* Bottom Right: Authentic Terracotta Clay Matka Curd */}
      <div className={`${styles.singleItem} ${styles.itemCurd}`}>
        <Image
          src="/images/single_matka_curd.png"
          alt="Artisanal clay matka curd"
          width={155}
          height={155}
          className={styles.produceImg}
        />
      </div>

      {/* Subtle Accent Garnishes: Mint leaf & dewy cherry tomato */}
      <div className={`${styles.staticGarnish} ${styles.garnishMint}`}>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#22C55E">
          <path d="M12 2C8 6 4 11 6 16C8 21 15 22 18 19C21 16 20 8 12 2Z" opacity="0.9" />
          <path d="M12 2C13 8 15 14 18 19" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className={`${styles.staticGarnish} ${styles.garnishTomato}`}>
        <div className={styles.cherryTomatoGarnish} />
      </div>

      <div className={`${styles.staticGarnish} ${styles.garnishTomatoBottom}`}>
        <div className={styles.cherryTomatoGarnish} />
      </div>

      {/* 3. Center Mission Headline & Positioned Description */}
      <div className={styles.centerContent}>
        <h2 className={styles.sectionHeading}>
          {isHi ? (
            <>
              स्थानीय दुकानों की ताज़गी,
              <br />
              <span className={styles.headingAccent}>सीधे आपके दरवाज़े तक।</span>
            </>
          ) : (
            <>
              Your local shop’s freshest,
              <br />
              <span className={styles.headingAccent}>brought to your door.</span>
            </>
          )}
        </h2>

        <p className={styles.sectionSubtitle}>
          {isHi
            ? "स्थानीय किराना, सुबह की ताज़ी मंडी और डेयरी किसानों के साथ मिलकर — 100% ताज़ा और शुद्ध सामान सीधे आपके घर तक।"
            : "Partnering with trusted neighbourhood kiranas, morning mandis, and local dairy farms to deliver 100% farm-fresh produce right to your doorstep."}
        </p>
      </div>

      {/* 4. Bottom Trust Cards (Desktop: unified pill; Mobile: 3 staggered overlapping cards like Zomato) */}
      <div className={styles.statsCardWrapper}>
        <div className={styles.statsCard}>
          {/* Pillar 1: Verified Stores */}
          <div className={`${styles.statItem} ${styles.statCardOne}`}>
            <span className={styles.statTitle}>
              {isHi ? "सत्यापित दुकानें" : "Verified Stores"}
            </span>
            <div className={styles.statIconBadge}>
              <IconBuildingStore size={20} stroke={2} className={styles.statIcon} />
            </div>
          </div>

          <div className={styles.statDivider} />

          {/* Pillar 2: Instant Delivery */}
          <div className={`${styles.statItem} ${styles.statCardTwo}`}>
            <span className={styles.statTitle}>
              {isHi ? "एक्सप्रेस डिलीवरी" : "Instant Delivery"}
            </span>
            <div className={styles.statIconBadge}>
              <IconBolt size={20} stroke={2} className={styles.statIcon} />
            </div>
          </div>

          <div className={styles.statDivider} />

          {/* Pillar 3: Secure Checkout */}
          <div className={`${styles.statItem} ${styles.statCardThree}`}>
            <span className={styles.statTitle}>
              {isHi ? "सुरक्षित चेकआउट" : "Secure Checkout"}
            </span>
            <div className={styles.statIconBadge}>
              <IconShieldCheck size={20} stroke={2} className={styles.statIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
