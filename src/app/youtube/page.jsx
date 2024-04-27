"use client";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Alert, Box, Stack } from '@mui/material'
import { download } from "@/redux/thunks/download";
import { addSource, updatePayload } from "@/redux/slices/download"
import SearchBox from '@/components/SearchBox'
import MediaCard from '@/components/MediaCard';


const Page = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [error, setError] = useState(null)

  const handleDownload = () => {
    try {
      setError(null)
      const url = new URL(search);
      if (!url || search.trim().length === 0) return setError("Please Provide Valid URL")
      dispatch(addSource('youtube'));
      dispatch(download({ url: search.trim() }));
    } catch (err) {
      return setError("Please Provide Valid URL")
    }
  }

  useEffect(() => {
    return () => {
      dispatch(updatePayload({}));
      dispatch(addSource(null));
    }
  }, [])

  return (
    <Box component="div" className='youtube'>
      {error && <Alert severity="error">{error}</Alert>}
      <Stack
        direction="row"
        justifyContent="center"
        style={{ width: "100%", marginTop: "2%" }}
      >
        <SearchBox search={search} setSearch={setSearch} handleDownload={handleDownload} />

      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        style={{ width: "100%", marginTop: "2%" }}
        className='media-div youtube'
      >
        <MediaCard from={"youtube"} />
      </Stack>
    </Box>
  )
}

export default Page