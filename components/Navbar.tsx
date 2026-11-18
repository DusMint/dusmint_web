"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconBrandAndroid,
  IconBrandApple,
  IconChevronDown,
  IconArrowUpRight,
} from "@tabler/icons-react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenVendorModal: () => void;
  language?: "en" | "hi";
  onToggleLanguage?: () => void;
}

export default function Navbar({
  onOpenVendorModal,
  language = "en",
  onToggleLanguage,
}: NavbarProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const isHi = language === "hi";

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("download-app");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: smooth scroll to bottom or play store
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <header className={styles.stickyHeader}>
      <nav className={styles.pillContainer} aria-label="Main Navigation">
        {/* Desktop Navigation Links (Hidden completely on mobile) */}
        <div className={styles.desktopNav}>
          {/* About us with sleek dropdown */}
          <div
            className={styles.dropdownParent}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              className={styles.navItemBtn}
              onClick={() => setAboutOpen((prev) => !prev)}
              aria-expanded={aboutOpen}
            >
              <span>{isHi ? "हमारे बारे में" : "About us"}</span>
              <IconChevronDown
                size={14}
                className={`${styles.chevron} ${
                  aboutOpen ? styles.chevronRotated : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className={styles.dropdownMenu}>
                <Link
                  href="/about"
                  className={styles.dropdownLink}
                  onClick={() => setAboutOpen(false)}
                >
                  {isHi ? "डसमिट का परिचय" : "About DusMint"}
                </Link>
                <Link
                  href="/faq"
                  className={styles.dropdownLink}
                  onClick={() => setAboutOpen(false)}
                >
                  {isHi ? "सहायता व अक्सर पूछे जाने वाले सवाल" : "Help & FAQs"}
                </Link>
                <Link
                  href="/terms"
                  className={styles.dropdownLink}
                  onClick={() => setAboutOpen(false)}
                >
                  {isHi ? "नियम व गोपनीयता" : "Terms & Privacy"}
                </Link>
              </div>
            )}
          </div>

          <a href="#how-it-works" className={styles.navLink}>
            {isHi ? "यह कैसे काम करता है" : "How it works"}
          </a>

          <a href="#network" className={styles.navLink}>
            {isHi ? "दुकान नेटवर्क" : "Partner network"}
          </a>

          <a href="#why-dusmint" className={styles.navLink}>
            {isHi ? "डसमिट क्यों" : "Why Dusmint"}
          </a>

          {/* Become a Partner link with diagonal arrow */}
          <button
            type="button"
            className={styles.navItemBtn}
            onClick={onOpenVendorModal}
          >
            <span>{isHi ? "दुकान जोड़ें" : "Partner with us"}</span>
            <IconArrowUpRight size={14} className={styles.arrowIcon} />
          </button>
        </div>

        {/* 
          Get App Pill Action:
          On desktop: neatly placed on the right of the pill.
          On mobile: THE ENTIRE PILL SHRINKS TO ONLY THIS DOWNLOAD ELEMENT!
        */}
        <a
          href="#download-app"
          onClick={handleDownloadClick}
          className={styles.getAppPill}
          aria-label="Download DusMint App for Android & iOS"
        >
          <span className={styles.getAppText}>
            {isHi ? "ऐप पाएं:" : "Get app:"}
          </span>
          <div className={styles.storeIconsRow}>
            <IconBrandAndroid size={18} className={styles.osIcon} />
            <IconBrandApple size={18} className={styles.osIcon} />
          </div>
        </a>
      </nav>
    </header>
  );
}
