"use client";

import React from "react";
import Image from "next/image";
import {
  IconBuildingStore,
  IconBolt,
  IconShieldCheck,
  IconDeviceMobile,
  IconSparkles,
} from "@tabler/icons-react";
import styles from "./Hero.module.css";

interface HeroProps {
  language: "en" | "hi";
  onExploreAppClick: () => void;
  onPartnerClick: () => void;
}

export default function Hero({ language, onExploreAppClick, onPartnerClick }: HeroProps) {
  const isHi = language === "hi";

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column: Product Value Story & Actions */}
        <div className={styles.heroContent}>
          <div className={styles.taglineChip}>
            <IconSparkles size={16} className={styles.chipIcon} />
            <span>
              {isHi
                ? "भारत का विश्वसनीय हाइपरलोकल रिटेल नेटवर्क"
                : "India's True Hyperlocal Commerce Network"}
            </span>
          </div>

          {/* Main Title - Poppins Bold 52px/62px desktop, 32px/40px mobile */}
          <h1 className={styles.title}>
            {isHi ? (
              <>
                पड़ोस की असली दुकानें। <br />
                <span className={styles.titleHighlight}>10–30 मिनट में आपके घर।</span>
              </>
            ) : (
              <>
                Your local shops. <br />
                <span className={styles.titleHighlight}>Delivered in 10–30 minutes.</span>
              </>
            )}
          </h1>

          {/* Subtitle - Noto Sans 19px/30px */}
          <p className={styles.subtitle}>
            {isHi
              ? "डसमिट आपके इलाके के किराना, सुबह की मंडी और ताज़ी डेयरी को डिजिटल तकनीक और इलेक्ट्रिक डिलीवरी से जोड़ता है। कोई वेयरहाउस डार्क स्टोर नहीं, कोई छुपा हुआ शुल्क नहीं—वही असली दुकान वाला दाम।"
              : "Dusmint connects your trusted neighbourhood kiranas, morning mandis, and fresh dairies with instant mobile ordering and high-speed electric delivery. Zero warehouse dark stores. Zero inflated markups. Just honest counter prices."}
          </p>

          {/* Product CTAs */}
          <div className={styles.ctaGroup}>
            <button
              type="button"
              className={styles.getAppBtn}
              onClick={onExploreAppClick}
            >
              <IconDeviceMobile size={20} stroke={2.2} />
              <span>{isHi ? "डसमिट ऐप डाउनलोड करें" : "Get the customer app"}</span>
            </button>

            <button
              type="button"
              className={styles.partnerBtn}
              onClick={onPartnerClick}
            >
              <IconBuildingStore size={20} stroke={1.8} />
              <span>{isHi ? "अपनी दुकान जोड़ें" : "Partner your store"}</span>
            </button>
          </div>

          {/* Platform Trust Features Row */}
          <div className={styles.featuresRow}>
            <div className={styles.featureItem}>
              <IconBuildingStore size={22} stroke={1.8} className={styles.featureIcon} />
              <div className={styles.featureTextBox}>
                <span className={styles.featureTitle}>
                  {isHi ? "शून्य डार्क स्टोर" : "Zero dark stores"}
                </span>
                <span className={styles.featureDesc}>
                  {isHi ? "100% स्थानीय दुकानें" : "100% neighbourhood retail"}
                </span>
              </div>
            </div>

            <div className={styles.featureDivider}></div>

            <div className={styles.featureItem}>
              <IconBolt size={22} stroke={1.8} className={styles.featureIcon} />
              <div className={styles.featureTextBox}>
                <span className={styles.featureTitle}>
                  {isHi ? "10–30 मिनट डिलीवरी" : "10–30 min delivery"}
                </span>
                <span className={styles.featureDesc}>
                  {isHi ? "1.5 किमी के भीतर से" : "Dispatched under 1.5 km"}
                </span>
              </div>
            </div>

            <div className={styles.featureDivider}></div>

            <div className={styles.featureItem}>
              <IconShieldCheck size={22} stroke={1.8} className={styles.featureIcon} />
              <div className={styles.featureTextBox}>
                <span className={styles.featureTitle}>
                  {isHi ? "असली दुकान वाला दाम" : "Honest counter MRP"}
                </span>
                <span className={styles.featureDesc}>
                  {isHi ? "कोई छुपा सरचार्ज नहीं" : "No hidden surge fees"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Grounded Platform Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/hero_shopkeeper.jpg"
                alt="Local Indian Kirana Shopkeeper partnered with Dusmint"
                width={620}
                height={500}
                priority
                className={styles.heroImg}
              />
            </div>

            {/* Clean Grounded Platform Info Badge */}
            <div className={styles.storeBadgeGrounded}>
              <div className={styles.cardStoreIcon}>
                <IconBuildingStore size={24} stroke={2} />
              </div>
              <div className={styles.cardOnlineText}>
                <span className={styles.cardOnlineTitle}>
                  {isHi ? "450+ सत्यापित स्थानीय दुकानें" : "450+ verified local merchants"}
                </span>
                <span className={styles.cardOnlineSub}>
                  {isHi
                    ? "सॉल्ट लेक, न्यू टाउन और बालीगंज में लाइव"
                    : "Live across Salt Lake, New Town & South Kolkata"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
