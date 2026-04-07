export const Proyecto = ({ titulo, descripcion, tecnologias, link }) => (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col gap-4">

        <h3 className="text-xl font-semibold">{titulo}</h3>

        <p className="text-gray-400 flex-1">{descripcion}</p>

        <div className="flex flex-wrap gap-2">
            {tecnologias.map((tech) => (
                <span
                    key={tech}
                    className="bg-gray-700 text-blue-400 text-xs px-2 py-1 rounded"
                >
                    {tech}
                </span>
            ))}
        </div>

        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => console.log(`Abriendo: ${titulo}`)}
            className="bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg transition-colors"
        >
            Ver proyecto
        </a>

    </div>
)