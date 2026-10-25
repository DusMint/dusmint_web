import React from "react";
import styles from "@/components/InfoPage.module.css";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>LEGAL</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          Last updated: October 2026. How Dusmint Hyperlocal Technologies Pvt. Ltd. handles your data.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
          <p>
            When you register on Dusmint or place an order, we collect your phone number, delivery address, geolocation (for estimating store proximity and dispatching orders), and payment transaction IDs. We do not store full credit/debit card numbers.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>2. How Your Information is Used</h2>
          <ul className={styles.list}>
            <li>To dispatch delivery riders and navigate accurately to your doorstep.</li>
            <li>To transmit order manifests to the respective local merchant store.</li>
            <li>To send order updates and invoice receipts via SMS/WhatsApp.</li>
            <li>To prevent fraud and maintain platform safety.</li>
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>3. Contact & Grievance</h2>
          <p>
            For privacy inquiries, contact our Data Protection Officer at <strong>privacy@dusmint.com</strong> or Sector V, Salt Lake, Kolkata 700091.
          </p>
        </div>
      </div>
    </div>
  );
}
