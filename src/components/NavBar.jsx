import { useState, useEffect } from 'react'
import { ThemeController } from "./ThemeController"

export const NavBar = () => {
    const [activa, setActiva] = useState('home')

    useEffect(() => {
        const secciones = ['home', 'sobre-mi', 'proyectos', 'contacto']

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiva(entry.target.id)
                }
            })
        }, { threshold: 0.5 }) // se activa cuando el 50% de la sección es visible

        secciones.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const linkClases = (id) =>
        id === activa
            ? 'transition-colors duration-300 text-base-content border-b-2 border-primary mx-1.5 sm:mx-6'
            : 'transition-colors duration-300 text-base-content/70 hover:text-base-content border-b-2 border-transparent hover:border-primary mx-1.5 sm:mx-6'

    return (
        <nav className="bg-base-200/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
            <div className="container flex items-center justify-center p-6 mx-auto">
                <a href="#home" className={linkClases('home')}>Home</a>
                <a href="#sobre-mi" className={linkClases('sobre-mi')}>Sobre mí</a>
                <a href="#proyectos" className={linkClases('proyectos')}>Proyectos</a>
                <a href="#contacto" className={linkClases('contacto')}>Contacto</a>
                <ThemeController />
            </div>
        </nav>
    )
}