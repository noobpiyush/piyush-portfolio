import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 max-w-[1440px] py-24 md:py-32 space-y-8">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Full Stack Developer
          <span className="text-primary"> with Backend Expertise</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Building robust, scalable applications with a focus on backend
          architecture, API design, and system performance.
        </p>
        <div className="flex gap-4">
            <Button asChild>
            <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline">
            <Link href="#projects">View Projects</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};
