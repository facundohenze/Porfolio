import { proyectos } from '../data/proyectos'
import { Proyecto } from './Proyecto'

export const ListaProyectos = () => (
    <section id="proyectos" className="py-30 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-4xl font-semibold mb-12">Proyectos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proyectos.map(p => (
                    <Proyecto key={p.id} {...p} />
                ))}
            </div>
        </div>
    </section>
)