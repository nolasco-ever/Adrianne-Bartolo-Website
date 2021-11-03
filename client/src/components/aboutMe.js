import React from 'react'
import { Fab, ButtonGroup, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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

            <ButtonGroup
                id="button-group"
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
                {buttons}
            </ButtonGroup>

            <Fab id="add-button" color="primary" aria-label="add">
                <AddIcon
                    sx={{ color: '#000' }}
                    fontSize='large'
                />
            </Fab>
        </div>
    )
}
