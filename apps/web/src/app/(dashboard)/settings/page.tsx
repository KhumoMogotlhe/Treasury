import { auth } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div style={{ color: "#f1f5f9", fontFamily: "inherit" }}>
      <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
        Account settings for {session?.user?.email}
      </p>
      <p style={{ color: "#334155", fontSize: "0.8125rem", marginTop: "2rem" }}>
        Settings coming soon.
      </p>
    </div>
  );
}
