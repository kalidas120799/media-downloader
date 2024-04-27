import * as React from 'react';
import { Button, InputBase, Paper } from '@mui/material';

export default function SearchBox({ search, setSearch, handleDownload }) {

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
            <Button variant="contained" onClick={() => handleDownload()} >Download</Button>
        </Paper>
    );
}