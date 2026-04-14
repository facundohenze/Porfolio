export const ShapesBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

        {/* Triángulos */}
        <div className="animate-orb1 absolute top-[8%] left-[10%] w-0 h-0
            border-l-[20px] border-l-transparent
            border-r-[20px] border-r-transparent"
            style={{ borderBottom: '35px solid var(--shape-color-1)' }} />

        <div className="animate-orb2 absolute top-[20%] right-[15%] w-0 h-0
            border-l-[14px] border-l-transparent
            border-r-[14px] border-r-transparent"
            style={{ borderBottom: '24px solid var(--shape-color-2)' }} />

        <div className="animate-orb3 absolute bottom-[25%] left-[20%] w-0 h-0
            border-l-[30px] border-l-transparent
            border-r-[30px] border-r-transparent"
            style={{ borderBottom: '50px solid var(--shape-color-3)' }} />

        <div className="animate-orb1 absolute bottom-[10%] right-[25%] w-0 h-0
            border-l-[18px] border-l-transparent
            border-r-[18px] border-r-transparent"
            style={{ borderBottom: '30px solid var(--shape-color-1)' }} />

        {/* Cuadrados */}
        <div className="animate-orb2 absolute top-[35%] left-[5%] w-8 h-8 rotate-12"
            style={{ background: 'var(--shape-color-1)' }} />

        <div className="animate-orb3 absolute top-[15%] right-[30%] w-5 h-5 rotate-45"
            style={{ background: 'var(--shape-color-2)' }} />

        <div className="animate-orb1 absolute bottom-[40%] right-[8%] w-10 h-10 rotate-12"
            style={{ background: 'var(--shape-color-3)' }} />

        <div className="animate-orb2 absolute bottom-[15%] left-[35%] w-6 h-6 rotate-45"
            style={{ background: 'var(--shape-color-1)' }} />

        <div className="animate-orb3 absolute top-[60%] left-[50%] w-4 h-4 rotate-12"
            style={{ background: 'var(--shape-color-2)' }} />

        {/* Cuadrados grandes difusos */}
        <div className="animate-orb1 absolute top-[70%] right-[40%] w-16 h-16 rotate-45 blur-sm"
            style={{ background: 'var(--shape-color-3)' }} />

        <div className="animate-orb2 absolute top-[5%] left-[55%] w-12 h-12 rotate-12 blur-sm"
            style={{ background: 'var(--shape-color-1)' }} />

    </div>
)