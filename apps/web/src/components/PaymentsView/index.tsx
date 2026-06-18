"use client";

import { useState } from "react";
import {
  Globe,
  Send,
  QrCode,
  History,
  AlertCircle,
  Check,
  Copy,
} from "lucide-react";
import { WalletProvider, useWallet } from "@/contexts/WalletContext";
import { Currency } from "@/lib/wallet-types";
import * as S from "./styles";

export default function PaymentsView() {
  return (
    <WalletProvider>
      <PaymentsInner />
    </WalletProvider>
  );
}

const recentHistory = [
  { to: "M-Pesa (Kenya)", amount: "KES 50,000", status: "Completed", date: "Today" },
  { to: "Standard Bank (SA)", amount: "ZAR 15,000", status: "Processing", date: "Yesterday" },
  { to: "Binance Wallet", amount: "USDT 500", status: "Completed", date: "Nov 12" },
];

const rates = [
  { pair: "USD / ZAR", val: "18.24", change: "+0.4%", up: true },
  { pair: "USD / KES", val: "130.50", change: "-0.1%", up: false },
  { pair: "BTC / USD", val: "45,200.00", change: "+1.2%", up: true },
];

const rails = ["SWIFT", "M-Pesa", "Lightning", "EFT", "PayPal"];

function PaymentsInner() {
  const { balances, pay } = useWallet();

  const [activeTab, setActiveTab] = useState<"send" | "request">("send");
  const [step, setStep] = useState<"form" | "review" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [rail, setRail] = useState("SWIFT");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [selectedWallet, setSelectedWallet] = useState<Currency>(Currency.USD);
  const [requestCopied, setRequestCopied] = useState(false);
  const [txId] = useState("TRX-" + Math.floor(Math.random() * 100000));

  const recipientPlaceholder =
    rail === "M-Pesa"
      ? "Mobile number (+254...)"
      : rail === "PayPal"
      ? "Email address"
      : "Account number / IBAN";

  const arrivalTime = rail === "SWIFT" ? "1–2 Business Days" : "Instant";

  const estimatedReceive =
    amount
      ? (
          parseFloat(amount) *
          (selectedWallet === Currency.USD ? 18.2 : 1 / 18.2)
        ).toFixed(2)
      : "";

  const handleReview = () => {
    if (!amount || !recipient) return;
    setStep("review");
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      pay(selectedWallet, parseFloat(amount), rail, recipient);
      setLoading(false);
      setStep("success");
    }, 2500);
  };

  const reset = () => {
    setStep("form");
    setAmount("");
    setRecipient("");
    setRail("SWIFT");
  };

  const copyRequest = () => {
    navigator.clipboard.writeText(
      `https://dimensity.finance/pay/me?amt=${amount || "any"}&curr=${selectedWallet}`
    );
    setRequestCopied(true);
    setTimeout(() => setRequestCopied(false), 2000);
  };

  return (
    <S.Page>
      <S.PageTitle>Cross-Border Payments</S.PageTitle>

      <S.Grid>
        {/* ── Left: form panel ── */}
        <S.FormPanel>
          <S.PanelTabs>
            <S.PanelTab $active={activeTab === "send"} onClick={() => setActiveTab("send")}>
              <Send size={16} /> Send
            </S.PanelTab>
            <S.PanelTab $active={activeTab === "request"} onClick={() => setActiveTab("request")}>
              <QrCode size={16} /> Request
            </S.PanelTab>
          </S.PanelTabs>

          <S.PanelBody>
            {/* Send tab */}
            {activeTab === "send" && (
              <>
                {/* Form step */}
                {step === "form" && (
                  <>
                    <S.FormGroup>
                      <S.Label>From account</S.Label>
                      <S.Select
                        value={selectedWallet}
                        onChange={(e) => setSelectedWallet(e.target.value as Currency)}
                      >
                        <option value={Currency.USD}>
                          USD Wallet (${balances[Currency.USD].toLocaleString()})
                        </option>
                        <option value={Currency.ZAR}>
                          ZAR Wallet (R{balances[Currency.ZAR].toLocaleString()})
                        </option>
                        <option value={Currency.USDT}>
                          USDT Wallet ({balances[Currency.USDT].toLocaleString()})
                        </option>
                      </S.Select>
                    </S.FormGroup>

                    <S.TwoCol>
                      <S.FormGroup>
                        <S.Label>Amount</S.Label>
                        <S.Input
                          type="number"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          min="0"
                        />
                      </S.FormGroup>
                      <S.FormGroup>
                        <S.Label>Recipient gets</S.Label>
                        <S.InputWrap>
                          <S.Input
                            readOnly
                            value={estimatedReceive}
                            placeholder="0.00"
                          />
                          {estimatedReceive && <S.InputTag>Est.</S.InputTag>}
                        </S.InputWrap>
                      </S.FormGroup>
                    </S.TwoCol>

                    <S.FormGroup>
                      <S.Label>Payment rail</S.Label>
                      <S.RailGrid>
                        {rails.map((r) => (
                          <S.RailBtn
                            key={r}
                            $active={rail === r}
                            onClick={() => setRail(r)}
                          >
                            {r}
                          </S.RailBtn>
                        ))}
                      </S.RailGrid>
                    </S.FormGroup>

                    <S.FormGroup>
                      <S.Label>Recipient details</S.Label>
                      <S.Input
                        type="text"
                        placeholder={recipientPlaceholder}
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        style={{ marginBottom: "0.5rem" }}
                      />
                      <S.Input type="text" placeholder="Recipient name" />
                    </S.FormGroup>

                    <S.PrimaryBtn
                      onClick={handleReview}
                      disabled={!amount || !recipient}
                    >
                      Review Transfer
                    </S.PrimaryBtn>
                  </>
                )}

                {/* Review step */}
                {step === "review" && (
                  <S.ReviewStep>
                    <S.ReviewCenter>
                      <S.ReviewSub>You are sending</S.ReviewSub>
                      <S.ReviewAmount>
                        {amount} {selectedWallet}
                      </S.ReviewAmount>
                    </S.ReviewCenter>

                    <S.ReviewBox>
                      <S.ReviewRow>
                        <S.ReviewLabel>Recipient</S.ReviewLabel>
                        <S.ReviewValue>{recipient}</S.ReviewValue>
                      </S.ReviewRow>
                      <S.ReviewRow>
                        <S.ReviewLabel>Rail</S.ReviewLabel>
                        <S.ReviewValue>{rail} Network</S.ReviewValue>
                      </S.ReviewRow>
                      <S.ReviewRow>
                        <S.ReviewLabel>Estimated fee</S.ReviewLabel>
                        <S.ReviewValue $green>$1.50 (Low Cost)</S.ReviewValue>
                      </S.ReviewRow>
                      <S.ReviewRow>
                        <S.ReviewLabel>Arrival time</S.ReviewLabel>
                        <S.ReviewValue>{arrivalTime}</S.ReviewValue>
                      </S.ReviewRow>
                    </S.ReviewBox>

                    <S.WarningBox>
                      <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: 1 }} />
                      <S.WarningText>
                        Please ensure recipient details are correct. Cross-border transfers via{" "}
                        {rail} cannot be reversed once initiated.
                      </S.WarningText>
                    </S.WarningBox>

                    <S.ReviewBtns>
                      <S.GhostBtn onClick={() => setStep("form")}>Back</S.GhostBtn>
                      <S.ConfirmBtn onClick={handleConfirm} disabled={loading}>
                        {loading ? <S.Spinner /> : "Confirm & Send"}
                      </S.ConfirmBtn>
                    </S.ReviewBtns>
                  </S.ReviewStep>
                )}

                {/* Success step */}
                {step === "success" && (
                  <S.SuccessStep>
                    <S.SuccessIcon>
                      <Check size={36} color="#fff" strokeWidth={3} />
                    </S.SuccessIcon>
                    <S.SuccessTitle>Transfer Initiated!</S.SuccessTitle>
                    <S.SuccessDesc>
                      Your payment of <strong>{amount} {selectedWallet}</strong> to {recipient} via{" "}
                      {rail} is being processed.
                    </S.SuccessDesc>
                    <S.TxBox>
                      <S.TxRow>
                        <S.TxLabel>Transaction ID</S.TxLabel>
                        <S.TxVal>{txId}</S.TxVal>
                      </S.TxRow>
                      <S.TxRow>
                        <S.TxLabel>Status</S.TxLabel>
                        <S.TxVal $green>Processing</S.TxVal>
                      </S.TxRow>
                    </S.TxBox>
                    <S.ResetBtn onClick={reset}>Make Another Payment</S.ResetBtn>
                  </S.SuccessStep>
                )}
              </>
            )}

            {/* Request tab */}
            {activeTab === "request" && (
              <S.RequestTab>
                <S.RequestTitle>Receive Payments</S.RequestTitle>
                <S.RequestDesc>
                  Create a payment link or QR code to receive funds directly into your
                  Dimensity wallet via any supported rail.
                </S.RequestDesc>

                <S.RequestFields>
                  <S.FormGroup>
                    <S.Label>Asset to receive</S.Label>
                    <S.Select
                      value={selectedWallet}
                      onChange={(e) => setSelectedWallet(e.target.value as Currency)}
                    >
                      <option value={Currency.USD}>USD</option>
                      <option value={Currency.ZAR}>ZAR</option>
                      <option value={Currency.USDT}>USDT</option>
                      <option value={Currency.BTC}>BTC</option>
                    </S.Select>
                  </S.FormGroup>
                  <S.FormGroup>
                    <S.Label>Amount (optional)</S.Label>
                    <S.Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min="0"
                    />
                  </S.FormGroup>
                </S.RequestFields>

                <S.QrWrap>
                  <QrCode size={160} color="#000" />
                </S.QrWrap>

                <S.LinkRow>
                  <S.LinkDisplay>
                    <S.LinkText>
                      https://dimensity.finance/pay/me?curr={selectedWallet}
                    </S.LinkText>
                  </S.LinkDisplay>
                  <S.CopyBtn $copied={requestCopied} onClick={copyRequest}>
                    {requestCopied ? <Check size={17} /> : <Copy size={17} />}
                  </S.CopyBtn>
                </S.LinkRow>
              </S.RequestTab>
            )}
          </S.PanelBody>
        </S.FormPanel>

        {/* ── Right: rates + history ── */}
        <S.RightCol>
          <S.RatesCard>
            <S.RatesTitle>
              <Globe size={17} color="#22d3ee" /> Live Rates
            </S.RatesTitle>
            <S.RatesList>
              {rates.map((r) => (
                <S.RatesRow key={r.pair}>
                  <S.RatesPair>{r.pair}</S.RatesPair>
                  <S.RatesVal>
                    {r.val}
                    <S.RatesChange $up={r.up}>({r.change})</S.RatesChange>
                  </S.RatesVal>
                </S.RatesRow>
              ))}
            </S.RatesList>
          </S.RatesCard>

          <S.HistoryCard>
            <S.HistoryTitle>
              <History size={17} /> Recent Transfers
            </S.HistoryTitle>
            <S.HistoryList>
              {recentHistory.map((tx, i) => (
                <S.HistoryItem key={i}>
                  <div>
                    <S.HistoryTo>{tx.to}</S.HistoryTo>
                    <S.HistoryDate>{tx.date}</S.HistoryDate>
                  </div>
                  <div>
                    <S.HistoryAmt>{tx.amount}</S.HistoryAmt>
                    <S.HistoryStatus $done={tx.status === "Completed"}>
                      {tx.status}
                    </S.HistoryStatus>
                  </div>
                </S.HistoryItem>
              ))}
            </S.HistoryList>
          </S.HistoryCard>
        </S.RightCol>
      </S.Grid>
    </S.Page>
  );
}
