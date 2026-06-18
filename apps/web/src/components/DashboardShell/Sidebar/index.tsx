"use client";

import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import * as S from "./styles";

const navItems = [
  {
    section: "Main",
    items: [
      { href: "/dashboard", label: "Overview", icon: <OverviewIcon /> },
      { href: "/wallet", label: "Wallet", icon: <WalletIcon /> },
      { href: "/payments", label: "Payments", icon: <PaymentsIcon /> },
      { href: "/transactions", label: "Transactions", icon: <TxIcon /> },
    ],
  },
  {
    section: "Account",
    items: [
      { href: "/settings", label: "Settings", icon: <SettingsIcon /> },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const initials = session?.user?.name
    ? session.user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "?";

  return (
    <S.Nav>
      <S.LogoArea>
        <S.LogoMark>D</S.LogoMark>
        <S.LogoName>Dimensity</S.LogoName>
      </S.LogoArea>

      <S.NavSection>
        {navItems.map((section) => (
          <div key={section.section}>
            <S.SectionLabel>{section.section}</S.SectionLabel>
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <S.NavItem key={item.href} href={item.href} $active={active}>
                  <S.NavIcon $active={active}>{item.icon}</S.NavIcon>
                  <S.NavLabel>{item.label}</S.NavLabel>
                </S.NavItem>
              );
            })}
          </div>
        ))}
      </S.NavSection>

      <S.BottomArea>
        <S.UserRow>
          <S.Avatar>{initials}</S.Avatar>
          <S.UserInfo>
            <S.UserName>{session?.user?.name ?? "User"}</S.UserName>
            <S.UserEmail>{session?.user?.email ?? ""}</S.UserEmail>
          </S.UserInfo>
        </S.UserRow>
        <S.SignOutBtn onClick={() => signOut({ callbackUrl: "/" })}>
          <SignOutIcon />
          Sign out
        </S.SignOutBtn>
      </S.BottomArea>
    </S.Nav>
  );
}

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

function OverviewIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12V22H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16v4" />
      <path d="M22 12a2 2 0 0 0-2-2H18a2 2 0 0 0 0 4h2a2 2 0 0 0 2-2z" />
    </svg>
  );
}

function PaymentsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function TxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function SignOutIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}
