import styled, { keyframes } from "styled-components";

const c = {
  card: "#0e1525",
  border: "#1a2236",
  text: "#f1f5f9",
  muted: "#64748b",
  accent: "#6366f1",
  green: "#10b981",
  greenBg: "rgba(16,185,129,0.08)",
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.div`
  animation: ${fadeUp} 0.3s ease both;
`;

export const TotalCard = styled.div`
  background: linear-gradient(135deg, #1a1f3a 0%, #0e1525 100%);
  border: 1px solid ${c.border};
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const TotalLabel = styled.p`
  font-size: 0.8125rem;
  color: ${c.muted};
  margin-bottom: 0.375rem;
`;

export const TotalAmount = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${c.text};
  letter-spacing: -0.04em;
  line-height: 1;
`;

export const TotalSub = styled.p`
  font-size: 0.75rem;
  color: ${c.muted};
  margin-top: 0.5rem;
`;

export const TotalActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const Btn = styled.button<{ $primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid ${({ $primary }) => ($primary ? "transparent" : c.border)};
  background: ${({ $primary }) => ($primary ? c.accent : "transparent")};
  color: ${c.text};

  &:hover {
    background: ${({ $primary }) => ($primary ? "#4f52e0" : c.border)};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${c.muted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.875rem;
`;

export const CurrencyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
`;

export const CurrencyCard = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: border-color 0.15s;

  &:hover {
    border-color: #2a3350;
  }
`;

export const CurrencyIcon = styled.div<{ $color: string }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

export const CurrencyInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CurrencyName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${c.text};
`;

export const CurrencyCode = styled.p`
  font-size: 0.75rem;
  color: ${c.muted};
`;

export const CurrencyBalance = styled.div`
  text-align: right;
`;

export const BalanceMain = styled.p`
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${c.text};
`;

export const BalanceUsd = styled.p`
  font-size: 0.6875rem;
  color: ${c.muted};
`;

export const DepositBanner = styled.div`
  margin-top: 1.5rem;
  background: ${c.greenBg};
  border: 1px solid rgba(16,185,129,0.2);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8125rem;
  color: ${c.green};
`;
