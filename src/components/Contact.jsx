import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const formRef = useRef()
    const [estado, setEstado] = useState(null) // 'enviando' | 'ok' | 'error'

    const handleSubmit = (e) => {
        e.preventDefault()
        setEstado('enviando')

        emailjs.sendForm(
            'service_asyjatl',    // lo sacás de EmailJS
            'template_40imc5d',   // lo sacás de EmailJS
            formRef.current,
            'q4AXEDmbB92MgsFzY'     // lo sacás de EmailJS
        )
            .then(() => {
                setEstado('ok')
                formRef.current.reset()
            })
            .catch(() => setEstado('error'))
    }
    return (
        <section id="contacto" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="lg:flex lg:items-center lg:gap-12">

                    <div className="lg:w-1/2">
                        <h1 className="text-2xl font-semibold text-base-content lg:text-3xl">Hablemos</h1>
                        <p className="mt-4 text-base-content/60">
                            Mandame un mensaje y te respondo a la brevedad.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit} className="mt-12">
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-base-content/70">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Tu nombre"
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-base-content/70">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="tuemail@gmail.com"
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-base-content/70">Mensaje</label>
                                <textarea
                                    name="message"
                                    placeholder="Tu mensaje..."
                                    required
                                    className="textarea textarea-bordered w-full h-32 md:h-56"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={estado === 'enviando'}
                                className="btn btn-primary w-full mt-4"
                            >
                                {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
                            </button>

                            {/* Feedback */}
                            {estado === 'ok' && (
                                <p className="mt-4 text-success text-sm text-center">
                                    ¡Mensaje enviado correctamente!
                                </p>
                            )}
                            {estado === 'error' && (
                                <p className="mt-4 text-error text-sm text-center">
                                    Hubo un error. Intentá de nuevo.
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:flex lg:flex-col lg:items-start lg:w-1/2">

                        <div className="space-y-8">
                            {/* Ubicación */}
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="mx-2 text-base-content/70 truncate w-72">Villa María, Córdoba, Argentina</span>
                            </p>
                        </div>

                        {/* Redes */}
                        <div className="mt-8 w-80">
                            <h3 className="text-base-content/70">Encontrame en</h3>
                            <div className="flex mt-4 -mx-1.5">

                                {/* GitHub */}
                                <a href="https://github.com/facundohenze" className="mx-1.5 text-base-content/50 hover:text-primary transition-colors duration-300">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/facundo-henze-851b54226" className="mx-1.5 text-base-content/50 hover:text-primary transition-colors duration-300">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                        <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                        <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                    </svg>
                                </a>

                                {/* WhatsApp */}

                                <a href="https://wa.me/5493472552202"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-1.5 text-base-content/50 hover:text-primary transition-colors duration-300"
                                >
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.135 1.535 5.874L.057 23.25a.75.75 0 00.916.919l5.453-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.66-.51-5.186-1.402l-.372-.216-3.862 1.043 1.07-3.77-.235-.386A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                    </svg>
                                </a>



                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >

    )


}

