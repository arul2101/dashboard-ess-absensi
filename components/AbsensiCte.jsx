import {
  Card
} from "@/components/ui/card"
import { FiClock } from "react-icons/fi";

export default function AbsensiCte() {
  return (
    <section className="w-[350px] mx-auto mt-14">
      <section className="text-center space-y-2">
        <p>Wednesday, October 9th 2024</p>
        <p>Working Hours (08:00 - 17:00)</p>
        <h2 className="text-2xl font-bold">19:14:37</h2>
      </section>
      <Card className="flex justify-center overflow-hidden mt-4">
        <div className="w-[50%] hover:bg-[#1e293b] p-4 flex flex-col items-center gap-2 cursor-pointer">
          <FiClock />
          <p>Clock-In</p>
        </div>

        <div className="w-[50%] hover:bg-[#1e293b] p-4 flex flex-col items-center gap-2 cursor-pointer">
          <FiClock />
          <p>Clock-Out</p>
        </div>
      </Card>
    </section>
  )
}
