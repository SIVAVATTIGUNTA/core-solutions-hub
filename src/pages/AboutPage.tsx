import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Globe, 
  Users, 
  Award,
  ArrowRight,
  User,
  Handshake,
  Lightbulb
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver exceptional quality in every engagement, holding ourselves to the highest professional standards.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with transparency, honesty and ethical conduct in all our business relationships.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build lasting relationships based on trust, collaboration and mutual success with our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace change and continuously seek better ways to solve complex technology challenges.",
  },
];

const locations = [
  { city: "London", country: "United Kingdom", type: "Headquarters" },
  { city: "Dubai", country: "United Arab Emirates", type: "Regional Office" },
  { city: "Singapore", country: "Singapore", type: "Regional Office" },
  { city: "Bangalore", country: "India", type: "Delivery Centre" },
];

const leadership = [
  {
    name: "Chief Executive Officer",
    role: "CEO",
    description: "Responsible for overall strategic direction, business development and stakeholder relationships. Brings over 20 years of experience in technology consulting and digital transformation leadership.",
  },
  {
    name: "Chief Technology Officer",
    role: "CTO",
    description: "Leads technology strategy, innovation initiatives and engineering excellence. Expert in cloud architecture, emerging technologies and enterprise systems integration.",
  },
  {
    name: "Head of Delivery",
    role: "Delivery Lead",
    description: "Oversees global delivery operations, project management and client success. Ensures quality, timeliness and operational excellence across all engagements.",
  },
  {
    name: "Head of Workforce Solutions",
    role: "Workforce Lead",
    description: "Manages talent acquisition, workforce planning and resource management. Builds and nurtures our global network of technology professionals.",
  },
];

const industries = [
  "Financial Services",
  "Retail & E-Commerce",
  "Healthcare",
  "Public Sector",
  "Manufacturing",
  "Technology",
  "Energy & Utilities",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">About TGC Technologies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Bridging Business Ambition with Technological Capability
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              TGC Technologies is a global technology consulting and workforce solutions organisation headquartered in London, supporting enterprises in navigating complex digital challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TGC Technologies is a global technology consultancy and workforce solutions provider committed to helping organisations navigate and excel in an increasingly digital economy. Our focus is on delivering strategic, efficient and scalable technology-driven outcomes that strengthen business performance and operational resilience.
                </p>
                <p>
                  Founded with a vision to close the gap between business strategy and technical execution, we bring together industry specialists, technologists and transformation experts who work collaboratively to create measurable value for clients across the UK, Europe and worldwide.
                </p>
                <p>
                  Our mission is to equip organisations with the digital capability, skilled talent and strategic insight necessary to meet evolving market demands. Whether supporting enterprise-scale transformation, delivering targeted consulting engagements or enabling workforce agility, our approach is grounded in quality, integrity and long-term partnership.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-8 lg:p-10">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To enable every client to operate with confidence in a digital-first world — supported by the right strategy, the right platforms and the right people.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the trusted technology partner of choice for organisations seeking transformative, sustainable and commercially successful digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do and how we deliver value to our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 lg:p-8 shadow-elevated"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
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

      {/* Leadership Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals driving our vision and delivering excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.role}
                className="card-elevated p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{leader.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{leader.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Global Presence, Local Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With a UK headquarters in London and global delivery centres, we combine local market understanding with international expertise to provide end-to-end technology and talent solutions tailored to diverse organisational needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our hybrid delivery model combines onshore client engagement with nearshore and offshore engineering centres, ensuring cost efficiency, delivery speed and 24/7 operational support where required.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="bg-card rounded-xl p-6 border border-border shadow-elevated"
                >
                  <p className="text-sm text-accent font-medium mb-1">{location.type}</p>
                  <h4 className="text-lg font-semibold text-foreground">{location.city}</h4>
                  <p className="text-muted-foreground">{location.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-secondary rounded-xl p-8 lg:p-10">
                <h3 className="text-xl font-semibold text-foreground mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry) => (
                    <div key={industry} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Deep Industry Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our teams consist of seasoned consultants, engineers, solution architects, project leads and delivery specialists who bring deep domain knowledge across multiple industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the unique challenges, regulatory requirements and competitive dynamics of each sector, enabling us to deliver contextually relevant solutions that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Partner with TGC Technologies
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your organisation's digital transformation journey.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}