"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  currentLocation: string;
  onOpenLocationModal: () => void;
  onOpenVendorModal: () => void;
  language: "en" | "hi";
  onToggleLanguage: () => void;
}

export default function Navbar({
  currentLocation,
  onOpenLocationModal,
  onOpenVendorModal,
  language,
  onToggleLanguage,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoGroup}>
          <div className={styles.logoMark}>
            {/* Mint leaves SVG motif */}
            <svg
              className={styles.leafIcon}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C16 4 9 9 9 17C9 21.4183 12.134 25 16 25C19.866 25 23 21.4183 23 17C23 9 16 4 16 4Z"
                fill="#22C55E"
              />
              <path
                d="M23 11C23 11 27 14 27 19C27 21.7614 25.2091 24 23 24C20.7909 24 19 21.7614 19 19C19 14 23 11 23 11Z"
                fill="#84CC16"
              />
              <path
                d="M16 11V22M16 15L12 13M16 18L13 19M16 17L19 16"
                stroke="#0F5132"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>
                dus<span className={styles.brandMint}>mint</span>
                <span className={styles.brandDomain}>.com</span>
              </span>
              <span className={styles.brandTagline}>Your Neighbourhood, Delivered.</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={styles.navMenu}>
          <Link href="/" className={`${styles.navLink} ${styles.activeLink}`}>
            {language === "en" ? "Home" : "होम"}
          </Link>
          <a href="#shops" className={styles.navLink}>
            {language === "en" ? "Shops" : "दुकानें"}
          </a>
          <a href="#categories" className={styles.navLink}>
            {language === "en" ? "Categories" : "श्रेणियां"}
          </a>
          <a href="#offers" className={styles.navLink}>
            {language === "en" ? "Offers" : "ऑफ़र्स"}
          </a>
          <Link href="/about" className={styles.navLink}>
            {language === "en" ? "About" : "हमारे बारे में"}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          {/* Location Selector */}
          <button
            type="button"
            className={styles.locationBtn}
            onClick={onOpenLocationModal}
            title="Change Delivery Location"
          >
            <span className={styles.locationPin}>📍</span>
            <span className={styles.locationText}>{currentLocation}</span>
            <span className={styles.chevron}>▾</span>
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            className={styles.langBtn}
            onClick={onToggleLanguage}
            title="Switch Language"
          >
            {language === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
          </button>

          {/* Merchant Join Button */}
          <button
            type="button"
            className={styles.partnerBtn}
            onClick={onOpenVendorModal}
          >
            {language === "en" ? "Partner with Us" : "दुकान जोड़ें"}
          </button>

          {/* Admin link */}
          <Link href="/admin" className={styles.adminLink} title="Admin Portal">
            Admin
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavLinks}>
            <Link
              href="/"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "en" ? "Home" : "होम"}
            </Link>
            <a
              href="#shops"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "en" ? "Popular Shops" : "लोकप्रिय दुकानें"}
            </a>
            <a
              href="#categories"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "en" ? "Categories" : "श्रेणियां"}
            </a>
            <Link
              href="/about"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "en" ? "About Us" : "हमारे बारे में"}
            </Link>
            <Link
              href="/vendors"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "en" ? "For Kirana Stores" : "किराना पार्टनर्स"}
            </Link>
            <Link
              href="/faq"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "en" ? "FAQs & Support" : "सहायता"}
            </Link>
            <Link
              href="/admin"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Operations Admin
            </Link>
          </div>

          <div className={styles.mobileDrawerFooter}>
            <button
              type="button"
              className={styles.mobileLocationBtn}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocationModal();
              }}
            >
              📍 {currentLocation} (Change)
            </button>
            <button
              type="button"
              className={styles.mobilePartnerBtn}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVendorModal();
              }}
            >
              {language === "en" ? "Register Your Store" : "अपनी दुकान जोड़ें"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
