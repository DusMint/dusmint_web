import React from "react";
import styles from "@/components/InfoPage.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>OUR MISSION</span>
        <h1 className={styles.title}>About Dusmint</h1>
        <p className={styles.subtitle}>
          Connecting traditional Indian neighbourhood commerce with lightning-fast electric hyper-routing.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Why Dusmint was Founded</h2>
          <p>
            Quick commerce in India made delivery convenient, but it centralized power into anonymous warehouse dark stores—stocking produce days in advance and squeezing local shopkeepers out of business.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <strong>Dusmint is built on a different conviction:</strong> The best grocers, fishmongers, and greengrocers already exist on every Indian street. They know their customers, handpick fresh items from the morning mandi, and offer honest counter rates. Dusmint provides these local merchants with modern POS tools, catalog digitization, and on-demand electric delivery partners.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>The Kolkata Hyperlocal Promise</h2>
          <ul className={styles.list}>
            <li><strong>10 to 30 Minute Delivery:</strong> Dispatched from stores within 1.5 km of your address.</li>
            <li><strong>Zero Artificial Surge Markups:</strong> What the shopkeeper writes on the chalkboard is what you pay.</li>
            <li><strong>Zero Dark Stores:</strong> We hold 0 inventory. 100% of orders support local retail families.</li>
            <li><strong>Eco-Friendly Fleet:</strong> Delivered primarily on EV scooters and bicycles.</li>
          </ul>
        </div>

        <div className={styles.ctaBox}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Are you a local shopkeeper in Kolkata?</h3>
          <p style={{ maxWidth: 480, opacity: 0.9 }}>
            Join 450+ verified vendors in Salt Lake, New Town, and Ballygunge. 0% commission for your first month.
          </p>
          <Link href="/vendors" className={styles.ctaBtn}>
            Learn About Merchant Partnership →
          </Link>
        </div>
      </div>
    </div>
  );
}
