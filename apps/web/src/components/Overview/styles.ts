import styled, { keyframes } from "styled-components";

const c = {
  bg: "#0a0f1e",
  card: "#0e1525",
  border: "#1a2236",
  text: "#f1f5f9",
  muted: "#64748b",
  accent: "#6366f1",
  accentGlow: "rgba(99,102,241,0.15)",
  green: "#10b981",
  greenBg: "rgba(16,185,129,0.1)",
  red: "#ef4444",
  redBg: "rgba(239,68,68,0.1)",
  yellow: "#f59e0b",
  yellowBg: "rgba(245,158,11,0.1)",
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.div`
  animation: ${fadeUp} 0.3s ease both;
`;

export const SectionTitle = styled.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${c.muted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.875rem;
`;

export const BalanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const BalanceCard = styled.div<{ $accent?: string }>`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  padding: 1.25rem 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ $accent }) => $accent ?? c.accent};
    border-radius: 0.875rem 0.875rem 0 0;
  }
`;

export const CardLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${c.muted};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const CardFlag = styled.span`
  font-size: 0.875rem;
`;

export const CardAmount = styled.p`
  font-size: 1.625rem;
  font-weight: 700;
  color: ${c.text};
  letter-spacing: -0.03em;
  line-height: 1.1;
`;

export const CardSub = styled.p`
  font-size: 0.6875rem;
  color: ${c.muted};
  margin-top: 0.375rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  padding: 1.25rem 1.5rem;
`;

export const PanelTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${c.text};
  margin-bottom: 1rem;
`;

export const QuickActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

export const ActionBtn = styled.button<{ $variant?: "primary" | "ghost" }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid ${({ $variant }) => ($variant === "primary" ? "transparent" : c.border)};
  background: ${({ $variant }) => ($variant === "primary" ? c.accent : "transparent")};
  color: ${c.text};

  &:hover {
    background: ${({ $variant }) => ($variant === "primary" ? "#4f52e0" : c.border)};
  }

  svg {
    flex-shrink: 0;
  }
`;

export const TxList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const TxItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.625rem 0;
  border-bottom: 1px solid ${c.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const TxIcon = styled.div<{ $type: "in" | "out" | "pending" }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  background: ${({ $type }) =>
    $type === "in" ? c.greenBg : $type === "out" ? c.redBg : c.yellowBg};
  color: ${({ $type }) =>
    $type === "in" ? c.green : $type === "out" ? c.red : c.yellow};
  font-size: 0.875rem;
`;

export const TxInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TxName = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${c.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TxDate = styled.p`
  font-size: 0.6875rem;
  color: ${c.muted};
`;

export const TxAmount = styled.p<{ $type: "in" | "out" | "pending" }>`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ $type }) =>
    $type === "in" ? c.green : $type === "out" ? c.red : c.yellow};
  white-space: nowrap;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0;
  color: ${c.muted};
  font-size: 0.8125rem;
`;
