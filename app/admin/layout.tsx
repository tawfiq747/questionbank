import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ cookies() is async in Next.js 16
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin");

  if (!auth) {
    redirect("/login");
  }

  return <>{children}</>;
}
