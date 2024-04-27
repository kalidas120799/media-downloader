import * as React from 'react';
import Image from 'next/image'
import { CardContent, Typography, Box, Card } from '@mui/material';

export default function SimpleCard({ img, title, description, imgWidth = "50%" }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Box component="div" textAlign="center" sx={{ padding: "10px" }}>
                <Image
                    src={img}
                    alt={title}
                    style={{ height: "auto", width: imgWidth }}
                />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}