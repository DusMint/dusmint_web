import React from "react";
import Link from "next/link";
import { IconTrash, IconInfoCircle, IconMail } from "@tabler/icons-react";
import AccountDeletionForm from "@/components/AccountDeletionForm";
import styles from "@/components/LegalPage.module.css";

export const metadata = {
  title: "Delete your Dusmint account | Dusmint",
  description: "Submit a request to permanently delete your Dusmint customer account and personal data.",
};

export default function DeleteAccountPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div className={styles.badgePill}>
          <IconTrash size={16} />
          <span>Account Controls</span>
        </div>
        <h1 className={styles.title}>Delete your Dusmint account</h1>
        <p className={styles.lastUpdated}>Last updated: November 5, 2026</p>
        <p className={styles.prose} style={{ fontSize: "16px", marginTop: "0.5rem" }}>
          Ask us to delete your account and personal data. We will verify the request with you before
          anything is deleted.
        </p>
      </header>

      <div className={styles.contentStack}>
        {/* How it works */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <div className={styles.prose}>
            <ol className={styles.numberedList}>
              <li>
                Fill in the form below with your name, the mobile number registered on your Dusmint
                account, and the reason.
              </li>
              <li>Our team will contact you on that number to confirm the request is yours.</li>
              <li>
                After verification, we delete or anonymise your account and personal data within{" "}
                <strong>30 days</strong>.
              </li>
            </ol>
          </div>
        </section>

        {/* What gets deleted and what we may keep */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>What gets deleted, and what we may keep</h2>
          <div className={styles.prose}>
            <div className={styles.tableWrapper}>
              <table className={styles.legalTable}>
                <thead>
                  <tr>
                    <th style={{ width: "50%" }}>Deleted or anonymised</th>
                    <th style={{ width: "50%" }}>May be kept (for as long as the law or a legitimate need requires)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Your name, saved addresses and profile</td>
                    <td>Order, invoice and payment records needed for tax, accounting and legal compliance</td>
                  </tr>
                  <tr>
                    <td>Your photos and videos not needed for an open claim</td>
                    <td>Records needed to resolve disputes, open claims or refunds</td>
                  </tr>
                  <tr>
                    <td>Your notification token and app identifiers</td>
                    <td>Information needed to prevent fraud and abuse, such as a blocked or flagged account record</td>
                  </tr>
                  <tr>
                    <td>Your marketing preferences</td>
                    <td>Data we must keep to respond to a legal request or to protect legal rights</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Before you go */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>Before you go</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                Unused promotional credit and order history cannot be recovered after deletion.
              </li>
              <li>
                If you have an order in progress, we will complete or cancel it before deleting your
                account.
              </li>
              <li>
                If you only want fewer messages or to stop location use, you can change that in your
                phone settings or ask us instead of deleting the account.
              </li>
            </ul>
          </div>
        </section>

        {/* Form Card */}
        <section className={styles.sectionCard} style={{ borderColor: "#c2e2ce" }}>
          <h2 className={styles.sectionTitle}>Submit deletion request</h2>
          <p className={styles.prose} style={{ marginBottom: "1.5rem" }}>
            Fill in this short form and our team will contact you on your registered number to verify
            the request before deleting your account.
          </p>

          <AccountDeletionForm sourcePage="/delete-account" isModal={false} />
        </section>

        {/* Other ways to reach us */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>Other ways to reach us</h2>
          <div className={styles.prose}>
            <p>
              Email{" "}
              <a href="mailto:team.dusmint@gmail.com" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                team.dusmint@gmail.com
              </a>, or read our{" "}
              <Link href="/privacy" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                Terms and Conditions
              </Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

