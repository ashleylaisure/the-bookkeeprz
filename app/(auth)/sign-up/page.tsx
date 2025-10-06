
import  SignUpForm  from '@/components/forms/SignUpForm'
import React from 'react'

export default function SignInPage() {

    return (
        <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Register</h1>
            </div>
            <SignUpForm />
        </div>
    )
}
