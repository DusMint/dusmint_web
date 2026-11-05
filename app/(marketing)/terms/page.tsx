import React from "react";
import Link from "next/link";
import { IconShieldCheck, IconFileText } from "@tabler/icons-react";
import styles from "@/components/LegalPage.module.css";

export const metadata = {
  title: "Terms and Conditions | Dusmint",
  description: "Terms and Conditions governing your use of the Dusmint website, mobile applications, and hyperlocal delivery services.",
};

export default function TermsPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div className={styles.badgePill}>
          <IconFileText size={16} />
          <span>Legal & Compliance</span>
        </div>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.lastUpdated}>Last updated: November 5, 2026</p>
      </header>

      <div className={styles.contentStack}>
        {/* Section 1 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>1. About these Terms</h2>
          <div className={styles.prose}>
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Dusmint website,
              mobile applications and related services (together, the &ldquo;Services&rdquo;). The
              Services are operated by Dusmint Hyperlocal Technologies Pvt. Ltd., with its registered
              office at Sector V, Salt Lake, Kolkata 700091, West Bengal, India (&ldquo;Dusmint&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p>
              By creating an account, placing an order, or otherwise using the Services, you agree to
              these Terms and to our <Link href="/privacy" style={{ color: "var(--green-700)", fontWeight: 600 }}>Privacy Policy</Link>.
              If you do not agree, please do not use the Services.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>2. What Dusmint does</h2>
          <div className={styles.prose}>
            <p>
              Dusmint is a technology platform that connects customers with independent local vendors,
              such as vegetable, meat and milk shops, and arranges delivery of orders placed through
              the Services.
            </p>
            <ul className={styles.bulletList}>
              <li>
                The items you order are <strong>sold by the vendor</strong>, not by Dusmint, unless
                we clearly say otherwise. We help you discover vendors, place orders, pay, and receive
                delivery.
              </li>
              <li>
                Vendors are independent businesses. They are responsible for the quality, freshness,
                labelling, licensing and legality of what they sell.
              </li>
              <li>Delivery is carried out by delivery partners using our delivery application.</li>
              <li>
                We do not guarantee that any particular vendor, item or delivery slot will always be
                available.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>3. Eligibility and your account</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                You must be at least 18 years old and able to enter a legally binding contract under
                Indian law.
              </li>
              <li>
                You sign in using your mobile number and a one-time password (OTP). You must give
                accurate information and keep it up to date.
              </li>
              <li>
                You are responsible for all activity on your account. Keep your phone and OTPs
                private and tell us immediately if you think your account has been misused.
              </li>
              <li>
                We may refuse service, limit features, or suspend or close an account if we reasonably
                believe these Terms are being broken, there is fraud or abuse, or we are required to by
                law.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>4. Delivery areas and slots</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                We deliver only in areas we serve. We may check your address and location to confirm
                that your address is serviceable.
              </li>
              <li>
                Orders are generally placed for a <strong>delivery slot</strong> (for example, morning
                or evening). Each slot has an <strong>order cut-off time</strong>. Orders placed after
                the cut-off are scheduled for the next available slot.
              </li>
              <li>
                Delivery times are estimates. Delays can occur because of weather, traffic, festivals,
                strikes, vendor stock, or other events outside our control. We will tell you about
                significant delays where we can.
              </li>
              <li>
                Where we offer a fast delivery option, it is available only for selected items and
                areas, and times are estimates.
              </li>
              <li>
                Please make sure someone is available to receive the order at the delivery address.
                You may be asked to share a delivery code (OTP) with the delivery partner to confirm
                receipt.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>5. Prices, fees and taxes</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                Prices are set by vendors and may change during the day based on market rates. The
                price shown to you <strong>at checkout</strong> is the price you pay for that order.
                If a price changes before you confirm, we will show you the updated price.
              </li>
              <li>
                Delivery, handling and other fees (if any) are shown before you pay. Some offers, such
                as free delivery above a minimum basket value, may apply.
              </li>
              <li>Prices include applicable taxes unless stated otherwise.</li>
              <li>
                Weight-based items (for example, vegetables and meat) are packed by the vendor to the
                ordered weight. Small variations due to the nature of the product may occur. We aim to
                verify weight at packing as described in Section 8.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>6. Placing orders and payment</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                An order is confirmed only when the vendor accepts it. If a vendor cannot fulfil your
                order or some items, we will tell you, remove the unavailable items, and refund the
                amount for them.
              </li>
              <li>
                Payments are processed through third-party payment providers. We do not store your
                full card details or UPI PIN.
              </li>
              <li>
                <strong>Pay online:</strong> you may pay by UPI, cards or net banking through our
                payment partner.
              </li>
              <li>
                <strong>UPI on delivery:</strong> for eligible customers we may allow payment by UPI
                at the doorstep. We do not accept cash. Eligibility depends on your order history and
                behaviour (see Section 7).
              </li>
              <li>
                If a payment fails but money is debited from your account, it is usually reversed by
                your bank or payment provider within the time set by them. Contact us if it is not.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>7. Customer trust levels</h2>
          <div className={styles.prose}>
            <p>To keep the service fair and affordable for everyone, we use trust levels:</p>
            <ul className={styles.bulletList}>
              <li>
                New customers may be asked to <strong>pay online</strong> for their first few orders.
              </li>
              <li>
                Customers with a good order history may unlock <strong>UPI on delivery</strong>.
              </li>
              <li>
                If you repeatedly reject orders at the door without a valid reason, or if there is
                suspected misuse, we may move you back to online payment only or limit your account.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>8. Weight, quality and sealed bags</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                Vendors pack orders in sealed bags. We may require the vendor to record the weight and
                take a photo at packing. Each bag carries a unique seal or code.
              </li>
              <li>
                When you receive your order, please check that the seal is intact before opening. You
                can scan the seal code in the app when you open the bag.
              </li>
              <li>
                Dusmint does not inspect every item. Quality checks are carried out by vendors,
                supported by our monitoring of complaints, ratings and vendor performance.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 9 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>9. Cancellations, refunds and complaints</h2>
          <div className={styles.prose}>
            <h3 className={styles.subSectionTitle}>Cancellation</h3>
            <ul className={styles.bulletList}>
              <li>
                You can cancel an order free of charge until the vendor starts packing it or the slot
                cut-off, whichever is earlier. After that, cancellation may not be possible.
              </li>
              <li>
                We may cancel an order if an item is unavailable, a vendor is closed, we cannot deliver
                to your address, or we suspect fraud. You will be refunded for any amount paid.
              </li>
            </ul>

            <h3 className={styles.subSectionTitle}>Problems with your order</h3>
            <ul className={styles.bulletList}>
              <li>
                If an item is missing, damaged, spoiled or of the wrong weight, please report it{" "}
                <strong>within 30 minutes of opening the sealed bag</strong>, using the
                &ldquo;Report a problem&rdquo; option in the app.
              </li>
              <li>
                You may be asked to provide clear photos or a short video taken in the app, showing
                the item and the seal code.
              </li>
              <li>
                We review each claim using the evidence provided, the vendor&apos;s packing record and
                other information. We may approve, partly approve or reject a claim. For small
                amounts, decisions may be automatic.
              </li>
              <li>
                We may limit or reject claims that appear to be repeated, exaggerated or fraudulent.
              </li>
            </ul>

            <h3 className={styles.subSectionTitle}>Refunds</h3>
            <ul className={styles.bulletList}>
              <li>
                Approved refunds are made to the original payment method by default, within 5 to 7
                business days after approval, subject to your bank or payment provider.
              </li>
              <li>
                Where you choose to receive refunds as promotional credit, the credit may have a bonus,
                an expiry date and usage conditions. Promotional credit is not cash and cannot be
                withdrawn.
              </li>
              <li>
                The right to a refund does not affect any rights you have under consumer protection laws.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 10 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>10. Offers, promo codes and credits</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                Offers and promo codes have their own conditions, such as minimum order value,
                validity and usage limits, and may be withdrawn or changed at any time.
              </li>
              <li>Offers cannot be sold, transferred or combined unless stated.</li>
              <li>
                We may cancel offers or credits obtained through misuse, multiple accounts or fraud.
              </li>
              <li>
                If we offer a subscription plan (for example, a monthly pass), its price, benefits and
                cancellation terms will be shown when you sign up.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 11 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>11. Acceptable use</h2>
          <div className={styles.prose}>
            <p>You agree not to:</p>
            <ul className={styles.bulletList}>
              <li>give false information or use another person&apos;s account or phone number;</li>
              <li>misuse offers, create multiple accounts to get benefits, or make false claims or complaints;</li>
              <li>send altered, misleading or someone else&apos;s photos or videos as evidence;</li>
              <li>harass, threaten or abuse vendors, delivery partners or our staff;</li>
              <li>
                interfere with or attempt to break the security of the Services, scrape data, or
                reverse engineer our apps;
              </li>
              <li>use the Services for any unlawful purpose.</li>
            </ul>
          </div>
        </section>

        {/* Section 12 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>12. Vendors and delivery partners</h2>
          <div className={styles.prose}>
            <p>
              Vendors and delivery partners use separate applications and agreements. Nothing in these
              Terms makes a vendor or delivery partner an employee, agent or partner of Dusmint
              towards you, except where the law requires otherwise. Vendors must hold the licences
              that apply to their products, including food safety registration or licences. If you
              believe a vendor is breaking the law, please contact us.
            </p>
          </div>
        </section>

        {/* Section 13 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>13. Your content</h2>
          <div className={styles.prose}>
            <p>
              When you send us photos, videos, reviews or feedback (&ldquo;Your Content&rdquo;), you
              confirm that you have the right to share it. You give us a non-exclusive, royalty-free
              right to use Your Content to operate the Services, handle your claims, prevent fraud,
              improve our services and defend legal claims. We will handle personal data in Your
              Content as described in our Privacy Policy.
            </p>
          </div>
        </section>

        {/* Section 14 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>14. Intellectual property</h2>
          <div className={styles.prose}>
            <p>
              The Dusmint name, logo, apps, website, design and content are owned by us or our
              licensors and protected by law. You may use the Services for your personal,
              non-commercial use. You may not copy, modify or distribute our content or brand without
              our written permission.
            </p>
          </div>
        </section>

        {/* Section 15 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>15. Disclaimers</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                basis. To the extent permitted by law, we do not promise that the Services will be
                uninterrupted, error-free or always available.
              </li>
              <li>
                We do not guarantee the nature, quality, freshness or suitability of items sold by
                vendors beyond what the law requires of us as a platform.
              </li>
              <li>
                If you have allergies or special dietary needs, please check with the vendor. Product
                information is provided by vendors.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 16 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>16. Limitation of liability</h2>
          <div className={styles.prose}>
            <p>To the fullest extent permitted by law:</p>
            <ul className={styles.bulletList}>
              <li>
                Dusmint is not liable for indirect, incidental or consequential losses, or for loss of
                profit, data or goodwill;
              </li>
              <li>
                our total liability to you for any claim related to an order is limited to the amount
                you paid for that order;
              </li>
              <li>
                nothing in these Terms limits liability that cannot be limited by law, including
                liability for fraud or for rights you have under consumer protection law.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 17 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>17. Indemnity</h2>
          <div className={styles.prose}>
            <p>
              You agree to compensate us for losses arising from your breach of these Terms, your
              misuse of the Services, or your violation of any law or third party&apos;s rights, to the
              extent permitted by law.
            </p>
          </div>
        </section>

        {/* Section 18 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>18. Suspension and termination</h2>
          <div className={styles.prose}>
            <p>
              You may stop using the Services and ask us to delete your account at any time (see our{" "}
              <Link href="/privacy" style={{ color: "var(--green-700)", fontWeight: 600 }}>Privacy Policy</Link>). We may
              suspend or end your access if you break these Terms, if we are required to by law, or if
              we stop offering the Services in your area. Sections that by their nature should continue
              (for example, payment obligations, intellectual property, liability and dispute
              resolution) continue after termination.
            </p>
          </div>
        </section>

        {/* Section 19 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>19. Changes to the Services and Terms</h2>
          <div className={styles.prose}>
            <p>
              We may update these Terms from time to time. When we make important changes we will
              update the &ldquo;Last updated&rdquo; date and may notify you in the app or by message.
              By continuing to use the Services after the changes take effect, you accept the updated
              Terms.
            </p>
          </div>
        </section>

        {/* Section 20 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>20. Governing law and disputes</h2>
          <div className={styles.prose}>
            <p>
              These Terms are governed by the laws of India. Subject to any rights you have under
              consumer protection law, the courts at Kolkata, India will have exclusive jurisdiction
              over disputes arising from these Terms. We encourage you to contact us first so we can
              try to resolve the issue.
            </p>
          </div>
        </section>

        {/* Section 21 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>21. Grievance Officer and contact</h2>
          <div className={styles.prose}>
            <p>
              In line with applicable Indian laws, including the Information Technology Act, 2000 and
              the Consumer Protection (E-Commerce) Rules, 2020, our Grievance Officer is:
            </p>

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
                    <td>Sector V, Salt Lake, Kolkata 700091, West Bengal, India</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              We will acknowledge your complaint within 48 hours and aim to resolve it within one
              month.
            </p>
            <p>
              For general questions, write to{" "}
              <a href="mailto:team.dusmint@gmail.com" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                team.dusmint@gmail.com
              </a>.
            </p>
          </div>
        </section>

        {/* Section 22 */}
        <section className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>22. General</h2>
          <div className={styles.prose}>
            <ul className={styles.bulletList}>
              <li>
                These Terms, with the Privacy Policy and any offer or policy referred to in them, are
                the whole agreement between you and us about the Services.
              </li>
              <li>If any part of these Terms is found invalid, the rest remains in effect.</li>
              <li>If we do not enforce a right straight away, we have not given it up.</li>
              <li>
                You may not transfer your rights under these Terms. We may transfer ours as part of a
                business reorganisation or sale.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
