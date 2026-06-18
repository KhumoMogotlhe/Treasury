"use client";

import * as S from "./styles";

const balances = [
  { label: "USDC Balance", flag: "🔵", amount: "0.00", sub: "≈ $0.00 USD", accent: "#6366f1" },
  { label: "ZAR Balance", flag: "🇿🇦", amount: "R 0.00", sub: "South African Rand", accent: "#10b981" },
  { label: "USD Balance", flag: "🇺🇸", amount: "$0.00", sub: "US Dollar", accent: "#3b82f6" },
  { label: "NGN Balance", flag: "🇳🇬", amount: "₦0.00", sub: "Nigerian Naira", accent: "#f59e0b" },
];

const recentTx: { name: string; date: string; amount: string; type: "in" | "out" | "pending" }[] = [];

export default function Overview() {
  return (
    <S.Page>
      <S.SectionTitle>Balances</S.SectionTitle>
      <S.BalanceGrid>
        {balances.map((b) => (
          <S.BalanceCard key={b.label} $accent={b.accent}>
            <S.CardLabel>
              <S.CardFlag>{b.flag}</S.CardFlag>
              {b.label}
            </S.CardLabel>
            <S.CardAmount>{b.amount}</S.CardAmount>
            <S.CardSub>{b.sub}</S.CardSub>
          </S.BalanceCard>
        ))}
      </S.BalanceGrid>

      <S.Row>
        <S.Panel>
          <S.PanelTitle>Quick Actions</S.PanelTitle>
          <S.QuickActions>
            <S.ActionBtn $variant="primary">
              <SendIcon />
              Send Payment
            </S.ActionBtn>
            <S.ActionBtn>
              <ReceiveIcon />
              Receive
            </S.ActionBtn>
            <S.ActionBtn>
              <SwapIcon />
              Convert
            </S.ActionBtn>
            <S.ActionBtn>
              <AddIcon />
              Add Funds
            </S.ActionBtn>
          </S.QuickActions>
        </S.Panel>

        <S.Panel>
          <S.PanelTitle>Recent Transactions</S.PanelTitle>
          {recentTx.length === 0 ? (
            <S.EmptyState>
              <TxEmptyIcon />
              No transactions yet
            </S.EmptyState>
          ) : (
            <S.TxList>
              {recentTx.map((tx, i) => (
                <S.TxItem key={i}>
                  <S.TxIcon $type={tx.type}>
                    {tx.type === "in" ? "↓" : tx.type === "out" ? "↑" : "⋯"}
                  </S.TxIcon>
                  <S.TxInfo>
                    <S.TxName>{tx.name}</S.TxName>
                    <S.TxDate>{tx.date}</S.TxDate>
                  </S.TxInfo>
                  <S.TxAmount $type={tx.type}>{tx.amount}</S.TxAmount>
                </S.TxItem>
              ))}
            </S.TxList>
          )}
        </S.Panel>
      </S.Row>
    </S.Page>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function ReceiveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 17 12 21 16 17" /><line x1="12" y1="12" x2="12" y2="21" />
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

function AddIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

function TxEmptyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
