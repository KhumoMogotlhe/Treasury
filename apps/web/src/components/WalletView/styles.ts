import styled, { keyframes, css } from "styled-components";

const c = {
  bg: "#0a0f1e",
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
  red: "#ef4444",
  redBg: "rgba(239,68,68,0.1)",
  yellow: "#f59e0b",
  yellowBg: "rgba(245,158,11,0.1)",
  indigo: "rgba(99,102,241,0.1)",
};

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const zoomIn = keyframes`from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); }`;

// ─── Page ────────────────────────────────────────────────────────────────────

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PageTitle = styled.h1`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${c.text};
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Btn = styled.button<{ $variant?: "primary" | "ghost" }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background: ${c.accent};
          border: 1px solid transparent;
          color: #fff;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);
          &:hover { background: ${c.accentDark}; }
        `
      : css`
          background: ${c.card};
          border: 1px solid ${c.border};
          color: ${c.text};
          &:hover { background: ${c.border}; }
        `}
`;

// ─── Balance grid ─────────────────────────────────────────────────────────────

export const BalanceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const GradientCard = styled.div`
  background: linear-gradient(135deg, ${c.accent} 0%, #312e81 100%);
  border-radius: 1.125rem;
  padding: 2rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
`;

export const GradientBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  opacity: 0.08;
  pointer-events: none;
`;

export const GradientLabel = styled.p`
  font-size: 0.8125rem;
  color: rgba(199, 210, 254, 0.9);
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

export const GradientAmount = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  line-height: 1;
`;

export const GradientStats = styled.div`
  display: flex;
  gap: 2rem;
`;

export const GradientStat = styled.div``;

export const GradientStatLabel = styled.span`
  display: block;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(199, 210, 254, 0.7);
  margin-bottom: 0.125rem;
`;

export const GradientStatVal = styled.span`
  font-size: 1.0625rem;
  font-weight: 600;
`;

export const QuickCard = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 1.125rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const QuickCardTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${c.text};
  margin-bottom: 0.75rem;
`;

export const AddressBox = styled.div`
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.625rem;
  padding: 0.75rem 1rem;
`;

export const AddressRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.375rem;
`;

export const AddressLabel = styled.span`
  font-size: 0.6875rem;
  color: ${c.muted};
`;

export const AddressCopy = styled.button`
  font-size: 0.6875rem;
  color: ${c.accent};
  background: none;
  border: none;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

export const AddressCode = styled.code`
  font-size: 0.8125rem;
  color: ${c.text};
  word-break: break-all;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const StatBox = styled.div`
  flex: 1;
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.625rem;
  padding: 0.875rem;
  text-align: center;
`;

export const StatVal = styled.span`
  display: block;
  font-size: 1.375rem;
  font-weight: 700;
  color: ${c.text};
`;

export const StatLabel = styled.span`
  font-size: 0.6875rem;
  color: ${c.muted};
`;

// ─── Tabs ────────────────────────────────────────────────────────────────────

export const TabBar = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid ${c.border};
`;

export const Tab = styled.button<{ $active?: boolean }>`
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  color: ${({ $active }) => ($active ? c.accent : c.muted)};
  transition: color 0.15s;

  &:hover {
    color: ${({ $active }) => ($active ? c.accent : c.text)};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${c.accent};
    border-radius: 2px 2px 0 0;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.15s;
  }
`;

// ─── Assets table ─────────────────────────────────────────────────────────────

export const TableWrap = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const Thead = styled.thead`
  background: ${c.surface};
`;

export const Th = styled.th`
  padding: 0.875rem 1.25rem;
  font-size: 0.6875rem;
  font-weight: 600;
  color: ${c.muted};
  text-transform: uppercase;
  letter-spacing: 0.06em;

  &:last-child { text-align: right; }
`;

export const Tbody = styled.tbody`
  & > tr + tr {
    border-top: 1px solid ${c.border};
  }
`;

export const Tr = styled.tr`
  transition: background 0.12s;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};

  &:hover {
    background: ${c.surface};
  }
`;

export const Td = styled.td`
  padding: 0.875rem 1.25rem;
  font-size: 0.8125rem;
  color: ${c.text};
  vertical-align: middle;

  &:last-child { text-align: right; }
`;

export const AssetCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AssetIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${c.surface};
  border: 1px solid ${c.border};
  display: grid;
  place-items: center;
  font-size: 0.6875rem;
  font-weight: 700;
  color: ${c.text};
  flex-shrink: 0;
`;

export const AssetName = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${c.text};
`;

export const AssetCode = styled.p`
  font-size: 0.6875rem;
  color: ${c.muted};
`;

export const IconBtn = styled.button`
  padding: 0.375rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${c.muted};
  border-radius: 0.375rem;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${c.accent};
    background: ${c.indigo};
  }
`;

// ─── History tab ──────────────────────────────────────────────────────────────

export const FilterRow = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-bottom: 1rem;
`;

export const SearchWrap = styled.div`
  position: relative;
  flex: 1;
  max-width: 20rem;
`;

export const SearchIconWrap = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${c.muted};
  pointer-events: none;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.5625rem 0.875rem 0.5625rem 2.25rem;
  font-size: 0.8125rem;
  color: ${c.text};
  outline: none;

  &::placeholder { color: #334155; }
  &:focus { border-color: ${c.accent}; }
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5625rem 0.875rem;
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  color: ${c.muted};
  cursor: pointer;
  transition: color 0.15s;

  &:hover { color: ${c.text}; }
`;

export const TypeCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const TypeIconWrap = styled.div<{ $color: string; $bg: string }>`
  padding: 0.375rem;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background: ${({ $status }) =>
    $status === "COMPLETED" ? c.greenBg : $status === "PENDING" ? c.yellowBg : c.redBg};
  color: ${({ $status }) =>
    $status === "COMPLETED" ? c.green : $status === "PENDING" ? c.yellow : c.red};
`;

// ─── Modals ───────────────────────────────────────────────────────────────────

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  padding: 1rem;
  animation: ${fadeIn} 0.2s ease both;
`;

export const ModalCard = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 1rem;
  width: 100%;
  max-width: 26rem;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  animation: ${zoomIn} 0.2s ease both;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid ${c.border};
  background: rgba(17, 24, 39, 0.5);
`;

export const ModalTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${c.text};
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${c.muted};
  display: flex;
  border-radius: 0.375rem;
  padding: 0.25rem;
  transition: color 0.15s, background 0.15s;

  &:hover { color: ${c.text}; background: ${c.surface}; }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-height: 80vh;
  overflow-y: auto;
`;

export const SubTypeTabs = styled.div`
  display: flex;
  background: ${c.surface};
  padding: 0.25rem;
  border-radius: 0.5rem;
  gap: 0.25rem;
`;

export const SubTypeBtn = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 0.375rem;
  background: ${({ $active }) => ($active ? c.card : "transparent")};
  color: ${({ $active }) => ($active ? c.text : c.muted)};
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  &:hover { color: ${({ $active }) => ($active ? c.text : c.text)}; }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${c.muted};
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
`;

export const SelectInput = styled.select`
  background: ${c.input};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${c.text};
  outline: none;
  width: 100%;
  cursor: pointer;

  option { background: #0e1525; }
`;

export const PrimaryBtn = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: ${c.accent};
  border: none;
  border-radius: 0.75rem;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);

  &:hover:not(:disabled) { background: ${c.accentDark}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const QrWrap = styled.div`
  text-align: center;
`;

export const QrBox = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 0.75rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  border: 4px solid #fff;
`;

export const QrLabel = styled.p`
  font-size: 0.8125rem;
  color: ${c.text};
`;

export const InfoBox = styled.div`
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const InfoRowLabel = styled.span`
  font-size: 0.6875rem;
  color: ${c.muted};
`;

export const InfoRowVal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${c.text};
`;

export const CopyBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${c.muted};
  display: flex;
  &:hover { color: ${c.accent}; }
`;

export const LightningBanner = styled.div`
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.8125rem;
  color: #fde68a;
`;

// ─── Swap modal ───────────────────────────────────────────────────────────────

export const SwapBox = styled.div`
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  padding: 1rem;
`;

export const SwapBoxLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const SwapBoxSublabel = styled.span`
  font-size: 0.75rem;
  color: ${c.muted};
`;

export const SwapRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const SwapAmount = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${c.text};
  width: 60%;

  &::placeholder { color: #334155; }
`;

export const SwapCurrencySelect = styled.select`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 9999px;
  padding: 0.375rem 0.875rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${c.text};
  cursor: pointer;
  outline: none;

  option { background: #0e1525; }
`;

export const SwapArrow = styled.div`
  display: flex;
  justify-content: center;
  margin: -0.5rem 0;
  position: relative;
  z-index: 1;
`;

export const SwapArrowBtn = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  color: ${c.accent};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

export const SwapFee = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: ${c.muted};
`;

// ─── Receipt modal ────────────────────────────────────────────────────────────

export const ReceiptModal = styled(ModalCard)`
  max-width: 22rem;
`;

export const ReceiptCenter = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ReceiptIconWrap = styled.div<{ $green?: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 0.75rem;
  background: ${({ $green }) => ($green ? c.greenBg : c.surface)};
  color: ${({ $green }) => ($green ? c.green : c.text)};
`;

export const ReceiptAmount = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${c.text};
  letter-spacing: -0.03em;
`;

export const ReceiptDetails = styled.div`
  border-top: 1px solid ${c.border};
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReceiptRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
`;

export const ReceiptRowLabel = styled.span`
  color: ${c.muted};
`;

export const ReceiptRowVal = styled.span`
  color: ${c.text};
  font-weight: 500;
  font-family: monospace;
  font-size: 0.75rem;
`;

export const DownloadBtn = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: ${c.surface};
  border: 1px solid ${c.border};
  border-radius: 0.75rem;
  color: ${c.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: ${c.border}; }
`;

// ─── Empty state ──────────────────────────────────────────────────────────────

export const Empty = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  color: ${c.muted};
  font-size: 0.8125rem;
`;
