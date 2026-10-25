"use client";

import React from "react";
import Image from "next/image";
import {
  IconBolt,
  IconStarFilled,
  IconMapPin,
  IconCheck,
  IconX,
  IconDeviceMobile,
  IconBuildingStore,
} from "@tabler/icons-react";
import { Shop } from "./PopularShopsSection";
import styles from "./ShopQuickViewModal.module.css";

interface ShopQuickViewModalProps {
  shop: Shop | null;
  onClose: () => void;
  language: "en" | "hi";
}

export default function ShopQuickViewModal({
  shop,
  onClose,
  language,
}: ShopQuickViewModalProps) {
  const isHi = language === "hi";

  if (!shop) return null;

  const handleDownloadRedirect = () => {
    onClose();
    const el = document.getElementById("download-app");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <IconX size={20} />
        </button>

        {/* Header Hero Area */}
        <div className={styles.heroBox}>
          <div className={styles.imageWrap}>
            <Image
              src={shop.image}
              alt={shop.name}
              width={640}
              height={240}
              className={styles.heroImg}
            />
          </div>

          <div className={styles.shopMetaHeader}>
            <div className={styles.storeTag}>
              <IconBuildingStore size={16} />
              <span>{shop.categoryName}</span>
            </div>

            <h2 className={styles.shopTitle}>{shop.name}</h2>

            <div className={styles.quickInfoRow}>
              <div className={styles.locationItem}>
                <IconMapPin size={16} stroke={2} className={styles.iconPin} />
                <span>{shop.location}</span>
              </div>

              <div className={styles.pillDivider}>•</div>

              <div className={styles.ratingBadge}>
                <IconStarFilled size={14} className={styles.starIcon} />
                <span className={styles.ratingNum}>{shop.rating}</span>
                <span className={styles.reviewsText}>({shop.reviewsCount} reviews)</span>
              </div>

              <div className={styles.pillDivider}>•</div>

              <div className={styles.deliveryBadge}>
                <IconBolt size={15} stroke={2} className={styles.boltIcon} />
                <span>{shop.deliveryTime} delivery</span>
              </div>
            </div>

            <p className={styles.merchantStory}>{shop.merchantStory}</p>
          </div>
        </div>

        {/* Partner Catalog Showcase */}
        <div className={styles.catalogSection}>
          <div className={styles.catalogHeader}>
            <h3 className={styles.catalogTitle}>
              {isHi ? "स्टोर कैटलॉग नमूना" : "Live digitized catalog samples"}
            </h3>
            <span className={styles.verifiedMrpTag}>
              <IconCheck size={14} stroke={2.5} />
              {isHi ? "असली प्रिंटेड एमआरपी" : "Zero surge markups"}
            </span>
          </div>

          <div className={styles.itemsGrid}>
            {shop.featuredItems.map((item) => (
              <div key={item.id} className={styles.itemRow}>
                <div className={styles.itemMeta}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemWeight}>{item.weight}</span>
                </div>
                <div className={styles.priceCol}>
                  <span className={styles.price}>₹{item.price}</span>
                  <span className={styles.origPrice}>₹{item.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Call to Action Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomInfo}>
            <span className={styles.bottomTitle}>
              {isHi ? "इस दुकान से ऑर्डर करने के लिए" : "Available on Dusmint Customer App"}
            </span>
            <span className={styles.bottomSub}>
              {isHi
                ? "लाइव डिलीवरी ट्रैकिंग और दैनिक छूट का आनंद लें"
                : "Real-time GPS rider tracking, direct store chat & 10–30 min delivery"}
            </span>
          </div>

          <button
            type="button"
            className={styles.getAppActionBtn}
            onClick={handleDownloadRedirect}
          >
            <IconDeviceMobile size={18} stroke={2.2} />
            <span>{isHi ? "ऐप पर ऑर्डर करें" : "Order on Dusmint app"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
