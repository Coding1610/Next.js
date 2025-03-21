"use client"
import React from 'react'
import { Button } from './ui/button';
import { useState, useEffect } from 'react'
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'

export default function MeetingSetup( {setIsSetUpComplete} : {setIsSetUpComplete:(value:boolean) => void} ) {

    const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(true);

    const call = useCall();

    if(!call){
        throw new Error('useCall must be used within StreamCall component');
    }

    useEffect(() => {

        if(isMicCamToggleOn){
            call?.camera?.disable();
            call?.microphone?.disable();
        }
        else{
            call?.camera?.enable();
            call?.microphone?.enable();
        }

    },[isMicCamToggleOn, call?.camera, call?.microphone]);

    return (    
        <>
        <div className='flex h-screen w-full flex-col justify-center items-center gap-3 text-white'>
            <h1 className='text-2xl font-bold'>Setup</h1>
            <VideoPreview />
            <div className='flex h-16 items-center justify-center gap-3'>
                <label className='flex items-center justify-center gap-2 font-medium' htmlFor="">
                    <input 
                        type='checkbox' 
                        checked={isMicCamToggleOn}
                        onChange={(e) => setIsMicCamToggleOn(e.target.checked)}
                    />
                    Join with Mic and Camera Off
                </label>
                <DeviceSettings/>
            </div>
            <Button 
                onClick={ 
                    () => {
                        call.join(); 
                        setIsSetUpComplete(true);}
                        } 
                className='rounded-md bg-green-500 px-2.5 hover:bg-green-600 focus:bg-green-600'> Join Meeting</Button>
        </div>  
        </>
  )
}