import * as React from 'react';
import { Button, InputBase, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


export default function SearchBox({ from, search, setSearch, handleDownload }) {

    const downloadIcon = (from) => {
        if (from === 'youtube') return <YouTubeIcon />
        if (from === 'instagram') return <InstagramIcon />
        if (from === 'twitter') return <XIcon />
        return <FileDownloadIcon />
    }

    return (
        <Paper
            component="form"
            className='download-input'
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Past Link"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="contained" onClick={() => handleDownload()} startIcon={downloadIcon(from)} >Download</Button>
        </Paper>
    );
}