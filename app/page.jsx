"use client"

import AbsensiCte from "@/components/AbsensiCte";
import AvatarEmployee from "@/components/AvatarEmployee";
import Navigation from "@/components/Navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from "next/link";

const datas = [
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
  {
    date: "08/10/2024",
    clock_in: "07:44:50",
    clock_out: "17:00:00",
    location: "link-location",
  },
]


export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <nav className="p-6 flex items-center justify-between">
        <Navigation />
        <AvatarEmployee />
      </nav>

      <AbsensiCte />

      <section className="max-w-2xl mx-auto mt-10 px-4 mb-16">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">DATE</TableHead>
              <TableHead>CLOCK IN</TableHead>
              <TableHead>CLOCK OUT</TableHead>
              <TableHead className="text-right">CLOCK IN LOCATION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {datas.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{data.date}</TableCell>
                <TableCell>{data.clock_in}</TableCell>
                <TableCell>{data.clock_out}</TableCell>
                <TableCell className="text-right"><Link href={data.location}>Show Location</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div >
  )
}
