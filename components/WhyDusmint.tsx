"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhyDusmint.module.css";

interface WhyDusmintProps {
  language?: "en" | "hi";
}

interface FeatureCard {
  id: string;
  image: string;
  alt: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

const CARDS: FeatureCard[] = [
  {
    id: "shops-you-know",
    image: "/images/why_dusmint_shops_you_know.webp",
    alt: "Handmade cut-paper collage illustration of a friendly local Indian neighbourhood shop",
    titleEn: "Shops You Know",
    titleHi: "आपकी जानी-पहचानी दुकानें",
    descEn:
      "Fresh veggies, meat and milk come from real shops in your own neighbourhood, the ones you already trust.",
    descHi:
      "ताज़ी सब्ज़ियाँ, मांस और दूध आपके अपने पड़ोस की असली दुकानों से आते हैं, जिन पर आप पहले से भरोसा करते हैं।",
  },
  {
    id: "weighed-and-sealed",
    image: "/images/why_dusmint_weighed_sealed.webp",
    alt: "Handmade cut-paper collage illustration of produce weighed on digital scale and sealed in delivery bag",
    titleEn: "Weighed & Sealed",
    titleHi: "पूरा तोला, सुरक्षित सीलबंद",
    descEn:
      "Every order is weighed, photographed and sealed at the shop. If something's off, report it in the app.",
    descHi:
      "हर ऑर्डर को दुकान पर ही तौला, फोटो खींचा और सील किया जाता है। यदि कुछ भी गलत लगे, तो तुरंत ऐप में रिपोर्ट करें।",
  },
  {
    id: "your-slot-your-time",
    image: "/images/why_dusmint_your_slot.webp",
    alt: "Handmade cut-paper collage illustration of morning and evening delivery time slots",
    titleEn: "Your Slot, Your Time",
    titleHi: "आपका स्लॉट, आपका समय",
    descEn:
      "Pick a morning or evening slot and plan your day around it. No rush, no waiting around.",
    descHi:
      "सुबह या शाम का अपनी पसंद का स्लॉट चुनें और अपना दिन प्लान करें। कोई हड़बड़ी नहीं, कोई इंतज़ार नहीं।",
  },
  {
    id: "made-for-your-town",
    image: "/images/why_dusmint_made_for_your_town.webp",
    alt: "Handmade cut-paper collage illustration of lightweight app running smoothly on budget phones",
    titleEn: "Made for Your Town",
    titleHi: "आपके शहर के लिए खास बना",
    descEn:
      "A light app that runs smoothly on slow networks and budget phones, in your language.",
    descHi:
      "एक हल्का ऐप जो धीमे नेटवर्क और किफ़ायती स्मार्टफोन पर भी आपकी अपनी भाषा में सरलता से चलता है।",
  },
];

export default function WhyDusmint({ language = "en" }: WhyDusmintProps) {
  const isHi = language === "hi";

  return (
    <section id="why-dusmint" className={styles.section} aria-label="Why Dusmint">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {isHi ? (
              <>
                स्थानीय दुकानें। खरा तौल।
                <br />
                <span className={styles.titleAccent}>आपका समय।</span>
              </>
            ) : (
              <>
                Local shops. Honest weight.
                <br />
                <span className={styles.titleAccent}>Your time.</span>
              </>
            )}
          </h2>
          <p className={styles.subtitle}>
            {isHi
              ? "ताज़ा और खरा सामान, आपके अपने पड़ोस के तरीके से — सीधे आपके दरवाज़े तक।"
              : "Freshness, the neighbourhood way. Built around your lane, your favourite kirana, and your schedule."}
          </p>
        </div>

        {/* 2x2 Grid (Desktop) / 1-Column (Mobile) */}
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={1200}
                  height={900}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {isHi ? card.titleHi : card.titleEn}
                </h3>
                <p className={styles.cardDesc}>
                  {isHi ? card.descHi : card.descEn}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
