import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { 
  Users, 
  Settings, 
  Sparkles,
  Code,
  Briefcase,
  ArrowRight,
  Globe,
  CheckCircle,
  Building2,
  Lightbulb,
  Target,
  Layers
} from "lucide-react";
import consultingHero from "@/assets/consulting-hero.jpg";
import itConsulting from "@/assets/it-consulting.jpg";
import cloudTech from "@/assets/cloud-tech.jpg";
import workforceTeam from "@/assets/workforce-team.jpg";
import techPartners from "@/assets/tech-partners.jpg";
import digitalTransformation from "@/assets/digital-transformation.jpg";

const services = [
  {
    id: "workforce",
    num: "01",
    title: "Workforce Solutions",
    subtitle: "Global Workforce Services & Solutions",
    description: "Experience the power of AI giving you the upper hand by picking the top fit from a pool of CVs with TGC's contingent workforce management solutions.",
    icon: Users,
    href: "/services/workforce-solutions",
  },
  {
    id: "managed",
    num: "02",
    title: "Managed Services",
    subtitle: "Managed Services With World Class Experts",
    description: "We provide a variety of managed services to assist your business with everything from networking, data, and infrastructure management all the way up to security.",
    icon: Settings,
    href: "/services/managed-services",
  },
  {
    id: "digital",
    num: "03",
    title: "Digital Services",
    subtitle: "Digital & Emerging Technologies",
    description: "We provide bespoke digital solutions for various industries with our innovative ideas and advanced tools that help you capture your business goals.",
    icon: Sparkles,
    href: "/services/emerging-tech",
  },
  {
    id: "application",
    num: "04",
    title: "Application",
    subtitle: "Application Services",
    description: "The power of digital transformation lies in our deep technology expertise and we offer a range of diverse applications and organizational solutions.",
    icon: Code,
    href: "/services/application-services",
  },
  {
    id: "consulting",
    num: "05",
    title: "Consulting",
    subtitle: "IT Consulting & Advisory",
    description: "Strategic guidance on digital transformation, IT governance, enterprise architecture and technology roadmapping for your organization.",
    icon: Briefcase,
    href: "/services/it-consulting",
  },
];

const features = [
  { icon: Lightbulb, title: "Professional Consulting", description: "Get help from our team of experienced consultants who will work with you to create a tailored solution." },
  { icon: Building2, title: "Expertise in multiple industries", description: "We have worked with clients in a diverse range of industries across the globe." },
  { icon: Target, title: "Customized solutions", description: "We understand that every business is different, and we create solutions unique to your needs." },
  { icon: Layers, title: "Flexible engagement models", description: "We offer a variety of engagement models so you can choose the one that best fits your requirements." },
];

const clients = [
  "Syntel", "Hexaware", "Tech Mahindra", "HCL", "Virtusa", "Genpact", "Harman", "Capita", "Mastek", "Polaris"
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [activeService]);

  return (
    <div className="flex flex-col">
      {/* Hero Services Slider */}
      <section className="relative min-h-[70vh] flex flex-col overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${consultingHero})`,
            transform: isTransitioning ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 hero-gradient opacity-95" />
        
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Service Content */}
          <div className="flex-1 flex items-center">
            <div className="container-wide py-16">
              <div className={`max-w-2xl transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                  {services[activeService].subtitle}
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>
                <Button asChild variant="accent" size="lg" className="group">
                  <Link to={services[activeService].href}>
                    LEARN MORE
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Service Tabs */}
          <div className="bg-primary/30 backdrop-blur-sm border-t border-primary-foreground/10">
            <div className="container-wide">
              <div className="flex overflow-x-auto">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                      activeService === index
                        ? "text-accent border-accent bg-primary-foreground/5"
                        : "text-primary-foreground/70 border-transparent hover:text-primary-foreground hover:bg-primary-foreground/5"
                    }`}
                  >
                    <span className="text-accent font-bold">{service.num}</span>
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultancy Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm">Global consultancy services</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Driving growth through impactful solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Bring out the new version of your business with the right mix of technology and human resource aided by TGC's expert consultants. We help businesses increase their ROI, jumpstart their digital transformation journey, or implement automation for greater efficiency.
                </p>
                <p className="text-muted-foreground mb-8">
                  In short, we aid you to become resourceful and future-ready.
                </p>
                <Button asChild variant="accent" size="lg" className="group">
                  <Link to="/contact">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src={workforceTeam}
                    alt="Professional team collaboration and consulting" 
                    className="w-full h-48 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <ScrollReveal key={feature.title} delay={(index + 2) * 100}>
                    <div className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <feature.icon className="h-8 w-8 text-accent mb-4 transition-transform duration-300 hover:scale-110" />
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Worldwide */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src={cloudTech} 
                  alt="Global technology presence and connectivity" 
                  className="rounded-xl opacity-90 transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Available Worldwide
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                  TGC is a global company with a presence in more than 11 countries. We are able to provide our services to businesses of all sizes, anywhere in the world.
                </p>
                <Button asChild variant="accent" size="lg" className="group">
                  <Link to="/contact">
                    Discover
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src={techPartners} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="container-wide relative z-10">
          <div className="text-center mb-10">
            <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm">Technology Partners</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              We work in partnership with all the major technology suppliers
            </h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4 bg-secondary rounded-lg">
                  <span className="text-muted-foreground font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative dark-gradient py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${digitalTransformation})` }}
        />
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how TGC Technologies can support your digital transformation journey.
          </p>
          <Button asChild variant="accent" size="lg" className="group">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}