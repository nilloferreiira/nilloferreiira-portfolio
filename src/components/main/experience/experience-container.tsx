export function ExperienceContainer() {
    return (
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto gap-10">
            <div className="w-full lg:w-96 space-y-5 lg:space-y-10 ">
              <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">Experience</h2>
              <p className="text-text-secondary text-2xl">
                3 years working as a Software Developer, in companys such as Itaú,
                Stone and Aftersale.
              </p>
            </div>

            <div className="w-full lg:w-96 space-y-5 lg:space-y-10 ">
              <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">Education</h2>
              <p className="text-text-secondary text-2xl ">
                Computer Science Bachelors Degree - Universidade Federal de Pelotas
                🎓
              </p>
            </div>

            <div className="w-full lg:w-96 space-y-5 lg:space-y-10 ">
              <h2 className="text-zinc-100 font-bold text-3xl lg:text-4xl">Languages</h2>
              <p className="text-text-secondary text-2xl">🇺🇸 english</p>
              <p className="text-text-secondary text-2xl">🇧🇷 portugues</p>
            </div>
        </div>
    )
}