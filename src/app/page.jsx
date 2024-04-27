import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SimpleCard from '@/components/SimpleCard';
import YTCard from '@/components/YTCard';
import InstaCard from '@/components/InstaCard';
import rushImg from "@/assets/images/rush.png";
import reg from "@/assets/images/reg.png";
import shield from "@/assets/images/shield.png";
import hd from "@/assets/images/hd.png";
import XCard from '@/components/XCard';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <Box component="div" className='home-div'>
      <Box component="div">
        <Typography>
          Media downloader tools have become indispensable for many internet users, providing a convenient means to save and enjoy content from
          platforms like Instagram and YouTube. These tools offer a range of functionalities, allowing users to download videos, images, and even entire
          playlists with ease. Instagram, with its vast collection of photos and videos shared by users worldwide, is a popular platform for media consumption and sharing.
          Media downloader tools enable users to save posts, stories, and IGTV videos directly to their devices, ensuring they can revisit their favorite content offline or
          share it across other platforms.
        </Typography>
        <Typography >
          YouTube, being the largest video-sharing platform globally, offers an extensive array of content, from educational tutorials to entertainment videos and music.
          Media downloader tools empower users to download YouTube videos in various formats and qualities, enabling offline viewing without relying on an internet
          connection. Additionally, these tools often allow users to extract audio from YouTube videos, converting them into MP3 files for listening on the go.
          This flexibility enhances the user experience, catering to diverse preferences and usage scenarios.
        </Typography>
        <Typography >
          One of the key advantages of media downloader tools is their versatility across devices and platforms. Whether users access Instagram and YouTube on their smartphones,
          tablets, or computers, these tools typically offer cross-platform compatibility, allowing seamless downloading and access to content across devices.
          This flexibility extends to different operating systems, ensuring users can enjoy their downloaded media regardless of whether they use iOS, Android,
          Windows, or macOS devices
        </Typography>
        <Typography >
          Furthermore, media downloader tools often come equipped with additional features to enhance the downloading experience. For instance, some tools
          offer batch downloading capabilities, enabling users to download multiple videos or images simultaneously, saving time and effort. Moreover,
          advanced features such as scheduling downloads for specific times or automatically converting downloaded videos to preferred formats contribute to a
          more streamlined and personalized experience.
        </Typography>
        <Typography >
          However, it's essential for users to exercise caution and respect copyright laws when using media downloader tools. While these tools facilitate
          access to content for personal use, downloading copyrighted material without permission may infringe upon the rights of content creators and
          owners. Therefore, it's advisable to use media downloader tools responsibly and only download content for which you have the necessary rights
          or permissions. By doing so, users can continue to enjoy the convenience and benefits of media downloader tools while upholding ethical
          standards and legal obligations in the digital landscape.
        </Typography>
      </Box>
      <Typography variant='h5' mt={4}>Why Choose Us?</Typography>
      <Box component="div" className='choose-div' >
        <Grid container spacing={2} className='choose-grid'>
          <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
            <SimpleCard img={rushImg} title={"Simple and Fast"} description={"Our user-friendly interface makes downloading videos a breeze. With just a few clicks, you can save your favorite content directly to your device"} />
          </Grid>
          <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
            <SimpleCard img={hd} title={"High Quality"} description={"Say goodbye to pixelated videos. We ensure that every download maintains the highest possible quality, so you can enjoy your videos in crisp resolution"} />
          </Grid>
          <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
            <SimpleCard img={reg} title={"No Registration Required"} description={"We believe in simplicity. You don't need to sign up or create an account to use our service. Just visit our website and start downloading right away"} />
          </Grid>
          <Grid item className='choose-grid-item' xl={3} lg={3} md={4} sm={6} xs={12} >
            <SimpleCard img={shield} title={"Safe and Secure"} description={"Your privacy matters to us. Rest assured that your personal information is always safe when you use our platform"} />
          </Grid>
        </Grid>
      </Box>
      <Box component="div" mt={4}>
        <YTCard />
        <InstaCard />
        <XCard />
      </Box>
      <Box component='div' sx={{ backgroundColor: '#77B0AA', padding: '2px', textAlign: 'center' }} ><Footer /></Box>
    </Box>
  )
}