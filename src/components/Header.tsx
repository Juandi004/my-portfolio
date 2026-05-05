const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-10 py-4 bg-gray-950 border-b border-cyan-900 sticky top-0 z-50">
      
      {/* Logo */}
      <a href="#" className="text-cyan-400 font-black text-2xl tracking-widest">
        DEV/CORE
      </a>

      {/* NavBar */}
      <nav className="flex flex-row gap-10">
        <a href="#services" className="text-sm text-gray-300 hover:text-cyan-400 tracking-widest font-bold">SERVICES</a>
        <a href="#about-me" className="text-sm text-gray-300 hover:text-cyan-400 tracking-widest font-bold">ABOUT</a>
        <a href="#proyects" className="text-sm text-gray-300 hover:text-cyan-400 tracking-widest font-bold">PROJECTS</a>
        <a href="#contact" className="text-sm text-gray-300 hover:text-cyan-400 tracking-widest font-bold">CONTACT</a>
      </nav>

      {/* Resume */}
      <a href="/resume.pdf" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-5 py-2 text-sm font-bold tracking-widest transition-colors">
        RESUME
      </a>

    </header>
  )
}

export default Header