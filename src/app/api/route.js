import { NextResponse } from "next/server";

export const GET = () => {
    return NextResponse.json({
        name: 'media-downloader',
        version: "1.0.0"
    })
}