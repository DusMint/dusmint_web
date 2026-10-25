"use client";

import React from "react";
import Image from "next/image";
import {
  IconBolt,
  IconMapPin,
  IconShieldCheck,
  IconDeviceMobile,
} from "@tabler/icons-react";
import styles from "./DeliveryBanner.module.css";

interface DeliveryBannerProps {
  language: "en" | "hi";
  onExploreApp?: () => void;
}

export default function DeliveryBanner({ language, onExploreApp }: DeliveryBannerProps) {
  const isHi = language === "hi";

  const handleDownloadClick = () => {
    if (onExploreApp) {
      onExploreApp();
    } else {
      const el = document.getElementById("download-app");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bannerCard}>
          {/* Left Title */}
          <div className={styles.titleColumn}>
            <h2 className={styles.bannerTitle}>
              {isHi ? (
                <>
                  पड़ोस की दुकानों से <br />
                  सीधे आपके घर तक, <br />
                  <span className={styles.yellowText}>10 से 30 मिनट में।</span>
                </>
              ) : (
                <>
                  From local shops <br />
                  to your doorstep <br />
                  <span className={styles.yellowText}>in 10 to 30 minutes.</span>
                </>
              )}
            </h2>
            <p className={styles.bannerSubtitle}>
              {isHi
                ? "प्रत्येक ऑर्डर 1.5 किमी के भीतर के स्थानीय किराना से उठाया जाता है और पर्यावरण-अनुकूल इलेक्ट्रिक स्कूटर द्वारा आपके घर पहुंचता है।"
                : "Every order is assigned to an eco-friendly EV rider within 1.5 km of your local shop. No warehouses, no cold storage—just morning-fresh delivery."}
            </p>
            <button
              type="button"
              className={styles.actionBtn}
              onClick={handleDownloadClick}
            >
              <IconDeviceMobile size={18} stroke={2.2} />
              <span>{isHi ? "ऐप पर लाइव ट्रैक करें" : "Track live on customer app"}</span>
            </button>
          </div>

          {/* Center Visual: Delivery Partner */}
          <div className={styles.visualColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/delivery_partner.jpg"
                alt="Dusmint Express Delivery Rider on Scooter"
                width={520}
                height={320}
                className={styles.riderImage}
              />
            </div>
          </div>

          {/* Right Highlights: 3 metrics */}
          <div className={styles.metricsColumn}>
            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <IconBolt size={24} stroke={2} className={styles.metricIcon} />
              </div>
              <div className={styles.metricText}>
                <span className={styles.metricValue}>10–30</span>
                <span className={styles.metricLabel}>
                  {isHi ? "मिनट डिलीवरी" : "Mins delivery"}
                </span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <IconMapPin size={24} stroke={2} className={styles.metricIcon} />
              </div>
              <div className={styles.metricText}>
                <span className={styles.metricValue}>1.5 km</span>
                <span className={styles.metricLabel}>
                  {isHi ? "हाइपरलोकल दायरा" : "Hyperlocal radius"}
                </span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <IconShieldCheck size={24} stroke={2} className={styles.metricIcon} />
              </div>
              <div className={styles.metricText}>
                <span className={styles.metricValue}>100%</span>
                <span className={styles.metricLabel}>
                  {isHi ? "स्थानीय इन्वेंट्री" : "Local inventory"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
