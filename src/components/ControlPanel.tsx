import React from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ControlPanel = () => {
    return (
        <Card className='ControlPanel'>
            <Textarea className='TextArea' />
            <Button variant='outline' className='Submit'>Send</Button>
        </Card>
    );
};

export default ControlPanel;