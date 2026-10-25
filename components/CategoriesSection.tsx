"use client";

import React from "react";
import Image from "next/image";
import styles from "./CategoriesSection.module.css";

interface CategoryItem {
  id: string;
  nameEn: string;
  nameHi: string;
  image: string;
  itemCount: string;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "groceries",
    nameEn: "Groceries",
    nameHi: "किराना",
    image: "/images/cat_groceries.jpg",
    itemCount: "420+ items",
  },
  {
    id: "vegetables",
    nameEn: "Fresh Vegetables",
    nameHi: "ताज़ी सब्जियां",
    image: "/images/cat_vegetables.jpg",
    itemCount: "85+ items",
  },
  {
    id: "fruits",
    nameEn: "Fruits",
    nameHi: "ताज़े फल",
    image: "/images/cat_fruits.jpg",
    itemCount: "60+ items",
  },
  {
    id: "dairy",
    nameEn: "Dairy & Eggs",
    nameHi: "दूध और अंडे",
    image: "/images/cat_dairy.jpg",
    itemCount: "110+ items",
  },
  {
    id: "meat",
    nameEn: "Chicken & Meat",
    nameHi: "चिकन और मीट",
    image: "/images/cat_meat.jpg",
    itemCount: "45+ items",
  },
  {
    id: "seafood",
    nameEn: "Fish & Seafood",
    nameHi: "मछली और झींगा",
    image: "/images/cat_seafood.jpg",
    itemCount: "50+ items",
  },
  {
    id: "bakery",
    nameEn: "Bakery & Breads",
    nameHi: "बेकरी और ब्रेड",
    image: "/images/cat_bakery.jpg",
    itemCount: "75+ items",
  },
  {
    id: "household",
    nameEn: "Household",
    nameHi: "घरेलू सामान",
    image: "/images/cat_household.jpg",
    itemCount: "190+ items",
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
              {isHi ? "कैटेगरी के अनुसार खरीदारी करें" : "Shop by Category"}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isHi
                ? "सभी रोज़मर्रा की ज़रूरतें आपके नजदीकी बाज़ार से"
                : "Handpicked selections straight from neighbourhood vendors"}
            </p>
          </div>

          <button
            type="button"
            className={styles.seeAllBtn}
            onClick={() => onSelectCategory(null)}
          >
            <span>{isHi ? "सभी देखें" : "See All"}</span>
            <span className={styles.seeAllArrow}>→</span>
          </button>
        </div>

        {/* Categories Grid */}
        <div className={styles.grid}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`${styles.card} ${isSelected ? styles.cardActive : ""}`}
                onClick={() =>
                  onSelectCategory(isSelected ? null : cat.id)
                }
              >
                <div className={styles.imageBox}>
                  <Image
                    src={cat.image}
                    alt={isHi ? cat.nameHi : cat.nameEn}
                    width={180}
                    height={180}
                    className={styles.catImage}
                  />
                  {isSelected && <span className={styles.activeCheck}>✓</span>}
                </div>
                <span className={styles.catName}>
                  {isHi ? cat.nameHi : cat.nameEn}
                </span>
                <span className={styles.catCount}>{cat.itemCount}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
