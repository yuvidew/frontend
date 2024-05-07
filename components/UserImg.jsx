import React from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

export const UserImg = ({user}) => {
    return (
        <Popover className = " bg-stone-100">
            <PopoverTrigger>
                <img className=' h-8 w-8 rounded-full'  src={user.photoURL} alt="" />
            </PopoverTrigger>
            <PopoverContent className = " bg-stone-100 mt-[1.5rem] text-stone-900">
                <div className=' flex items-center justify-center flex-col gap-y-3'>
                    <img className=' h-8 w-8 rounded-full'  src={user.photoURL} alt="" />
                    <h2 className='text-[1.3rem] font-medium'>{user.displayName}</h2>
                    <p className=' text-sm text-muted-foreground'>{user.email}</p>
                </div>
                <Button 
                    variant = "logout"
                    className=' text-left mt-[1rem] w-full'
                    onClick = {() => {
                        localStorage.removeItem('setUser')
                        window.location.reload()
                    }}
                >
                    <LogOut className=' w-4 h-4 mr-5' />
                    Logout
                </Button>
            </PopoverContent>
        </Popover>
    )
}
