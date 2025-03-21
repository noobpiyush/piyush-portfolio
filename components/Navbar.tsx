import Link from "next/link"
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 max-w-[1440px] flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl text-primary">
                Piyush Waghela
            </Link>
            <nav className="hidden md:flex gap-6">
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    About
                </Link>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Skills
                </Link>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Projects
                </Link>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Contact
                </Link>
            </nav>
            <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
    </header>
  );
};
