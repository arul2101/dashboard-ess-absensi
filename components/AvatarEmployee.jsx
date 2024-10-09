import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function AvatarEmployee() {
  return (
    <div className="flex gap-2">
      <div className="text-end">
        <h2>Muhammad Yanuarullah Assidiq</h2>
        <p>Employee</p>
      </div>

      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-3 w-[100px]">
          <Link href="/profile">Profile</Link>
          <Link href="/logout">Logout</Link>
        </PopoverContent>
      </Popover>
    </div>
  )
}
