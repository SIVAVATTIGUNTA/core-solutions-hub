import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These Terms & Conditions govern the use of TGC Technologies' website and services. By accessing our website or engaging our services, you agree to be bound by these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Use of Website</h2>
                <p className="text-muted-foreground mb-4">By using this website, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the website only for lawful purposes</li>
                  <li>Not engage in any activity that could damage, disable or impair the website</li>
                  <li>Not attempt to gain unauthorised access to any part of the website</li>
                  <li>Not use the website in any way that violates applicable laws or regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, graphics, logos, images and software, is the property of TGC Technologies or its content suppliers and is protected by UK and international copyright, trademark and other intellectual property laws. You may not reproduce, distribute, modify or create derivative works from any content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Engagements</h2>
                <p className="text-muted-foreground mb-4">
                  Our professional services are governed by separate contractual agreements. These Terms & Conditions apply to website use and general enquiries. Specific service engagements will be subject to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Individual statements of work or service agreements</li>
                  <li>Master service agreements where applicable</li>
                  <li>Project-specific terms and conditions</li>
                  <li>Service level agreements for managed services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Accuracy</h2>
                <p className="text-muted-foreground">
                  While we strive to ensure that all information on this website is accurate and up-to-date, we make no warranties or representations about the completeness, accuracy or reliability of any information. Content is provided for informational purposes only and should not be relied upon as professional advice without further consultation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, TGC Technologies shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of or inability to use this website. This includes, without limitation, damages for loss of profits, goodwill, data or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  This website may contain links to third-party websites. These links are provided for convenience only and do not signify our endorsement of such websites. We are not responsible for the content, accuracy or practices of any third-party websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold harmless TGC Technologies, its officers, directors, employees and agents from any claims, damages, losses or expenses arising from your use of this website or violation of these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website following any changes constitutes acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms & Conditions, please contact:
                </p>
                <div className="bg-secondary rounded-lg p-6">
                  <p className="text-foreground font-medium">Legal Department</p>
                  <p className="text-muted-foreground">TGC Technologies</p>
                  <p className="text-muted-foreground">85 Uxbridge Road, 1st Floor</p>
                  <p className="text-muted-foreground">Ealing Cross, London W5 5BW</p>
                  <p className="text-accent mt-2">legal@tgcworld.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="container-wide text-center">
          <p className="text-muted-foreground mb-4">Have questions about our terms?</p>
          <Button asChild variant="accent">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}