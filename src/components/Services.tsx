import { Phone, Computer, ChevronsLeftRightEllipsis } from "@lucide/astro"

interface ServiceProps {
    name: string,
    description: string,
    icon: React.ReactNode
}

const Service: ServiceProps[]=[
    {
        name: 'Frontend Development',
        description: 'aaaaaaaaaaaaaa ',
        icon: <Computer/>
    }
]

const Services=()=>{

    return(
        <>
        
        </>
    )
}

export default Services