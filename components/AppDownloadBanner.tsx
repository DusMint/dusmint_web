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
                  डसमिट ऐप से ऑर्डर करें, <br />
                  <span className={styles.yellowText}>पहली डिलीवरी पर ₹100 की छूट।</span>
                </>
              ) : (
                <>
                  Order on the Dusmint app, <br />
                  <span className={styles.yellowText}>get ₹100 off your first delivery.</span>
                </>
              )}
            </h2>

            <p className={styles.desc}>
              {isHi
                ? "स्थानीय दुकानें, खरा तौल और ऐप पर एक्सक्लूसिव बचत — सीधे आपके दरवाज़े तक।"
                : "Your favourite neighbourhood shops, honest weights, and exclusive app savings."}
            </p>

            {/* Unified Sleek SMS Capsule Form */}
            {!smsSent ? (
              <form onSubmit={handleSendLink} className={styles.smsForm}>
                <span className={styles.countryCode}>+91</span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder={isHi ? "मोबाइल नंबर दर्ज करें" : "Enter mobile number"}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                  className={styles.smsInput}
                />
                <button type="submit" className={styles.sendBtn}>
                  {isHi ? "लिंक भेजें" : "Get link"}
                </button>
              </form>
            ) : (
              <div className={styles.smsSentSuccess}>
                <IconCheck size={18} stroke={3} />
                <span>
                  {isHi
                    ? `ऐप डाउनलोड लिंक +91 ${phoneNumber} पर भेज दिया गया!`
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
                width={310}
                height={605}
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
