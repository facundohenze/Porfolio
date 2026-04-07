export const Header = () => (
    <header className="h-screen snap-start bg-gray-900 py-50 text-center">
        <img
            src="/tu-foto.jpg"
            alt="foto"
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
        />
        <h1 className="text-6xl font-bold">Facundo Henze</h1>
        <p className="text-blue-400 mt-2 text-lg">Analista en Sistemas</p>
    </header>
)