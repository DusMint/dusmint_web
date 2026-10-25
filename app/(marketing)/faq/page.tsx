import React from "react";
import styles from "@/components/InfoPage.module.css";

export default function FAQPage() {
  const faqs = [
    {
      q: "How fast will my order arrive?",
      a: "Because Dusmint connects you to neighbourhood shops located within 500 meters to 1.5 km of your address, orders typically reach your doorstep in 10 to 30 minutes.",
    },
    {
      q: "Are the prices on Dusmint higher than what the store charges in person?",
      a: "No. We strictly mandate honest counter rates. The prices you see on Dusmint are the same honest MRP and shop rates as shopping in person.",
    },
    {
      q: "Who packs my grocery bag?",
      a: "Your trusted neighbourhood shopkeeper packs your order personally, ensuring quality inspection of every egg, apple, or dairy pack.",
    },
    {
      q: "What payment methods are supported?",
      a: "We support UPI (GPay, PhonePe, Paytm), Credit & Debit cards, Netbanking, and Cash / UPI on Delivery (COD).",
    },
    {
      q: "How can I track my delivery rider?",
      a: "Once your order is picked up from the shop, you receive a live GPS link showing the delivery partner's real-time position right until they ring your bell.",
    },
    {
      q: "How do I list my shop on Dusmint?",
      a: "Simply click 'Become a vendor' in the menu or visit our Vendors page. Our Kolkata merchant team will verify your store and get you online within 24 hours.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Frequently asked questions</h1>
        <p className={styles.subtitle}>
          Everything you need to know about ordering, delivery speeds, pricing, and merchant partnerships on Dusmint.
        </p>
      </div>

      <div className={styles.content}>
        {faqs.map((item, idx) => (
          <div key={idx} className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
