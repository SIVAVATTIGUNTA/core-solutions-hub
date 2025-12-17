import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    children: [
      { name: "Workforce Solutions", href: "/services/workforce-solutions" },
      { name: "Managed Services", href: "/services/managed-services" },
      { name: "Digital Services", href: "/services/emerging-tech" },
      { name: "Application Services", href: "/services/application-services" },
      { name: "IT Consulting", href: "/services/it-consulting" },
    ]
  },
  { name: "Technologies", href: "/technologies" },
  { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  // Check if logo exists on mount
  useEffect(() => {
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.onerror = () => setLogoLoaded(false);
    img.src = "/tgc-logo.png";
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isActiveParent = (item: typeof navigation[0]) => {
    if (item.children) {
      return item.children.some(child => location.pathname === child.href);
    }
    return location.pathname === item.href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/98 backdrop-blur-md border-b border-border">
      <nav className="container-wide" aria-label="Global">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              {logoLoaded ? (
                <img 
                  src="/tgc-logo.png" 
                  alt="TGC Technologies - Go Grow Global" 
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-opacity duration-300"
                  onError={() => setLogoLoaded(false)}
                  onLoad={() => setLogoLoaded(true)}
                />
              ) : (
                <>
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">T</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="font-heading text-xl font-bold text-foreground">
                      TGC
                    </span>
                    <span className="font-heading text-xl font-light text-muted-foreground ml-1">
                      Technologies
                    </span>
                  </div>
                </>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActiveParent(item)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2 w-56 z-50">
                    <div className="bg-card rounded-lg shadow-elevated-lg border border-border py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.href)
                              ? "text-accent bg-accent/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild variant="accent" size="default">
              <Link to="/contact">Speak to a Consultant</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 pb-4 pt-2">
            {navigation.map((item, index) => (
              <div 
                key={item.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ${
                    isActiveParent(item)
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                          isActive(child.href)
                            ? "text-accent font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-3 pt-4 animate-fade-in" style={{ animationDelay: `${navigation.length * 50}ms` }}>
              <Button asChild variant="accent" className="w-full group">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Speak to a Consultant
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}