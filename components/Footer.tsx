"use client";

import React from "react";
import Link from "next/link";
import {
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";
import styles from "./Footer.module.css";

interface FooterProps {
  language: "en" | "hi";
  onOpenVendorModal: () => void;
}

export default function Footer({ language, onOpenVendorModal }: FooterProps) {
  const isHi = language === "hi";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <span className={styles.brandTitle}>
                dus<span className={styles.brandMint}>mint</span>
                <span className={styles.brandDomain}>.com</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              {isHi
                ? "आपकी भरोसेमंद पड़ोस की किराना, फल, सब्ज़ी, डेयरी और मीट की दुकानें अब आपके दरवाज़े पर—सिर्फ 10-30 मिनट में।"
                : "Your trusted neighbourhood kirana, produce, dairy, meat and daily staples delivered to your doorstep in 10-30 minutes."}
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <IconMapPin size={16} stroke={1.8} className={styles.contactIcon} />
                <span>Sector V, Salt Lake, Kolkata 700091</span>
              </div>
              <div className={styles.contactItem}>
                <IconPhone size={16} stroke={1.8} className={styles.contactIcon} />
                <span>+91 98765 43210</span>
              </div>
              <div className={styles.contactItem}>
                <IconMail size={16} stroke={1.8} className={styles.contactIcon} />
                <span>support@dusmint.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>
              {isHi ? "त्वरित लिंक" : "Explore"}
            </h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">{isHi ? "मुख्य पृष्ठ" : "Home"}</Link>
              </li>
              <li>
                <a href="#shops">{isHi ? "दुकानें" : "Popular shops"}</a>
              </li>
              <li>
                <a href="#categories">{isHi ? "श्रेणियां" : "Categories"}</a>
              </li>
              <li>
                <Link href="/about">{isHi ? "डसमिट के बारे में" : "About us"}</Link>
              </li>
              <li>
                <Link href="/faq">{isHi ? "अक्सर पूछे जाने वाले सवाल" : "FAQs"}</Link>
              </li>
            </ul>
          </div>

          {/* For Merchants */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>
              {isHi ? "दुकानदारों के लिए" : "For merchants"}
            </h4>
            <ul className={styles.linkList}>
              <li>
                <button
                  type="button"
                  className={styles.textBtn}
                  onClick={onOpenVendorModal}
                >
                  {isHi ? "दुकान रजिस्टर करें" : "Register your kirana"}
                </button>
              </li>
              <li>
                <Link href="/vendors">
                  {isHi ? "पार्टनर पोर्टल" : "Merchant guide & benefits"}
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  {isHi ? "ऑपरेशंस एडमिन" : "Admin operations"}
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dusmint.partner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isHi ? "पार्टनर एंड्रॉइड ऐप" : "Partner POS app"}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>
              {isHi ? "कानूनी नियम" : "Legal & trust"}
            </h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacy">{isHi ? "गोपनीयता नीति" : "Privacy policy"}</Link>
              </li>
              <li>
                <Link href="/terms">{isHi ? "नियम और शर्तें" : "Terms of service"}</Link>
              </li>
              <li>
                <span className={styles.fssaiBadge}>FSSAI Lic: 12824001000456</span>
              </li>
              <li>
                <span className={styles.fssaiBadge}>100% Indian Hyperlocal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 Dusmint Hyperlocal Technologies Pvt. Ltd. All rights reserved. Kolkata, West Bengal.
          </p>
          <div className={styles.socialRow}>
            <span>Twitter / X</span> • <span>Instagram</span> • <span>LinkedIn</span> • <span>WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
