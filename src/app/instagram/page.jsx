"use client";
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SimpleCard from '@/components/SimpleCard';
import photoImg from "@/assets/images/photos.png";
import videoImg from "@/assets/images/video.png";
import reelsImg from "@/assets/images/reels.png";
import storyImg from "@/assets/images/story.png";

export default function Page() {

    return (
        <Box component="div">
            <Typography><b>Media Downloader</b> supports download Instagram videos, photos, reels, stories and IGTV easily.
                Download Instagram video and photo to your phone and computer for free with the best quality. Download Instagram video on a web browser,
                no software installation required. Support Android, iOS, iPhone devices.
            </Typography>
            <Typography mt={1}>
                Our Instagram downloader works on web browser, supports download Instagram photo and video in HD quality without installing software.
                Works great on all browsers and devices: Chrome, Firefox, Opera, Edge, PC, tablet, iPhone, Android.
            </Typography>
            <Typography variant='h5' mt={2}>How to download Instagram Videos, Photos & Reels</Typography>
            <Typography mt={1}>1. Open the Instagram app on your phone.</Typography>
            <Typography>2. Select any photos and videos you want to download.</Typography>
            <Typography>3. Click the icon (...) and keep pressing the <b>Copy Link</b> option.</Typography>
            <Typography>4. Go back to <b>Media Downloader</b> and paste the copied Instagram link into the input box and press the <b>Download</b> button</Typography>
            <Typography>5. Tap the Download Video or Download Photo button, then the file will be saved to your device.</Typography>
            <Typography variant='h5' mt={2}>Instagram Media Downloader Features</Typography>
            <Box component="div" className='choose-div' >
                <Grid container spacing={2} className='choose-grid'>
                    <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
                        <SimpleCard imgWidth='100%' img={photoImg} title={"Photos Downloader"} description={"If you're looking for a way to save images from Instagram posts, then Media Downloader's Instagram photo downloader is an excellent tool to consider. With Media Downloader, you can download both individual post images and multiple Instagram photos from carousels."} />
                    </Grid>
                    <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
                        <SimpleCard imgWidth='100%' img={videoImg} title={"Videos Downloader"} description={"Media Downloader was designed to allow you to download Instagram videos for any purpose that suits you. With Media Downloader, you can download both individual videos and multiple videos from carousels."} />
                    </Grid>
                    <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
                        <SimpleCard imgWidth='100%' img={reelsImg} title={"Reels Downloader"} description={"Reels is a recently introduced video format on Instagram that mimics the concept of TikTok. Media Downloader can assist you in downloading Instagram Reels videos through our Instagram Reel downloader, allowing you to save and watch your preferred Reels videos at any time."} />
                    </Grid>
                    <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
                        <SimpleCard imgWidth='100%' img={storyImg} title={"Story Downloader"} description={"Our Instagram story downloader is the perfect solution to save, view and reuse stories even after the 24-hour limit. Download your favorite stories in just a few clicks - no app required!"} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}