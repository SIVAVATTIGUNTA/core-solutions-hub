import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

export default function ContactPage() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
});

const [touched, setTouched] = useState({
  fullName: false,
  company: false,
  email: false,
  phone: false,
  message: false,
});

const [errors, setErrors] = useState({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
});


 const validateField = (name: string, value: string) => {
  let error = "";

  switch (name) {
    case "fullName":
      if (!value.trim()) {
        error = "Full name is required";
      } else if (value.trim().length < 2) {
        error = "Full name must be at least 2 characters";
      }
      break;

    case "company":
      if (!value.trim()) {
        error = "Company name is required";
      }
      break;

    case "email":
      if (!value.trim()) {
        error = "Email address is required";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
      }
      break;

    case "phone":
      if (!value.trim()) {
        error = "Phone number is required";
      } else {
        const phoneRegex = /^[0-9+()\-\s]{7,20}$/;
        if (!phoneRegex.test(value)) {
          error = "Please enter a valid phone number";
        }
      }
      break;

    case "message":
      if (!value.trim()) {
        error = "Message is required";
      } else if (value.trim().length < 10) {
        error = "Message must be at least 10 characters";
      }
      break;

    default:
      break;
  }

  return error;
};


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

 


 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newTouched = {
    fullName: true,
    company: true,
    email: true,
    phone: true,
    message: true,
  };
  setTouched(newTouched);

  const newErrors = {
    fullName: validateField("fullName", formData.fullName),
    email: validateField("email", formData.email),
    message: validateField("message", formData.message),
    company: validateField("company", formData.company),
    phone: validateField("phone", formData.phone),
  };

  setErrors(newErrors);

  if (Object.values(newErrors).some(err => err !== "")) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("https://tgcworld.co.uk/api/contact.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
});

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Something went wrong");
    }

    toast({
      title: "Message sent successfully",
      description: "We'll be in touch with you shortly.",
    });

    // Reset form
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    setTouched({
      fullName: false,
      company: false,
      email: false,
      phone: false,
      message: false,
    });
    setErrors({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    toast({
      title: "Submission failed",
      description: error.message || "Please try again later",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${officeBuilding})` }}
        />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Whether you have a question about our services, need a consultation, or want to explore partnership opportunities, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <img 
            src={teamMeeting} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="card-elevated p-6 lg:p-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Your full name"
                          className={errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""}
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="text-sm text-destructive flex items-center gap-1">
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          onBlur={handleBlur}
                          className={errors.company ? "border-destructive focus-visible:ring-destructive" : ""}
                          aria-invalid={!!errors.company}  
                          aria-describedby={errors.company ? "company-error" : undefined} 

                        />
                        {errors.company && (
                          <p id="company-error" className="text-sm text-destructive flex items-center gap-1">
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="your.email@company.com"
                          className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          placeholder="+44 20 1234 5678"
                          className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                        {errors.phone && (
                        <p id="phone-error" className="text-sm text-destructive flex items-center gap-1">
                          <span>{errors.phone}</span>
                        </p>
                      )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="How can we help you?"
                        rows={5}
                        className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto group"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <CheckCircle2 className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      85 Uxbridge Road, 1st Floor<br />
                      Ealing Cross, London W5<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:info@tgcworld.com"
                      className="text-accent hover:underline"
                    >
                      info@tgcworld.com
                    </a>
                    <br />
                    <a
                      href="mailto:careers@tgcworld.com"
                      className="text-muted-foreground hover:text-accent"
                    >
                      careers@tgcworld.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+442012345678"
                      className="text-accent hover:underline"
                    >
                      +44 20 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday – Friday: 9:00 AM – 6:00 PM GMT<br />
                      24/7 Support for Managed Services clients
                    </p>
                  </div>
                </div>
              </div>

                {/* Office Image */}
                <div className="mt-8 relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src={officeBuilding}
                    alt="TGC Technologies Office Location - Modern business building" 
                    className="w-full h-64 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-primary-foreground font-semibold text-lg">London Headquarters</p>
                      <p className="text-primary-foreground/90 text-sm">85 Uxbridge Road, Ealing Cross</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}