"use client"

import react from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { supabaseBrowser } from "@/lib/supabase/browser"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function AvatarEmployee({ full_name }) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <div className="flex gap-2">
      <div className="text-end">
        <h2 className="text-xl">{full_name}</h2>
        <p className="text-sm">Employee</p>
      </div>

      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-3 w-[100px]">
          <p className="cursor-pointer" onClick={handleLogout}>Logout</p>
        </PopoverContent>
      </Popover>
    </div>
  )
}
