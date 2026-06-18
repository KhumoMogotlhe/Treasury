import styled, { keyframes } from "styled-components";

const c = {
  card: "#0e1525",
  border: "#1a2236",
  text: "#f1f5f9",
  muted: "#64748b",
  accent: "#6366f1",
  green: "#10b981",
  greenBg: "rgba(16,185,129,0.1)",
  red: "#ef4444",
  redBg: "rgba(239,68,68,0.1)",
  yellow: "#f59e0b",
  yellowBg: "rgba(245,158,11,0.1)",
  input: "#111827",
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.div`
  animation: ${fadeUp} 0.3s ease both;
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.5625rem 0.875rem;
  font-size: 0.8125rem;
  color: ${c.text};
  outline: none;
  flex: 1;
  min-width: 180px;
  transition: border-color 0.15s;

  &::placeholder {
    color: #334155;
  }

  &:focus {
    border-color: ${c.accent};
  }
`;

export const FilterSelect = styled.select`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.5625rem 0.875rem;
  font-size: 0.8125rem;
  color: ${c.text};
  cursor: pointer;
  outline: none;

  option {
    background: #0e1525;
  }
`;

export const Table = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  overflow: hidden;
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 2.25rem 1fr 120px 100px 90px;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid ${c.border};
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 2.25rem 1fr 90px 80px;
  }
`;

export const HeadCell = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  color: ${c.muted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 4rem 2rem;
  color: ${c.muted};
  font-size: 0.8125rem;
  text-align: center;
`;
