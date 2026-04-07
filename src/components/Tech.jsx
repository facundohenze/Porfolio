const tecnologias = ["Node.js", "Express.js", "REST APIs", "JavaScript", "React", "Tailwind", "Git"]

export const Tech = () => {
    return (
        <section>
            {/* Tecnologías */}
            <p className="text-center text-green-400 text-sm font-medium mb-5">
                Herramientas y tecnologías
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {tecnologias.map(tech => (
                    <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 border border-gray-600 rounded-lg px-4 py-1.5 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    )
}
