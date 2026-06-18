import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignUpForm from "@/components/SignUpForm";

export default async function SignUpPage() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");
  return <SignUpForm />;
}
