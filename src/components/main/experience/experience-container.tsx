export function ExperienceContainer() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto gap-10">
      <div className="w-full lg:w-[588px] space-y-5 lg:space-y-10 ">
        <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">
          Experience
        </h2>
        <p className="text-text-secondary text-2xl">
          Self-taught in front-end development since 2020, currently focused on
          development with React and Next.js, alongside building REST
          APIs with Node.js.
        </p>
      </div>

      <div className="w-full lg:w-96 space-y-5 lg:space-y-10 ">
        <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">
          Education
        </h2>
        <p className="text-text-secondary text-2xl ">
          Associate Degree in Systems Analysis and Development - Universidade
          Tiradentes 🎓
        </p>
      </div>

      <div className="w-full lg:w-96 space-y-5 lg:space-y-10 ">
        <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">
          Languages
        </h2>
        <p className="text-text-secondary text-2xl">🇺🇸 english</p>
        <p className="text-text-secondary text-2xl">🇧🇷 portugues</p>
      </div>
    </div>
  );
}
