"use client"

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { VscChromeClose } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname()
  const router = useRouter()

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
    <>
      <div className="text-2xl cursor-pointer" onClick={() => setToggle(true)}>
        <FiMenu />
      </div>
      <div
        className={`${toggle ? "h-screen w-full bg-slate-950 bg-opacity-40 absolute top-0 left-0 z-40 transition-all" : ""}`}
        onClick={() => setToggle(false)}
      ></div>
      <nav className={`absolute h-screen w-[15rem] bg-slate-700 z-50 top-0 left-0 p-6 transition-all ${toggle ? "left-0" : "left-[-999px]"}`}>
        <section className="flex justify-end">
          <button
            className="text-xl h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-600 hover:bg-opacity-60"
            onClick={() => setToggle(false)}
          >
            <VscChromeClose />
          </button>
        </section>

        <section className="mt-2">
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/" className={`hover:bg-[#1e293b] p-2 rounded-md ${pathname === '/' && 'bg-[#1e293b]'}`}>Attendance</Link>
            <p className="hover:bg-[#1e293b] p-2 rounded-md cursor-pointer" onClick={handleLogout}>Logout</p>
          </div>
        </section>
      </nav>
    </>
  )
}
