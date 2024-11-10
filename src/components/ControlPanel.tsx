import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Card,
} from "@/components/ui/card"
import { getLatLong } from './getLatLong';
import './ControlPanel.css';
import { handleSignIn, handleSignOut } from "@/authActions"
import { Session } from 'next-auth';


const ControlPanel = ({ session }: { session: Session | null }) => {
    const [message, setMessage] = useState('');

    const getInitials = (name: string) => {
        const names = name.split(' ');
        const initials = names.map(n => n[0]).join('');
        return initials.toUpperCase();
    };

    const handleSend = async () => {
        const location = await getLatLong();
        const currentTime = new Date().toLocaleString();
        console.log('Location:', location);
        console.log('Current Time:', currentTime);
        console.log('Message:', message);
    }

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
                    <Textarea 
                        className='TextArea' 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                    />
                    <Button variant='outline' className='Submit' onClick={handleSend}>Send</Button>
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