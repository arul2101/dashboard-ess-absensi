"use client";

import { useState, useEffect } from "react";
import {
  Card
} from "@/components/ui/card"
import { FiClock } from "react-icons/fi";

import { time, date, day, month, year, getCurrentTime, monthNumber } from "@/constant";

export default function AbsensiCte() {
  const [times, setTimes] = useState(time);
  const [initialRender, setInitialRender] = useState(false);

  useEffect(() => setInitialRender(true), []);
  setInterval(() => setTimes(getCurrentTime()), 1000)

  if (!initialRender) return (
    <section className="w-[350px] mx-auto mt-14">
      <p className="text-center">Loading...</p>
    </section>
  )



  if (initialRender) return (
    <section className="w-[350px] mx-auto mt-14">
      <section className="text-center space-y-2">
        <p>{day}, {month} {date}th {year}</p>
        <p>Working Hours (08:00 - 17:00)</p>
        <h2 className="text-2xl font-bold">{times}</h2>
      </section>
      <Card className="flex justify-center overflow-hidden mt-4">
        <div
          className={`w-[50%] p-4 flex flex-col items-center gap-2  ${day === 'Sunday' || day === 'Saturday' ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-[#1e293b]'}`}
          onClick={() => console.log(times)}
        >
          <FiClock />
          <p>Clock-In</p>
        </div>

        <div
          className={`w-[50%] p-4 flex flex-col items-center gap-2  ${day === 'Sunday' || day === 'Saturday' ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-[#1e293b]'}`}
          onClick={() => {
            console.log(`${date}/${monthNumber}/${year}`)
          }}
        >
          <FiClock />
          <p>Clock-Out</p>
        </div>
      </Card>
    </section>
  )
}
