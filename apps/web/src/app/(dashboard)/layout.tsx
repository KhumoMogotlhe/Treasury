import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Sidebar from "@/components/DashboardShell/Sidebar";
import Header from "@/components/DashboardShell/Header";
import DashboardLayoutShell from "@/components/DashboardShell/Shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");

  return (
    <DashboardLayoutShell sidebar={<Sidebar />} header={<Header />}>
      {children}
    </DashboardLayoutShell>
  );
}
