import { Link } from "react-router-dom";
import agilowLogoWhite from "@/assets/agilow-logo-white.png";

const Privacy = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <div className="text-sm text-muted-foreground mb-2 space-y-1">
          <p className="mb-0"><strong className="text-foreground">Company:</strong> Agilow, Inc.</p>
          <p className="mb-0"><strong className="text-foreground">Effective Date:</strong> April 15, 2026</p>
          <p className="mb-0"><strong className="text-foreground">Last Updated:</strong> April 15, 2026</p>
          <p className="mb-0"><strong className="text-foreground">Contact:</strong> hello@agilow.ai</p>
        </div>
        <hr className="border-border my-6" />

        <p>
          Agilow, Inc. ("Agilow," "we," "us," or "our") provides an AI-powered project intelligence platform that ingests meeting transcripts and communication data to synthesize project status, risk signals, and evidence-backed insights for software engineering teams.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect information when you use our platform at agilow.ai (the "Service"). By using the Service, you agree to the practices described in this policy.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Account Information</h3>
        <p>When you register for an account, we collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Password (stored as a hashed credential via Amazon Cognito — we never store plaintext passwords)</li>
          <li>Company name (optional)</li>
        </ul>

        <h3>1.2 Customer-Connected Data</h3>
        <p>When you connect third-party tools to Agilow, we access and process data from those tools on your behalf:</p>

        <p><strong>Granola (meeting transcripts):</strong></p>
        <ul>
          <li>Meeting transcripts from folders you explicitly select during onboarding</li>
          <li>Meeting metadata (date, participants, title)</li>
          <li>We do not access folders or meetings you have not selected</li>
        </ul>

        <p><strong>Slack (messaging data):</strong></p>
        <ul>
          <li>Messages from channels you explicitly select during onboarding</li>
          <li>Channel metadata (name, date range)</li>
          <li>We do not access private channels unless your Slack workspace administrator has explicitly granted access</li>
        </ul>

        <p>You control which data sources are connected and which folders or channels are selected. Nothing is selected by default — all selections require your explicit opt-in.</p>

        <h3>1.3 AI-Processed Outputs</h3>
        <p>We use the data you connect to generate:</p>
        <ul>
          <li>Project signals (decisions, blockers, risks, action items, milestones, lessons learned)</li>
          <li>Project status snapshots and summaries</li>
          <li>Risk assessments grounded in source evidence</li>
        </ul>
        <p>All AI-generated outputs are linked to the source evidence from your connected data. We do not surface claims that cannot be grounded in data you have provided.</p>

        <h3>1.4 Usage Data</h3>
        <p>We automatically collect limited technical data to operate and improve the Service:</p>
        <ul>
          <li>Log data (API request timestamps, error logs, sync job status)</li>
          <li>Device and browser type (for the web interface)</li>
          <li>Feature usage patterns (which views are accessed, sync frequency)</li>
        </ul>
        <p>We do not use cookies for advertising or cross-site tracking.</p>

        <h3>1.5 Communications</h3>
        <p>If you contact us for support or send us feedback, we retain those communications to respond to you and improve the Service.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li><strong>Provide the Service</strong> — process your connected data, generate project signals and snapshots, and display insights in the dashboard</li>
          <li><strong>Authenticate your account</strong> — verify your identity and maintain secure sessions</li>
          <li><strong>Operate the ingestion pipeline</strong> — queue and process sync jobs on your behalf</li>
          <li><strong>Monitor and improve reliability</strong> — detect and respond to errors, outages, and performance issues</li>
          <li><strong>Communicate with you</strong> — send service notifications, security alerts, and responses to your support requests</li>
          <li><strong>Comply with legal obligations</strong> — retain records as required by applicable law</li>
        </ul>
        <p>We do not use your data to train AI models. Your meeting transcripts and Slack messages are processed solely to provide you with the Agilow Service and are not used to improve OpenAI's models (we use the OpenAI API with data not used for training per OpenAI's API data usage policy).</p>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell your personal information. We do not share your data with third parties for advertising purposes.</p>
        <p>We share data only with the following categories of sub-processors, and only to the extent necessary to provide the Service:</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-foreground">Sub-Processor</th>
                <th className="text-left py-2 pr-4 text-foreground">Purpose</th>
                <th className="text-left py-2 pr-4 text-foreground">Location</th>
                <th className="text-left py-2 text-foreground">Security Certifications</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Amazon Web Services (AWS)</td>
                <td className="py-2 pr-4">Hosting, database, compute, secrets management</td>
                <td className="py-2 pr-4">United States (us-east-1)</td>
                <td className="py-2">SOC 2 Type 2, ISO 27001</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">OpenAI</td>
                <td className="py-2 pr-4">AI signal extraction (transcript and message analysis)</td>
                <td className="py-2 pr-4">United States</td>
                <td className="py-2">SOC 2 Type 2</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Granola</td>
                <td className="py-2 pr-4">Meeting transcript source (via OAuth)</td>
                <td className="py-2 pr-4">United States</td>
                <td className="py-2">—</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Slack</td>
                <td className="py-2 pr-4">Messaging data source (via OAuth)</td>
                <td className="py-2 pr-4">United States</td>
                <td className="py-2">SOC 2 Type 2, ISO 27001</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>We may also disclose your information if required to do so by law, court order, or government authority, or to protect the rights, property, or safety of Agilow, our customers, or the public.</p>

        <h2>4. Data Storage and Security</h2>

        <h3>Storage Location</h3>
        <p>All customer data is stored in AWS us-east-1 (Northern Virginia, United States). We do not transfer or store data outside the United States.</p>

        <h3>Security Measures</h3>
        <p>We implement the following security controls to protect your data:</p>
        <ul>
          <li><strong>Encryption at rest:</strong> All data in Aurora (PostgreSQL) is encrypted using AES-256 via AWS-managed keys</li>
          <li><strong>Encryption in transit:</strong> All data transmitted between your browser, our servers, and third-party APIs is encrypted using TLS 1.2 or higher</li>
          <li><strong>Access control:</strong> Database access is restricted to our application backend and processing infrastructure within a private AWS VPC; no public database access is permitted</li>
          <li><strong>Credential management:</strong> OAuth tokens and API keys are stored in AWS Secrets Manager and never in application code or environment variables</li>
          <li><strong>DDoS and WAF protection:</strong> AWS Shield Standard and AWS WAF are applied at the application edge</li>
        </ul>
        <p>A complete description of our security controls is available in our Information Security Policy, provided upon request.</p>

        <h2>5. Data Retention</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-foreground">Data Type</th>
                <th className="text-left py-2 text-foreground">Retention Period</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Account information</td>
                <td className="py-2">Until account deletion, then 30 days</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Connected source data (transcripts, messages)</td>
                <td className="py-2">Until integration disconnect or account deletion, then 30 days</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">AI-generated signals and snapshots</td>
                <td className="py-2">Until account deletion, then 30 days</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Usage logs and error logs</td>
                <td className="py-2">90 days</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">Support communications</td>
                <td className="py-2">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>When your account is deleted or you disconnect an integration, the associated data is permanently deleted from our production database within 30 days. Automated AWS Aurora backups expire within our 7-day backup retention window.</p>

        <h2>6. Your Rights and Choices</h2>

        <h3>Access and Portability</h3>
        <p>You may request a copy of the personal data we hold about you at any time by contacting hello@agilow.ai.</p>

        <h3>Correction</h3>
        <p>You may update your account information directly within the Service. For corrections to processed data, contact hello@agilow.ai.</p>

        <h3>Deletion</h3>
        <p>You may request deletion of your account and all associated data at any time by contacting hello@agilow.ai. We will process deletion requests within 30 days.</p>

        <h3>Revoking Integrations</h3>
        <p>You may disconnect any connected tool (Granola, Slack) at any time from within the Service. Upon disconnection, we will stop ingesting new data from that source. Previously processed data is retained until you request deletion.</p>

        <h3>California Privacy Rights (CCPA)</h3>
        <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
        <ul>
          <li><strong>Right to Know:</strong> You may request that we disclose the categories and specific pieces of personal information we have collected about you</li>
          <li><strong>Right to Delete:</strong> You may request deletion of personal information we have collected, subject to certain exceptions</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any CCPA rights</li>
          <li><strong>Right to Opt-Out of Sale:</strong> We do not sell personal information</li>
        </ul>
        <p>To exercise any of these rights, contact us at hello@agilow.ai. We will respond to verifiable requests within 45 days.</p>

        <h2>7. Security of Third-Party Integrations</h2>
        <p>When you connect Granola or Slack to Agilow, you authorize Agilow to access data from those services on your behalf using OAuth 2.0. We store your OAuth tokens in AWS Secrets Manager.</p>
        <p>You may revoke Agilow's access to any connected tool at any time:</p>
        <ul>
          <li><strong>From within Agilow:</strong> Disconnect the integration in the Settings page</li>
          <li><strong>From the source platform:</strong> Revoke access in your Granola or Slack account settings</li>
        </ul>
        <p>We will not retain or use your tokens after revocation.</p>

        <h2>8. Children's Privacy</h2>
        <p>The Agilow Service is not directed at individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will delete it promptly.</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or Service features. When we make material changes, we will:</p>
        <ul>
          <li>Update the "Last Updated" date at the top of this policy</li>
          <li>Notify active customers by email at least 14 days before the changes take effect</li>
        </ul>
        <p>Your continued use of the Service after the effective date of the updated policy constitutes your acceptance of the changes.</p>

        <h2>10. Contact Us</h2>
        <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
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
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
