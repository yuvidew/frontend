"use client"
import React from 'react'
import { Logo } from '../(home)/_HomeComp/Logo'
import { Search } from './Search'
import { UserImg } from '@/components/UserImg'
import { MobileSearch } from './MobileSearch'

export const Header = () => {
    const user = JSON.parse(localStorage.getItem("setUser"))
    return (
        <header className=''>
            <main className=' container flex items-center justify-between'>
                <div className=' w-[50%] flex items-center justify-start h-[4rem]'>
                    <Logo/>
                </div>
                <div className=' w-[50%] flex items-center justify-end gap-5 h-[4rem]'>
                    <div className=' lg:block md:hidden hidden'>
                        <Search/>
                    </div>
                    <div className='lg:hidden md:block block'>
                        <MobileSearch/>
                    </div>
                    <UserImg user = {user} />
                </div>
            </main>
        </header>
    )
}
