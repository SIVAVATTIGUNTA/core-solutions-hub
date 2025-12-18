import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
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
            Cookie Policy
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
                  This Cookie Policy explains how TGC Technologies uses cookies and similar technologies on our website. By continuing to use our website, you consent to our use of cookies as described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies help us understand how visitors interact with our website and enable us to improve your browsing experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management and account access. You cannot opt out of these cookies as they are essential for the website to operate.
                    </p>
                  </div>

                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to measure and improve the performance of our website.
                    </p>
                  </div>

                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies enable enhanced functionality and personalisation, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>

                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies may be set through our website by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other websites. They do not directly store personal information but are based on uniquely identifying your browser and device.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To ensure the website functions correctly</li>
                  <li>To analyse website traffic and usage patterns</li>
                  <li>To remember your preferences and settings</li>
                  <li>To improve website performance and user experience</li>
                  <li>To understand how visitors find and use our website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and some features may no longer function as intended.
                </p>
                <p className="text-muted-foreground mb-4">
                  Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground">
                  Some cookies on our website are placed by third-party services that appear on our pages. We do not control the use of these cookies and you should check the relevant third party's website for more information about how they use cookies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. Please check this page periodically for any updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about our use of cookies, please contact:
                </p>
                <div className="bg-secondary rounded-lg p-6">
                  <p className="text-foreground font-medium">TGC Technologies</p>
                  <p className="text-muted-foreground">85 Uxbridge Road, 1st Floor</p>
                  <p className="text-muted-foreground">Ealing Cross, London W5 5BW</p>
                  <p className="text-accent mt-2">privacy@tgcworld.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="container-wide text-center">
          <p className="text-muted-foreground mb-4">Have questions about cookies?</p>
          <Button asChild variant="accent">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}