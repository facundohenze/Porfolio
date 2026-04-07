import { useEffect, useRef } from "react"

const tecnologias = ["HTML", "CSS", "React", "JavaScript", "TypeScript", "Tailwind", "Bootstrap",
    "Node.js", "Express", "Git", "MySQL", "PostgreSQL", "MongoDB", "Postman", "Figma", "Notion", "Obsidian"
]

export const SobreMi = () => {
    const trackRef = useRef(null)

    return (
        <section className="h-screen snap-start py-16 px-6">
            <h2 className="text-center text-4xl font-semibold text-white mb-10">Sobre mí</h2>

            {/* Card horizontal */}
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 flex gap-6 items-start mb-8">
                <span className="text-8xl leading-none text-green-500 font-serif flex-shrink-0 -mt-2 select-none">"</span>
                <div>
                    <p className="text-white text-lg leading-relaxed mb-4">
                        Soy desarrollador backend, actualmente cursando un bootcamp enfocado en
                        Node.js, Express y REST APIs. Me apasiona construir sistemas bien
                        estructurados y aprender constantemente nuevas tecnologías.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        En mi tiempo libre me gusta resolver problemas y experimentar con nuevos
                        proyectos. Siempre buscando mejorar y crecer como desarrollador.
                    </p>
                </div>
            </div>

            {/* Botones */}
            <div className="flex justify-center gap-4 flex-wrap mb-10">
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white rounded-full px-7 py-3 text-base font-medium transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    Ver proyectos
                </button>
                <button className="border border-gray-500 hover:border-white text-white rounded-full px-7 py-3 text-base font-medium transition-colors">
                    Ver CV
                </button>
            </div>

            {/* Tecnologías — carrusel */}
            <p className="text-center text-green-400 text-base font-medium mb-5">
                Herramientas y tecnologías
            </p>

            <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-2.5 w-max animate-marquee hover:[animation-play-state:paused]">
                    {[...tecnologias, ...tecnologias].map((tech, i) => (
                        <span
                            key={i}
                            className="bg-gray-700 text-gray-200 border border-gray-600 rounded-lg px-5 py-2 text-base whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}