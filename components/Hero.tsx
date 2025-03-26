import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 max-w-[1440px] py-24 md:py-32 space-y-8">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Frontend Developer
          <span className="text-primary"> with Full Stack Capabilities</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Crafting intuitive, visually appealing user interfaces with a focus on frontend development, while leveraging full stack capabilities to ensure seamless integration and performance.
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