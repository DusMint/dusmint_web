"use client";

import React, { useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import styles from "./AppDownloadBanner.module.css";

interface AppDownloadBannerProps {
  language: "en" | "hi";
}

export default function AppDownloadBanner({ language }: AppDownloadBannerProps) {
  const isHi = language === "hi";
  const [phoneNumber, setPhoneNumber] = useState("");
  const [smsSent, setSmsSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setSmsSent(true);
    }
  };

  return (
    <section id="download-app" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.contentCol}>
            <h2 className={styles.title}>
              {isHi ? (
                <>
                  डसमिट ऐप से किराना मंगवाएं, <br />
                  <span className={styles.yellowText}>और पाएं ₹100 की पहली छूट।</span>
                </>
              ) : (
                <>
                  Order faster with the Dusmint app, <br />
                  <span className={styles.yellowText}>get ₹100 off your first delivery.</span>
                </>
              )}
            </h2>

            <p className={styles.desc}>
              {isHi
                ? "लाइव डिलीवरी पार्टनर लोकेशन, त्वरित रिपीट ऑर्डर्स और आपके पड़ोस के किराना स्टोर की विशेष छूट का लाभ उठाएं।"
                : "Real-time rider tracking, instant 1-tap reordering from your favorite neighbourhood kirana, and exclusive daily deals."}
            </p>

            {/* SMS Link Input */}
            {!smsSent ? (
              <form onSubmit={handleSendLink} className={styles.smsForm}>
                <div className={styles.inputWrap}>
                  <span className={styles.countryCode}>+91</span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Enter 10-digit mobile"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                    className={styles.smsInput}
                  />
                </div>
                <button type="submit" className={styles.sendBtn}>
                  {isHi ? "ऐप लिंक भेजें" : "Get app link"}
                </button>
              </form>
            ) : (
              <div className={styles.smsSentSuccess}>
                <IconCheck size={18} stroke={3} />
                <span>
                  {isHi
                    ? `ऐप डाउनलोड लिंक ${phoneNumber} पर भेज दिया गया है!`
                    : `App download link sent to +91 ${phoneNumber}!`}
                </span>
              </div>
            )}

            {/* Store Badges */}
            <div className={styles.badgesRow}>
              {/* Google Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.dusmint.customer"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBadge}
              >
                <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a2.222 2.222 0 0 1-.22-.969V2.783c0-.361.08-.696.22-.969zM15.207 13.414l2.586 2.586-11.83 6.83 9.244-9.416zm0-2.828L5.963 1.17l11.83 6.83-2.586 2.586zm1.414 1.414l3.536 2.042c.815.47.815 1.238 0 1.708l-3.536 2.042-2.121-2.121 2.121-2.121z" />
                </svg>
                <div className={styles.badgeText}>
                  <span className={styles.badgeSmall}>GET IT ON</span>
                  <span className={styles.badgeBold}>Google Play</span>
                </div>
              </a>

              {/* Apple App Store Badge */}
              <a
                href="#ios-waitlist"
                className={styles.storeBadge}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Dusmint iOS App is currently in TestFlight Beta. Enter your phone number above for early invite!");
                }}
              >
                <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.6.69-1.12 1.83-.98 2.94 1.07.08 2.13-.46 2.79-1.28z" />
                </svg>
                <div className={styles.badgeText}>
                  <span className={styles.badgeSmall}>Download on the</span>
                  <span className={styles.badgeBold}>App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right QR Code Box */}
          <div className={styles.qrCol}>
            <div className={styles.qrBox}>
              <svg className={styles.qrCode} viewBox="0 0 100 100" fill="currentColor">
                <rect x="10" y="10" width="25" height="25" rx="3" fill="#0A3622" />
                <rect x="15" y="15" width="15" height="15" fill="#ffffff" />
                <rect x="18" y="18" width="9" height="9" fill="#0A3622" />
                
                <rect x="65" y="10" width="25" height="25" rx="3" fill="#0A3622" />
                <rect x="70" y="15" width="15" height="15" fill="#ffffff" />
                <rect x="73" y="18" width="9" height="9" fill="#0A3622" />
                
                <rect x="10" y="65" width="25" height="25" rx="3" fill="#0A3622" />
                <rect x="15" y="70" width="15" height="15" fill="#ffffff" />
                <rect x="18" y="73" width="9" height="9" fill="#0A3622" />

                <rect x="42" y="12" width="6" height="6" fill="#0A3622" />
                <rect x="52" y="18" width="6" height="6" fill="#0A3622" />
                <rect x="42" y="28" width="6" height="6" fill="#0A3622" />
                <rect x="12" y="45" width="6" height="6" fill="#0A3622" />
                <rect x="24" y="50" width="6" height="6" fill="#0A3622" />
                <rect x="45" y="45" width="10" height="10" rx="2" fill="#FFC82E" />
                <rect x="65" y="45" width="6" height="6" fill="#0A3622" />
                <rect x="78" y="52" width="8" height="6" fill="#0A3622" />
                <rect x="45" y="65" width="6" height="8" fill="#0A3622" />
                <rect x="60" y="70" width="8" height="8" fill="#0A3622" />
                <rect x="75" y="65" width="12" height="12" rx="2" fill="#0A3622" />
                <rect x="80" y="85" width="8" height="6" fill="#0A3622" />
              </svg>
              <span className={styles.qrLabel}>
                {isHi ? "स्कैन करके डाउनलोड करें" : "Scan to download"}
              </span>
              <span className={styles.qrSub}>Android & iOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
