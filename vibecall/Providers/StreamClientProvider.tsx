"use client"

import {
    StreamVideo,
    StreamVideoClient,
} from "@stream-io/video-react-sdk";

import { useUser } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import { tokenProvider } from "@/actions/stream.actions";
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({children}:{children:React.ReactNode}) => {

    const [videoClient, setvideoClient] = useState<StreamVideoClient>();
    const {user,isLoaded} = useUser();

    useEffect(() => {
        if( !user || !isLoaded ) return;
        if( !apiKey ) throw new Error("Stream API Key not found");
        
        const client = new StreamVideoClient({
            apiKey,
            user:{
                id:user?.id,
                name:user?.username || user?.id,
                image:user?.imageUrl,
            },
            tokenProvider,
        });

        setvideoClient(client);
    },[user,isLoaded]);

    if( !videoClient ) return <Loader />

    return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
};

export default StreamVideoProvider;