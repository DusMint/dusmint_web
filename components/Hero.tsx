"use client";

import React from "react";
import {
  IconBrandGooglePlay,
  IconBrandApple,
  IconChevronDown,
  IconBuildingStore,
} from "@tabler/icons-react";
import styles from "./Hero.module.css";

interface HeroProps {
  language: "en" | "hi";
  onExploreAppClick: () => void;
  onPartnerClick: () => void;
}

export default function Hero({
  language,
  onExploreAppClick,
  onPartnerClick,
}: HeroProps) {
  const isHi = language === "hi";

  const handleScrollDown = () => {
    // Smoothly scroll past the 100vh hero to the next section
    window.scrollTo({
      top: window.innerHeight - 60,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.heroSection}>
      {/* 1. Background Video Layer - Responsive Desktop & Mobile Videos */}
      <div className={styles.videoContainer}>
        {/* Desktop Video (16:9 widescreen) */}
        <video
          className={styles.desktopVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/desktop-video.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video (9:16 vertical) */}
        <video
          className={styles.mobileVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/mobile-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic dark vignette overlay for high contrast text readability */}
        <div className={styles.videoOverlay} />
      </div>

      {/* 2. Zomato-Style Centered Content Block */}
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          {/* Brand Logo Lockup */}
          <div className={styles.logoLockup}>
            <svg
              className={styles.leafIcon}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C16 4 9 9 9 17C9 21.4183 12.134 25 16 25C19.866 25 23 21.4183 23 17C23 9 16 4 16 4Z"
                fill="#22C55E"
              />
              <path
                d="M23 11C23 11 27 14 27 19C27 21.7614 25.2091 24 23 24C20.7909 24 19 21.7614 19 19C19 14 23 11 23 11Z"
                fill="#84CC16"
              />
              <path
                d="M16 11V22M16 15L12 13M16 18L13 19M16 17L19 16"
                stroke="#0A3622"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.brandTitle}>
              dus<span className={styles.brandMint}>mint</span>
            </span>
          </div>

          {/* Main Hero Headline - Brand Slogan (2 Lines) */}
          <h1 className={styles.heroHeading}>
            {isHi ? (
              <>
                <span className={styles.freshHighlight}>ताज़गी</span> का एक पता है,
                <br />
                वो आपका घर है
              </>
            ) : (
              <>
                <span className={styles.freshHighlight}>Fresh</span> has an address,
                <br />
                it’s yours
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            {isHi
              ? "डसमिट ऐप पर अपनी स्थानीय दुकान से ताज़ी सब्ज़ियां, मीट और डेयरी ऑर्डर करें।"
              : "Order veggies, meat and dairy from your local shop on the Dusmint app."}
          </p>

          {/* App Store & Google Play Badges Row */}
          <div className={styles.storeBadgesRow}>
            {/* Google Play Button */}
            <button
              type="button"
              className={styles.storeBadgeBtn}
              onClick={onExploreAppClick}
              aria-label="Get it on Google Play"
            >
              <IconBrandGooglePlay size={28} className={styles.storeIcon} />
              <div className={styles.storeTextCol}>
                <span className={styles.storeTopText}>GET IT ON</span>
                <span className={styles.storeMainText}>Google Play</span>
              </div>
            </button>

            {/* Apple App Store Button */}
            <button
              type="button"
              className={styles.storeBadgeBtn}
              onClick={onExploreAppClick}
              aria-label="Download on the App Store"
            >
              <IconBrandApple size={28} className={styles.storeIcon} />
              <div className={styles.storeTextCol}>
                <span className={styles.storeTopText}>Download on the</span>
                <span className={styles.storeMainText}>App Store</span>
              </div>
            </button>
          </div>

          {/* Merchant Partner Pill Link */}
          <div className={styles.merchantPillRow}>
            <button
              type="button"
              className={styles.merchantPillBtn}
              onClick={onPartnerClick}
            >
              <IconBuildingStore size={18} stroke={1.8} />
              <span>
                {isHi ? "दुकानदार पार्टनर बनें — मुफ़्त में रजिस्टर करें" : "Own a local store? Partner with DusMint"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Bottom "Scroll down ︾" Indicator */}
      <button
        type="button"
        className={styles.scrollDownIndicator}
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <span className={styles.scrollText}>
          {isHi ? "नीचे देखें" : "Scroll down"}
        </span>
        <IconChevronDown size={18} stroke={2.5} className={styles.chevronIcon} />
      </button>
    </section>
  );
}
