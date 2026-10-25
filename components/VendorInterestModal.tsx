"use client";

import React, { useState } from "react";
import {
  IconCheck,
  IconCircleCheck,
  IconX,
} from "@tabler/icons-react";
import styles from "./VendorInterestModal.module.css";

interface VendorInterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "hi";
}

export default function VendorInterestModal({
  isOpen,
  onClose,
  language,
}: VendorInterestModalProps) {
  const isHi = language === "hi";

  const [formData, setFormData] = useState({
    storeName: "",
    ownerName: "",
    phone: "",
    category: "groceries",
    area: "Salt Lake",
    pincode: "700091",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.storeName || !formData.ownerName || !formData.phone) {
      setError(isHi ? "कृपया सभी आवश्यक जानकारी भरें" : "Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      setError(isHi ? "कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें" : "Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <IconX size={18} />
        </button>

        {!isSubmitted ? (
          <>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {isHi ? "डसमिट से अपनी दुकान जोड़ें" : "List your shop on Dusmint"}
              </h3>
              <p className={styles.modalSub}>
                {isHi
                  ? "अपने इलाके के 5,000+ परिवारों को 15 मिनट में डिलीवरी शुरू करें। 30 दिनों के लिए 0% कमीशन।"
                  : "Deliver to 5,000+ nearby homes in 10-30 mins without hiring delivery staff. 0% commission for first 30 days."}
              </p>
            </div>

            {error && <div className={styles.errorAlert}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  {isHi ? "दुकान का नाम *" : "Shop name *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isHi ? "उदा. शर्मा किराना स्टोर" : "e.g. Sharma Kirana Store"}
                  value={formData.storeName}
                  onChange={(e) =>
                    setFormData({ ...formData, storeName: e.target.value })
                  }
                  className={styles.input}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    {isHi ? "मालिक का नाम *" : "Owner name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isHi ? "उदा. रमेश शर्मा" : "e.g. Ramesh Sharma"}
                    value={formData.ownerName}
                    onChange={(e) =>
                      setFormData({ ...formData, ownerName: e.target.value })
                    }
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    {isHi ? "व्हाट्सएप / मोबाइल *" : "WhatsApp mobile *"}
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    {isHi ? "दुकान की श्रेणी" : "Primary category"}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className={styles.select}
                  >
                    <option value="groceries">Groceries & Daily Staples</option>
                    <option value="vegetables">Fresh Fruits & Vegetables</option>
                    <option value="dairy">Dairy & Milk Products</option>
                    <option value="meat">Fresh Poultry & Meat</option>
                    <option value="seafood">Fresh Fish & Seafood</option>
                    <option value="bakery">Bakery & Breads</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    {isHi ? "इलाका" : "Location area"}
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) =>
                      setFormData({ ...formData, area: e.target.value })
                    }
                    className={styles.select}
                  >
                    <option value="Salt Lake">Salt Lake (Sector I - V)</option>
                    <option value="New Town">New Town & Rajarhat</option>
                    <option value="Ballygunge">Ballygunge & South Kolkata</option>
                    <option value="Park Street">Park Street & Central</option>
                    <option value="Howrah">Howrah Central</option>
                  </select>
                </div>
              </div>

              <div className={styles.guaranteeBox}>
                <div className={styles.guaranteeItem}>
                  <IconCheck size={14} stroke={2.5} />
                  <span>1-Day verification</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <IconCheck size={14} stroke={2.5} />
                  <span>Daily UPI payouts</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <IconCheck size={14} stroke={2.5} />
                  <span>Free store POS app</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading
                  ? (isHi ? "प्रक्रिया जारी है..." : "Submitting details...")
                  : (isHi ? "पार्टनरशिप आवेदन भेजें" : "Submit partner application")}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <IconCircleCheck size={54} stroke={1.8} className={styles.successIcon} />
            <h3 className={styles.successTitle}>
              {isHi ? "आवेदन प्राप्त हुआ!" : "Application received"}
            </h3>
            <p className={styles.successText}>
              {isHi
                ? `धन्यवाद! डसमिट पार्टनर टीम जल्द ही ${formData.phone} पर संपर्क करेगी और आपकी दुकान को 24 घंटे में लाइव करेगी।`
                : `Thank you, ${formData.ownerName}. Our onboarding team will contact you on WhatsApp (${formData.phone}) within 24 hours to set up your store.`}
            </p>
            <div className={styles.successNote}>
              Registered: <strong>{formData.storeName}</strong> ({formData.area})
            </div>
            <button
              type="button"
              className={styles.doneBtn}
              onClick={handleReset}
            >
              {isHi ? "ठीक है" : "Done"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
