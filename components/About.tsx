export const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 max-w-[1440px] py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/badrinath.jpeg"
            alt="Piyush Waaghela"
            className="rounded-lg shadow-lg h-[370px] object-contain"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I'm a passionate front-end developer and a recent graduate in Electronics & Computer Science.  
            I specialize in building modern, responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-muted-foreground">
            Through hands-on projects and open-source contributions, I've honed my skills in creating intuitive UIs, optimizing performance,  
            and implementing state management using Redux and Recoil. I love crafting seamless digital experiences with a strong focus on user experience.
          </p>
          <p className="text-muted-foreground">
            I'm actively seeking opportunities to contribute to a dynamic team where I can learn, grow, and apply my expertise  
            to real-world applications. Feel free to connect with me!
          </p>
        </div>
      </div>
    </section>
  );
};
