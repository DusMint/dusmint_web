"use client";

import React, { useState } from "react";
import {
  IconBuildingStore,
  IconShoppingCart,
  IconBike,
} from "@tabler/icons-react";
import styles from "./HowItWorks.module.css";

interface HowItWorksProps {
  language: "en" | "hi";
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const isHi = language === "hi";
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      icon: <IconBuildingStore size={26} stroke={1.8} className={styles.stepIcon} />,
      titleEn: "Choose your trusted shop",
      titleHi: "अपनी पसंदीदा स्थानीय दुकान चुनें",
      descEn:
        "Browse by your favorite Sharma Kirana, Fresh Basket greengrocer, or local fishmonger just down the street.",
      descHi:
        "अपने इलाके की जानी-पहचानी किराना दुकान, ताज़ी सब्ज़ी मंडी या डेयरी चुनें जहाँ से आप सालों से खरीदारी करते आए हैं।",
    },
    {
      step: "02",
      icon: <IconShoppingCart size={26} stroke={1.8} className={styles.stepIcon} />,
      titleEn: "Live store inventory & fair rates",
      titleHi: "दुकान की लाइव सूची और असली दाम",
      descEn:
        "Select Atta, Daal, fresh milk or morning fish at the exact price the shopkeeper charges on the counter.",
      descHi:
        "दुकानदार की लाइव इन्वेंट्री से सामान चुनें—वही भरोसेमंद दाम जो आपको काउंटर पर मिलते हैं।",
    },
    {
      step: "03",
      icon: <IconBike size={26} stroke={1.8} className={styles.stepIcon} />,
      titleEn: "Doorstep delivery in 10-30 mins",
      titleHi: "10-30 मिनट में दरवाज़े पर डिलीवरी",
      descEn:
        "Our electric scooter delivery partner picks up carefully packed items and arrives at your door with live GPS tracking.",
      descHi:
        "हमारा डसमिट डिलीवरी पार्टनर दुकान से सीधे सामान लेकर लाइव जीपीएस ट्रैकिंग के साथ आपके दरवाज़े पर पहुंचता है।",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {isHi ? "डसमिट कैसे काम करता है?" : "How Dusmint works"}
          </h2>
          <p className={styles.subtitle}>
            {isHi
              ? "पड़ोस की सुविधा, त्वरित डिलीवरी गति के साथ"
              : "Neighbourhood warmth meets quick delivery speed"}
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((s, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={s.step}
                className={`${styles.stepCard} ${isActive ? styles.stepCardActive : ""}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={styles.stepTop}>
                  <span className={styles.stepNumber}>{s.step}</span>
                  <div className={styles.iconBox}>{s.icon}</div>
                </div>

                <h3 className={styles.stepTitle}>
                  {isHi ? s.titleHi : s.titleEn}
                </h3>
                <p className={styles.stepDesc}>
                  {isHi ? s.descHi : s.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
