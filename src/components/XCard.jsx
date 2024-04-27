import * as React from 'react';
import Image from 'next/image';
import { Box, Card, Typography } from '@mui/material';
import xImg from "@/assets/images/twitter.png";


export default function XCard() {

    return (
        <Card className='full-width-card'>
            <Box component="div" className='card-img'>
                <Image
                    src={xImg}
                    alt='X Twitter'
                />
            </Box>
            <Box component="div" className='card-content'>
                <Typography >
                    <b>What it is</b>: X allows users to send and read short messages called "tweets" (originally limited to 140 characters, now up to 280). People can follow other users to see their tweets in their feed.
                </Typography>
                <Typography >
                    <b>Popularity</b>: With over 500 million users, it's one of the biggest social networks globally.
                </Typography>
                <Typography >
                    <b>Key features</b>: Sharing text, images, and videos, direct messaging, video and audio calling, bookmarking tweets, creating lists and communities for organizing content,
                    and "Spaces" for live audio discussions.
                </Typography>
            </Box>
        </Card>
    );
}