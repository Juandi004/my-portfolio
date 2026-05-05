const Hero = () => {
    return (
        <>
            <section id="hero" className="relative h-screen">
                <img
                    src="https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="background"
                    className="absolute w-full h-full object-cover z-0 blur-sm"
                />
                <div className="absolute inset-0 bg-black/40 z-5" />
                
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
                    <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-6 uppercase">
                        Software Developer
                    </p>
                    
                    {/* Main Title */}
                    <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight max-w-4xl">
                        Building the <span className="text-cyan-500">Future</span>
                        <br />
                        through the <span className="text-white">Code</span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl">
                        Junior Developer specialiced on FrontEnd & Mobile development with basic knowledge on BackEnd, improving his code everyday.
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex gap-6 justify-center">
                        <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 transition">
                            PROJECTS
                        </a>
                        <a href="#contacts" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold px-8 py-3 transition">
                            CONTACT ME
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero