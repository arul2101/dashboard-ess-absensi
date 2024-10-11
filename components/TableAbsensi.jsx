import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import TableRowAbsensi from "./TableRowAbsensi"

export default function TableAbsensi({ absensi }) {
  return (
    <section className="max-w-2xl mx-auto mt-10 px-4 mb-16">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">DATE</TableHead>
            <TableHead>CLOCK IN</TableHead>
            <TableHead>CLOCK OUT</TableHead>
            <TableHead className="text-center">WORKED TIME</TableHead>
            <TableHead className="text-right">CLOCK IN LOCATION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {absensi.map((data, index) => (
            <TableRowAbsensi {...data} key={index} />
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
