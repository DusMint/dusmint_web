"use client";

import React from "react";
import {
  IconBuildingStore,
  IconLeaf,
  IconTag,
  IconClockFast,
} from "@tabler/icons-react";
import styles from "./WhyDusmint.module.css";

interface WhyDusmintProps {
  language: "en" | "hi";
}

export default function WhyDusmint({ language }: WhyDusmintProps) {
  const isHi = language === "hi";

  const pillars = [
    {
      icon: <IconBuildingStore size={26} stroke={1.8} className={styles.icon} />,
      titleEn: "Empower your local kirana",
      titleHi: "अपने स्थानीय दुकानदार को सशक्त बनाएं",
      descEn:
        "Every order directly supports family-run stores in your neighbourhood, keeping hard-earned money within your community.",
      descHi:
        "प्रत्येक ऑर्डर सीधे आपके पड़ोस के पारिवारिक स्टोर का समर्थन करता है, जिससे आपके समुदाय का पैसा समुदाय में ही रहता है।",
    },
    {
      icon: <IconLeaf size={26} stroke={1.8} className={styles.icon} />,
      titleEn: "Fresh from today's mandi",
      titleHi: "आज की मंडी से सीधे ताज़ा",
      descEn:
        "No artificial warehouse chilling. Your trusted local shopkeeper handpicks vegetables, fruits, and dairy fresh every morning.",
      descHi:
        "गोदामों में बासी पड़ा सामान नहीं। आपके भरोसेमंद दुकानदार हर सुबह मंडी से हाथ से चुनी हुई ताज़ी सब्ज़ियाँ लाते हैं।",
    },
    {
      icon: <IconTag size={26} stroke={1.8} className={styles.icon} />,
      titleEn: "Real store pricing (zero hidden markups)",
      titleHi: "असली दुकान वाला दाम (कोई छुपा शुल्क नहीं)",
      descEn:
        "Pay the exact honest MRP and printed prices as walk-in customers, with zero inflated packaging or surge convenience fees.",
      descHi:
        "वही ईमानदार दाम जो आप खुद जाकर देते हैं। कोई छिपा हुआ पैकिंग चार्ज या अचानक बढ़ा हुआ शुल्क नहीं।",
    },
    {
      icon: <IconClockFast size={26} stroke={1.8} className={styles.icon} />,
      titleEn: "True hyperlocal: 10–30 mins",
      titleHi: "सच्ची हाइपरलोकल: 10-30 मिनट",
      descEn:
        "Because our delivery riders pick up from shops just 500m to 1.5km from your home, delivery is fast, safe, and reliable.",
      descHi:
        "क्योंकि डिलीवरी पार्टनर आपके घर से सिर्फ 500 मीटर से 1.5 किमी दूर की दुकान से सामान उठाते हैं, इसलिए डिलीवरी तुरंत होती है।",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {isHi
              ? "डसमिट डार्क स्टोर्स से बेहतर क्यों है?"
              : "Why Dusmint is better than dark stores"}
          </h2>
          <p className={styles.subtitle}>
            {isHi
              ? "हम स्थानीय किराना नेटवर्क को डिजिटल तकनीक से जोड़कर आपको सर्वोत्तम अनुभव देते हैं"
              : "We connect real neighbourhood kiranas with hyper-efficient routing for maximum freshness and trust."}
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((p, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconBox}>{p.icon}</div>
              <h3 className={styles.cardTitle}>
                {isHi ? p.titleHi : p.titleEn}
              </h3>
              <p className={styles.cardDesc}>
                {isHi ? p.descHi : p.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
