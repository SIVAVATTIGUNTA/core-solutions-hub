import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container-wide">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-foreground/70 hover:text-accent mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This Privacy Policy outlines how TGC Technologies collects, uses, stores and protects personal information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Personal information (name, email address, telephone number)</li>
                  <li>Business information (company name, job title)</li>
                  <li>Website usage data (IP address, browser type, pages visited)</li>
                  <li>Application data (CVs, career submissions)</li>
                  <li>Communication records (enquiries, correspondence)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Respond to enquiries and provide requested services</li>
                  <li>Process job applications and recruitment activities</li>
                  <li>Deliver and improve our services</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Send relevant communications where consent has been provided</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Legal Basis for Processing</h2>
                <p className="text-muted-foreground">
                  We process personal data on the following legal bases: consent, contract performance, legitimate interests, and legal obligations. We will always ensure that we have a valid legal basis before processing your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection</h2>
                <p className="text-muted-foreground mb-4">We implement appropriate security measures to protect your personal data:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Data is securely stored and encrypted where appropriate</li>
                  <li>Access is restricted to authorised personnel only</li>
                  <li>Regular security assessments and updates are performed</li>
                  <li>Staff are trained on data protection requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. When data is no longer needed, it is securely deleted or anonymised.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">Under UK GDPR, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ('right to be forgotten')</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Rights related to automated decision-making</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal data to third parties. We may share data with trusted service providers who assist us in operating our business, subject to appropriate contractual safeguards. Any international transfers are conducted in compliance with UK GDPR requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  For data-related requests or questions about this policy, please contact:
                </p>
                <div className="bg-secondary rounded-lg p-6">
                  <p className="text-foreground font-medium">Data Protection Officer</p>
                  <p className="text-muted-foreground">TGC Technologies</p>
                  <p className="text-muted-foreground">85 Uxbridge Road, 1st Floor</p>
                  <p className="text-muted-foreground">Ealing Cross, London W5 5BW</p>
                  <p className="text-accent mt-2">privacy@tgcworld.co.uk</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Complaints</h2>
                <p className="text-muted-foreground">
                  If you are not satisfied with our response to a data protection concern, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="container-wide text-center">
          <p className="text-muted-foreground mb-4">Have questions about how we handle your data?</p>
          <Button asChild variant="accent">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}