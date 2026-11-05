"use client";

import React, { useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import AccountDeletionForm from "./AccountDeletionForm";
import styles from "./LegalPage.module.css";

interface AccountDeletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourcePage?: string;
}

export default function AccountDeletionModal({
  isOpen,
  onClose,
  sourcePage = "/privacy",
}: AccountDeletionModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.modalCloseBtn}
          onClick={onClose}
          aria-label="Close dialog"
        >
          <IconX size={18} />
        </button>

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Request account deletion</h2>
          <p className={styles.modalSubtitle}>
            Fill in this short form and our team will contact you on your number to verify the request before deleting your account.
          </p>
        </div>

        <AccountDeletionForm sourcePage={sourcePage} isModal={true} onClose={onClose} />
      </div>
    </div>
  );
}

