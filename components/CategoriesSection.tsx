"use client";

import React from "react";
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";
import styles from "./CategoriesSection.module.css";

interface CategoryItem {
  id: string;
  nameEn: string;
  nameHi: string;
  image: string;
  itemCount: string;
  descEn: string;
  descHi: string;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "groceries",
    nameEn: "Kirana & Staples",
    nameHi: "किराना और राशन",
    image: "/images/cat_groceries.jpg",
    itemCount: "420+ items",
    descEn: "Atta, rice, dals, oils & spices",
    descHi: "आटा, दाल, चावल और मसाले",
  },
  {
    id: "vegetables",
    nameEn: "Morning Mandi",
    nameHi: "मंडी की सब्जियां",
    image: "/images/cat_vegetables.jpg",
    itemCount: "85+ items",
    descEn: "Dawn-picked fresh greens & roots",
    descHi: "सुबह की ताज़ी हरी सब्जियां",
  },
  {
    id: "fruits",
    nameEn: "Fresh Fruits",
    nameHi: "ताज़े फल",
    image: "/images/cat_fruits.jpg",
    itemCount: "60+ items",
    descEn: "Hand-sorted seasonal fruits",
    descHi: "हाथ से चुने मौसमी फल",
  },
  {
    id: "dairy",
    nameEn: "Dairy & Milk",
    nameHi: "डेयरी और दूध",
    image: "/images/cat_dairy.jpg",
    itemCount: "110+ items",
    descEn: "Fresh milk, paneer & butter",
    descHi: "दूध, ताज़ा पनीर और मक्खन",
  },
  {
    id: "meat",
    nameEn: "Poultry & Meat",
    nameHi: "चिकन और मीट",
    image: "/images/cat_meat.jpg",
    itemCount: "45+ items",
    descEn: "Fresh hygienic cuts & eggs",
    descHi: "ताज़ा चिकन और अंडे",
  },
  {
    id: "seafood",
    nameEn: "Local Fish Catch",
    nameHi: "मछली और झींगा",
    image: "/images/cat_seafood.jpg",
    itemCount: "50+ items",
    descEn: "Kolkata fresh morning fish",
    descHi: "कोलकाता की ताज़ी मछली",
  },
  {
    id: "bakery",
    nameEn: "Artisanal Bakery",
    nameHi: "बेकरी और ब्रेड",
    image: "/images/cat_bakery.jpg",
    itemCount: "75+ items",
    descEn: "Oven-fresh bread, pav & rusks",
    descHi: "ताज़ा पाव, ब्रेड और बिस्कुट",
  },
  {
    id: "household",
    nameEn: "Home Essentials",
    nameHi: "घरेलू सामान",
    image: "/images/cat_household.jpg",
    itemCount: "190+ items",
    descEn: "Cleaning & puja essentials",
    descHi: "सफाई और पूजा का सामान",
  },
];

interface CategoriesSectionProps {
  language: "en" | "hi";
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

export default function CategoriesSection({
  language,
  selectedCategory,
  onSelectCategory,
}: CategoriesSectionProps) {
  const isHi = language === "hi";

  return (
    <section id="categories" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <h2 className={styles.sectionTitle}>
              {isHi
                ? "डसमिट प्लेटफॉर्म द्वारा डिजिटाइज़्ड श्रेणियां"
                : "Essential categories digitized on Dusmint"}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isHi
                ? "हम आपके पड़ोस के प्रत्येक विशेषज्ञ दुकानदार को आधुनिक कैटलॉग और ऑन-डिमांड इलेक्ट्रिक डिलीवरी से जोड़ते हैं"
                : "Connecting specialized neighbourhood vendors directly to customers with live inventory and 10–30 minute dispatch"}
            </p>
          </div>
        </div>

        {/* Categories Grid - 8 across on wide desktop */}
        <div className={styles.grid}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                className={`${styles.card} ${isSelected ? styles.cardActive : ""}`}
                onClick={() =>
                  onSelectCategory(isSelected ? null : cat.id)
                }
                role="button"
                tabIndex={0}
              >
                <div className={styles.imageBox}>
                  <Image
                    src={cat.image}
                    alt={isHi ? cat.nameHi : cat.nameEn}
                    width={220}
                    height={220}
                    className={styles.catImage}
                  />
                  {isSelected && (
                    <span className={styles.activeCheck} aria-label="Selected">
                      <IconCheck size={14} stroke={3} />
                    </span>
                  )}
                </div>
                <span className={styles.catName}>
                  {isHi ? cat.nameHi : cat.nameEn}
                </span>
                <span className={styles.catDesc}>
                  {isHi ? cat.descHi : cat.descEn}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
