"use client";

import { useState } from "react";
import {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  RefreshCw,
  X,
  Copy,
  QrCode,
  ChevronDown,
  Clock,
  Filter,
  ArrowUpRight,
  Search,
  FileText,
  Zap,
  Gift,
  MinusCircle,
} from "lucide-react";
import { WalletProvider, useWallet } from "@/contexts/WalletContext";
import { Currency, Transaction, DepositType, WithdrawType } from "@/lib/wallet-types";
import * as S from "./styles";

// ─── Entry point (wraps with provider) ───────────────────────────────────────

export default function WalletView() {
  return (
    <WalletProvider>
      <WalletInner />
    </WalletProvider>
  );
}

// ─── Inner component ──────────────────────────────────────────────────────────

function WalletInner() {
  const { balances, investedAmount, transactions, deposit, withdraw, swap, currentUser } =
    useWallet();

  const [activeModal, setActiveModal] = useState<"deposit" | "withdraw" | "swap" | null>(null);
  const [activeTab, setActiveTab] = useState<"assets" | "history">("assets");
  const [depositType, setDepositType] = useState<DepositType>("crypto");
  const [withdrawType, setWithdrawType] = useState<WithdrawType>("fiat");
  const [copied, setCopied] = useState(false);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [momoProvider, setMomoProvider] = useState("M-Pesa");
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(Currency.USD);
  const [targetCurrency, setTargetCurrency] = useState<Currency>(Currency.ZAR);
  const [loading, setLoading] = useState(false);

  const totalBalanceUsd =
    balances[Currency.USD] +
    balances[Currency.USDT] +
    balances[Currency.USDC] +
    balances[Currency.BTC] * 45000 +
    balances[Currency.ZAR] / 18.2;

  const assets = [
    { code: Currency.USDT, name: "Tether", balance: balances[Currency.USDT], value: balances[Currency.USDT] },
    { code: Currency.BTC,  name: "Bitcoin", balance: balances[Currency.BTC], value: balances[Currency.BTC] * 45000 },
    { code: Currency.ZAR,  name: "South African Rand", balance: balances[Currency.ZAR], value: balances[Currency.ZAR] / 18.2 },
    { code: Currency.USD,  name: "US Dollar", balance: balances[Currency.USD], value: balances[Currency.USD] },
    { code: Currency.USDC, name: "USD Coin", balance: balances[Currency.USDC], value: balances[Currency.USDC] },
    { code: Currency.KES,  name: "Kenyan Shilling", balance: balances[Currency.KES], value: balances[Currency.KES] / 130 },
  ];

  const swapFee =
    currentUser.tier === "ENTERPRISE" ? "0.1%" : currentUser.tier === "PREMIUM" ? "0.5%" : "1%";

  const openModal = (modal: "deposit" | "withdraw" | "swap") => {
    setAmount("");
    setActiveModal(modal);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runWithLoading = (fn: () => void) => {
    setLoading(true);
    setTimeout(() => {
      fn();
      setLoading(false);
      setActiveModal(null);
      setAmount("");
    }, 1500);
  };

  const handleDeposit = () => {
    const val = parseFloat(amount);
    if (!val || val <= 0) return;
    const rail =
      depositType === "fiat"
        ? "Bank Transfer"
        : depositType === "lightning"
        ? "Lightning"
        : depositType === "momo"
        ? momoProvider
        : "TRC-20";
    runWithLoading(() => deposit(selectedCurrency, val, rail));
  };

  const handleWithdraw = () => {
    const val = parseFloat(amount);
    if (!val || val <= 0) return;
    const rail =
      withdrawType === "fiat"
        ? "Bank Transfer"
        : withdrawType === "crypto"
        ? "Crypto"
        : withdrawType === "momo"
        ? momoProvider
        : "PayPal";
    runWithLoading(() => withdraw(selectedCurrency, val, rail));
  };

  const handleSwap = () => {
    const val = parseFloat(amount);
    if (!val || val <= 0) return;
    const rate =
      selectedCurrency === Currency.USD && targetCurrency === Currency.ZAR ? 18.2 :
      selectedCurrency === Currency.ZAR && targetCurrency === Currency.USD ? 1 / 18.2 : 1;
    runWithLoading(() => swap(selectedCurrency, targetCurrency, val, rate));
  };

  const txTypeStyle = (type: string): { color: string; bg: string } => {
    if (type === "DEPOSIT" || type === "REWARD")
      return { color: "#10b981", bg: "rgba(16,185,129,0.1)" };
    if (type === "WITHDRAWAL" || type === "PAYMENT" || type === "FEE")
      return { color: "#ef4444", bg: "rgba(239,68,68,0.1)" };
    if (type === "INVEST")
      return { color: "#6366f1", bg: "rgba(99,102,241,0.1)" };
    return { color: "#64748b", bg: "rgba(100,116,139,0.1)" };
  };

  const TxIcon = ({ type }: { type: string }) => {
    const size = 14;
    if (type === "DEPOSIT") return <ArrowDownCircle size={size} />;
    if (type === "REWARD") return <Gift size={size} />;
    if (type === "WITHDRAWAL" || type === "PAYMENT") return <ArrowUpCircle size={size} />;
    if (type === "FEE") return <MinusCircle size={size} />;
    if (type === "SWAP") return <RefreshCw size={size} />;
    return <Clock size={size} />;
  };

  const isInflow = (type: string) =>
    type === "DEPOSIT" || type === "REWARD";

  return (
    <S.Page>
      {/* Header */}
      <S.HeaderRow>
        <S.PageTitle>My Wallet</S.PageTitle>
        <S.BtnGroup>
          <S.Btn onClick={() => openModal("swap")}>
            <RefreshCw size={15} /> Swap
          </S.Btn>
          <S.Btn onClick={() => openModal("withdraw")}>
            <ArrowUpRight size={15} /> Withdraw
          </S.Btn>
          <S.Btn $variant="primary" onClick={() => openModal("deposit")}>
            <ArrowDownCircle size={15} /> Deposit
          </S.Btn>
        </S.BtnGroup>
      </S.HeaderRow>

      {/* Balance cards */}
      <S.BalanceGrid>
        <S.GradientCard>
          <S.GradientBg><Wallet size={120} /></S.GradientBg>
          <S.GradientLabel>Total Balance Estimate</S.GradientLabel>
          <S.GradientAmount>
            ${(totalBalanceUsd + investedAmount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </S.GradientAmount>
          <S.GradientStats>
            <S.GradientStat>
              <S.GradientStatLabel>Available</S.GradientStatLabel>
              <S.GradientStatVal>
                ${totalBalanceUsd.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </S.GradientStatVal>
            </S.GradientStat>
            <S.GradientStat>
              <S.GradientStatLabel>Invested</S.GradientStatLabel>
              <S.GradientStatVal>
                ${investedAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </S.GradientStatVal>
            </S.GradientStat>
          </S.GradientStats>
        </S.GradientCard>

        <S.QuickCard>
          <div>
            <S.QuickCardTitle>Quick Deposit</S.QuickCardTitle>
            <S.AddressBox>
              <S.AddressRow>
                <S.AddressLabel>USDT (TRC-20)</S.AddressLabel>
                <S.AddressCopy onClick={() => handleCopy("TJVa85k5...3k5jJk5")}>
                  {copied ? "Copied!" : "Copy"}
                </S.AddressCopy>
              </S.AddressRow>
              <S.AddressCode>TJVa85k5...3k5jJk5</S.AddressCode>
            </S.AddressBox>
          </div>
          <S.StatsRow>
            <S.StatBox>
              <S.StatVal>+18.2%</S.StatVal>
              <S.StatLabel>Arbitrage Yield</S.StatLabel>
            </S.StatBox>
            <S.StatBox>
              <S.StatVal>$12k</S.StatVal>
              <S.StatLabel>24h Volume</S.StatLabel>
            </S.StatBox>
          </S.StatsRow>
        </S.QuickCard>
      </S.BalanceGrid>

      {/* Tabs */}
      <S.TabBar>
        <S.Tab $active={activeTab === "assets"} onClick={() => setActiveTab("assets")}>
          Assets
        </S.Tab>
        <S.Tab $active={activeTab === "history"} onClick={() => setActiveTab("history")}>
          Transaction History
        </S.Tab>
      </S.TabBar>

      {/* Assets tab */}
      {activeTab === "assets" && (
        <S.TableWrap>
          <S.Table>
            <S.Thead>
              <tr>
                <S.Th>Asset</S.Th>
                <S.Th>Balance</S.Th>
                <S.Th>Value (USD)</S.Th>
                <S.Th>Actions</S.Th>
              </tr>
            </S.Thead>
            <S.Tbody>
              {assets.map((a) => (
                <S.Tr key={a.code}>
                  <S.Td>
                    <S.AssetCell>
                      <S.AssetIcon>{a.code[0]}</S.AssetIcon>
                      <div>
                        <S.AssetName>{a.name}</S.AssetName>
                        <S.AssetCode>{a.code}</S.AssetCode>
                      </div>
                    </S.AssetCell>
                  </S.Td>
                  <S.Td>{a.balance.toLocaleString()}</S.Td>
                  <S.Td>${a.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}</S.Td>
                  <S.Td>
                    <S.IconBtn
                      onClick={() => {
                        setSelectedCurrency(a.code);
                        openModal("swap");
                      }}
                    >
                      <RefreshCw size={17} />
                    </S.IconBtn>
                  </S.Td>
                </S.Tr>
              ))}
            </S.Tbody>
          </S.Table>
        </S.TableWrap>
      )}

      {/* History tab */}
      {activeTab === "history" && (
        <>
          <S.FilterRow>
            <S.SearchWrap>
              <S.SearchIconWrap><Search size={15} /></S.SearchIconWrap>
              <S.SearchInput placeholder="Search transactions..." />
            </S.SearchWrap>
            <S.FilterBtn><Filter size={15} /> Filter</S.FilterBtn>
          </S.FilterRow>
          <S.TableWrap>
            <S.Table>
              <S.Thead>
                <tr>
                  <S.Th>Type</S.Th>
                  <S.Th>Amount</S.Th>
                  <S.Th>Date</S.Th>
                  <S.Th>Rail / Details</S.Th>
                  <S.Th>Status</S.Th>
                </tr>
              </S.Thead>
              <S.Tbody>
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan={5}>
                      <S.Empty>No transactions yet.</S.Empty>
                    </td>
                  </tr>
                ) : (
                  transactions.map((tx) => {
                    const { color, bg } = txTypeStyle(tx.type);
                    return (
                      <S.Tr key={tx.id} onClick={() => setSelectedTx(tx)}>
                        <S.Td>
                          <S.TypeCell>
                            <S.TypeIconWrap $color={color} $bg={bg}>
                              <TxIcon type={tx.type} />
                            </S.TypeIconWrap>
                            {tx.type}
                          </S.TypeCell>
                        </S.Td>
                        <S.Td style={{ fontFamily: "monospace" }}>
                          {isInflow(tx.type) ? "+" : "-"}
                          {tx.amount.toLocaleString()} {tx.currency}
                        </S.Td>
                        <S.Td style={{ color: "#64748b" }}>{tx.date}</S.Td>
                        <S.Td>{tx.rail}</S.Td>
                        <S.Td>
                          <S.StatusBadge $status={tx.status}>{tx.status}</S.StatusBadge>
                        </S.Td>
                      </S.Tr>
                    );
                  })
                )}
              </S.Tbody>
            </S.Table>
          </S.TableWrap>
        </>
      )}

      {/* Transaction Receipt Modal */}
      {selectedTx && (
        <S.Overlay onClick={() => setSelectedTx(null)}>
          <S.ReceiptModal onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>Transaction Receipt</S.ModalTitle>
              <S.CloseBtn onClick={() => setSelectedTx(null)}><X size={18} /></S.CloseBtn>
            </S.ModalHeader>
            <S.ModalBody>
              <S.ReceiptCenter>
                <S.ReceiptIconWrap $green={isInflow(selectedTx.type)}>
                  <TxIcon type={selectedTx.type} />
                </S.ReceiptIconWrap>
                <S.ReceiptAmount>
                  {isInflow(selectedTx.type) ? "+" : "-"}
                  {selectedTx.amount.toLocaleString()} {selectedTx.currency}
                </S.ReceiptAmount>
                <S.StatusBadge $status={selectedTx.status} style={{ marginTop: "0.5rem", display: "inline-block" }}>
                  {selectedTx.status}
                </S.StatusBadge>
              </S.ReceiptCenter>

              <S.ReceiptDetails>
                {[
                  ["Date & Time", selectedTx.date],
                  ["Transaction ID", selectedTx.id],
                  ["Type", selectedTx.type],
                  ["Rail / Method", selectedTx.rail],
                  ...(selectedTx.recipient ? [["Recipient", selectedTx.recipient]] : []),
                ].map(([label, val]) => (
                  <S.ReceiptRow key={label}>
                    <S.ReceiptRowLabel>{label}</S.ReceiptRowLabel>
                    <S.ReceiptRowVal>{val}</S.ReceiptRowVal>
                  </S.ReceiptRow>
                ))}
              </S.ReceiptDetails>

              <S.DownloadBtn>
                <FileText size={15} /> Download Receipt
              </S.DownloadBtn>
            </S.ModalBody>
          </S.ReceiptModal>
        </S.Overlay>
      )}

      {/* Action Modals */}
      {activeModal && (
        <S.Overlay onClick={() => setActiveModal(null)}>
          <S.ModalCard onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>
                {activeModal === "deposit"
                  ? "Deposit Funds"
                  : activeModal === "withdraw"
                  ? "Withdraw Funds"
                  : "Swap Assets"}
              </S.ModalTitle>
              <S.CloseBtn onClick={() => setActiveModal(null)}><X size={18} /></S.CloseBtn>
            </S.ModalHeader>

            <S.ModalBody>
              {/* ── DEPOSIT ── */}
              {activeModal === "deposit" && (
                <>
                  <S.SubTypeTabs>
                    {(["crypto", "lightning", "fiat", "momo"] as DepositType[]).map((t) => (
                      <S.SubTypeBtn key={t} $active={depositType === t} onClick={() => setDepositType(t)}>
                        {t === "lightning" ? <><Zap size={12} />LN</> : t.charAt(0).toUpperCase() + t.slice(1)}
                      </S.SubTypeBtn>
                    ))}
                  </S.SubTypeTabs>

                  {depositType === "crypto" && (
                    <S.QrWrap>
                      <S.QrBox><QrCode size={140} color="#000" /></S.QrBox>
                      <S.QrLabel>USDT (TRC-20)</S.QrLabel>
                    </S.QrWrap>
                  )}

                  {depositType === "lightning" && (
                    <S.LightningBanner>Lightning is instant. Scan or paste a Lightning invoice.</S.LightningBanner>
                  )}

                  {depositType === "fiat" && (
                    <S.InfoBox>
                      <S.InfoRow>
                        <S.InfoRowLabel>Bank Name</S.InfoRowLabel>
                        <S.InfoRowVal>Standard Bank SA</S.InfoRowVal>
                      </S.InfoRow>
                      <S.InfoRow>
                        <S.InfoRowLabel>Account Number</S.InfoRowLabel>
                        <S.InfoRowVal>
                          0123456789
                          <S.CopyBtn onClick={() => handleCopy("0123456789")}><Copy size={13} /></S.CopyBtn>
                        </S.InfoRowVal>
                      </S.InfoRow>
                    </S.InfoBox>
                  )}

                  {depositType === "momo" && (
                    <S.FormGroup>
                      <S.Label>Select Provider</S.Label>
                      <S.SelectInput value={momoProvider} onChange={(e) => setMomoProvider(e.target.value)}>
                        <option value="M-Pesa">M-Pesa (Kenya / Tanzania)</option>
                        <option value="MTN MoMo">MTN MoMo (Uganda / Rwanda)</option>
                        <option value="Airtel Money">Airtel Money</option>
                        <option value="Orange Money">Orange Money (West Africa)</option>
                      </S.SelectInput>
                    </S.FormGroup>
                  )}

                  <S.FormGroup>
                    <S.Label>Asset to credit</S.Label>
                    <S.SelectInput value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value as Currency)}>
                      <option value={Currency.USDT}>USDT</option>
                      <option value={Currency.BTC}>BTC</option>
                      <option value={Currency.USD}>USD</option>
                      <option value={Currency.ZAR}>ZAR</option>
                    </S.SelectInput>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label>Amount to simulate</S.Label>
                    <S.Input type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} min="0" />
                  </S.FormGroup>

                  <S.PrimaryBtn onClick={handleDeposit} disabled={loading || !amount}>
                    {loading ? "Processing…" : `Simulate ${depositType === "momo" ? momoProvider + " " : ""}Deposit`}
                  </S.PrimaryBtn>
                </>
              )}

              {/* ── WITHDRAW ── */}
              {activeModal === "withdraw" && (
                <>
                  <S.SubTypeTabs>
                    {(["fiat", "crypto", "paypal", "momo"] as WithdrawType[]).map((t) => (
                      <S.SubTypeBtn key={t} $active={withdrawType === t} onClick={() => setWithdrawType(t)}>
                        {t === "paypal" ? "PayPal" : t.charAt(0).toUpperCase() + t.slice(1)}
                      </S.SubTypeBtn>
                    ))}
                  </S.SubTypeTabs>

                  {withdrawType === "momo" && (
                    <S.FormGroup>
                      <S.Label>Mobile Provider</S.Label>
                      <S.SelectInput value={momoProvider} onChange={(e) => setMomoProvider(e.target.value)}>
                        <option value="M-Pesa">M-Pesa (Kenya)</option>
                        <option value="MTN MoMo">MTN MoMo (Uganda)</option>
                        <option value="Airtel Money">Airtel Money (Tanzania)</option>
                        <option value="Orange Money">Orange Money (West Africa)</option>
                      </S.SelectInput>
                    </S.FormGroup>
                  )}

                  <S.FormGroup>
                    <S.Label>Withdraw asset</S.Label>
                    <S.SelectInput value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value as Currency)}>
                      <option value={Currency.USD}>USD — Bal: {balances[Currency.USD].toLocaleString()}</option>
                      <option value={Currency.ZAR}>ZAR — Bal: {balances[Currency.ZAR].toLocaleString()}</option>
                      <option value={Currency.USDT}>USDT — Bal: {balances[Currency.USDT].toLocaleString()}</option>
                      <option value={Currency.BTC}>BTC — Bal: {balances[Currency.BTC]}</option>
                    </S.SelectInput>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label>Amount</S.Label>
                    <S.Input type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} min="0" />
                  </S.FormGroup>

                  <S.PrimaryBtn onClick={handleWithdraw} disabled={loading || !amount}>
                    {loading ? "Processing…" : "Process Withdrawal"}
                  </S.PrimaryBtn>
                </>
              )}

              {/* ── SWAP ── */}
              {activeModal === "swap" && (
                <>
                  <S.SwapBox>
                    <S.SwapBoxLabel>
                      <S.SwapBoxSublabel>You Pay</S.SwapBoxSublabel>
                      <S.SwapBoxSublabel>Bal: {balances[selectedCurrency].toLocaleString()}</S.SwapBoxSublabel>
                    </S.SwapBoxLabel>
                    <S.SwapRow>
                      <S.SwapAmount type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
                      <S.SwapCurrencySelect value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value as Currency)}>
                        <option value={Currency.USD}>USD</option>
                        <option value={Currency.ZAR}>ZAR</option>
                        <option value={Currency.USDT}>USDT</option>
                      </S.SwapCurrencySelect>
                    </S.SwapRow>
                  </S.SwapBox>

                  <S.SwapArrow>
                    <S.SwapArrowBtn><ChevronDown size={20} /></S.SwapArrowBtn>
                  </S.SwapArrow>

                  <S.SwapBox>
                    <S.SwapBoxLabel>
                      <S.SwapBoxSublabel>You Receive (Est.)</S.SwapBoxSublabel>
                    </S.SwapBoxLabel>
                    <S.SwapRow>
                      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f1f5f9", opacity: 0.7 }}>
                        {amount
                          ? (
                              parseFloat(amount) *
                              (selectedCurrency === Currency.USD && targetCurrency === Currency.ZAR ? 18.2 : 1)
                            ).toFixed(2)
                          : "0.00"}
                      </div>
                      <S.SwapCurrencySelect value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value as Currency)}>
                        <option value={Currency.USD}>USD</option>
                        <option value={Currency.ZAR}>ZAR</option>
                        <option value={Currency.USDT}>USDT</option>
                      </S.SwapCurrencySelect>
                    </S.SwapRow>
                  </S.SwapBox>

                  <S.SwapFee>Fee: {swapFee}</S.SwapFee>

                  <S.PrimaryBtn onClick={handleSwap} disabled={loading || !amount}>
                    {loading ? "Swapping…" : "Confirm Swap"}
                  </S.PrimaryBtn>
                </>
              )}
            </S.ModalBody>
          </S.ModalCard>
        </S.Overlay>
      )}
    </S.Page>
  );
}
