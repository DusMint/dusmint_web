"use client";

import React from "react";
import Image from "next/image";
import styles from "./DeliveryBanner.module.css";

interface DeliveryBannerProps {
  language: "en" | "hi";
  onOrderNow: () => void;
}

export default function DeliveryBanner({ language, onOrderNow }: DeliveryBannerProps) {
  const isHi = language === "hi";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bannerCard}>
          {/* Left Title */}
          <div className={styles.titleColumn}>
            <span className={styles.smallOverline}>
              {isHi ? "⚡ डसमिट एक्सप्रेस डिलीवरी" : "⚡ DUSMINT EXPRESS"}
            </span>
            <h2 className={styles.bannerTitle}>
              {isHi ? (
                <>
                  स्थानीय दुकानों से <br />
                  आपके दरवाज़े तक <br />
                  <span className={styles.yellowText}>मिनटों में।</span>
                </>
              ) : (
                <>
                  From <br />
                  Local Shops <br />
                  to Your Doorstep <br />
                  <span className={styles.yellowText}>in Minutes.</span>
                </>
              )}
            </h2>
            <button
              type="button"
              className={styles.actionBtn}
              onClick={onOrderNow}
            >
              <span>{isHi ? "ऑर्डर ट्रैक करें" : "Experience Dusmint"}</span>
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>

          {/* Center Visual: Delivery Partner */}
          <div className={styles.visualColumn}>
            <div className={styles.imageGlow}></div>
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

          {/* Right Highlights: 3 trust circles matching photo */}
          <div className={styles.metricsColumn}>
            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <span className={styles.lightningIcon}>⚡</span>
              </div>
              <div className={styles.metricText}>
                <span className={styles.metricValue}>10–30</span>
                <span className={styles.metricLabel}>
                  {isHi ? "मिनट" : "Minutes"}
                </span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <span className={styles.pinIcon}>📍</span>
              </div>
              <div className={styles.metricText}>
                <span className={styles.metricValue}>
                  {isHi ? "लाइव" : "Live"}
                </span>
                <span className={styles.metricLabel}>
                  {isHi ? "ट्रैकिंग" : "Tracking"}
                </span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricIconWrap}>
                <span className={styles.shieldIcon}>📦</span>
              </div>
              <div className={styles.metricText}>
                <span className={styles.metricValue}>
                  {isHi ? "ताज़ा" : "Fresh &"}
                </span>
                <span className={styles.metricLabel}>
                  {isHi ? "सुरक्षित" : "Hygienic"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
