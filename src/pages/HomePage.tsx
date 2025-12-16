import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { 
  Monitor, 
  Users, 
  Settings, 
  Code, 
  Sparkles,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  Award,
  Building2,
  MapPin
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Monitor,
    title: "IT Consulting & Advisory",
    description: "Strategic guidance on digital transformation, IT governance, enterprise architecture and technology roadmapping.",
    href: "/services/it-consulting",
  },
  {
    icon: Users,
    title: "Workforce & Talent Solutions",
    description: "Access highly skilled technology professionals through flexible staffing, contract management and resource augmentation.",
    href: "/services/workforce-solutions",
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    description: "End-to-end IT operations support including infrastructure management, cybersecurity monitoring and proactive maintenance.",
    href: "/services/managed-services",
  },
  {
    icon: Code,
    title: "Application Services",
    description: "Full lifecycle application development from design to deployment, including modernisation and cloud-native engineering.",
    href: "/services/application-services",
  },
  {
    icon: Sparkles,
    title: "Digital & Emerging Technologies",
    description: "Leverage AI, machine learning, RPA, blockchain and big data analytics for competitive advantage.",
    href: "/services/emerging-tech",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "30+", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
];

const testimonials = [
  {
    quote: "TGC Technologies delivered outstanding consulting support that transformed our IT strategy. Their professionalism and technical expertise were exceptional.",
    author: "Director of Technology",
    company: "Leading Financial Services Firm",
  },
  {
    quote: "The workforce solutions team helped us scale rapidly with high-quality engineers. Delivery was timely and seamless.",
    author: "CTO",
    company: "Global Retail Enterprise",
  },
  {
    quote: "Our cloud migration programme would not have succeeded without TGC's guidance and hands-on leadership.",
    author: "Head of IT",
    company: "Healthcare Provider",
  },
];

const differentiators = [
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Onshore, nearshore and offshore capabilities ensure cost efficiency and 24/7 support.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR compliant with robust security practices and certified professionals.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Agile methodologies and proven frameworks accelerate time to value.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous vetting and continuous improvement ensure exceptional delivery.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        
        <div className="container-wide relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">
              Global Technology Consultancy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Empowering Digital Excellence Across Industries
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              We provide end-to-end technology consulting, managed services and workforce solutions that help organisations enhance performance, reduce risk and accelerate digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Speak to a Consultant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology and workforce solutions designed to drive your business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group card-elevated p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Partner with TGC Technologies?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in a consultancy-led engagement model that emphasises clarity, transparency and long-term value creation. Our global delivery model combines local expertise with international capabilities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {differentiators.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 lg:p-10 shadow-elevated-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">Industries We Serve</h3>
              <ul className="space-y-3">
                {["Financial Services", "Retail & E-Commerce", "Healthcare", "Public Sector", "Manufacturing", "Technology", "Energy & Utilities"].map((industry) => (
                  <li key={industry} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Global Delivery Model
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our hybrid delivery model combines onshore client engagement with nearshore and offshore engineering centres, ensuring cost efficiency, delivery speed and 24/7 operational support where required.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This approach enables us to deliver solutions that are both commercially viable and technologically future-ready, with local market understanding combined with international expertise.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { city: "London", country: "UK", type: "Headquarters" },
                { city: "Dubai", country: "UAE", type: "Regional Office" },
                { city: "Singapore", country: "Singapore", type: "Regional Office" },
                { city: "Bangalore", country: "India", type: "Delivery Centre" },
              ].map((location) => (
                <div
                  key={location.city}
                  className="bg-secondary rounded-xl p-5 border border-border"
                >
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">{location.type}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{location.city}</h4>
                  <p className="text-sm text-muted-foreground">{location.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading organisations across industries worldwide.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} autoPlayInterval={6000} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Technology Landscape?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how TGC Technologies can support your digital transformation journey.
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