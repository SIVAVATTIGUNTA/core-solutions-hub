import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Database, 
  Shield, 
  Cpu,
  Network,
  BarChart3,
  ArrowRight
} from "lucide-react";

const technologies = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "Enterprise cloud solutions across AWS, Microsoft Azure and Google Cloud Platform.",
    items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Cloud Migration", "Multi-Cloud Strategy"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive solutions powered by modern AI frameworks.",
    items: ["TensorFlow", "PyTorch", "Azure ML", "Computer Vision", "Natural Language Processing"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Comprehensive data engineering and business intelligence capabilities.",
    items: ["Power BI", "Tableau", "Snowflake", "Apache Spark", "Data Warehousing"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise security solutions to protect your digital assets and infrastructure.",
    items: ["Security Operations", "Identity Management", "Compliance Monitoring", "Threat Detection", "Security Architecture"],
  },
  {
    icon: Network,
    title: "Infrastructure",
    description: "Modern infrastructure solutions for scalable and resilient operations.",
    items: ["Kubernetes", "Docker", "Terraform", "Ansible", "CI/CD Pipelines"],
  },
  {
    icon: BarChart3,
    title: "Automation & RPA",
    description: "Process automation to drive efficiency and reduce operational costs.",
    items: ["UiPath", "Blue Prism", "Power Automate", "Process Mining", "Intelligent Automation"],
  },
];

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Technologies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Technology Expertise That Drives Results
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We leverage industry-leading technologies and platforms to deliver solutions that are scalable, secure and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="card-elevated p-6 lg:p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <tech.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {tech.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Technology Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
              We partner with leading technology providers to deliver best-in-class solutions for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">Microsoft</div>
            <div className="text-2xl font-bold text-muted-foreground">AWS</div>
            <div className="text-2xl font-bold text-muted-foreground">Google Cloud</div>
            <div className="text-2xl font-bold text-muted-foreground">ServiceNow</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Leverage the Right Technology for Your Business
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our technology experts can help you select and implement the right solutions for your specific needs.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Discuss Your Technology Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}