import { proyectos } from '../data/proyectos'
import { Proyecto } from './Proyecto'

export const ListaProyectos = () => (
    <section >
        <h2 className="text-center text-4xl font-semibold text-white mb-10">Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map(p => (
                <Proyecto key={p.id} {...p} />
            ))}
        </div>
    </section>
)