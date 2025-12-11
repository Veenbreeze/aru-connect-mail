import { ExternalLink, GraduationCap, Building2, CreditCard, Users } from "lucide-react";

const footerLinks = [
  {
    name: "ARU Website",
    url: "https://www.aru.ac.tz/",
    icon: GraduationCap,
    description: "Official University Website",
  },
  {
    name: "AMIS2 Portal",
    url: "https://amis2.aru.ac.tz/",
    icon: Building2,
    description: "Academic Management System",
  },
  {
    name: "HESLB OLAMS",
    url: "https://olas.heslb.go.tz/olams/pre-applicant",
    icon: CreditCard,
    description: "Student Loans Board",
  },
  {
    name: "ARUSO Website",
    url: "https://aruso.org/",
    icon: Users,
    description: "Student Organization",
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <link.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium">{link.name}</span>
                <ExternalLink className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ardhi University. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70">
              CampusMail — Official Internal Mailing System
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
