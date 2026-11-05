"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconShieldCheck, IconLock, IconTrash } from "@tabler/icons-react";
import AccountDeletionModal from "./AccountDeletionModal";
import styles from "./LegalPage.module.css";

export default function PrivacyPolicyContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div className={styles.badgePill}>
          <IconShieldCheck size={16} />
          <span>Privacy & Security</span>
        </div>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: November 5, 2026</p>

        {/* Quick deletion banner under page title */}
        <div className={styles.headerBanner}>
          <div className={styles.headerBannerText}>
            Want your account deleted?{" "}
            <strong>Request account deletion</strong>
          </div>
          <button
            type="button"
            className={styles.headerBannerBtn}
            onClick={() => setIsModalOpen(true)}
          >
            <IconTrash size={15} />
            Request account deletion
          </button>
        </div>
      </header>

      <div className={styles.contentStack}>
        {/* Section 1 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <div className={styles.prose}>
            <p>
              This Privacy Policy explains how Dusmint Hyperlocal Technologies Pvt. Ltd.
              (&ldquo;Dusmint&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
              collects, uses, shares and protects your personal data when you use the Dusmint
              website, mobile applications and related services (the &ldquo;Services&rdquo;). We
              follow applicable Indian laws, including the Information Technology Act, 2000 and the
              Digital Personal Data Protection Act, 2023, as they apply to us.
            </p>
            <p>
              By using the Services, you agree to this Policy. If you do not agree, please do not use
              the Services.
            </p>
            <div className={styles.calloutBox}>
              <p>
                <strong>Want your account deleted?</strong> Use the{" "}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "var(--green-700)",
                    fontWeight: 600,
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "inherit",
                  }}
                >
                  &ldquo;Request account deletion&rdquo;
                </button>{" "}
                button in Section 11 of this page, or visit{" "}
                <Link
                  href="/delete-account"
                  style={{ color: "var(--green-700)", fontWeight: 600 }}
                >
                  dusmint.com/delete-account
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>2. Who this policy covers</h2>
          <div className={styles.prose}>
            <p>This Policy applies to:</p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Customers</strong> who browse and order through our customer app or website;
              </li>
              <li>
                <strong>Vendors</strong> (shop owners) who sell through our seller app;
              </li>
              <li>
                <strong>Visitors</strong> to our website.
              </li>
            </ul>
            <p>
              Delivery partners use a separate application and are covered by their own terms and
              privacy notice.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>3. Information we collect</h2>
          <div className={styles.prose}>
            <h3 className={styles.subSectionTitle}>3.1 Information you give us</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.legalTable}>
                <thead>
                  <tr>
                    <th style={{ width: "24%" }}>Category</th>
                    <th style={{ width: "52%" }}>Examples</th>
                    <th style={{ width: "24%" }}>Who</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Account details</strong></td>
                    <td>Name, mobile number, preferred language</td>
                    <td>Customers, vendors</td>
                  </tr>
                  <tr>
                    <td><strong>Delivery details</strong></td>
                    <td>Delivery addresses, landmarks, delivery instructions</td>
                    <td>Customers</td>
                  </tr>
                  <tr>
                    <td><strong>Order details</strong></td>
                    <td>Items ordered, order history, slots chosen, delivery codes, ratings and feedback</td>
                    <td>Customers</td>
                  </tr>
                  <tr>
                    <td><strong>Claims and complaints</strong></td>
                    <td>Photos or videos of items and the sealed bag, descriptions, messages to support</td>
                    <td>Customers</td>
                  </tr>
                  <tr>
                    <td><strong>Shop and business details</strong></td>
                    <td>Shop name, address, category, photos of the shop and stock, price and stock updates</td>
                    <td>Vendors</td>
                  </tr>
                  <tr>
                    <td><strong>Verification documents</strong></td>
                    <td>Owner identity proof, food safety (FSSAI) registration or licence, GST number where applicable, signed agreements</td>
                    <td>Vendors</td>
                  </tr>
                  <tr>
                    <td><strong>Payout details</strong></td>
                    <td>Bank account or UPI details for receiving payments</td>
                    <td>Vendors</td>
                  </tr>
                  <tr>
                    <td><strong>Contact and support</strong></td>
                    <td>Messages, call records and emails you send us</td>
                    <td>All</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={styles.subSectionTitle}>3.2 Information collected automatically</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.legalTable}>
                <thead>
                  <tr>
                    <th style={{ width: "28%" }}>Category</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Device and app data</strong></td>
                    <td>Device model, operating system, app version, language settings, unique identifiers, crash reports</td>
                  </tr>
                  <tr>
                    <td><strong>Location data</strong></td>
                    <td>Your approximate or precise location when you set a delivery address or use location features, with your permission. Vendors&apos; shop location</td>
                  </tr>
                  <tr>
                    <td><strong>Usage data</strong></td>
                    <td>Screens viewed, searches, items added to cart, features used, time and date of use</td>
                  </tr>
                  <tr>
                    <td><strong>Notification data</strong></td>
                    <td>A push notification token so we can send order updates</td>
                  </tr>
                  <tr>
                    <td><strong>Log data</strong></td>
                    <td>IP address, date and time of requests, error logs</td>
                  </tr>
                  <tr>
                    <td><strong>Website data</strong></td>
                    <td>Cookies and similar technologies on our website (see Section 9)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={styles.subSectionTitle}>3.3 Information from others</h3>
            <ul className={styles.bulletList}>
              <li>
                <strong>Payment providers</strong> tell us whether a payment succeeded or failed, and
                basic details such as the payment mode. We do not receive your full card number, card
                CVV or UPI PIN.
              </li>
              <li>
                <strong>Delivery partners</strong> and <strong>vendors</strong> share order-related
                information, such as packing records, weight, photos at packing, and delivery
                confirmation.
              </li>
              <li>
                <strong>Verification services</strong> may confirm details such as bank account name
                or business registration for vendors.
              </li>
            </ul>

            <h3 className={styles.subSectionTitle}>3.4 Information we do not collect</h3>
            <p>
              We do not collect your full card details, UPI PIN or passwords. We do not collect precise
              location in the background unless a feature clearly tells you and you allow it.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>4. How we use your information</h2>
          <div className={styles.prose}>
            <div className={styles.tableWrapper}>
              <table className={styles.legalTable}>
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>Purpose</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Provide the Services</strong></td>
                    <td>
                      Create and manage your account, show vendors and items near you, process orders
                      and payments, arrange delivery, share your order and delivery details with the
                      vendor and delivery partner
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Verify and secure</strong></td>
                    <td>
                      Sign you in with OTP, prevent fraud and misuse, check eligibility for features
                      like UPI on delivery, detect duplicate or fake accounts
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Customer support and claims</strong></td>
                    <td>Handle complaints, review photos and videos you send, issue refunds</td>
                  </tr>
                  <tr>
                    <td><strong>Vendor onboarding and payouts</strong></td>
                    <td>Verify vendors, check licences, pay vendors for completed orders</td>
                  </tr>
                  <tr>
                    <td><strong>Communicate with you</strong></td>
                    <td>
                      Send OTPs, order updates, delivery alerts, receipts, important service messages,
                      and, where you agree, offers
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Improve our Services</strong></td>
                    <td>
                      Understand how the app is used, fix problems, measure delivery performance,
                      improve quality and pricing
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Legal and compliance</strong></td>
                    <td>
                      Keep records required by tax, accounting and consumer laws, respond to lawful
                      requests from authorities, enforce our Terms
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p><strong>We do not sell your personal data.</strong></p>
          </div>
        </section>

        {/* Section 5 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>5. Why we may process your data (consent and other grounds)</h2>
          <div className={styles.prose}>
            <p>We process your personal data:</p>
            <ul className={styles.bulletList}>
              <li>
                based on your <strong>consent</strong>, for example when you give your mobile number,
                allow location, or accept notifications. You can withdraw consent at any time (this may
                affect the features we can offer);
              </li>
              <li>
                where necessary to <strong>provide the Services</strong> you ask for, such as
                delivering an order;
              </li>
              <li>
                where we have <strong>legitimate uses</strong> permitted by law, such as preventing
                fraud, keeping the Services secure and complying with legal obligations.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>6. Who we share your information with</h2>
          <div className={styles.prose}>
            <div className={styles.tableWrapper}>
              <table className={styles.legalTable}>
                <thead>
                  <tr>
                    <th style={{ width: "32%" }}>Recipient</th>
                    <th>What and why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Vendors</strong></td>
                    <td>
                      Your name, delivery area and order details, so they can prepare your order. We
                      do not give vendors your phone number for direct contact outside the platform
                      unless needed to fulfil the order
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Delivery partners</strong></td>
                    <td>Your name, delivery address, order details and delivery code, to deliver your order</td>
                  </tr>
                  <tr>
                    <td><strong>Payment provider (Cashfree Payments)</strong></td>
                    <td>Payment details needed to process payments and refunds</td>
                  </tr>
                  <tr>
                    <td><strong>SMS and messaging providers (for example MSG91)</strong></td>
                    <td>Your mobile number and message content, to send OTPs and updates</td>
                  </tr>
                  <tr>
                    <td><strong>Cloud and infrastructure providers</strong></td>
                    <td>
                      Hosting, database, file storage and security services that store and process
                      data on our behalf, for example Supabase and our hosting providers
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Google Firebase</strong></td>
                    <td>Push notifications, app crash reports and analytics</td>
                  </tr>
                  <tr>
                    <td><strong>Analytics providers</strong></td>
                    <td>Aggregated or pseudonymous usage data to understand and improve the Services</td>
                  </tr>
                  <tr>
                    <td><strong>Professional advisers and auditors</strong></td>
                    <td>Lawyers, accountants and auditors, where needed and under confidentiality</td>
                  </tr>
                  <tr>
                    <td><strong>Authorities</strong></td>
                    <td>Government bodies, courts or law enforcement, where required by law or to protect rights and safety</td>
                  </tr>
                  <tr>
                    <td><strong>Business transfers</strong></td>
                    <td>A buyer or partner, if we are involved in a merger, sale or reorganisation, with the same level of protection</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We require our service providers to protect your data and use it only for the services
              they provide to us.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>7. Where your data is stored</h2>
          <div className={styles.prose}>
            <p>
              Your data is stored on servers of our cloud providers. These may be in India or in other
              countries, depending on the provider and region. Where data is transferred outside
              India, we take steps to protect it as required by applicable law.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>8. How long we keep your information</h2>
          <div className={styles.prose}>
            <div className={styles.tableWrapper}>
              <table className={styles.legalTable}>
                <thead>
                  <tr>
                    <th style={{ width: "38%" }}>Data</th>
                    <th>How long</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Account and profile data</strong></td>
                    <td>While your account is active, and until you ask us to delete it</td>
                  </tr>
                  <tr>
                    <td><strong>Order, payment and refund records</strong></td>
                    <td>
                      As long as required by tax, accounting and consumer laws (commonly several
                      years), even after you delete your account
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Claim photos and videos</strong></td>
                    <td>
                      Kept for a limited period needed to resolve claims and prevent fraud, then
                      deleted or anonymised
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Vendor documents and payout records</strong></td>
                    <td>While the vendor is active, plus the period required by law</td>
                  </tr>
                  <tr>
                    <td><strong>Support messages</strong></td>
                    <td>For a limited period after your issue is closed</td>
                  </tr>
                  <tr>
                    <td><strong>Logs and security data</strong></td>
                    <td>For a limited period needed for security and troubleshooting</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>When we no longer need data, we delete it or make it anonymous.</p>
          </div>
        </section>

        {/* Section 9 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>9. Cookies and similar technologies</h2>
          <div className={styles.prose}>
            <p>On our website we use cookies and similar technologies:</p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Essential</strong> cookies to keep the site working and secure;
              </li>
              <li>
                <strong>Analytics</strong> cookies to understand how the site is used (where enabled
                and, where required, with your consent).
              </li>
            </ul>
            <p>
              You can control cookies in your browser settings. Blocking some cookies may affect how
              the website works. Our mobile apps use app identifiers rather than cookies.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>10. Security</h2>
          <div className={styles.prose}>
            <p>
              We use safeguards such as encrypted connections (HTTPS), access controls, restricted
              staff access, and monitoring. Payment details are handled by our payment provider. No
              system is completely secure, and we cannot guarantee absolute security. Please keep your
              phone and OTPs private. If there is a data breach that affects you, we will tell you and
              the authorities as the law requires.
            </p>
          </div>
        </section>

        {/* Section 11 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>11. Your rights and account deletion</h2>
          <div className={styles.prose}>
            <p>Under applicable law you may have the right to:</p>
            <ul className={styles.bulletList}>
              <li>
                <strong>ask for information</strong> about the personal data we hold about you and how
                we use it;
              </li>
              <li>
                <strong>correct or update</strong> your personal data;
              </li>
              <li>
                <strong>ask us to delete</strong> your personal data and account;
              </li>
              <li>
                <strong>withdraw your consent</strong> (for example, turn off location or
                notifications in your phone settings, or ask us to stop marketing messages);
              </li>
              <li>
                <strong>make a complaint</strong> to us (see Section 15), and, if you are not
                satisfied, to the Data Protection Board of India where applicable;
              </li>
              <li>
                <strong>nominate</strong> another person to exercise your rights in case of your death
                or incapacity, where the law provides this.
              </li>
            </ul>

            <h3 className={styles.subSectionTitle}>How to delete your account</h3>
            <p>You can ask us to delete your account and personal data:</p>
            <ol className={styles.numberedList}>
              <li>
                <strong>Online:</strong> use the button below to open a short form (your name,
                registered mobile number and reason). Or visit{" "}
                <Link href="/delete-account" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                  dusmint.com/delete-account
                </Link>.
              </li>
              <li>
                <strong>By email:</strong> write to{" "}
                <a href="mailto:team.dusmint@gmail.com" style={{ color: "var(--green-700)" }}>
                  team.dusmint@gmail.com
                </a>{" "}
                from the contact details linked to your account.
              </li>
              <li>
                <strong>In the app:</strong> where available, use Account, then Delete account.
              </li>
            </ol>

            <h3 className={styles.subSectionTitle}>What happens next</h3>
            <ul className={styles.bulletList}>
              <li>
                To protect your account, we will <strong>contact you on your registered mobile number to verify</strong> that the request is really yours. We will not delete anything until we have verified it.
              </li>
              <li>
                After verification, we will delete or anonymise your account and personal data within{" "}
                <strong>30 days</strong>, except for the records described below.
              </li>
              <li>
                Once deleted, you cannot recover your order history, saved addresses or credits. Any unused promotional credit will be lost.
              </li>
            </ul>

            <h3 className={styles.subSectionTitle}>What we delete, and what we may keep</h3>
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

            {/* Section 11 Request Deletion Button */}
            <div style={{ marginTop: "1.75rem", marginBottom: "0.5rem" }}>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={() => setIsModalOpen(true)}
              >
                <IconTrash size={16} />
                Request account deletion
              </button>
            </div>
          </div>
        </section>

        {/* Section 12 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>12. Children</h2>
          <div className={styles.prose}>
            <p>
              The Services are not meant for people under 18, and we do not knowingly collect personal
              data from children. If you think a child has given us personal data, please contact us
              and we will delete it.
            </p>
          </div>
        </section>

        {/* Section 13 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>13. Links to other sites</h2>
          <div className={styles.prose}>
            <p>
              Our Services may link to other websites or apps. We are not responsible for their privacy
              practices. Please read their policies.
            </p>
          </div>
        </section>

        {/* Section 14 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>14. Changes to this Policy</h2>
          <div className={styles.prose}>
            <p>
              We may update this Policy from time to time. We will change the &ldquo;Last updated&rdquo;
              date and, for important changes, notify you in the app or by message. Please check this
              page regularly.
            </p>
          </div>
        </section>

        {/* Section 15 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>15. Contact and Grievance Officer</h2>
          <div className={styles.prose}>
            <p>For privacy questions, requests or complaints, contact our Grievance Officer:</p>
            <div className={styles.tableWrapper}>
              <table className={styles.legalTable}>
                <tbody>
                  <tr>
                    <td style={{ width: "160px", fontWeight: 600 }}>Name</td>
                    <td>Grievance Officer</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Email</td>
                    <td>
                      <a href="mailto:team.dusmint@gmail.com" style={{ color: "var(--green-700)" }}>
                        team.dusmint@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Phone</td>
                    <td>+91 98765 43210</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Hours</td>
                    <td>Monday to Saturday, 10:00 am to 6:00 pm IST</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Address</td>
                    <td>Dusmint Hyperlocal Technologies Pvt. Ltd., Sector V, Salt Lake, Kolkata 700091, West Bengal, India</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We will acknowledge your request within 48 hours and aim to resolve it within one
              month, or sooner where the law requires.
            </p>
          </div>
        </section>
      </div>

      {/* Account Deletion Modal */}
      <AccountDeletionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourcePage="/privacy"
      />
    </div>
  );
}

