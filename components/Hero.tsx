"use client";

import React from "react";
import Image from "next/image";
import {
  IconBuildingStore,
  IconBolt,
  IconShieldCheck,
  IconArrowRight,
} from "@tabler/icons-react";
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
          {/* Main Title - Poppins Bold 48px/56px on desktop, 32px/40px on mobile */}
          <h1 className={styles.title}>
            {isHi ? (
              <>
                स्थानीय दुकानें। <br />
                <span className={styles.titleHighlight}>आप तक सबसे तेज़।</span>
              </>
            ) : (
              <>
                Local shops. <br />
                <span className={styles.titleHighlight}>Faster to you.</span>
              </>
            )}
          </h1>

          {/* Subtitle - Noto Sans Regular 18px/28px */}
          <p className={styles.subtitle}>
            {isHi
              ? "किराना, ताज़ी सब्जियां, दूध, मांस, मछली और बहुत कुछ—आपकी भरोसेमंद नजदीकी दुकानों से मिनटों में आपके दरवाज़े पर।"
              : "Groceries, fresh produce, dairy, meat, seafood and more from your trusted neighbourhood shops delivered in minutes."}
          </p>

          {/* Call to Actions using design.md two-colour system */}
          <div className={styles.ctaGroup}>
            <button
              type="button"
              className={styles.shopNowBtn}
              onClick={onShopNowClick}
            >
              <span>{isHi ? "अभी ऑर्डर करें" : "Shop now"}</span>
              <IconArrowRight size={18} stroke={2.2} />
            </button>

            <button
              type="button"
              className={styles.partnerBtn}
              onClick={onPartnerClick}
            >
              <span>{isHi ? "दुकान रजिस्टर करें" : "List your shop"}</span>
            </button>
          </div>

          {/* Trust Features Row using React icons */}
          <div className={styles.featuresRow}>
            <div className={styles.featureItem}>
              <IconBuildingStore size={22} stroke={1.8} className={styles.featureIcon} />
              <span className={styles.featureLabel}>
                {isHi ? "स्थानीय दुकानदार" : "Local shopkeepers"}
              </span>
            </div>

            <div className={styles.featureDivider}></div>

            <div className={styles.featureItem}>
              <IconBolt size={22} stroke={1.8} className={styles.featureIcon} />
              <span className={styles.featureLabel}>
                {isHi ? "10-30 मिनट डिलीवरी" : "10-30 min delivery"}
              </span>
            </div>

            <div className={styles.featureDivider}></div>

            <div className={styles.featureItem}>
              <IconShieldCheck size={22} stroke={1.8} className={styles.featureIcon} />
              <span className={styles.featureLabel}>
                {isHi ? "ताज़ा और भरोसेमंद" : "Fresh & trusted"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Grounded Photography Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/hero_shopkeeper.jpg"
                alt="Local Indian Kirana Shopkeeper"
                width={580}
                height={480}
                priority
                className={styles.heroImg}
              />
            </div>

            {/* Clean, Grounded Info Badge (No floating gimmick) */}
            <div className={styles.storeBadgeGrounded}>
              <div className={styles.cardStoreIcon}>
                <IconBuildingStore size={22} stroke={2} />
              </div>
              <div className={styles.cardOnlineText}>
                <span className={styles.cardOnlineTitle}>
                  {isHi ? "आपकी पड़ोस की दुकान" : "Your neighbourhood shop"}
                </span>
                <span className={styles.cardOnlineSub}>
                  {isHi ? "अब ऑनलाइन डसमिट पर" : "Now online on Dusmint"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
