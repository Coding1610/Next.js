"use client"
import React, { use } from 'react'
import { useState } from 'react';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import Loader from '@/components/Loader';

export default function Meeting(
    {params:{id}}:{params:{id:string}}
) {

  const {user,isLoaded} = useUser();
  const [isSetUpComplete, setIsSetUpComplete] = useState(false);

  const {call, isCallLoading} = useGetCallById(id);

  if( !isLoaded || isCallLoading ) return <Loader/>

  return (
    <>
    <main className='w-full h-screen'>
      <StreamCall call={call}>
        <StreamTheme>
          { !isSetUpComplete ? <MeetingSetup setIsSetUpComplete={setIsSetUpComplete}/> : <MeetingRoom/> }
        </StreamTheme>
      </StreamCall>
    </main>
    </>
  )
}