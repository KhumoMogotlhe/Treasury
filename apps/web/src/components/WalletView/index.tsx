"use client";

import * as S from "./styles";

const currencies = [
  { name: "USD Coin", code: "USDC", flag: "🔵", balance: "0.00 USDC", usd: "≈ $0.00", color: "rgba(99,102,241,0.15)" },
  { name: "South African Rand", code: "ZAR", flag: "🇿🇦", balance: "R 0.00", usd: "≈ $0.00", color: "rgba(16,185,129,0.12)" },
  { name: "US Dollar", code: "USD", flag: "🇺🇸", balance: "$0.00", usd: "—", color: "rgba(59,130,246,0.12)" },
  { name: "Nigerian Naira", code: "NGN", flag: "🇳🇬", balance: "₦0.00", usd: "≈ $0.00", color: "rgba(245,158,11,0.12)" },
  { name: "Kenyan Shilling", code: "KES", flag: "🇰🇪", balance: "KSh 0.00", usd: "≈ $0.00", color: "rgba(239,68,68,0.1)" },
  { name: "Ghanaian Cedi", code: "GHS", flag: "🇬🇭", balance: "₵0.00", usd: "≈ $0.00", color: "rgba(168,85,247,0.12)" },
];

export default function WalletView() {
  return (
    <S.Page>
      <S.TotalCard>
        <div>
          <S.TotalLabel>Total Portfolio Value</S.TotalLabel>
          <S.TotalAmount>$0.00</S.TotalAmount>
          <S.TotalSub>Across all currencies</S.TotalSub>
        </div>
        <S.TotalActions>
          <S.Btn $primary>
            <DepositIcon />
            Deposit
          </S.Btn>
          <S.Btn>
            <WithdrawIcon />
            Withdraw
          </S.Btn>
          <S.Btn>
            <SwapIcon />
            Convert
          </S.Btn>
        </S.TotalActions>
      </S.TotalCard>

      <S.SectionTitle>Currency Accounts</S.SectionTitle>
      <S.CurrencyGrid>
        {currencies.map((cur) => (
          <S.CurrencyCard key={cur.code}>
            <S.CurrencyIcon $color={cur.color}>{cur.flag}</S.CurrencyIcon>
            <S.CurrencyInfo>
              <S.CurrencyName>{cur.name}</S.CurrencyName>
              <S.CurrencyCode>{cur.code}</S.CurrencyCode>
            </S.CurrencyInfo>
            <S.CurrencyBalance>
              <S.BalanceMain>{cur.balance}</S.BalanceMain>
              <S.BalanceUsd>{cur.usd}</S.BalanceUsd>
            </S.CurrencyBalance>
          </S.CurrencyCard>
        ))}
      </S.CurrencyGrid>

      <S.DepositBanner>
        <InfoIcon />
        Fund your wallet to start making crossborder payments. USDC deposits are instant.
      </S.DepositBanner>
    </S.Page>
  );
}

function DepositIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 17 12 21 16 17" /><line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
    </svg>
  );
}

function WithdrawIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 7 12 3 8 7" /><line x1="12" y1="12" x2="12" y2="3" />
      <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
