"use client";

import { useState, useEffect } from "react";
import {
  Card
} from "@/components/ui/card"
import { FiClock } from "react-icons/fi";

import { time, date, day, month, year, getCurrentTime, monthNumber } from "@/constant";
import Webcamera from "./Webcamera";
import Image from "next/image";
import { Button } from "./ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import IframeGmaps from "./IframeGmaps";

export default function AbsensiCte() {
  const [times, setTimes] = useState(time);
  const [initialRender, setInitialRender] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typeAbsensi, setTypeAbsensi] = useState("");
  const [absensi, setAbsensi] = useState({});
  const [userLocation, setUserLocation] = useState(null);
  const supabase = supabaseBrowser();
  const router = useRouter();

  useEffect(() => {
    (() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            // display an error if we cant get the users position
            console.error('Error getting user location:', error);
          }
        )
      } else {
        // display an error if not supported
        console.error('Geolocation is not supported by this browser.');
      }
    })();
  }, [])

  useEffect(() => setInitialRender(true), []);
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("absensi")
        .select()
        .eq('date', `${date}/${monthNumber}/${year}`);

      if (error) {
        toast.error(error.message);
      }

      setAbsensi(data);
    })();
  }, [supabase, absensi]);


  setInterval(() => setTimes(getCurrentTime()), 1000)

  const handleConfirm = async (type) => {
    if (type === "clock in") {
      const { data, errorUSer } = await supabase.auth.getUser();
      setLoading(true);
      const { error } = await supabase
        .from('absensi')
        .insert({
          user_id: data.user.id,
          date: `${date}/${monthNumber}/${year}`,
          clock_in: times,
          clock_out: "-",
          location: `https://www.google.com/maps/search/?api=1&query=${userLocation.latitude},${userLocation.longitude}`,
          image_url: "-"
        });

      if (error) {
        toast.error(error.message);
        return;
      }

      setLoading(false);
      setConfirm(true);
      toast.success("Success Clock In!")
      router.refresh();
    } else {
      setLoading(true);
      const { error } = await supabase
        .from('absensi')
        .update({ clock_out: times })
        .eq('date', `${date}/${monthNumber}/${year}`);

      if (error) {
        toast.error(error.message);
        return;
      }

      setLoading(false);
      setConfirm(true);
      toast.success("Success Clock Out!")
      router.refresh();
    }

  }

  if (!initialRender && !absensi) return (
    <section className="w-[350px] mx-auto mt-14">
      <p className="text-center">Loading...</p>
    </section>
  )

  if (initialRender && absensi) return (
    <>
      {openCamera && <Webcamera setCapturedImage={setCapturedImage} setOpenCamera={setOpenCamera} setConfirm={setConfirm} />}
      {capturedImage && !confirm &&
        <div className="max-w-3xl mx-auto px-4">
          <Image src={capturedImage} alt="image-person" width={1080} height={1920} />
          <div className="flex justify-center items-center mt-4">
            <Button onClick={() => handleConfirm(typeAbsensi)} disabled={loading}>{loading ? 'Loading...' : 'Confirm'}</Button>
          </div>
        </div>
      }

      <section className="w-[350px] mx-auto mt-14 mb-5">
        <section className="text-center space-y-2">
          <p>{day}, {month} {date}th {year}</p>
          <p>Working Hours (08:00 - 17:00)</p>
          <h2 className="text-2xl font-bold">{times}</h2>
        </section>
        <Card className="flex justify-center overflow-hidden mt-4">
          <div
            className={`w-[50%] p-4 flex flex-col items-center gap-2  ${day === 'Sunday' || day === 'Saturday' || openCamera ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-[#1e293b]'}`}
            onClick={() => {
              if (day === 'Sunday' || day === 'Saturday' || openCamera) return;
              setTypeAbsensi("clock in")
              setOpenCamera(true)
            }}
          >
            <FiClock />
            <p>Clock-In</p>
          </div>

          <div
            className={`w-[50%] p-4 flex flex-col items-center gap-2  ${day === 'Sunday' || day === 'Saturday' || openCamera || Object.keys(absensi).length === 0 ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-[#1e293b]'}`}
            onClick={() => {
              if (Object.keys(absensi).length === 0 || day === 'Sunday' || day === 'Saturday' || openCamera) return;
              setTypeAbsensi("clock out")
              setOpenCamera(true)
            }}
          >
            <FiClock />
            <p>Clock-Out</p>
          </div>
        </Card>
      </section>
      <IframeGmaps userLocation={userLocation} />
    </>
  )
}
