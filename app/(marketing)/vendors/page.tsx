import React from "react";
import styles from "@/components/InfoPage.module.css";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function VendorsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Grow your local store with Dusmint</h1>
        <p className={styles.subtitle}>
          Turn your local kirana or boutique grocery into a digital quick-delivery powerhouse with zero setup headache.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>What Dusmint delivers for kirana owners</h2>
          <ul className={styles.list}>
            <li><strong>5,000+ new households in your zone:</strong> Reach families who prefer ordering on mobile apps without losing your loyal walk-in foot traffic.</li>
            <li><strong>Dedicated electric delivery fleet:</strong> You pack the brown bag when the app rings; our rider picks it up within 4 minutes.</li>
            <li><strong>Daily UPI direct settlement:</strong> Funds are settled straight to your bank account or QR UPI every evening with 0 hidden deductions.</li>
            <li><strong>Free Android store POS app:</strong> Update item prices, mark items out-of-stock, and manage bills in Bengali, Hindi, or English.</li>
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Simple onboarding checklist</h2>
          <ul className={styles.list}>
            <li>1. Basic shop details & photo of the storefront</li>
            <li>2. Aadhaar / PAN card of shop owner</li>
            <li>3. Trade license or GST certificate (if applicable)</li>
            <li>4. FSSAI registration (for food, dairy & meat stores)</li>
            <li>5. Bank account passbook / cancelled cheque for payouts</li>
          </ul>
        </div>

        <div className={styles.ctaBox}>
          <h3>Ready to onboard your store today?</h3>
          <p>
            Our Kolkata onboarding executive will visit your shop to set up your digital inventory.
          </p>
          <Link href="/?action=join-vendor" className={styles.ctaBtn}>
            <span>Apply for vendor onboarding</span>
            <IconArrowRight size={18} stroke={2} style={{ marginLeft: "8px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
