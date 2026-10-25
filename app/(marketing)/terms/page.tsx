import React from "react";
import styles from "@/components/InfoPage.module.css";

export default function TermsOfServicePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>LEGAL</span>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.subtitle}>
          Standard conditions governing customer orders, delivery timeframes, and merchant relations.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>1. Platform Role</h2>
          <p>
            Dusmint acts as a technology intermediary connecting customers with independent neighbourhood retail merchants and on-demand delivery logistics partners. All products sold are sourced directly from registered local stores.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>2. Pricing & Delivery Times</h2>
          <p>
            Delivery time estimates (typically 10 to 30 minutes) are calculated based on real-time road conditions, merchant preparation speed, and delivery partner availability. Delivery time estimates are indicative and may vary slightly during extreme monsoon rains or festival rush.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>3. Quality Inspection & Replacements</h2>
          <p>
            If any perishable produce (fruits, vegetables, milk, meat, seafood) does not meet freshness standards upon delivery, notify our customer concierge within 2 hours for instant refund or merchant replacement.
          </p>
        </div>
      </div>
    </div>
  );
}
