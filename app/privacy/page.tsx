import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Callout, LegalPage, List, Section } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Asset Foundry",
  description:
    "How Asset Foundry Inc. collects, uses, and protects personal information, including mobile phone numbers and SMS messaging consent.",
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <LegalPage title="Privacy Policy" effective="August 27, 2026">
        <Section heading="Overview">
          <p>
            Asset Foundry Inc. (&ldquo;Asset Foundry&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) builds production AI systems for government and
            enterprise customers. This policy explains what personal information
            we collect, why we collect it, how we use and protect it, and the
            choices available to you.
          </p>
          <p>
            It applies to assetfoundry.com, to our messaging programs, and to
            services we operate directly. It does not govern information you
            provide to a customer of ours who happens to use our technology; in
            those cases that organization is the data controller and its own
            privacy policy applies.
          </p>
        </Section>

        <Section heading="Information we collect">
          <List
            items={[
              <>
                <strong className="text-foreground">
                  Information you give us.
                </strong>{" "}
                Name, business email address, company, mobile phone number, and
                the contents of messages you send us through our contact form,
                by email, or by text message.
              </>,
              <>
                <strong className="text-foreground">Messaging data.</strong> If
                you take part in one of our SMS programs, we record the mobile
                number, the messages exchanged, delivery status, and your
                consent and opt-out state.
              </>,
              <>
                <strong className="text-foreground">Technical data.</strong>{" "}
                Standard server and analytics data such as IP address, browser
                type, pages requested, and timestamps.
              </>,
            ]}
          />
          <p>
            We do not sell personal information, and we do not collect special
            categories of personal data through this website.
          </p>
        </Section>

        <Section heading="Mobile information and SMS consent">
          <Callout>
            <p>
              <strong>
                No mobile information will be shared with third parties or
                affiliates for marketing or promotional purposes.
              </strong>{" "}
              Information sharing with subcontractors for support services, such
              as customer service, is permitted. All other use case categories
              exclude text messaging originator opt-in data and consent; this
              information will not be shared with any third parties.
            </p>
          </Callout>
          <p>
            You provide consent to receive text messages by sending a message to
            one of our published numbers, by submitting your mobile number
            through one of our forms, or by otherwise expressly opting in. We
            only send messages in response to a request you have made, or as
            described at the point where you opted in.
          </p>
          <p>
            You can withdraw consent at any time by replying{" "}
            <strong className="text-foreground">STOP</strong> to any message.
            Reply <strong className="text-foreground">HELP</strong> for
            assistance. Message frequency varies. Message and data rates may
            apply. See our <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link>{" "}
            for the full messaging terms.
          </p>
        </Section>

        <Section heading="How we use information">
          <List
            items={[
              "To respond to enquiries and provide the services you request.",
              "To operate, secure, and improve our website and services.",
              "To send transactional and service messages you have consented to receive.",
              "To meet legal, contractual, and government-contracting obligations.",
            ]}
          />
          <p>
            We do not use personal information for automated decision-making
            that produces legal or similarly significant effects about you.
          </p>
        </Section>

        <Section heading="How we share information">
          <p>
            We share personal information only with service providers who
            process it on our behalf and under contract — for example cloud
            hosting, communications carriers and messaging platforms, and email
            delivery. These providers may use the information only to perform
            services for us.
          </p>
          <p>
            We may also disclose information where required by law, to protect
            our rights or the safety of others, or in connection with a merger
            or acquisition. As stated above, mobile opt-in data and consent are
            excluded from all sharing other than the support-services case.
          </p>
          <p>
            We do not sell or rent personal information, and we do not share it
            with third parties for their own marketing.
          </p>
        </Section>

        <Section heading="Data retention">
          <p>
            We keep personal information only as long as needed for the purpose
            it was collected, and for as long as required by law or by our
            contractual and government-contracting obligations. Messaging
            records and consent state are retained for the life of the program
            and for a reasonable period afterwards so we can evidence consent
            and honour opt-outs.
          </p>
        </Section>

        <Section heading="Security">
          <p>
            We operate on hardened cloud infrastructure, including AWS GovCloud
            for workloads that require it, and apply access controls,
            encryption in transit and at rest, and least-privilege credentials.
            No system is perfectly secure, but we design so that a failure in
            one component does not expose data held elsewhere.
          </p>
        </Section>

        <Section heading="Your choices and rights">
          <List
            items={[
              "Opt out of text messages at any time by replying STOP.",
              "Request access to, correction of, or deletion of the personal information we hold about you.",
              "Ask us to stop sending marketing email, using any unsubscribe link or by contacting us.",
            ]}
          />
          <p>
            Depending on where you live you may have additional rights under
            state privacy laws. Contact us at the address below and we will
            respond within the period the applicable law requires.
          </p>
        </Section>

        <Section heading="Children">
          <p>
            Our services are intended for business use and are not directed to
            children under 13. We do not knowingly collect personal information
            from children. If you believe a child has provided us information,
            contact us and we will delete it.
          </p>
        </Section>

        <Section heading="Changes to this policy">
          <p>
            We may update this policy from time to time. The effective date at
            the top of the page shows when it last changed. Material changes to
            how we handle messaging consent will be communicated to affected
            subscribers.
          </p>
        </Section>

        <Section heading="Contact us">
          <p>
            Asset Foundry Inc.
            <br />
            Lake Worth, Florida, United States
            <br />
            Privacy enquiries:{" "}
            <a
              href="mailto:privacy@assetfoundry.com"
              className="underline hover:text-foreground"
            >
              privacy@assetfoundry.com
            </a>
            <br />
            Messaging support:{" "}
            <a
              href="mailto:support@assetfoundry.com"
              className="underline hover:text-foreground"
            >
              support@assetfoundry.com
            </a>
          </p>
        </Section>
      </LegalPage>
      <Footer />
    </main>
  );
}
