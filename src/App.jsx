import { Header } from './components/Header'
import { SobreMi } from './components/SobreMi'
import { ListaProyectos } from './components/ListaProyectos'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Tech } from './components/Tech'

export const App = () => (
    <div className="min-h-screen overflow-y-scroll snap-y snap-mandatory bg-gray-950 text-white">
        <NavBar />
        <Header />
        <main className="container mx-auto px-6 py-12 space-y-20">
            <SobreMi />
            <ListaProyectos />
        </main>
        <Footer />
    </div>
)