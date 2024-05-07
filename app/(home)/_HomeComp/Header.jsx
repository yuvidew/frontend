import React from 'react'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { LoginBtn } from './LoginBtn'
import { Logo } from './Logo'


export const Header = () => {
    return (
        <main className='flex items-center justify-between pt-[1rem]'>
            <Logo/>
            <div className='w-[50%]  flex items-center justify-end gap-x-3'>
                <LoginBtn/>
                <ModeToggle/>
            </div>
        </main>
    )
}
