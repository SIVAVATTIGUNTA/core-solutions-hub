import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerNavigation = {
  services: [
    { name: "IT Consulting & Advisory", href: "/services/it-consulting" },
    { name: "Workforce & Talent Solutions", href: "/services/workforce-solutions" },
    { name: "Managed IT Services", href: "/services/managed-services" },
    { name: "Application Services", href: "/services/application-services" },
    { name: "Digital & Emerging Technologies", href: "/services/emerging-tech" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-wide py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading text-xl font-bold">
                TGC<span className="text-accent">.</span>Technologies
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/80 max-w-xs">
              Global technology consulting and workforce solutions. Empowering organisations to thrive in a digital-first world.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>85 Uxbridge Road, 1st Floor,<br />Ealing Cross, London W5</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <a href="mailto:info@tgcworld.com" className="hover:text-accent transition-colors">
                  info@tgcworld.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <a href="tel:+442012345678" className="hover:text-accent transition-colors">
                  +44 20 1234 5678
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Services
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-xs text-primary-foreground/60 text-center">
            &copy; {new Date().getFullYear()} TGC Technologies. All rights reserved. Registered in England & Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}