import AbsensiCte from "@/components/AbsensiCte";
import AvatarEmployee from "@/components/AvatarEmployee";
import IframeGmaps from "@/components/IframeGmaps";
import Navigation from "@/components/Navigation";
import TableAbsensi from "@/components/TableAbsensi";
import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";


export default async function Home() {
  const supabase = supabaseServer();
  const { data, error } = await supabase.auth.getUser();
  const { data: absensi } = await supabase.from("absensi").select();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="max-w-[1920px] mx-auto">
      <nav className="p-6 flex items-center justify-between">
        <Navigation />
        <AvatarEmployee full_name={data?.user.user_metadata.full_name} />
      </nav>

      <AbsensiCte />
      <TableAbsensi absensi={absensi} />
    </div >
  )
}
