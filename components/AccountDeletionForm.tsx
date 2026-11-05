"use client";

import React, { useState } from "react";
import { IconCheck, IconAlertCircle, IconLoader2, IconX } from "@tabler/icons-react";
import styles from "./LegalPage.module.css";

interface AccountDeletionFormProps {
  sourcePage: string;
  isModal?: boolean;
  onClose?: () => void;
}

export default function AccountDeletionForm({
  sourcePage,
  isModal = false,
  onClose,
}: AccountDeletionFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = "Full name is required.";
    } else if (name.trim().length < 2 || name.trim().length > 80) {
      errs.name = "Full name must be between 2 and 80 characters.";
    }

    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (!cleanPhone) {
      errs.phone = "Registered mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
    }

    if (!reason.trim()) {
      errs.reason = "Please share your reason for deletion.";
    } else if (reason.trim().length < 5 || reason.trim().length > 500) {
      errs.reason = "Reason must be between 5 and 500 characters.";
    }

    if (!confirmation) {
      errs.confirmation = "You must confirm that you understand the deletion terms.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/account-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim().replace(/\D/g, ""),
          reason: reason.trim(),
          confirmation,
          sourcePage,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setReferenceId(data.referenceId);
    } catch (err: any) {
      setServerError(
        err.message ||
          "We could not send your request. Please try again, or email us at team.dusmint@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (referenceId) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIconBadge}>
          <IconCheck size={30} stroke={2.5} />
        </div>
        <h3 className={styles.successTitle}>Request received</h3>
        <p className={styles.prose}>Your account deletion request has been registered under reference:</p>
        <div className={styles.refIdPill}>{referenceId}</div>
        <p className={styles.successMessage}>
          Our team will contact you on your registered number within <strong>30 days</strong> to verify and complete the deletion.
        </p>
        {isModal && onClose && (
          <button type="button" className={styles.actionBtnPrimary} onClick={onClose}>
            Done
          </button>
        )}
      </div>
    );
  }

  const formBody = (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="acc-del-name">
          Full name <span style={{ color: "var(--error)" }}>*</span>
        </label>
        <input
          id="acc-del-name"
          type="text"
          className={styles.inputField}
          placeholder="e.g. Rahul Sharma"
          value={name}
          maxLength={80}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
          }}
        />
        {errors.name && (
          <div className={styles.fieldError}>
            <IconAlertCircle size={14} />
            <span>{errors.name}</span>
          </div>
        )}
      </div>

      {/* Phone */}
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="acc-del-phone">
          Registered mobile number <span style={{ color: "var(--error)" }}>*</span>
        </label>
        <div className={styles.phoneInputGroup}>
          <span className={styles.phonePrefix}>+91</span>
          <input
            id="acc-del-phone"
            type="tel"
            className={styles.phoneInput}
            placeholder="9876543210"
            maxLength={10}
            value={phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setPhone(val);
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
            }}
          />
        </div>
        {errors.phone && (
          <div className={styles.fieldError}>
            <IconAlertCircle size={14} />
            <span>{errors.phone}</span>
          </div>
        )}
      </div>

      {/* Reason */}
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="acc-del-reason">
          Reason for deletion <span style={{ color: "var(--error)" }}>*</span>
        </label>
        <textarea
          id="acc-del-reason"
          className={styles.textareaField}
          placeholder="Please tell us why you wish to delete your account (5 to 500 characters)"
          rows={3}
          maxLength={500}
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
            if (errors.reason) setErrors((prev) => ({ ...prev, reason: "" }));
          }}
        />
        {errors.reason && (
          <div className={styles.fieldError}>
            <IconAlertCircle size={14} />
            <span>{errors.reason}</span>
          </div>
        )}
      </div>

      {/* Confirmation Checkbox */}
      <div className={styles.formGroup}>
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={confirmation}
            onChange={(e) => {
              setConfirmation(e.target.checked);
              if (errors.confirmation) setErrors((prev) => ({ ...prev, confirmation: "" }));
            }}
          />
          <span className={styles.checkboxLabel}>
            I understand that my account will be deleted after verification and some records may be kept as explained in the Privacy Policy.
          </span>
        </label>
        {errors.confirmation && (
          <div className={styles.fieldError} style={{ marginTop: "0.25rem" }}>
            <IconAlertCircle size={14} />
            <span>{errors.confirmation}</span>
          </div>
        )}
      </div>

      {serverError && (
        <div className={styles.fieldError} style={{ margin: "1rem 0" }}>
          <IconAlertCircle size={16} />
          <span>{serverError}</span>
        </div>
      )}

      {/* Actions */}
      <div className={styles.formActions}>
        {isModal && onClose && (
          <button type="button" className={styles.cancelBtn} onClick={onClose} disabled={isSubmitting}>
            Cancel
          </button>
        )}
        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <IconLoader2 size={16} className="animate-spin" />
              <span>Sending request...</span>
            </>
          ) : (
            "Submit request"
          )}
        </button>
      </div>
    </form>
  );

  return formBody;
}

