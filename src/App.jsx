import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { SobreMi } from './components/SobreMi'
import { ListaProyectos } from './components/ListaProyectos'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Contact } from './components/Contact'

export const App = () => {
    return (
        <div className="bg-base-100">
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