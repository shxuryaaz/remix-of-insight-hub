import { Link } from "react-router-dom";
import agilowLogoWhite from "@/assets/agilow-logo-white.png";

const Security = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Security at Agilow</h1>

        <p>
          At Agilow, we process sensitive project and communication data on behalf of our customers. We take that responsibility seriously. This page summarizes how we protect your data.
        </p>
        <p>
          For questions or to report a security issue, contact us at <strong>hello@agilow.ai</strong>.
        </p>

        <hr className="border-border my-6" />

        <h2>Infrastructure</h2>
        <p>
          Agilow is hosted on a major cloud platform with a strong independent security certification track record. Our infrastructure is designed with isolation and least-privilege access in mind:
        </p>
        <ul>
          <li>All production databases are deployed in private networks with no direct public internet access</li>
          <li>Application services are the only authorized path to customer data</li>
          <li>All cloud credentials and integration tokens are stored in a dedicated secrets management service — never in code or configuration files</li>
          <li>Deployments are fully automated via a CI/CD pipeline; there is no manual access to production servers</li>
        </ul>

        <h2>Data Protection</h2>
        <ul>
          <li>All customer data is encrypted at rest and in transit</li>
          <li>All data is stored in the United States</li>
          <li>We ingest only the data sources you explicitly connect and select — nothing is accessed by default</li>
          <li>OAuth tokens for connected tools are revocable by you at any time from within the application</li>
        </ul>

        <h2>Application Security</h2>
        <ul>
          <li>All code changes go through peer review before being deployed</li>
          <li>Automated security and quality checks run on every change</li>
          <li>We follow OWASP secure development guidelines and review them annually</li>
          <li>AI-generated outputs are always grounded in your source data — we do not surface unverifiable claims</li>
        </ul>

        <h2>Access Control</h2>
        <ul>
          <li>Access to production systems is restricted to a small engineering team</li>
          <li>Multi-factor authentication is required for all production system access</li>
          <li>Access permissions follow the principle of least privilege and are reviewed regularly</li>
          <li>All access is revoked within 24 hours when a team member departs</li>
        </ul>

        <h2>Responsible Disclosure</h2>
        <p>
          If you believe you have found a security vulnerability in Agilow, we ask that you report it to us privately before disclosing it publicly. Please email <strong>hello@agilow.ai</strong> with a description of the issue and steps to reproduce it. We will acknowledge your report within 2 business days and work to resolve confirmed issues promptly.
        </p>
        <p>
          We do not currently offer a bug bounty program, but we genuinely appreciate responsible disclosure and will credit researchers who report valid issues if they wish.
        </p>

        <h2>Compliance and Documentation</h2>
        <p>
          We do not currently hold formal third-party security certifications (SOC 2, ISO 27001). We are building our security program with these certifications as a future goal as we scale.
        </p>
        <p>The following documentation is available to customers and prospects upon request:</p>
        <ul>
          <li>Information Security Policy</li>
          <li>Business Continuity and Disaster Recovery (BCDR) Plan</li>
          <li>Privacy Policy — <Link to="/privacy">agilow.ai/privacy</Link></li>
          <li>Sub-processors list</li>
        </ul>
        <p>
          To request any of these documents, contact <strong>hello@agilow.ai</strong>.
        </p>

        <hr className="border-border my-6" />

        <p className="text-sm italic">Last updated: April 2026</p>
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

export default Security;
