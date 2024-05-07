"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { UserImg } from '@/components/UserImg'



export const LoginBtn = () => {
    const user = JSON.parse(localStorage.getItem("setUser"))
    return (
    <div className=' flex items-center justify-end gap-x-3'>
        {
            user !== null ? (
                <div className=' flex items-center gap-x-3'>
                <UserImg user = {user} />
                <Link href={'/dashboard'}>
                    <Button>
                        DashBoard
                    </Button>
                </Link>
                </div>
            ) : (
                <Dialog className = "bg-stone-900">
                <DialogTrigger>
                    <Button variant = "ghost">Login</Button>
                </DialogTrigger>
                <DialogContent className = "bg-stone-900 border-none rounded-lg">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList>
                            <TabsTrigger value="account">Sign In</TabsTrigger>
                            <TabsTrigger value="password">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <SignIn/>
                        </TabsContent>
                        <TabsContent value="password">
                            <SignUp/>
                        </TabsContent>
                    </Tabs>
                </DialogContent>
                </Dialog>
            )
        }
    </div>
    )
}
