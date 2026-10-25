"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconMapPin,
  IconChevronDown,
  IconLanguage,
  IconMenu2,
  IconX,
  IconDeviceMobile,
} from "@tabler/icons-react";
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
  const isHi = language === "hi";

  const handleDownloadClick = () => {
    const el = document.getElementById("download-app");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoGroup} aria-label="Dusmint Home">
          <div className={styles.logoMark}>
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
                stroke="#0A3622"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>
                dus<span className={styles.brandMint}>mint</span>
                <span className={styles.brandDomain}>.com</span>
              </span>
              <span className={styles.brandTagline}>
                {isHi ? "आपका पड़ोस, सीधे घर तक" : "Your Neighbourhood, Delivered."}
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={styles.navMenu}>
          <Link href="/" className={`${styles.navLink} ${styles.activeLink}`}>
            {isHi ? "होम" : "Home"}
          </Link>
          <a href="#shops" className={styles.navLink}>
            {isHi ? "दुकानें" : "Shops"}
          </a>
          <a href="#categories" className={styles.navLink}>
            {isHi ? "श्रेणियां" : "Categories"}
          </a>
          <Link href="/about" className={styles.navLink}>
            {isHi ? "हमारे बारे में" : "About"}
          </Link>
          <Link href="/faq" className={styles.navLink}>
            {isHi ? "सहायता" : "FAQs"}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          {/* Location Selector Button */}
          <button
            type="button"
            className={styles.locationBtn}
            onClick={onOpenLocationModal}
            title="Change Delivery Location"
          >
            <IconMapPin size={16} stroke={2} className={styles.locationIcon} />
            <span className={styles.locationText}>{currentLocation}</span>
            <IconChevronDown size={14} stroke={2} />
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            className={styles.langBtn}
            onClick={onToggleLanguage}
            title="Switch Language"
          >
            <IconLanguage size={16} stroke={1.8} />
            <span>{isHi ? "English" : "हिंदी"}</span>
          </button>

          {/* Nav bar buttons as specified in design.md line 604 & section 2.7 */}
          <button
            type="button"
            className={styles.vendorBtn}
            onClick={onOpenVendorModal}
          >
            {isHi ? "दुकान जोड़ें" : "Become a vendor"}
          </button>

          <button
            type="button"
            className={styles.getAppBtn}
            onClick={handleDownloadClick}
          >
            <IconDeviceMobile size={16} stroke={2} />
            <span>{isHi ? "ऐप पाएं" : "Get the app"}</span>
          </button>

          {/* Admin link */}
          <Link href="/admin" className={styles.adminLink} title="Operations Admin">
            Admin
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
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
              {isHi ? "होम" : "Home"}
            </Link>
            <a
              href="#shops"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "दुकानें" : "Shops"}
            </a>
            <a
              href="#categories"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "श्रेणियां" : "Categories"}
            </a>
            <Link
              href="/about"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "हमारे बारे में" : "About Us"}
            </Link>
            <Link
              href="/vendors"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "किराना पार्टनर्स" : "For Vendors"}
            </Link>
            <Link
              href="/faq"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "सहायता व अक्सर पूछे जाने वाले सवाल" : "FAQs & Support"}
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
              <IconMapPin size={16} stroke={2} />
              <span>{currentLocation} (Change)</span>
            </button>
            <button
              type="button"
              className={styles.mobileVendorBtn}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVendorModal();
              }}
            >
              {isHi ? "अपनी दुकान जोड़ें" : "Become a vendor"}
            </button>
            <button
              type="button"
              className={styles.mobileAppBtn}
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadClick();
              }}
            >
              <IconDeviceMobile size={16} stroke={2} />
              <span>{isHi ? "डसमिट ऐप डाउनलोड करें" : "Get the app"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
