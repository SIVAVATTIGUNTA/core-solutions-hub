import { useState, useRef } from "react";
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
    ],
  },
  { name: "Technologies", href: "/technologies" },
  { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const isActiveParent = (item: (typeof navigation)[0]) =>
    item.children
      ? item.children.some((child) =>
          location.pathname.startsWith(child.href)
        )
      : location.pathname === item.href;

  const handleMouseEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>,
    name: string
  ) => {
    const related = e.relatedTarget as HTMLElement;
    if (related && e.currentTarget.contains(related)) return;

    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250); // stays visible longer
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-lg border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex min-h-[72px] lg:min-h-[96px] items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/tgc-logo.jpeg"
              alt="TGC Technologies"
              className="h-14 lg:h-16 w-auto object-contain"
              style={{ height: "88px" }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && handleMouseEnter(item.name)
                }
                onMouseLeave={(e) =>
                  item.children && handleMouseLeave(e, item.name)
                }
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition
                    ${
                      isActiveParent(item)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* DROPDOWN */}
                {item.children && openDropdown === item.name && (
                  <div
                    className="
                      absolute left-0 top-full mt-2
                      w-64 rounded-xl
                      bg-card border shadow-xl
                      z-50
                    "
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`block px-4 py-3 text-sm font-semibold transition
                          ${
                            isActive(child.href)
                              ? "text-primary bg-primary/10"
                              : "hover:bg-muted"
                          }
                        `}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex">
            <Button asChild size="sm" className="font-bold">
              <Link to="/contact">Speak to a Consultant</Link>
            </Button>
          </div>

          {/* MOBILE MENU */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU CONTENT */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-bold
                    ${
                      isActiveParent(item)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    }`}
                >
                  {item.name}
                </Link>

                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded-lg text-sm font-semibold hover:bg-muted"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="px-4 pt-4">
              <Button asChild className="w-full font-bold group">
                <Link to="/contact">
                  Speak to a Consultant
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
