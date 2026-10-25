"use client";

import React, { useState } from "react";
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
            {isHi ? "व्हाट्सएप पर तुरंत चैट करें" : "Chat on WhatsApp • 2 min response"}
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
        <span className={styles.pulseRing}></span>
        {/* WhatsApp Icon */}
        <svg className={styles.waIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.968.545 1.933.882 2.791.882h.003c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.768-5.772-5.768zm3.377 8.217c-.144.405-.837.774-1.17.824-.312.045-.694.067-1.11-.067-.258-.083-.585-.205-1.025-.398-1.85-.81-3.056-2.697-3.149-2.82-.092-.123-.751-1.002-.751-1.911 0-.909.477-1.356.647-1.542.17-.186.372-.232.496-.232.124 0 .248.001.356.006.115.006.268-.043.419.321.155.372.531 1.298.577 1.392.046.093.078.202.016.326-.062.124-.093.202-.186.311-.093.109-.196.243-.28.326-.093.093-.19.195-.082.381.109.186.484.798 1.038 1.292.713.636 1.314.833 1.5.926.186.093.295.078.404-.047.109-.124.466-.543.59-.73.124-.186.248-.155.419-.093.17.062 1.086.512 1.272.605.186.093.31.14.356.217.046.078.046.45-.098.855zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.178L2 22l4.957-1.399C8.423 21.498 10.154 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </a>
    </div>
  );
}
