import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { SobreMi } from './components/SobreMi'
import { ListaProyectos } from './components/ListaProyectos'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Contact } from './components/Contact'
import { ShapesBackground } from './components/ShapesBackground'

export const App = () => {
    return (
        <div className="animate-grid">
            <ShapesBackground />
            <NavBar />
            <Header />
            <main className="space-y-20">
                <SobreMi />
                <ListaProyectos />
                <Contact />
            </main>
        </div>
    )
}