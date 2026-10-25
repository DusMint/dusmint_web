"use client";

import React, { useState } from "react";
import {
  IconSearch,
  IconMapPin,
  IconBolt,
  IconCheck,
  IconX,
  IconBuildingStore,
} from "@tabler/icons-react";
import styles from "./LocationModal.module.css";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: string;
  onSelectLocation: (loc: string) => void;
  language: "en" | "hi";
}

const KOLKATA_AREAS = [
  { name: "Salt Lake (Sector I - V)", tag: "10-15 min delivery", popular: true },
  { name: "New Town & Action Area", tag: "10-15 min delivery", popular: true },
  { name: "Ballygunge & Gariahat", tag: "15-20 min delivery", popular: true },
  { name: "Park Street & Central", tag: "15-20 min delivery", popular: false },
  { name: "Jadavpur & Dhakuria", tag: "15-25 min delivery", popular: false },
  { name: "Dum Dum & Lake Town", tag: "15-20 min delivery", popular: false },
  { name: "Behala & Alipore", tag: "20-30 min delivery", popular: false },
  { name: "Howrah Railway Hub", tag: "20-30 min delivery", popular: false },
];

export default function LocationModal({
  isOpen,
  onClose,
  currentLocation,
  onSelectLocation,
  language,
}: LocationModalProps) {
  const isHi = language === "hi";
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filtered = KOLKATA_AREAS.filter((area) =>
    area.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>
              {isHi ? "डिलीवरी स्थान चुनें" : "Select delivery location"}
            </h3>
            <p className={styles.subtitle}>
              {isHi
                ? "हम आपके इलाके की नजदीकी दुकानों से सामान पहुंचाते हैं"
                : "Choose your neighbourhood to see shops with 10-30 min delivery"}
            </p>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <IconX size={18} />
          </button>
        </div>

        {/* Search */}
        <div className={styles.searchWrap}>
          <IconSearch size={18} stroke={1.8} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder={isHi ? "इलाका या पिनकोड खोजें..." : "Search neighbourhood or pincode..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        </div>

        {/* Location List */}
        <div className={styles.list}>
          {filtered.map((area) => {
            const isSelected = currentLocation.includes(area.name.split(" ")[0]);

            return (
              <button
                key={area.name}
                type="button"
                className={`${styles.itemBtn} ${isSelected ? styles.itemSelected : ""}`}
                onClick={() => {
                  onSelectLocation(area.name);
                  onClose();
                }}
              >
                <div className={styles.itemLeft}>
                  <IconMapPin size={18} stroke={1.8} className={styles.pinIcon} />
                  <div className={styles.itemText}>
                    <span className={styles.itemName}>{area.name}</span>
                    <span className={styles.itemTag}>
                      <IconBolt size={12} stroke={2.5} />
                      {area.tag}
                    </span>
                  </div>
                </div>

                <div className={styles.itemRight}>
                  {isSelected && <IconCheck size={16} stroke={3} className={styles.checkmark} />}
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.footerNote}>
          <IconBuildingStore size={16} stroke={1.8} className={styles.footerIcon} />
          <span>Active clusters: Salt Lake, New Town, Central & South Kolkata.</span>
        </div>
      </div>
    </div>
  );
}
