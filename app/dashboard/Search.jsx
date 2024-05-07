import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export const Search = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col'>
            <div className='flex items-center w-[30rem] bg-stone-200 gap-x-2 rounded-md border'>
                <SearchIcon className='h-5 w-5 ml-2 text-stone-900 '/>
                <Input 
                    placeholder = "Search here.."
                    className = "bg-transparent border-none text-stone-900"
                />
            </div>
        </div>
    )
}
