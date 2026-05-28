import { url } from "inspector";
import { redirect } from "next/navigation";

export async function GET(){
    const params = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID || '',
        redirect_uri: process.env.GITHUB_REDIRECT_URI || '',
        scope: 'repo read:user user:email'
    });
    redirect(`https://github.com/login/oauth/authorize?${params}`)
    const githubAuthUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;
}