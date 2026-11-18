"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconChevronDown,
  IconArrowUpRight,
  IconMenu2,
  IconX,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHi = language === "hi";

  return (
    <>
      <header className={styles.stickyHeader}>
        {/* Brand Logo - Top Left Corner (Desktop & Mobile) */}
        <Link href="/" className={styles.headerLogo} aria-label="DusMint Home">
          <svg
            className={styles.headerLeafIcon}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3C16 3 7 8 7 17C7 22.5 11 27 16 29C21 27 25 22.5 25 17C25 8 16 3 16 3Z"
              fill="#22C55E"
            />
            <path
              d="M16 11V22M16 15L12 13M16 18L13 19M16 17L19 16"
              stroke="#0A3622"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.headerBrandTitle}>
            dus<span className={styles.brandMint}>mint</span>
          </span>
        </Link>

        {/* Desktop Navigation Links Pill (Hidden on Mobile) */}
        <nav className={styles.pillContainer} aria-label="Main Navigation">
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
        </nav>

        {/* Mobile Hamburger Toggle Button (Right corner on mobile) */}
        <button
          type="button"
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </header>

      {/* Slide-Down Mobile Header Menu from Above */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenuDrawer}>
          <nav className={styles.mobileNavLinks} aria-label="Mobile Navigation">
            <Link
              href="/about"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "हमारे बारे में" : "About us"}
            </Link>
            <a
              href="#how-it-works"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "यह कैसे काम करता है" : "How it works"}
            </a>
            <a
              href="#network"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "दुकान नेटवर्क" : "Partner network"}
            </a>
            <a
              href="#why-dusmint"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHi ? "डसमिट क्यों" : "Why Dusmint"}
            </a>
            <button
              type="button"
              className={styles.mobilePartnerBtn}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVendorModal();
              }}
            >
              <span>{isHi ? "दुकान जोड़ें" : "Partner with us"}</span>
              <IconArrowUpRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
