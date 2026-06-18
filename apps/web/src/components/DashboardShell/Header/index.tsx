"use client";

import { usePathname } from "next/navigation";
import * as S from "./styles";

const titles: Record<string, string> = {
  "/dashboard": "Overview",
  "/wallet": "Wallet",
  "/payments": "Payments",
  "/transactions": "Transactions",
  "/settings": "Settings",
};

export default function Header() {
  const pathname = usePathname();
  const title = titles[pathname] ?? "Dashboard";

  return (
    <S.Bar>
      <S.PageTitle>{title}</S.PageTitle>
      <S.Right>
        <S.KycBadge $verified={false}>
          <S.Dot $verified={false} />
          KYC Pending
        </S.KycBadge>
      </S.Right>
    </S.Bar>
  );
}
