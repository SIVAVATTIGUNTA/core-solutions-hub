import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const benefits = [
  "Competitive compensation packages",
  "Career progression frameworks",
  "Exposure to international projects",
  "Continuous technical training",
  "Certification support",
  "Hybrid and flexible working options",
  "Private health cover options",
  "Paid holidays and flexible leave",
  "Inclusive and diverse culture",
];

const roles = [
  { title: "Software Engineers", department: "Engineering" },
  { title: "Cloud Architects", department: "Technology" },
  { title: "DevOps Engineers", department: "Engineering" },
  { title: "Data Engineers", department: "Data & Analytics" },
  { title: "Project Managers", department: "Delivery" },
  { title: "Business Analysts", department: "Consulting" },
  { title: "Cybersecurity Specialists", department: "Security" },
  { title: "Solution Architects", department: "Technology" },
];

const values = [
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work on international projects with clients across multiple continents and industries.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Access continuous training, certifications and professional development programmes.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Clear progression frameworks and opportunities to advance your career.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements that support your wellbeing and personal commitments.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Careers at TGC</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Join Our Global Workforce
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              At TGC Technologies, we believe that exceptional people drive exceptional outcomes. We are continuously expanding our global workforce with professionals who are passionate about technology, problem-solving and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a rewarding career environment with opportunities for growth and development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-elevated p-6 lg:p-8 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 mx-auto">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Roles */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Employee Benefits
              </h2>
              <div className="bg-card rounded-xl p-8 shadow-elevated">
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Current Opportunities */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Current Opportunities
              </h2>
              <div className="space-y-3">
                {roles.map((role) => (
                  <div
                    key={role.title}
                    className="bg-card rounded-lg p-4 shadow-elevated flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{role.title}</h4>
                      <p className="text-sm text-muted-foreground">{role.department}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact">Apply</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Future with TGC?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore opportunities and take the next step in your technology career.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}