import Image from 'next/image'
import logo from "@/public/logo.png"
import logoDark from "@/public/logo-dark.png"


export const Logo = () => {
    return (
        <div className='w-[50%] flex items-center dark:text-stone-800 justify-start gap-x-3'>
            <Image src={logoDark} className=' h-[1.5rem] w-[1.5rem] object-contain dark:hidden' />
            <Image src={logo} className=' h-[1.5rem] w-[1.5rem] object-contain hidden dark:block' />
        </div>
    )
}
