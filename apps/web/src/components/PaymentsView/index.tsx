"use client";

import { useState } from "react";
import * as S from "./styles";

export default function PaymentsView() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("ZAR");
  const [recipient, setRecipient] = useState("");

  return (
    <S.Page>
      <S.TopRow>
        <S.Panel>
          <S.PanelTitle>Send Payment</S.PanelTitle>
          <S.Form>
            <S.Field>
              <S.Label>Recipient email or wallet address</S.Label>
              <S.Input
                type="text"
                placeholder="name@company.com or 0x..."
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </S.Field>

            <S.Field>
              <S.Label>Amount</S.Label>
              <S.Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
              />
            </S.Field>

            <S.Field>
              <S.Label>Currency</S.Label>
              <S.Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="USDC">USDC</option>
                <option value="ZAR">ZAR — South African Rand</option>
                <option value="USD">USD — US Dollar</option>
                <option value="NGN">NGN — Nigerian Naira</option>
                <option value="KES">KES — Kenyan Shilling</option>
                <option value="GHS">GHS — Ghanaian Cedi</option>
              </S.Select>
            </S.Field>

            {amount && currency !== "USDC" && (
              <S.RateCard>
                <S.RateLabel>Estimated rate</S.RateLabel>
                <span>1 USDC ≈ {getRateLabel(currency)}</span>
              </S.RateCard>
            )}

            <S.SubmitBtn disabled={!amount || !recipient}>
              <SendIcon />
              Send {amount ? `${amount} ${currency}` : "Payment"}
            </S.SubmitBtn>
          </S.Form>
        </S.Panel>

        <S.Panel>
          <S.PanelTitle>Payment Links</S.PanelTitle>
          <S.EmptyPanel style={{ padding: "2rem 1rem" }}>
            <LinkIcon />
            No payment links yet.
            <br />
            Create a link to request payment from anyone.
          </S.EmptyPanel>
          <S.SubmitBtn style={{ marginTop: "1rem" }}>
            <PlusIcon />
            Create Payment Link
          </S.SubmitBtn>
        </S.Panel>
      </S.TopRow>

      <S.SectionTitle>Payment History</S.SectionTitle>
      <S.EmptyPanel>
        <HistoryIcon />
        No payments sent or received yet.
        <br />
        Your payment history will appear here.
      </S.EmptyPanel>
    </S.Page>
  );
}

function getRateLabel(currency: string): string {
  const rates: Record<string, string> = {
    ZAR: "18.72 ZAR",
    USD: "1.00 USD",
    NGN: "1,580 NGN",
    KES: "130 KES",
    GHS: "15.2 GHS",
  };
  return rates[currency] ?? "—";
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35 }}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
