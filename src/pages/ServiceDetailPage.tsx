import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Users, 
  Settings, 
  Code, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";

const servicesData = {
  "it-consulting": {
    icon: Monitor,
    title: "IT Consulting & Advisory",
    subtitle: "Strategic Technology Guidance",
    overview: "Our IT Consulting & Advisory practice supports organisations in aligning their technology landscape with strategic business objectives. We provide tailored guidance across digital transformation, IT governance, enterprise architecture, operating model design and technology roadmapping. Our consultants work closely with senior stakeholders to assess current capabilities, identify efficiencies, mitigate risks and create sustainable technology strategies.",
    capabilities: [
      "Digital transformation planning and advisory",
      "IT governance, risk and compliance",
      "Enterprise architecture development",
      "Cloud strategy and modernisation roadmaps",
      "Operating model design",
      "IT spend optimisation",
      "Vendor and platform evaluation",
    ],
    benefits: [
      "Align technology investments with business objectives",
      "Reduce operational risk through robust governance",
      "Accelerate decision-making with expert guidance",
      "Optimise IT costs and resource allocation",
      "Build scalable, future-ready technology foundations",
    ],
    approach: "We partner with stakeholders across leadership, operations and technology to deliver transformation programmes with clarity and measurable outcomes. Our approach combines strategic vision with practical execution, ensuring that recommendations translate into tangible business value.",
    technologies: ["Cloud Platforms", "Enterprise Architecture Tools", "Governance Frameworks", "Risk Assessment Tools", "Process Mapping Solutions"],
  },
  "workforce-solutions": {
    icon: Users,
    title: "Workforce & Talent Solutions",
    subtitle: "Access Top Technology Talent",
    overview: "TGC Technologies delivers comprehensive workforce and talent solutions that enable organisations to access, manage and retain highly skilled technology professionals. We specialise in contingent staffing, contract workforce management, resource augmentation and project-based talent deployment. Our global talent network, rigorous vetting process and flexible engagement models ensure rapid access to quality professionals.",
    capabilities: [
      "Contract staffing",
      "Permanent recruitment",
      "Managed workforce programmes",
      "Specialist engineering teams",
      "Project-based resource pods",
      "Rapid talent deployment",
      "Workforce cost optimisation",
    ],
    benefits: [
      "Reduce hiring timelines significantly",
      "Access pre-vetted, quality professionals",
      "Scale teams up or down with flexibility",
      "Ensure delivery continuity across projects",
      "Optimise workforce costs and contracts",
    ],
    approach: "We reduce hiring bottlenecks, strengthen capability and provide operational continuity through scalable talent models. Our recruitment specialists understand both technical requirements and cultural fit, ensuring the right match for your organisation.",
    technologies: ["Applicant Tracking Systems", "Skills Assessment Platforms", "Workforce Management Tools", "Contract Management Systems", "Performance Analytics"],
  },
  "managed-services": {
    icon: Settings,
    title: "Managed IT Services",
    subtitle: "Reliable IT Operations Support",
    overview: "Our Managed Services offering enables businesses to outsource day-to-day IT operations with confidence. We provide end-to-end support across infrastructure management, network administration, end-user support, cybersecurity monitoring and proactive maintenance. Through a blend of onshore and offshore capabilities, we deliver reliable, scalable and cost-effective operational support.",
    capabilities: [
      "24/7 operations monitoring",
      "Incident & problem management",
      "Service desk & end-user support",
      "Network and infrastructure administration",
      "Cybersecurity monitoring",
      "Cloud operations",
      "Proactive maintenance",
    ],
    benefits: [
      "Enhance system availability and performance",
      "Reduce operational costs through efficiency",
      "Strengthen security posture proactively",
      "Free internal teams for strategic initiatives",
      "Access round-the-clock expert support",
    ],
    approach: "We operate as an extension of your internal IT team through structured, SLA-based managed services. Our managed services improve performance, reduce downtime and strengthen security posture, allowing your teams to focus on what matters most.",
    technologies: ["ITSM Platforms", "Monitoring Tools", "Security Operations Tools", "Cloud Management Platforms", "Automation Frameworks"],
  },
  "application-services": {
    icon: Code,
    title: "Application Services",
    subtitle: "Full Lifecycle Application Engineering",
    overview: "TGC Technologies supports the full lifecycle of application development and management, from initial design to deployment, optimisation and continuous support. Our capabilities include custom software development, application modernisation, integration services, cloud-native development and maintenance. We apply industry best practices and modern engineering methodologies to deliver scalable, resilient and user-centric applications.",
    capabilities: [
      "Custom application development",
      "Application modernisation",
      "Microservices and API engineering",
      "Integration frameworks",
      "Cloud-native engineering",
      "Performance optimisation",
      "Continuous support and maintenance",
    ],
    benefits: [
      "Accelerate time-to-market for new applications",
      "Modernise legacy systems for improved agility",
      "Build scalable, cloud-ready architectures",
      "Enhance application performance and reliability",
      "Reduce technical debt systematically",
    ],
    approach: "Our approach ensures rapid delivery, higher quality and modern scalable architectures. We combine agile methodologies with rigorous quality assurance to deliver applications that drive measurable business outcomes.",
    technologies: ["Modern Development Frameworks", "CI/CD Pipelines", "Cloud Platforms", "API Management Tools", "Testing Automation"],
  },
  "emerging-tech": {
    icon: Sparkles,
    title: "Digital & Emerging Technologies",
    subtitle: "Innovation for Competitive Advantage",
    overview: "We help organisations adopt and leverage emerging technologies to create competitive advantage. Our expertise spans artificial intelligence (AI), machine learning (ML), robotic process automation (RPA), blockchain technologies, big data analytics and cloud innovation. Our approach focuses on identifying commercially viable use cases, accelerating implementation and ensuring seamless integration.",
    capabilities: [
      "AI & machine learning solutions",
      "Robotic Process Automation",
      "Blockchain systems",
      "IoT and connected platforms",
      "Big data engineering",
      "Predictive analytics",
      "Cloud innovation",
    ],
    benefits: [
      "Gain competitive advantage through innovation",
      "Automate processes for efficiency gains",
      "Unlock insights from data assets",
      "Future-proof your technology investments",
      "Drive operational excellence through AI",
    ],
    approach: "We help enterprises adopt next-gen technologies for differentiation and efficiency. Our focus is on identifying commercially viable use cases and ensuring seamless integration into existing technology ecosystems.",
    technologies: ["AI/ML Frameworks", "RPA Platforms", "Data Analytics Tools", "IoT Platforms", "Blockchain Solutions"],
  },
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
        <Button asChild variant="accent">
          <Link to="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-wide">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary-foreground/70 hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <ServiceIcon className="h-8 w-8 text-accent" />
            </div>
            <div>
              <p className="text-accent font-medium mb-2">{service.subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 lg:p-8 h-fit">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">Quick Facts</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Global delivery capabilities</li>
                <li>• SLA-backed engagements</li>
                <li>• Experienced consultants</li>
                <li>• Proven methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Capabilities */}
            <div className="bg-card rounded-xl p-6 lg:p-8 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Key Capabilities</h3>
              </div>
              <ul className="space-y-3">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-card rounded-xl p-6 lg:p-8 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Business Benefits</h3>
              </div>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Delivery Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {service.approach}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Discovery & Assessment", "Strategy & Planning", "Implementation", "Optimisation & Support"].map((phase, index) => (
                  <div key={phase} className="flex items-center gap-3 bg-secondary rounded-lg p-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-foreground">{phase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-card text-muted-foreground rounded-full border border-border"
                  >
                    {tech}
                  </span>
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
            Talk to Our Experts
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to discuss how {service.title} can benefit your organisation? Our consultants are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Speak to a Consultant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}