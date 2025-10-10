'use client'

import { useSession } from '@/lib/auth-client'
import React from 'react'
import { Card, CardHeader } from '../ui/card';
import { Spinner } from '../ui/spinner';

const UserProfileForm = () => {

    // Fetch session on the client
    const {data: session, isPending} = useSession();
    const user = session?.user

    if (isPending) {
        return <Spinner />
    }

    return (
        <Card>
            <CardHeader>
                Welcome back, {user?.name}! This is your profile information
            </CardHeader>
        </Card>
    )
}

export default UserProfileForm