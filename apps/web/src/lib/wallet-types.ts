export enum Currency {
  USD = "USD",
  USDT = "USDT",
  USDC = "USDC",
  BTC = "BTC",
  ZAR = "ZAR",
  KES = "KES",
  NGN = "NGN",
  GHS = "GHS",
}

export type TxType = "DEPOSIT" | "WITHDRAWAL" | "SWAP" | "PAYMENT" | "FEE" | "REWARD" | "INVEST";
export type TxStatus = "COMPLETED" | "PENDING" | "FAILED";

export interface Transaction {
  id: string;
  type: TxType;
  amount: number;
  currency: Currency;
  date: string;
  rail: string;
  status: TxStatus;
  recipient?: string;
}

export type DepositType = "crypto" | "fiat" | "momo" | "lightning";
export type WithdrawType = "crypto" | "fiat" | "momo" | "paypal";
export type Tier = "STANDARD" | "PREMIUM" | "ENTERPRISE";
