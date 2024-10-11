import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { getTimeDifference } from "@/constant";

export default function TableRowAbsensi({ date, clock_in, clock_out, location }) {
  const start = new Date(`${date} ${clock_in}`);
  const end = !clock_out || new Date(`${date} ${clock_out}`);

  const workedTime = getTimeDifference(start, end);
  return (
    <TableRow>
      <TableCell className="font-medium">{date}</TableCell>
      <TableCell>{clock_in}</TableCell>
      <TableCell>{clock_out}</TableCell>
      <TableCell className="text-center">{clock_out !== "-" ? workedTime : "-"}</TableCell>
      <TableCell className="text-right"><Link href={location} target="_blank">Show Location</Link></TableCell>
    </TableRow>
  )
}
