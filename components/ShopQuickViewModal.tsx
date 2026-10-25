"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconBolt,
  IconStarFilled,
  IconMapPin,
  IconCheck,
  IconCircleCheck,
  IconX,
  IconPlus,
  IconMinus,
  IconArrowRight,
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
          <IconX size={18} />
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
              <IconBolt size={14} stroke={2.2} />
              <span>{shop.deliveryTime} {isHi ? "डिलीवरी" : "delivery"}</span>
            </div>
          </div>

          <div className={styles.storeInfo}>
            <div className={styles.titleRow}>
              <h3 className={styles.storeName}>{shop.name}</h3>
              <div className={styles.ratingBadge}>
                <IconStarFilled size={13} className={styles.starIcon} />
                <span>{shop.rating} ({shop.reviewsCount})</span>
              </div>
            </div>
            <p className={styles.locationText}>
              <IconMapPin size={15} stroke={1.8} className={styles.pinIcon} />
              <span>{shop.location} • {shop.distance}</span>
            </p>
            <div className={styles.perks}>
              <span>
                <IconCheck size={14} stroke={2.5} /> Verified local merchant
              </span>
              <span>
                <IconCheck size={14} stroke={2.5} /> Live inventory
              </span>
              <span>
                <IconCheck size={14} stroke={2.5} /> Free delivery above ₹{shop.freeDeliveryThreshold}
              </span>
            </div>
          </div>
        </div>

        {/* Catalog list */}
        <div className={styles.catalogSection}>
          <h4 className={styles.catalogTitle}>
            {isHi ? "दुकान के सामान" : "Store inventory"}
          </h4>

          {orderPlaced ? (
            <div className={styles.successBox}>
              <IconCircleCheck size={52} stroke={1.8} className={styles.successCheckIcon} />
              <h4 className={styles.successTitle}>
                {isHi ? "ऑर्डर प्लेस हो गया!" : "Order placed successfully"}
              </h4>
              <p className={styles.successDesc}>
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
                {isHi ? "बंद करें" : "Back to home"}
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
                        /* design.md 602: Add to cart is btn-yellow with 1px border */
                        <button
                          type="button"
                          className={styles.addBtn}
                          onClick={() => handleAddItem(item.id)}
                        >
                          <IconPlus size={14} stroke={2.5} />
                          <span>{isHi ? "जोड़ें" : "Add"}</span>
                        </button>
                      ) : (
                        <div className={styles.qtyControl}>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => handleRemoveItem(item.id)}
                            aria-label="Decrease quantity"
                          >
                            <IconMinus size={14} stroke={2.5} />
                          </button>
                          <span className={styles.qtyNum}>{qty}</span>
                          <button
                            type="button"
                            className={styles.qtyBtn}
                            onClick={() => handleAddItem(item.id)}
                            aria-label="Increase quantity"
                          >
                            <IconPlus size={14} stroke={2.5} />
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

        {/* Floating Cart bar at bottom: design.md 603 Buy now is btn-green */}
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
              <span>{isHi ? "ऑर्डर प्लेस करें" : "Place order"}</span>
              <IconArrowRight size={18} stroke={2} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
