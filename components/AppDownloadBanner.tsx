"use client";

import React, { useState } from "react";
import Image from "next/image";
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
                href="https://play.google.com/store/apps/details?id=com.dusmint.customer&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBadgeLink}
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={175}
                  height={52}
                  className={styles.badgeImg}
                />
              </a>

              {/* Apple App Store Badge */}
              <a
                href="#ios-waitlist"
                className={styles.storeBadgeLink}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Dusmint iOS App is currently in TestFlight Beta. Enter your phone number above for early invite!");
                }}
                aria-label="Download on the App Store"
              >
                <Image
                  src="/images/app-store-badge.png"
                  alt="Download on the App Store"
                  width={156}
                  height={52}
                  className={styles.badgeImg}
                />
              </a>
            </div>
          </div>

          {/* Right Phone Mockup with Embedded QR Code */}
          <div className={styles.phoneCol}>
            <div className={styles.phoneMockupWrap}>
              <Image
                src="/images/phone_qr_mockup.png"
                alt="Scan QR code on Dusmint app preview to download"
                width={250}
                height={500}
                className={styles.phoneMockupImg}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
