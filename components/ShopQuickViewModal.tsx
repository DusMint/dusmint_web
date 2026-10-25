"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  const [cart, setCart] = useState<{ [itemId: string]: number }>({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!shop) return null;

  const handleAddItem = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[itemId] > 1) {
        next[itemId] -= 1;
      } else {
        delete next[itemId];
      }
      return next;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = shop.featuredItems.find((i) => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Hero banner of the shop */}
        <div className={styles.storeHeader}>
          <div className={styles.storeImageWrapper}>
            <Image
              src={shop.image}
              alt={shop.name}
              width={600}
              height={220}
              className={styles.storeImg}
            />
            <div className={styles.deliveryPill}>
              ⚡ {shop.deliveryTime} {isHi ? "डिलीवरी" : "Doorstep Delivery"}
            </div>
          </div>

          <div className={styles.storeInfo}>
            <div className={styles.titleRow}>
              <h3 className={styles.storeName}>{shop.name}</h3>
              <div className={styles.ratingBadge}>
                ★ {shop.rating} ({shop.reviewsCount} {isHi ? "समीक्षाएँ" : "reviews"})
              </div>
            </div>
            <p className={styles.locationText}>📍 {shop.location} • {shop.distance}</p>
            <div className={styles.perks}>
              <span>✓ Verified Local Merchant</span>
              <span>✓ Live Inventory</span>
              <span>✓ Free delivery above ₹{shop.freeDeliveryThreshold}</span>
            </div>
          </div>
        </div>

        {/* Catalog list */}
        <div className={styles.catalogSection}>
          <h4 className={styles.catalogTitle}>
            {isHi ? "दुकान के लोकप्रिय सामान" : "Featured Store Inventory"}
          </h4>

          {orderPlaced ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>🎉</div>
              <h4>{isHi ? "ऑर्डर प्लेस हो गया!" : "Mock Order Placed!"}</h4>
              <p>
                {isHi
                  ? `आपका ₹${totalPrice} का ऑर्डर ${shop.name} को भेज दिया गया है। 15 मिनट में डिलीवरी पार्टनर आपके घर पहुंचेगा।`
                  : `Your ₹${totalPrice} order has been sent to ${shop.name}. Delivery rider will pick it up and reach your doorstep in ${shop.deliveryTime}.`}
              </p>
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => {
                  setOrderPlaced(false);
                  setCart({});
                  onClose();
                }}
              >
                {isHi ? "बंद करें" : "Back to Home"}
              </button>
            </div>
          ) : (
            <div className={styles.itemsList}>
              {shop.featuredItems.map((item) => {
                const qty = cart[item.id] || 0;

                return (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.itemMeta}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemWeight}>{item.weight}</span>
                      <div className={styles.priceRow}>
                        <span className={styles.price}>₹{item.price}</span>
                        <span className={styles.origPrice}>
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    </div>

                    <div className={styles.actionCol}>
                      {qty === 0 ? (
                        <button
                          type="button"
                          className={styles.addBtn}
                          onClick={() => handleAddItem(item.id)}
                        >
                          + {isHi ? "जोड़ें" : "ADD"}
                        </button>
                      ) : (
                        <div className={styles.qtyControl}>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            -
                          </button>
                          <span className={styles.qtyNum}>{qty}</span>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => handleAddItem(item.id)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Floating Cart bar at bottom if items added */}
        {totalItems > 0 && !orderPlaced && (
          <div className={styles.cartBar}>
            <div className={styles.cartInfo}>
              <span className={styles.cartCount}>
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
              <span className={styles.cartTotal}>₹{totalPrice}</span>
            </div>

            <button
              type="button"
              className={styles.checkoutBtn}
              onClick={() => setOrderPlaced(true)}
            >
              <span>{isHi ? "ऑर्डर प्लेस करें" : "Quick Checkout"}</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
