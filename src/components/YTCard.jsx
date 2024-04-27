import * as React from 'react';
import Image from 'next/image';
import { Box, Card, Typography } from '@mui/material';
import ytImg from "@/assets/images/youtube.png";


export default function YTCard() {

    return (
        <Card className='full-width-card'>
            <Box component="div" className='card-img'>
                <Image
                    src={ytImg}
                    alt='YouTube'
                />
            </Box>
            <Box component="div" className='card-content'>
                <Typography >
                    <b>Unlimited Access to Your Favorite Content</b>: With our platform, you can download YouTube videos to watch offline anytime, anywhere. Whether it's educational content,
                    entertainment, or DIY tutorials, you can have them at your fingertips without worrying about internet connectivity.
                </Typography>
                <Typography >
                    <b>Save Data and Battery Life</b>: Streaming videos online consumes a significant amount of data and drains your device's battery. By downloading YouTube videos through our platform,
                    you can conserve data usage and extend your device's battery life, especially when you're on the go.
                </Typography>
                <Typography >
                    <b>Customizable Viewing Experience</b>: Want to watch your favorite YouTube videos without distractions? Downloaded videos can be viewed offline without
                    comments or suggested videos popping up, allowing you to focus solely on the content you love
                </Typography>
            </Box>
        </Card>
    );
}