import { NextResponse } from "next/server";

export const GET = () => {
    return NextResponse.json({
        name: 'media-downloader',
        version: process.env.APP_VERSION
    })
}