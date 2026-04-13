const categorias = [
    {
        nombre: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "Bootstrap"]
    },
    {
        nombre: "Backend",
        skills: ["Node.js", "Express", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        nombre: "Herramientas",
        skills: ["Git", "Postman", "Figma", "Notion", "Obsidian"]
    }
]

export const SobreMi = () => {
    return (
        <section id="sobre-mi" className="min-h-screen md:h-screen snap-start flex items-center justify-center py-6 px-6">
            <div className="max-w-3xl w-full mx-auto">

                {/* Barra de acento + título */}
                <div className="w-12 h-1 bg-primary rounded-full mb-5" />
                <h2 className="text-4xl font-semibold mb-4">Sobre mí</h2>

                {/* Texto */}
                <p className="text-base-content text-lg leading-relaxed mb-3">
                    Tengo 22 años y soy estudiante de Analista de Sistemas, con interés en el desarrollo web.
                    He participado en proyectos académicos y personales, desarrollando aplicaciones
                    principalmente con Node.js, Express y React.
                </p>
                <p className="text-base-content/70 text-lg leading-relaxed mb-10">
                    Me considero una persona responsable y detallista, con una fuerte orientación al trabajo ordenado.
                    Tengo iniciativa para investigar y adoptar nuevas herramientas que optimicen el desarrollo de proyectos.
                </p>

                {/* Skills */}
                <div className="border-t border-base-content/10 pt-8 flex flex-col gap-5">
                    <h3 className="text-xl font-semibold text-base-content flex items-center gap-2">
                        <span className="w-3 h-3 bg-primary rounded-sm rotate-45 inline-block" />
                        Tecnologías y herramientas
                    </h3>
                    {categorias.map((cat) => (
                        <div key={cat.nombre} className="flex items-start gap-6">

                            {/* Label categoría */}
                            <span className="text-xs uppercase tracking-widest text-base-content/40 font-medium min-w-[90px] pt-2">
                                {cat.nombre}
                            </span>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-lg text-sm font-medium border border-base-content/20 bg-base-100 hover:bg-base-200 hover:-translate-y-0.5 hover:border-base-content/40 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}