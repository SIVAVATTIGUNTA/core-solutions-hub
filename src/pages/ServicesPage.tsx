import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Users, 
  Settings, 
  Code, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "it-consulting",
    icon: Monitor,
    title: "IT Consulting & Advisory",
    description: "Our IT Consulting & Advisory practice supports organisations in aligning their technology landscape with strategic business objectives. We provide tailored guidance across digital transformation, IT governance, enterprise architecture, operating model design and technology roadmapping.",
    capabilities: [
      "Digital transformation planning and advisory",
      "IT governance, risk and compliance",
      "Enterprise architecture development",
      "Cloud strategy and modernisation roadmaps",
      "Operating model design",
      "IT spend optimisation",
      "Vendor and platform evaluation",
    ],
    href: "/services/it-consulting",
  },
  {
    id: "workforce-solutions",
    icon: Users,
    title: "Workforce & Talent Solutions",
    description: "TGC Technologies delivers comprehensive workforce and talent solutions that enable organisations to access, manage and retain highly skilled technology professionals. We specialise in contingent staffing, contract workforce management, resource augmentation and project-based talent deployment.",
    capabilities: [
      "Contract staffing",
      "Permanent recruitment",
      "Managed workforce programmes",
      "Specialist engineering teams",
      "Project-based resource pods",
      "Rapid access to quality professionals",
      "Workforce cost optimisation",
    ],
    href: "/services/workforce-solutions",
  },
  {
    id: "managed-services",
    icon: Settings,
    title: "Managed IT Services",
    description: "Our Managed Services offering enables businesses to outsource day-to-day IT operations with confidence. We provide end-to-end support across infrastructure management, network administration, end-user support, cybersecurity monitoring and proactive maintenance.",
    capabilities: [
      "24/7 operations monitoring",
      "Incident & problem management",
      "Service desk & end-user support",
      "Network and infrastructure administration",
      "Cybersecurity monitoring",
      "Cloud operations",
      "Proactive maintenance",
    ],
    href: "/services/managed-services",
  },
  {
    id: "application-services",
    icon: Code,
    title: "Application Services",
    description: "TGC Technologies supports the full lifecycle of application development and management, from initial design to deployment, optimisation and continuous support. We apply industry best practices and modern engineering methodologies to deliver scalable, resilient applications.",
    capabilities: [
      "Custom application development",
      "Application modernisation",
      "Microservices and API engineering",
      "Integration frameworks",
      "Cloud-native engineering",
      "Performance optimisation",
      "Continuous support and maintenance",
    ],
    href: "/services/application-services",
  },
  {
    id: "emerging-tech",
    icon: Sparkles,
    title: "Digital & Emerging Technologies",
    description: "We help organisations adopt and leverage emerging technologies to create competitive advantage. Our approach focuses on identifying commercially viable use cases, accelerating implementation and ensuring seamless integration into existing technology ecosystems.",
    capabilities: [
      "AI & machine learning",
      "Robotic Process Automation",
      "Blockchain systems",
      "IoT and connected platforms",
      "Big data engineering",
      "Predictive analytics",
      "Cloud innovation",
    ],
    href: "/services/emerging-tech",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Comprehensive Technology & Workforce Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From strategic consulting to hands-on delivery, we provide end-to-end services designed to drive digital transformation and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button asChild variant="accent" size="lg">
                    <Link to="/contact">
                      Discuss Your Requirements
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-secondary rounded-xl p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h3 className="font-semibold text-foreground mb-6">Key Capabilities</h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our consultants are ready to discuss your requirements and create a tailored solution for your organisation.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Speak to a Consultant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}