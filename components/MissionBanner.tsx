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
      {/* 1. Darker Hand-Drawn Organic Curved Line Trails (Zomato Style) */}
      <svg
        className={styles.decorativeCurves}
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-30 200 C160 100, 220 20, 150 90 C70 160, 90 460, 240 500 C400 540, 520 280, 720 280 C920 280, 1020 90, 1160 50 C1280 10, 1410 70, 1370 230 C1310 430, 1160 610, 1280 650 C1380 680, 1480 580, 1480 580"
          stroke="rgba(21, 128, 61, 0.42)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M40 590 C200 510, 320 600, 480 560 C640 520, 800 640, 1000 600 C1160 560, 1320 620, 1460 580"
          stroke="rgba(21, 128, 61, 0.32)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 8"
        />
      </svg>

      {/* 2. Isolated Single-Item Farm Produce & Artisanal Dairy (Transparent PNGs) */}
      {/* Top Left: Fresh Broccoli Crown */}
      <div className={`${styles.singleItem} ${styles.itemBroccoli}`}>
        <Image
          src="/images/single_broccoli.png"
          alt="Fresh farm broccoli"
          width={220}
          height={220}
          className={styles.produceImg}
          priority
        />
      </div>

      {/* Bottom Left: Crisp Red Bell Pepper */}
      <div className={`${styles.singleItem} ${styles.itemPepper}`}>
        <Image
          src="/images/single_bell_pepper.png"
          alt="Crisp red bell pepper"
          width={210}
          height={210}
          className={styles.produceImg}
          priority
        />
      </div>

      {/* Top Right: Pure Farm-Fresh Milk Bottle */}
      <div className={`${styles.singleItem} ${styles.itemMilk}`}>
        <Image
          src="/images/single_milk_bottle.png"
          alt="Fresh pure farm milk bottle"
          width={130}
          height={270}
          className={styles.produceImg}
          priority
        />
      </div>

      {/* Bottom Right: Authentic Terracotta Clay Matka Curd */}
      <div className={`${styles.singleItem} ${styles.itemCurd}`}>
        <Image
          src="/images/single_matka_curd.png"
          alt="Artisanal clay matka curd"
          width={220}
          height={220}
          className={styles.produceImg}
        />
      </div>

      {/* Floating Accent Garnishes: Mint leaf & dewy cherry tomato */}
      <div className={`${styles.staticGarnish} ${styles.garnishMint}`}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#22C55E">
          <path d="M12 2C8 6 4 11 6 16C8 21 15 22 18 19C21 16 20 8 12 2Z" opacity="0.9" />
          <path d="M12 2C13 8 15 14 18 19" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className={`${styles.staticGarnish} ${styles.garnishTomato}`}>
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

      {/* 4. Bottom Trust Pillars Pill (Genuine Trust, No Fake Metrics) */}
      <div className={styles.statsCardWrapper}>
        <div className={styles.statsCard}>
          {/* Pillar 1: Trusted Shops */}
          <div className={styles.statItem}>
            <div className={styles.statTextCol}>
              <span className={styles.statTitle}>
                {isHi ? "विश्वसनीय दुकानें" : "Trusted Shops"}
              </span>
              <span className={styles.statLabel}>
                {isHi ? "सत्यापित स्थानीय किराना" : "Verified local kiranas"}
              </span>
            </div>
            <div className={styles.statIconBadge}>
              <IconBuildingStore size={24} stroke={1.75} className={styles.statIcon} />
            </div>
          </div>

          <div className={styles.statDivider} />

          {/* Pillar 2: Faster Delivery */}
          <div className={styles.statItem}>
            <div className={styles.statTextCol}>
              <span className={styles.statTitle}>
                {isHi ? "तेज़ डिलीवरी" : "Faster Delivery"}
              </span>
              <span className={styles.statLabel}>
                {isHi ? "सीधे आपके दरवाज़े तक" : "Direct to your doorstep"}
              </span>
            </div>
            <div className={styles.statIconBadge}>
              <IconBolt size={24} stroke={1.75} className={styles.statIcon} />
            </div>
          </div>

          <div className={styles.statDivider} />

          {/* Pillar 3: Secure Payments */}
          <div className={styles.statItem}>
            <div className={styles.statTextCol}>
              <span className={styles.statTitle}>
                {isHi ? "सुरक्षित भुगतान" : "Secure Payments"}
              </span>
              <span className={styles.statLabel}>
                {isHi ? "UPI, कार्ड और कैश" : "UPI, Cards & Cash"}
              </span>
            </div>
            <div className={styles.statIconBadge}>
              <IconShieldCheck size={24} stroke={1.75} className={styles.statIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
