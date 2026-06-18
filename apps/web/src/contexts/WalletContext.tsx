"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Currency, Transaction, TxStatus } from "@/lib/wallet-types";

interface Balances extends Record<Currency, number> {}

interface WalletContextValue {
  balances: Balances;
  investedAmount: number;
  transactions: Transaction[];
  currentUser: { tier: "STANDARD" | "PREMIUM" | "ENTERPRISE" };
  deposit: (currency: Currency, amount: number, rail: string) => void;
  withdraw: (currency: Currency, amount: number, rail: string) => void;
  swap: (from: Currency, to: Currency, amount: number, rate: number) => void;
  pay: (currency: Currency, amount: number, rail: string, recipient: string) => void;
}

const WalletContext = createContext<WalletContextValue | null>(null);

const defaultBalances: Balances = {
  [Currency.USD]: 0,
  [Currency.USDT]: 0,
  [Currency.USDC]: 0,
  [Currency.BTC]: 0,
  [Currency.ZAR]: 0,
  [Currency.KES]: 0,
  [Currency.NGN]: 0,
  [Currency.GHS]: 0,
};

function makeId() {
  return "TX-" + Math.random().toString(36).slice(2, 9).toUpperCase();
}

function nowStr() {
  return new Date().toLocaleString("en-ZA", { dateStyle: "medium", timeStyle: "short" });
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [balances, setBalances] = useState<Balances>({ ...defaultBalances });
  const [investedAmount] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTx = (tx: Omit<Transaction, "id" | "date" | "status">) => {
    setTransactions((prev) => [
      { ...tx, id: makeId(), date: nowStr(), status: "COMPLETED" as TxStatus },
      ...prev,
    ]);
  };

  const deposit = (currency: Currency, amount: number, rail: string) => {
    setBalances((b) => ({ ...b, [currency]: b[currency] + amount }));
    addTx({ type: "DEPOSIT", amount, currency, rail });
  };

  const withdraw = (currency: Currency, amount: number, rail: string) => {
    setBalances((b) => ({ ...b, [currency]: Math.max(0, b[currency] - amount) }));
    addTx({ type: "WITHDRAWAL", amount, currency, rail });
  };

  const swap = (from: Currency, to: Currency, amount: number, rate: number) => {
    const received = amount * rate;
    setBalances((b) => ({
      ...b,
      [from]: Math.max(0, b[from] - amount),
      [to]: b[to] + received,
    }));
    addTx({ type: "SWAP", amount, currency: from, rail: `${from} → ${to}` });
  };

  const pay = (currency: Currency, amount: number, rail: string, recipient: string) => {
    setBalances((b) => ({ ...b, [currency]: Math.max(0, b[currency] - amount) }));
    addTx({ type: "PAYMENT", amount, currency, rail, recipient });
  };

  return (
    <WalletContext.Provider
      value={{
        balances,
        investedAmount,
        transactions,
        currentUser: { tier: "STANDARD" },
        deposit,
        withdraw,
        swap,
        pay,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
}
