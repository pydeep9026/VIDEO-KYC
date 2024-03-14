import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import html2canvas from 'html2canvas';

const Videocall = ({ currentusername, onImageCapture }) => {
    const containerRef = useRef(null);
    const [roomid, setRoomid] = useState("sampleroom123"); 
    const [capturedImage, setCapturedImage] = useState(null); 
    const [clicked, setClicked] = useState(false);

    const captureVideoCall = async () => {
        setClicked(true);
        console.log('Button clicked');
        try {
            const canvas = await html2canvas(containerRef.current);
            const image = canvas.toDataURL();
            console.log('Captured image:', image);
            setCapturedImage(image); 
            onImageCapture(image);
        } catch (error) {
            console.error('Error capturing Videocall component:', error);
        }
    };

    useEffect(() => {
        const myMeeting = async () => {
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                533660541,
                'd12dcc90b48ce13cd029103100d70101',
                roomid,
                Date.now().toString(),
                currentusername
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);

            zp.joinRoom({
                container: containerRef.current,
                sharedLinks: [
                    {
                      name: 'Room id',
                      url:`${roomid}`
                    },
                  ],
                showTextChat: false,
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall
                }
            });
        };

        myMeeting();
    }, [roomid, currentusername]);

    return (
        <>
            <div ref={containerRef} style={{
                position: 'absolute',
                width: '72vh',
                height: '65vh',
                backgroundColor: '#f0f0f0',
                bottom: '0px',
                overflowY: 'auto',
                overflowX: 'hidden',
                left: '32vh',
                zIndex: '100'
            }}></div>
            <div style={{position:"absolute",bottom:"40px",left:"62vh",zIndex:"160"}}>
            <button 

      onClick={captureVideoCall}
      className="captureButton"
    >
      Capture Videocall
    </button>

            </div>
        </>
    ); 
};

export default Videocall;
