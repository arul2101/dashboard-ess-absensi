import React from 'react'
import Webcam from 'react-webcam'
import { Button } from './ui/button';

const aspectRatios = {
  landscape: {
    width: 1920,
    height: 1080,
  },
  potrait: {
    height: 1920,
    width: 1080
  }
};

export default function Webcamera({ setOpenCamera, setCapturedImage, setConfirm, type = "potrait" }) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Webcam
        mirrored
        screenshotFormat='image/jpeg'
        screenshotQuality={1}
        videoConstraints={{
          facingMode: "user",
          ...aspectRatios[type],
        }}

      >
        {({ getScreenshot }) => (
          <div className="flex justify-center items-center">
            <Button
              onClick={() => {
                const imageSrc = getScreenshot()
                setCapturedImage(imageSrc);
                setOpenCamera(false);
                setConfirm(false)
              }}
              className="mt-4"
            >
              Capture Photo
            </Button>
          </div>
        )}
      </Webcam>
    </div>
  )
}
