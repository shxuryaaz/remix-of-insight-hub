import { Link } from "react-router-dom";
import agilowLogoWhite from "@/assets/agilow-logo-white.png";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-primary py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={agilowLogoWhite} alt="Agilow" className="h-8" />
          </Link>
          <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <article className="container mx-auto px-6 py-16 max-w-3xl prose prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-accent prose-strong:text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Terms and Conditions</h1>
        <div className="text-sm text-muted-foreground mb-2 space-y-1">
          <p className="mb-0"><strong className="text-foreground">Company:</strong> Agilow, Inc.</p>
          <p className="mb-0"><strong className="text-foreground">Effective Date:</strong> April 17, 2026</p>
          <p className="mb-0"><strong className="text-foreground">Last Updated:</strong> April 17, 2026</p>
          <p className="mb-0"><strong className="text-foreground">Contact:</strong> hello@agilow.ai</p>
        </div>
        <hr className="border-border my-6" />

        <p>
          These Terms and Conditions ("Terms") govern your access to and use of the services provided by Agilow, Inc. ("Agilow," "we," "us," or "our"), including our website at agilow.ai and our AI-powered project intelligence platform (collectively, the "Service").
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 18 years of age and capable of entering into a legally binding agreement to use the Service. By using the Service, you represent and warrant that you meet these requirements.
        </p>
        <p>
          If you are using the Service on behalf of a company or other entity, you represent that you have the authority to bind that entity to these Terms, and "you" refers to both you individually and that entity.
        </p>

        <h2>2. Your Account</h2>
        <p>To use the Service, you must register for an account. You agree to:</p>
        <ul>
          <li>Provide accurate and complete information during registration</li>
          <li>Keep your account credentials confidential</li>
          <li>Notify us promptly of any unauthorized access to your account</li>
          <li>Be responsible for all activity that occurs under your account</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe are being used fraudulently or in violation of applicable law.
        </p>

        <h2>3. The Service</h2>
        <p>
          Agilow provides a software platform that ingests data from your connected tools, analyzes that data using artificial intelligence, and generates structured project insights. The specific features and capabilities of the Service may evolve over time, and we may add, modify, or discontinue features at our discretion.
        </p>
        <p>
          The Service is provided as a subscription and, at our discretion, in free trial or evaluation form. Pricing, billing, and subscription terms are provided separately when applicable.
        </p>

        <h2>4. Your Content and Data</h2>

        <h3>4.1 Your Ownership</h3>
        <p>
          You retain all rights to the data you provide to or connect with the Service, including meeting transcripts, messages, and other content from your connected tools ("Customer Data"). We do not claim ownership of your Customer Data.
        </p>

        <h3>4.2 License to Agilow</h3>
        <p>
          You grant Agilow a limited license to access, process, and use your Customer Data solely to provide the Service to you, maintain and improve reliability, and comply with applicable law.
        </p>

        <h3>4.3 AI-Generated Outputs</h3>
        <p>
          The Service generates insights, summaries, and analyses based on your Customer Data. These outputs are generated using artificial intelligence and may not always be accurate or complete. You are responsible for reviewing and validating any output before relying on it for decision-making.
        </p>

        <h3>4.4 Privacy</h3>
        <p>
          Our collection and handling of personal information is described in our <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service in violation of any applicable law or regulation</li>
          <li>Upload or connect data that you do not have the right to share with Agilow</li>
          <li>Attempt to reverse engineer, decompile, or gain unauthorized access to the Service</li>
          <li>Use the Service to harm, harass, or infringe the rights of others</li>
          <li>Interfere with the normal operation of the Service or attempt to disrupt its security</li>
          <li>Use the Service to build a competing product or service</li>
        </ul>
        <p>
          We reserve the right to investigate suspected violations and to suspend or terminate accounts that violate these Terms.
        </p>

        <h2>6. Third-Party Integrations</h2>
        <p>
          The Service integrates with third-party tools (such as meeting and communication platforms) at your direction. You are responsible for your use of those third-party tools and for complying with their respective terms of service. Agilow is not responsible for the availability, accuracy, or content of third-party services.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          The Service, including its software, design, and content (excluding Customer Data), is the property of Agilow or its licensors and is protected by intellectual property laws. These Terms do not grant you any rights in our intellectual property other than the limited right to use the Service as provided.
        </p>
        <p>
          Any feedback, suggestions, or ideas you provide regarding the Service may be used by Agilow without restriction or compensation.
        </p>

        <h2>8. Confidentiality</h2>
        <p>
          Both parties may have access to non-public information of the other party in connection with the Service. Each party agrees to protect such information with reasonable care, to use it only to perform its obligations or exercise its rights under these Terms, and not to disclose it to third parties except as required by law.
        </p>

        <h2>9. Fees and Payment</h2>
        <p>If you subscribe to a paid plan, fees are described in the applicable order form or subscription page. Unless otherwise specified:</p>
        <ul>
          <li>Fees are billed in advance on a recurring basis</li>
          <li>Fees are non-refundable except as required by law</li>
          <li>You are responsible for any taxes associated with your use of the Service</li>
          <li>We may change pricing with reasonable advance notice</li>
        </ul>

        <h2>10. Disclaimers</h2>
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied. To the fullest extent permitted by law, Agilow disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <p>
          We do not warrant that the Service will be uninterrupted, error-free, or that AI-generated outputs will be accurate or complete. You are responsible for reviewing and validating any output before relying on it.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Agilow's total liability to you for any claim arising out of or relating to these Terms or the Service shall not exceed the greater of (a) the amount you paid Agilow in the 12 months preceding the claim, or (b) one hundred US dollars ($100).
        </p>
        <p>
          In no event shall Agilow be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, even if we have been advised of the possibility of such damages.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Agilow and its affiliates, officers, employees, and agents from any claims, damages, liabilities, or expenses (including reasonable attorneys' fees) arising out of your use of the Service, your violation of these Terms, or your violation of any rights of another party.
        </p>

        <h2>13. Term and Termination</h2>
        <p>These Terms remain in effect as long as you use the Service.</p>
        <p>
          You may stop using the Service and request deletion of your account at any time by contacting <strong>hello@agilow.ai</strong>.
        </p>
        <p>
          We may suspend or terminate your access to the Service at any time, with or without cause, including if we reasonably believe you have violated these Terms. Upon termination, your right to use the Service ends, and we will delete your data in accordance with our data retention practices described in the Privacy Policy.
        </p>
        <p>
          Sections that by their nature should survive termination will do so, including intellectual property, confidentiality, disclaimers, limitation of liability, indemnification, and governing law.
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Non-material changes (such as clarifications, typographical corrections, or updates reflecting new features) may take effect immediately upon posting.
        </p>
        <p>
          For material changes — such as changes to pricing, core features, or how we handle your data — we will update the "Last Updated" date and notify active customers by email or in-app notice at least 14 days before the changes take effect.
        </p>
        <p>
          Your continued use of the Service after the effective date of any change constitutes your acceptance of the updated Terms.
        </p>

        <h2>15. Governing Law and Disputes</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of laws principles.
        </p>
        <p>
          Any dispute arising out of or relating to these Terms or the Service shall be resolved exclusively in the state or federal courts located in Delaware, and you consent to the personal jurisdiction of those courts.
        </p>

        <h2>16. Miscellaneous</h2>
        <ul>
          <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy and any order form, constitute the entire agreement between you and Agilow regarding the Service</li>
          <li><strong>Severability:</strong> If any provision of these Terms is held to be unenforceable, the remaining provisions will remain in effect</li>
          <li><strong>No Waiver:</strong> Our failure to enforce any right or provision does not constitute a waiver of that right or provision</li>
          <li><strong>Assignment:</strong> You may not assign these Terms without our written consent; we may assign these Terms in connection with a merger, acquisition, or sale of assets</li>
        </ul>

        <h2>17. Contact</h2>
        <p>For questions about these Terms, please contact us:</p>
        <p>
          <strong>Agilow, Inc.</strong><br />
          5837 Darlington Road Apt 14<br />
          Pittsburgh, PA 15217<br />
          United States
        </p>
        <p>
          <strong>Email:</strong> hello@agilow.ai
        </p>
      </article>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-primary-foreground/50 text-sm">© 2026 Agilow. All rights reserved.</span>
          <div className="flex gap-6 text-primary-foreground/40 text-sm">
            <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">Privacy</Link>
            <Link to="/security" className="hover:text-primary-foreground/70 transition-colors">Security</Link>
            <Link to="/terms" className="hover:text-primary-foreground/70 transition-colors">Terms</Link>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
