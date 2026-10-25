"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

interface HeroProps {
  language: "en" | "hi";
  onShopNowClick: () => void;
  onPartnerClick: () => void;
}

export default function Hero({ language, onShopNowClick, onPartnerClick }: HeroProps) {
  const isHi = language === "hi";

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column: Copy & Actions */}
        <div className={styles.heroContent}>
          {/* Top Hyperlocal Pill */}
          <div className={styles.pillBadge}>
            <span className={styles.pillPulse}></span>
            <span className={styles.pillText}>
              {isHi
                ? "⚡ 10-30 मिनट में आपके घर तक डिलीवरी"
                : "⚡ 10-30 MIN HYPERLOCAL DELIVERY"}
            </span>
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            {isHi ? (
              <>
                स्थानीय दुकानें। <br />
                <span className={styles.titleHighlight}>आप तक सबसे तेज़।</span>
              </>
            ) : (
              <>
                Local Shops. <br />
                <span className={styles.titleHighlight}>Faster to You.</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            {isHi
              ? "किराना, ताज़ी सब्जियां, दूध, मांस, मछली और बहुत कुछ—आपकी भरोसेमंद नजदीकी दुकानों से मिनटों में आपके दरवाज़े पर।"
              : "Groceries, fresh produce, dairy, meat, seafood and more from your trusted neighbourhood shops delivered in minutes."}
          </p>

          {/* Call to Actions */}
          <div className={styles.ctaGroup}>
            <button
              type="button"
              className={styles.shopNowBtn}
              onClick={onShopNowClick}
            >
              <span>{isHi ? "अभी ऑर्डर करें" : "Shop Now"}</span>
              <span className={styles.arrowIcon}>→</span>
            </button>

            <button
              type="button"
              className={styles.partnerBtn}
              onClick={onPartnerClick}
            >
              <span>{isHi ? "दुकान रजिस्टर करें" : "List Your Shop"}</span>
            </button>
          </div>

          {/* Trust Features Badges */}
          <div className={styles.featuresRow}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏪</div>
              <span className={styles.featureLabel}>
                {isHi ? "स्थानीय दुकानदार" : "Local Shopkeepers"}
              </span>
            </div>

            <div className={styles.featureDivider}></div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>⚡</div>
              <span className={styles.featureLabel}>
                {isHi ? "सुपरफास्ट डिलीवरी" : "Quick Delivery"}
              </span>
            </div>

            <div className={styles.featureDivider}></div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🛡️</div>
              <span className={styles.featureLabel}>
                {isHi ? "ताज़ा और भरोसेमंद" : "Fresh & Trusted"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Overlays */}
        <div className={styles.heroVisual}>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/hero_shopkeeper.jpg"
                alt="Friendly Indian Kirana Shopkeeper"
                width={600}
                height={500}
                priority
                className={styles.heroImg}
              />
            </div>

            {/* Floating Badge Card 1: Your Neighbourhood Shop */}
            <div className={styles.floatingCardOnline}>
              <div className={styles.cardStoreIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className={styles.cardOnlineText}>
                <span className={styles.cardOnlineTitle}>
                  {isHi ? "आपकी पड़ोस की दुकान" : "Your Neighbourhood Shop."}
                </span>
                <span className={styles.cardOnlineSub}>
                  {isHi ? "अब ऑनलाइन डिलीवरी पर" : "Now Online on Dusmint"}
                </span>
              </div>
            </div>

            {/* Floating Badge Card 2: Rating & Trust */}
            <div className={styles.floatingCardRating}>
              <div className={styles.starBadge}>⭐ 4.9</div>
              <div className={styles.ratingText}>
                <span className={styles.ratingTitle}>
                  {isHi ? "12,000+ खुश ग्राहक" : "12,000+ Happy Families"}
                </span>
                <span className={styles.ratingSub}>
                  {isHi ? "आपके इलाके में 98.9% ऑन-टाइम" : "98.9% On-time in Kolkata"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
