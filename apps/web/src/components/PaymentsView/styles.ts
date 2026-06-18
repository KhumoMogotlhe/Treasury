import styled, { keyframes, css } from "styled-components";

const c = {
  card: "#0e1525",
  surface: "#111827",
  border: "#1a2236",
  text: "#f1f5f9",
  muted: "#64748b",
  accent: "#6366f1",
  accentDark: "#4f52e0",
  input: "#0d1117",
  green: "#10b981",
  greenBg: "rgba(16,185,129,0.1)",
  yellow: "#f59e0b",
  yellowBg: "rgba(245,158,11,0.08)",
  yellowBorder: "rgba(245,158,11,0.2)",
  cyan: "#22d3ee",
  cyanBg: "rgba(6,182,212,0.07)",
  cyanBorder: "rgba(6,182,212,0.2)",
  red: "#ef4444",
};

const fadeUp = keyframes`from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); }`;
const spin = keyframes`to { transform: rotate(360deg); }`;
const popIn = keyframes`from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); }`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeUp} 0.3s ease both;
`;

export const PageTitle = styled.h1`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${c.text};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

// ─── Left panel ───────────────────────────────────────────────────────────────

export const FormPanel = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  overflow: hidden;
  min-height: 520px;
  display: flex;
  flex-direction: column;
`;

export const PanelTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${c.border};
`;

export const PanelTab = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? c.accent : "transparent")};
  background: ${({ $active }) => ($active ? c.surface : "transparent")};
  color: ${({ $active }) => ($active ? c.accent : c.muted)};
  transition: color 0.15s, background 0.15s, border-color 0.15s;

  &:hover { color: ${({ $active }) => ($active ? c.accent : c.text)}; }
`;

export const PanelBody = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

// ─── Form step ────────────────────────────────────────────────────────────────

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1.125rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${c.muted};
`;

export const Select = styled.select`
  background: ${c.input};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${c.text};
  outline: none;
  width: 100%;
  cursor: pointer;
  transition: border-color 0.15s;

  &:focus { border-color: ${c.accent}; }
  option { background: #0e1525; }
`;

export const Input = styled.input`
  background: ${c.input};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${c.text};
  outline: none;
  width: 100%;
  transition: border-color 0.15s;

  &::placeholder { color: #334155; }
  &:focus { border-color: ${c.accent}; }
  &:read-only { background: ${c.surface}; color: ${c.muted}; cursor: not-allowed; }
`;

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const InputTag = styled.span`
  position: absolute;
  right: 0.875rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.6875rem;
  color: ${c.green};
  pointer-events: none;
`;

export const RailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.375rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const RailBtn = styled.button<{ $active?: boolean }>`
  padding: 0.625rem 0.25rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid ${({ $active }) => ($active ? c.accent : "transparent")};
  background: ${({ $active }) =>
    $active ? "rgba(99,102,241,0.15)" : c.surface};
  color: ${({ $active }) => ($active ? c.text : c.muted)};

  &:hover { background: ${c.border}; color: ${c.text}; }
`;

export const PrimaryBtn = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: ${c.accent};
  border: none;
  border-radius: 0.625rem;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  transition: background 0.15s;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.28);

  &:hover:not(:disabled) { background: ${c.accentDark}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

// ─── Review step ──────────────────────────────────────────────────────────────

export const ReviewStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
  animation: ${fadeUp} 0.25s ease both;
`;

export const ReviewCenter = styled.div`
  text-align: center;
`;

export const ReviewSub = styled.p`
  font-size: 0.8125rem;
  color: ${c.muted};
`;

export const ReviewAmount = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${c.text};
  letter-spacing: -0.03em;
  margin-top: 0.25rem;
`;

export const ReviewBox = styled.div`
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ReviewRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
`;

export const ReviewLabel = styled.span`
  color: ${c.muted};
`;

export const ReviewValue = styled.span<{ $green?: boolean }>`
  font-weight: 500;
  color: ${({ $green }) => ($green ? c.green : c.text)};
`;

export const WarningBox = styled.div`
  background: ${c.yellowBg};
  border: 1px solid ${c.yellowBorder};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

export const WarningText = styled.p`
  font-size: 0.75rem;
  color: #fde68a;
  line-height: 1.5;
`;

export const ReviewBtns = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
`;

export const GhostBtn = styled.button`
  flex: 1;
  padding: 0.875rem;
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.625rem;
  color: ${c.text};
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: ${c.border}; }
`;

export const ConfirmBtn = styled.button`
  flex: 2;
  padding: 0.875rem;
  background: ${c.accent};
  border: none;
  border-radius: 0.625rem;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.15s;

  &:hover:not(:disabled) { background: ${c.accentDark}; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

// ─── Success step ─────────────────────────────────────────────────────────────

export const SuccessStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0;
  animation: ${popIn} 0.3s ease both;
`;

export const SuccessIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${c.green};
  display: grid;
  place-items: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
`;

export const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${c.text};
  margin-bottom: 0.5rem;
`;

export const SuccessDesc = styled.p`
  font-size: 0.875rem;
  color: ${c.muted};
  max-width: 18rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  strong { color: ${c.text}; }
`;

export const TxBox = styled.div`
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 2rem;
`;

export const TxRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
`;

export const TxLabel = styled.span`
  color: ${c.muted};
`;

export const TxVal = styled.span<{ $green?: boolean }>`
  color: ${({ $green }) => ($green ? c.green : c.text)};
  font-weight: 500;
  font-family: ${({ $green }) => ($green ? "inherit" : "monospace")};
  font-size: 0.75rem;
`;

export const ResetBtn = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: transparent;
  border: 1px solid ${c.border};
  border-radius: 0.625rem;
  color: ${c.text};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: ${c.surface}; }
`;

// ─── Request tab ──────────────────────────────────────────────────────────────

export const RequestTab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  animation: ${fadeUp} 0.25s ease both;
`;

export const RequestTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${c.text};
`;

export const RequestDesc = styled.p`
  font-size: 0.8125rem;
  color: ${c.muted};
  max-width: 18rem;
  line-height: 1.6;
`;

export const RequestFields = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  text-align: left;
`;

export const QrWrap = styled.div`
  background: #fff;
  padding: 1.25rem;
  border-radius: 1rem;
  display: inline-block;
  border: 4px solid #fff;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.05);
`;

export const LinkRow = styled.div`
  display: flex;
  gap: 0.625rem;
  width: 100%;
  max-width: 20rem;
`;

export const LinkDisplay = styled.div`
  flex: 1;
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const LinkText = styled.span`
  font-size: 0.75rem;
  color: ${c.muted};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CopyBtn = styled.button<{ $copied?: boolean }>`
  padding: 0.5rem 0.875rem;
  border-radius: 0.5rem;
  border: none;
  background: ${({ $copied }) => ($copied ? c.green : c.accent)};
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover { background: ${({ $copied }) => ($copied ? c.green : c.accentDark)}; }
`;

// ─── Right panel ──────────────────────────────────────────────────────────────

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const RatesCard = styled.div`
  background: ${c.cyanBg};
  border: 1px solid ${c.cyanBorder};
  border-radius: 0.875rem;
  padding: 1.25rem 1.5rem;
`;

export const RatesTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${c.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const RatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RatesRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
`;

export const RatesPair = styled.span`
  color: ${c.muted};
`;

export const RatesVal = styled.span`
  color: ${c.text};
  font-family: monospace;
`;

export const RatesChange = styled.span<{ $up: boolean }>`
  font-size: 0.6875rem;
  color: ${({ $up }) => ($up ? c.green : c.red)};
  margin-left: 0.375rem;
`;

export const HistoryCard = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  padding: 1.25rem 1.5rem;
`;

export const HistoryTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${c.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  & > div + div {
    border-top: 1px solid ${c.border};
  }
`;

export const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
`;

export const HistoryTo = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${c.text};
`;

export const HistoryDate = styled.p`
  font-size: 0.6875rem;
  color: ${c.muted};
`;

export const HistoryAmt = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${c.text};
  text-align: right;
`;

export const HistoryStatus = styled.span<{ $done: boolean }>`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ $done }) => ($done ? c.green : c.yellow)};
  display: block;
  text-align: right;
`;
