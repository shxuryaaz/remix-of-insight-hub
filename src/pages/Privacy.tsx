import { Link } from "react-router-dom";
import agilowLogoWhite from "@/assets/agilow-logo-white.png";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-primary py-4 px-6">
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <div className="text-sm text-muted-foreground mb-2 space-y-1">
          <p className="mb-0"><strong className="text-foreground">Company:</strong> Agilow, Inc.</p>
          <p className="mb-0"><strong className="text-foreground">Effective Date:</strong> April 15, 2026</p>
          <p className="mb-0"><strong className="text-foreground">Last Updated:</strong> April 15, 2026</p>
          <p className="mb-0"><strong className="text-foreground">Contact:</strong> hello@agilow.ai</p>
        </div>
        <hr className="border-border my-6" />

        <p>
          Agilow, Inc. ("Agilow," "we," "us," or "our") provides an AI-powered project intelligence platform that helps software engineering teams synthesize project status, risk signals, and insights from their existing tools.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect information when you use our platform (the "Service"). By using the Service, you agree to the practices described in this policy.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Account Information</h3>
        <p>When you register for an account, we collect basic information such as your name, email address, and company name.</p>

        <h3>1.2 Customer-Connected Data</h3>
        <p>When you connect third-party tools to Agilow, we access and process data from those tools on your behalf — for example, meeting transcripts or team communication messages from sources you explicitly select. You control which tools are connected and which data sources are included. Nothing is selected by default; all connections require your explicit opt-in.</p>

        <h3>1.3 Usage Data</h3>
        <p>We collect limited technical information to operate and improve the Service, such as log data, device type, and feature usage patterns. This information is used solely for operational purposes and is not used for advertising.</p>

        <h3>1.4 Communications</h3>
        <p>If you contact us for support or send us feedback, we retain those communications to respond to you and improve the Service.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and operate the Service on your behalf</li>
          <li>Authenticate your account and maintain secure sessions</li>
          <li>Process and analyze your connected data to generate project insights</li>
          <li>Monitor and maintain the reliability and security of the Service</li>
          <li>Communicate with you about your account, updates, and support requests</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
        <p>We do not use your data to train AI models. Your connected source data is processed solely to provide you with the Service.</p>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell your personal information. We do not share your data with third parties for advertising purposes.</p>
        <p>We work with a limited number of third-party service providers to operate the Service — including cloud infrastructure, authentication, and AI processing providers. These providers access your data only as necessary to perform services on our behalf and are contractually required to protect it.</p>
        <p>We may also disclose your information if required by law, court order, or government authority, or to protect the rights, property, or safety of Agilow, our customers, or the public.</p>
        <p>A full list of our sub-processors is available upon request at hello@agilow.ai.</p>

        <h2>4. Data Storage and Security</h2>
        <p>All customer data is stored in the United States. We do not transfer or store data outside the United States.</p>
        <p>We implement industry-standard security measures to protect your data, including encryption at rest and in transit, access controls limiting data access to authorized systems and personnel, and monitoring for unauthorized access or anomalous activity. A summary of our security practices is available upon request.</p>

        <h2>5. Data Retention</h2>
        <p>We retain your data for as long as your account is active. When you delete your account or disconnect an integration, the associated data is permanently deleted within 30 days. You may also request deletion at any time by contacting hello@agilow.ai.</p>

        <h2>6. Your Rights and Choices</h2>

        <h3>Access, Correction, and Deletion</h3>
        <p>You may request a copy of the personal data we hold about you, ask us to correct inaccurate data, or request deletion of your data at any time by contacting hello@agilow.ai. We will respond within 30 days.</p>

        <h3>Revoking Integrations</h3>
        <p>You may disconnect any connected tool at any time from within the Service. Upon disconnection, we will stop ingesting new data from that source.</p>

        <h3>California Privacy Rights (CCPA)</h3>
        <p>If you are a California resident, you have the right to know what personal information we collect and how it is used, request deletion of your personal information, and opt out of the sale of your personal information (we do not sell personal information). To exercise these rights, contact us at hello@agilow.ai. We will respond to verifiable requests within 45 days and will not discriminate against you for exercising these rights.</p>

        <h2>7. Children's Privacy</h2>
        <p>The Service is not directed at individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have done so, we will delete it promptly.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. When we make material changes, we will update the "Last Updated" date at the top of this policy and notify active customers by email at least 14 days before the changes take effect.</p>

        <h2>9. Contact Us</h2>
        <p>If you have questions or requests regarding this Privacy Policy, please contact us:</p>
        <p>
          <strong>Agilow, Inc.</strong><br />
          5837 Darlington Road Apt 14<br />
          Pittsburgh, PA 15217<br />
          United States
        </p>
        <p>
          <strong>Email:</strong> hello@agilow.ai<br />
          <strong>Privacy Policy URL:</strong> agilow.ai/privacy
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

export default Privacy;
