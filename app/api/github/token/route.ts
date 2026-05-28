import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req :NextRequest) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("github_token")?.value;

    return NextResponse.json({ accessToken : accessToken || null});
}