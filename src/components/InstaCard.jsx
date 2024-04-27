import * as React from 'react';
import Image from 'next/image';
import { Box, Card, Typography } from '@mui/material';
import instagram from "@/assets/images/instagram.png";


export default function InstaCard() {

    return (
        <Card className='full-width-card' >
            <Box component="div" className='card-img'>
                <Image
                    src={instagram}
                    alt='YouTube'
                />
            </Box>
            <Box component="div" className='card-content'>
                <Typography >
                    <b>Capture and Preserve Moments</b>: Instagram is full of captivating moments, from inspiring stories to hilarious memes. With our platform,
                    you can download these moments and preserve them forever, whether it's a breathtaking travel video or a heartwarming pet clip.
                </Typography>
                <Typography >
                    <b>Share Beyond the App</b>: Sometimes you come across a video on Instagram that you want to share with friends or save for later. Our platform allows
                    you to download Instagram videos, making it easy to share them on other social media platforms, messaging apps, or even via email.
                </Typography>
                <Typography >
                    <b>Curate Your Collection</b>: Create your own curated collection of Instagram videos by downloading your favorites. Whether it's for personal inspiration, professional reference,
                    or just for fun, having a library of downloaded Instagram videos allows you to revisit and enjoy them whenever you want.
                </Typography>
            </Box>
        </Card>
    );
}