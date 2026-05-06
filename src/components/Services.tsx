import { Phone, Computer, ChevronsLeftRightEllipsis } from "lucide-react"

interface ServiceProps {
    name: string,
    description: string,
    icon: React.ReactNode
}

const services: ServiceProps[] = [
    {
        name: 'Frontend Development',
        description: 'Fast and reactive user interfaces using modern frameworks like React & Astro.',
        icon: <Computer className="text-cyan-400" size={52} />
    }, 
    {
        name: "Backend Developer",
        description: "Basic Knowlegde on Backend development.",
        icon: <ChevronsLeftRightEllipsis className="text-cyan-400" size={52} />
    },
    {
        name: "Mobile Solutions",
        description: "Mobile Apps developer multi-platform that offers a fast & pleacefully experience.",
        icon: <Phone className="text-cyan-400" size={52} />
    }
]

const Services = () => {
    return (
        <>
        <h1 className="text-5xl mt-10 mb-5 px-10 font-bold">Services & Knowledge</h1>
        <section id="services" className="relative h-100 grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-5">
            {services.map((s, i) => (
                <div key={i} className="border-2 border-gray-700 bg-gray-900 p-6 hover:border-cyan-400 transition-colors rounded-2xl">
                    <div className="m-3">{s.icon}</div>
                    <h3 className="text-white font-bold text-4xl mt-10">{s.name}</h3>
                    <p className="text-gray-400 text-xl mt-5">{s.description}</p>
                </div>
            ))}
        </section>
        </>
    )
}

export default Services