import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export const Heading = () => {
    return (
        <section className='mt-[2rem] m-auto h-[75vh] max-w-3xl space-y-4 flex items-center justify-center flex-col gap-y-3 text-center'>
            <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas , Document & Plans, Unified, Welcome to {" "}
                <span className=" underline">EduText</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            "Empowering Learning and Collaboration:
            Exploring <span className=' underline font-bold'>EduText</span> for Education and Project Management"
            </h3>
            <Button className = "font-medium">Enter in EduText <ArrowRight className=' h-5 w-5 ml-2' /></Button>
        </section>
    )
}
