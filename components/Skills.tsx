import { SkillBadge } from "./skill-badge";

export const Skills = () => {
  return (
    <section id="skills" className="bg-muted/50 py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <h2 className="text-3xl font-bold -tracking-tight mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="Node.js" level="Expert" />
              <SkillBadge name="Express" level="Expert" />
              <SkillBadge name="Python" level="Beginner" />
              <SkillBadge name="Django" level="Beginner" />
              <SkillBadge name="Java" level="Advanced" />
              <SkillBadge name="Spring Boot" level="Intermediate" />
              <SkillBadge name="GraphQL" level="Beginner" />
              <SkillBadge name="REST API Design" level="Intermediate" />
            </div>

            <h3 className="text-xl font-semibold">Databases</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="PostgreSQL" level="Expert" />
              <SkillBadge name="MongoDB" level="Advanced" />
              <SkillBadge name="Redis" level="Advanced" />
              <SkillBadge name="MySQL" level="Advanced" />
              <SkillBadge name="Elasticsearch" level="Intermediate" />
              <SkillBadge name="Database Design" level="Expert" />
            </div>

            <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="Docker" level="Advanced" />
              <SkillBadge name="Kubernetes" level="Intermediate" />
              <SkillBadge name="AWS" level="Advanced" />
              <SkillBadge name="CI/CD" level="Advanced" />
              <SkillBadge name="Terraform" level="Intermediate" />
              <SkillBadge name="Linux" level="Advanced" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="React" level="Advanced" />
              <SkillBadge name="Next.js" level="Advanced" />
              <SkillBadge name="TypeScript" level="Advanced" />
              <SkillBadge name="JavaScript" level="Expert" />
              <SkillBadge name="HTML/CSS" level="Advanced" />
              <SkillBadge name="Tailwind CSS" level="Advanced" />
            </div>

            <h3 className="text-xl font-semibold">Architecture & Patterns</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="Microservices" level="Advanced" />
              <SkillBadge name="Event-Driven" level="Advanced" />
              <SkillBadge name="Domain-Driven Design" level="Intermediate" />
              <SkillBadge name="SOLID Principles" level="Advanced" />
              <SkillBadge name="Design Patterns" level="Advanced" />
            </div>

            <h3 className="text-xl font-semibold">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="System Design" level="Advanced" />
              <SkillBadge name="Performance Optimization" level="Advanced" />
              <SkillBadge name="Security Best Practices" level="Advanced" />
              <SkillBadge name="Testing (Unit/Integration)" level="Advanced" />
              <SkillBadge name="Agile/Scrum" level="Advanced" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
