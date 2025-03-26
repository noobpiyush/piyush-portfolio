import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 max-w-[1440px] py-24 md:py-32"
    >
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="E-Commerce Microservices Platform"
          description="Designed and implemented a scalable microservices architecture for a high-traffic e-commerce platform handling 10K+ transactions daily."
          technologies={[
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
            "Docker",
            "Kubernetes",
            "AWS",
          ]}
          image="/proj1.png"
          githubUrl="https://github.com"
          demoUrl="https://example.com"
        />

        <ProjectCard
          title="Blockchain SAAS Lnading Page"
          description="Developed using Astro Framework, Reactjs Components, Framer Motion and Tailwind"
          technologies={[
            "TypeScript",
            "Tailwind",
            "React",
            "Framer Motion",
            "Astro",
          ]}
          image="/blockforage.png"
          demoUrl="https://dark-saas-blockchain.netlify.app"
          githubUrl="https://github.com"
        />

        <ProjectCard
          title="Minimaslist Blog"
          description="A minimalist blog where I share insights on design, technology, and creativity. The platform features thought-provoking stories and ideas, aiming to inspire and inform readers with a focus on simplicity and innovation."
          technologies={[
            "Next.js",
            "Tailwind",
            "TypeScript",
            "React Compoenets",
            "Framer-Motion",
          ]}
          image="/mini.png"
          githubUrl="https://github.com/noobpiyush/Minimalist"
          demoUrl="https://minimalist-sigma.vercel.app/"
        />

        <ProjectCard
          title="Youtube Landing Page"
          description="Developed with React, TypeScript, and Tailwind CSS
          Implemented a responsive sidebar for seamless navigation
          Optimized design for both mobile and desktop views"
          technologies={[
            "Next.js",
            "Tailwind",
            "TypeScript",
            "React Compoenets",
          ]}
          image="/yt.png"
          demoUrl="https://yt-homepage-ts.vercel.app/"
          githubUrl="https://github.com"
        />

        <ProjectCard
          title="AI-Powered Viral Hashtag Generator"
          description="Developed an AI-powered viral hashtag generator using the Gemini API, Next.js, TypeScript, and Tailwind CSS. The platform automates the creation of trending hashtags based on real-time data and user input."
          technologies={["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"]}
          image="/viral.png"
          demoUrl="https://viral-hashtag-generator.vercel.app/"
          githubUrl="https://github.com/noobpiyush/Viral-Hashtag-Generator"
        />

        <ProjectCard
          title="Open Source Contribution: 100x cms"
          description="contributor to a popular online learing system app.100xdevs.com."
          technologies={[
            "TypeScript",
            "PostgreSQL",
            "MySQL",
            "Prisma",
            "Next.js",
            "Tailwind CSS",
          ]}
          image="/proj1.png"
          githubUrl="https://github.com/noobpiyush?tab=overview&from=2024-10-01&to=2024-10-31&org=code100x"
        />
      </div>
    </section>
  );
};
