import React from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Card,
} from "@/components/ui/card"
import SubmitMarker from './SubmitMarker';
import './ControlPanel.css';
import { handleSignIn, handleSignOut } from "@/authActions"
import { auth } from "@/auth"
import { Session } from 'next-auth';


const ControlPanel = ({ session }: { session: Session | null }) => {

    const getInitials = (name: string) => {
        const names = name.split(' ');
        const initials = names.map(n => n[0]).join('');
        return initials.toUpperCase();
    };


    return (
        <Card className='ControlPanel'>
            {session?.user ? (
                <>
                    <form action={handleSignOut} className='SignOutForm'>
                        <Avatar className='Avatar'>
                            <AvatarImage src={session.user.image ?? ''} />
                            <AvatarFallback>{getInitials(session.user.name ?? '')}</AvatarFallback>
                        </Avatar>
                        <Button variant='destructive' className='SignOut' type='submit'>Sign Out</Button>
                    </form>
                    <Textarea className='TextArea' />
                    <Button variant='outline' className='Submit'>Send</Button>
                    <SubmitMarker />
                </>
            ) : (
                <form action={handleSignIn}>
                    <Button variant='outline' className='SignIn' type='submit'>Sign In</Button>
                </form>
            )}
        </Card>
    );
};

export default ControlPanel;