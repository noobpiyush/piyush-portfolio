import { ProjectCard } from "./project-card"

export const Projects = () => {
    return (
        <section id="projects" className="container mx-auto px-4 max-w-[1440px] py-24 md:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Microservices Platform"
              description="Designed and implemented a scalable microservices architecture for a high-traffic e-commerce platform handling 10K+ transactions daily."
              technologies={["Node.js", "Express", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS"]}
              image="/proj1.png"
              githubUrl="https://github.com"
              demoUrl="https://example.com"
            />

            <ProjectCard
              title="Real-Time Analytics Dashboard"
              description="Built a real-time data processing pipeline and analytics dashboard for monitoring system performance and user behavior."
              technologies={["Python", "FastAPI", "PostgreSQL", "Elasticsearch", "Kafka", "React", "D3.js"]}
              image="/proj1.png"
              githubUrl="https://github.com"
            />

            <ProjectCard
              title="Secure Banking API"
              description="Developed a secure, compliant banking API with robust authentication, authorization, and transaction processing capabilities."
              technologies={["Java", "Spring Boot", "MySQL", "OAuth2", "JUnit", "Swagger"]}
              image="/proj1.png"
              githubUrl="https://github.com"
              demoUrl="https://example.com"
            />

            <ProjectCard
              title="Content Management System"
              description="Created a headless CMS with a GraphQL API, supporting content modeling, versioning, and multi-language capabilities."
              technologies={["Node.js", "GraphQL", "MongoDB", "Redis", "Next.js", "TypeScript"]}
              image="/proj1.png"
              githubUrl="https://github.com"
            />

            <ProjectCard
              title="DevOps Automation Platform"
              description="Built an internal platform for automating deployment workflows, infrastructure provisioning, and monitoring across multiple cloud providers."
              technologies={["Python", "Terraform", "AWS", "Docker", "Jenkins", "Prometheus", "Grafana"]}
              image="/proj1.png"
              githubUrl="https://github.com"
            />

            <ProjectCard
              title="Open Source Contribution: 100x cms"
              description="contributor to a popular online learing system app.100xdevs.com."
              technologies={["TypeScript", "PostgreSQL", "MySQL", "Prisma", "Next.js", "Tailwind CSS"]}
              image="/proj1.png"
              githubUrl="https://github.com/noobpiyush?tab=overview&from=2024-10-01&to=2024-10-31&org=code100x"
            />
            </div>
        </section>
    )
}