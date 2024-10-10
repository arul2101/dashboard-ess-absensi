import LoginForm from "@/components/LoginForm";
import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function page() {
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) redirect("/");
  return <LoginForm />
}
