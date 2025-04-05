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
          title="AI Content Studio"
          description="AI Content Studio is a cutting-edge platform designed to revolutionize content creation. With advanced AI technology, users can effortlessly generate high-quality images, videos, and social media posts in seconds. Whether you're a marketer, a content creator, or a business owner, AI Content Studio provides a seamless and efficient way to produce professional content tailored to your needs. Harness the power of AI to boost your productivity and creativity."
          technologies={[
            "Node.js",
            "Next.js",
            "Gemini API",
            "Typescript",
            "Nextjs API Routes",
            "React Compoenets"
          ]}
          image="/Ai-content.png"
          githubUrl="https://github.com/noobpiyush/AI-Contennt-Creation"
          demoUrl="https://ai-contennt-creation.vercel.app"
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
          title="Portfolio Website for Image Coach"
          description="Developed a portfolio website for an image coach, 'Soft Skills Solutions by AASHNA SHAH'. The website empowers individuals to excel with soft skills training, focusing on communication, emotional intelligence, and teamwork. It includes sections to explore services and contact the coach."
          technologies={["Next.js", "TypeScript", "Tailwind CSS"]}
          image="/aashna.png" // Update the image path to the actual path of your project image
          githubUrl="https://github.com/yourusername/image-coach-portfolio" // Update with the actual GitHub repository URL
        />
      </div>
    </section>
  );
};
