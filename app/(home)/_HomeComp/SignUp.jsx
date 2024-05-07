"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Eye, User } from 'lucide-react'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'sonner'


export const SignUp = () => {
    const [form , setForm] = useState({
        email : "",
        password : ""
    })

    const onChange = (e) => {
        const {name , value} = e.target 
        setForm({
            ...form,
            [name] : value
        })
    }

    const signUpUser = (e) => {
        e.preventDefault()
        const promise = createUserWithEmailAndPassword(
            auth,
            form.email,
            form.password
        ).then((value) => {
            window.location.reload()
        })

        toast.promise(promise , {
            loading : 'Moving to trash...',
            success : "Note moved to trash!",
            error : "Failed to archive note."
        })
    }

    return (
        <article>
            <h1 className=' mt-[1rem] text-center'>
                Sign up to <span className=' underline'>EduText</span>
            </h1>
            <form action="" className=' mt-[1rem]' onSubmit={signUpUser}>
                <div className=' flex items-center gap-3 bg-white rounded-md mb-[1rem]'>
                    <Button type = "button">
                        <User/>
                    </Button>
                    <Input 
                        value = {form.email}
                        onChange = {onChange}
                        name = "email"
                        placeholder = "Enter email id.." 
                        className = "bg-transparent text-stone-900 placeholder:text-stone-800"
                    />
                </div>
                <div className=' flex items-center gap-3 bg-white rounded-md'>
                    <Button type = "button">
                        <Eye/>
                    </Button>
                    <Input 
                        value = {form.password}
                        onChange = {onChange}
                        name = "password"
                        placeholder = "Enter password.." 
                        className = "bg-transparent text-stone-900 placeholder:text-stone-800"
                    />
                </div>
                <Button variant = "secondary" className = "w-full mt-[2rem]">
                    Submit
                </Button>
            </form>
        </article>
    )
}
