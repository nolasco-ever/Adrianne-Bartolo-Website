import React from 'react'
import { ButtonGroup, Button } from '@mui/material';

export default function AboutMe() {
    const buttons = [
        <Button key="one">Twitter</Button>,
        <Button key="two">Email</Button>,
        <Button key="three">LinkedIn</Button>,
        <Button key="four">Calendly</Button>,
    ];

    return (
        <div id="about-me-page">
            ABOUT ME
        </div>
    )
}
