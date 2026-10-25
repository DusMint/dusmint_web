"use client";

import React, { useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import styles from "./WhatsAppButton.module.css";

interface WhatsAppButtonProps {
  language: "en" | "hi";
}

export default function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const isHi = language === "hi";
  const [showTooltip, setShowTooltip] = useState(false);

  const phone = "919876543210";
  const text = encodeURIComponent(
    isHi
      ? "नमस्ते डसमिट! मुझे ऑर्डर और डिलीवरी के बारे में सहायता चाहिए।"
      : "Hello Dusmint! I would like help with ordering / store partnership."
  );

  return (
    <div className={styles.wrapper}>
      {showTooltip && (
        <div className={styles.tooltip}>
          <span className={styles.tooltipTitle}>
            {isHi ? "डसमिट सहायता टीम" : "Dusmint Concierge"}
          </span>
          <span className={styles.tooltipSub}>
            {isHi ? "व्हाट्सएप पर सहायता पाएं" : "Chat on WhatsApp (2 min reply)"}
          </span>
        </div>
      )}

      <a
        href={`https://wa.me/${phone}?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waButton}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat with Dusmint Support on WhatsApp"
      >
        <IconBrandWhatsapp size={30} stroke={2} />
      </a>
    </div>
  );
}
