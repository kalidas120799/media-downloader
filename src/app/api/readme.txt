import { NextResponse } from "next/server";

export const GET = () => {
    return NextResponse.json({ ts: Date.now() })
}

export const POST = async (request) => {
    const body = await request.json();
    console.log(body)
    return NextResponse.json({ ts: Date.now() })
}

export const PUT = async (request) => {
    const id = request.nextUrl.searchParams.get("id");
    const body = await request.json();
    console.log(body, id)
    return NextResponse.json({ ts: Date.now() })
}

export const DELETE = (request) => {
    const id = request.nextUrl.searchParams.get("id");
    console.log(id)
    return NextResponse.json({ ts: Date.now() })
}