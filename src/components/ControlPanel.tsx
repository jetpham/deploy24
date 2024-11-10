import React from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Card,
} from "@/components/ui/card"
import SubmitMarker from './SubmitMarker';
import './ControlPanel.css';
import { handleSignIn } from "@/authActions"

const ControlPanel = () => {
    return (
        <Card className='ControlPanel'>
            <form
                action={handleSignIn}
            >
                <Button variant='outline' className='SignIn' type='submit'>Sign In</Button>
            </form>
            <Textarea className='TextArea' />
            <Button variant='outline' className='Submit'>Send</Button>
            <SubmitMarker />
        </Card>
    );
};

export default ControlPanel;