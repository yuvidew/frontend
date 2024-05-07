"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase';

const provider = new GoogleAuthProvider();


export const SignIn = () => {
    const onSignIn = () => {
        const promise = signInWithPopup(
                auth , 
                provider
            ).then( v => {
                localStorage.setItem("setUser" , JSON.stringify(v.user))
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
                Sign in to <span className=' underline'>EduText</span>
            </h1>
            <Button 
                variant = "secondary" 
                className = "w-full mt-[2rem]"
                onClick = {onSignIn}
            >
                Sign In with Google
            </Button>
        </article>
    )
}
