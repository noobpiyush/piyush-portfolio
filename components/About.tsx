export const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 max-w-[1440px] py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/badrinath.jpeg"
            alt="John Doe"
            className="rounded-lg shadow-lg h-[370px] [object-fit:contain]"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I'm a full stack developer with 5+ years of experience specializing
            in backend development. My expertise lies in designing and
            implementing scalable server architectures, RESTful APIs, and
            database systems that power high-performance applications.
          </p>
          <p className="text-muted-foreground">
            With a strong foundation in computer science and a passion for
            clean, efficient code, I approach each project with a focus on
            performance, security, and maintainability. I enjoy solving complex
            technical challenges and continuously expanding my knowledge of
            emerging technologies and best practices.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me contributing to open-source
            projects, mentoring junior developers, or exploring the latest
            advancements in cloud computing and microservices.
          </p>
        </div>
      </div>
    </section>
  );
};
