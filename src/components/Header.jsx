import { SobreMi } from "./SobreMi"

export const Header = () => (
    <header id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl w-full">

            {/* Imagen */}
            <img
                src="/tu-foto.jpg"
                alt="foto"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary flex-shrink-0"
            />

            {/* Texto */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl">Hola, soy</h1>
                <h1 className="text-6xl font-bold">Facundo Henze</h1>
                <p className="mt-2 text-lg text-base-content/70">| Analista en Sistemas |</p>
            </div>

        </div>
    </header>
)