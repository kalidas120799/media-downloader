'use client';
import React from 'react'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Stack } from '@mui/material'
import { red } from '@mui/material/colors';
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MediaSkeleton from './MediaSkeleton';

export default function MediaCard({ from }) {

    const downloadData = useSelector((state) => state.download.payload);
    const downloadRequesting = useSelector((state) => state.download.isRequesting);
    const source = useSelector((state) => state.download.source);

    const createEmbedURL = (url) => {
        if (!url) return url;
        const ytURL = url.split("/");
        return `https://www.youtube.com/embed/${ytURL[ytURL.length - 1]}`
    }

    return (
        <Box component="div">
            {
                downloadData.medias && <Card className='media-div-card' sx={{ maxWidth: "750px" }} >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="profile">
                                {downloadData?.author[0]}
                            </Avatar>
                        }
                        title={downloadData?.author}
                        subheader={downloadData?.title}
                    />

                    {
                        source === 'youtube' && <iframe width="100%" height="300px" src={createEmbedURL(downloadData?.url)}
                            title={downloadData?.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen />
                    }

                    <Stack spacing={{ xs: 1 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center">
                        {
                            source !== 'youtube' && downloadData?.medias?.filter((media) => media?.type == 'image').length === 0 && <Image
                                src={downloadData.thumbnail}
                                alt={downloadData?.title}
                                width={500}
                                height={500}
                                style={{ height: "auto" }}
                            />
                        }
                        {
                            downloadData?.medias?.filter((media) => media?.type == 'image').map((media, index) => (
                                <Image
                                    src={media.url}
                                    alt={`${index} ${downloadData?.title}`}
                                    width={200}
                                    height={200}
                                    style={{ textAlign: 'center' }}
                                />
                            ))
                        }
                    </Stack>
                    <CardContent>
                        {
                            downloadData?.medias?.filter((media) => media?.type !== 'image').map((media, index) => (
                                <Button variant="contained" key={index} sx={{ margin: "8px" }} startIcon={<FileDownloadIcon />}>
                                    <a className='nav-link' href={media.url}
                                        target='_blank' download={`media-downloader-${from}.${media.extension}`}
                                    >{media.quality.toUpperCase()}</a>
                                </Button>
                            ))
                        }
                    </CardContent>
                </Card>
            }
            {
                downloadRequesting && <MediaSkeleton />
            }
        </Box>
    )
}