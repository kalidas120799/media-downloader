import React from 'react'
import { Box, Card, Skeleton } from '@mui/material';

const MediaSkeleton = () => {
    return (
        <Card className='media-div-card' sx={{ maxWidth: "750px", padding: "5px" }} >
            <Box component="div" sx={{ display: "flex", width: "100%" }}>
                <Skeleton variant="circular" animation="wave" sx={{ marginTop: "5px" }} width={40} height={40} />
                <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem', width: "100%", marginLeft: "2px" }} />
            </Box>
            <Skeleton variant="rectangular" animation="wave" sx={{ marginTop: "5px" }} width={600} height={400} />
        </Card>
    )
}

export default MediaSkeleton