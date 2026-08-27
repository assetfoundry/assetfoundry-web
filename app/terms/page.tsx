import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Callout, LegalPage, List, Section } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Asset Foundry",
  description:
    "Terms of service for Asset Foundry Inc., including the terms and conditions of our SMS and text messaging programs.",
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <LegalPage title="Terms of Service" effective="August 27, 2026">
        <Section heading="Agreement">
          <p>
            These terms govern your use of assetfoundry.com and of any messaging
            program, product, or service Asset Foundry Inc. (&ldquo;Asset
            Foundry&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) makes available
            to you. By using the site or opting in to receive messages from us,
            you agree to them. If you do not agree, do not use the service.
          </p>
          <p>
            Services delivered under a separate written contract are governed by
            that contract where it conflicts with these terms.
          </p>
        </Section>

        <Section heading="Messaging program terms">
          <p>
            Asset Foundry operates text messaging programs, including{" "}
            <strong className="text-foreground">Amy by TellAmy</strong>, a
            personal assistant service reached by text message. The following
            terms apply to all of them.
          </p>

          <Callout>
            <p className="font-semibold">Key messaging disclosures</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 font-normal">
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>
                Text <strong>STOP</strong> to any message to opt out at any
                time.
              </li>
              <li>
                Text <strong>HELP</strong> to any message, or email
                support@assetfoundry.com, for assistance.
              </li>
              <li>
                Carriers are not liable for delayed or undelivered messages.
              </li>
            </ul>
          </Callout>

          <p className="pt-2">
            <strong className="text-foreground">How you opt in.</strong> You
            consent to receive messages by texting one of our published numbers,
            by submitting your mobile number through one of our forms, or by
            otherwise expressly opting in. We reply only to conversations you
            begin, or send the messages described where you opted in. We do not
            send marketing messages to numbers that have not opted in to receive
            them.
          </p>

          <p>
            <strong className="text-foreground">How you opt out.</strong> Reply{" "}
            <strong className="text-foreground">STOP</strong>,{" "}
            <strong className="text-foreground">STOPALL</strong>,{" "}
            <strong className="text-foreground">UNSUBSCRIBE</strong>,{" "}
            <strong className="text-foreground">CANCEL</strong>,{" "}
            <strong className="text-foreground">END</strong>, or{" "}
            <strong className="text-foreground">QUIT</strong> to any message.
            You will receive a single confirmation and no further messages.
            Reply <strong className="text-foreground">START</strong> to
            resubscribe.
          </p>

          <p>
            <strong className="text-foreground">Getting help.</strong> Reply{" "}
            <strong className="text-foreground">HELP</strong> or{" "}
            <strong className="text-foreground">INFO</strong> for support
            information, or email{" "}
            <a
              href="mailto:support@assetfoundry.com"
              className="underline hover:text-foreground"
            >
              support@assetfoundry.com
            </a>
            .
          </p>

          <p>
            <strong className="text-foreground">Carriers and delivery.</strong>{" "}
            Supported carriers include AT&amp;T, Verizon Wireless, T-Mobile,
            Sprint, Boost, US Cellular, MetroPCS, and others. Carriers are not
            liable for delayed or undelivered messages, and we cannot guarantee
            that every message will be delivered.
          </p>

          <p>
            <strong className="text-foreground">Privacy.</strong> Mobile opt-in
            data and consent are never shared with third parties. See the{" "}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </Section>

        <Section heading="Acceptable use">
          <p>You agree not to use our services to:</p>
          <List
            items={[
              "Break any applicable law, or infringe anyone's rights.",
              "Send unsolicited, deceptive, or unlawful messages through our systems.",
              "Attempt to gain unauthorized access to our systems or to another user's account or messages.",
              "Interfere with the operation, security, or integrity of the service.",
              "Reverse engineer or resell the service except as a written contract permits.",
            ]}
          />
          <p>
            We may suspend or terminate access that breaches these terms, and
            where required we will report unlawful activity to the appropriate
            authorities.
          </p>
        </Section>

        <Section heading="Automated assistants">
          <p>
            Some of our services use AI systems that act on instructions you
            give them. You are responsible for the instructions you provide and
            for reviewing the results before relying on them. Automated systems
            can make mistakes; do not use them as the sole basis for decisions
            with legal, financial, medical, or safety consequences without human
            review.
          </p>
        </Section>

        <Section heading="Intellectual property">
          <p>
            The site, its content, and our software are owned by Asset Foundry
            or its licensors and are protected by intellectual property law. You
            retain ownership of content you submit, and grant us the limited
            licence needed to operate the service and respond to you.
          </p>
        </Section>

        <Section heading="Disclaimers and limitation of liability">
          <p>
            Except where a separate written contract says otherwise, the service
            is provided &ldquo;as is&rdquo; without warranties of any kind,
            express or implied, including merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
          <p>
            To the maximum extent permitted by law, Asset Foundry is not liable
            for indirect, incidental, special, consequential, or punitive
            damages, or for lost profits or data, arising from your use of the
            service. Nothing here limits liability that cannot be limited by
            law.
          </p>
        </Section>

        <Section heading="Changes">
          <p>
            We may update these terms. The effective date above shows when they
            last changed, and continued use after a change means you accept the
            updated terms. Material changes to a messaging program will be
            communicated to affected subscribers.
          </p>
        </Section>

        <Section heading="Governing law">
          <p>
            These terms are governed by the laws of the State of Florida, United
            States, without regard to its conflict-of-laws rules. The courts
            located in Palm Beach County, Florida have exclusive jurisdiction,
            except where federal contracting law or a separate written contract
            provides otherwise.
          </p>
        </Section>

        <Section heading="Contact us">
          <p>
            Asset Foundry Inc.
            <br />
            Lake Worth, Florida, United States
            <br />
            General:{" "}
            <a
              href="mailto:support@assetfoundry.com"
              className="underline hover:text-foreground"
            >
              support@assetfoundry.com
            </a>
            <br />
            Privacy:{" "}
            <a
              href="mailto:privacy@assetfoundry.com"
              className="underline hover:text-foreground"
            >
              privacy@assetfoundry.com
            </a>
          </p>
        </Section>
      </LegalPage>
      <Footer />
    </main>
  );
}
