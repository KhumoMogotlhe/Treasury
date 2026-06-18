import styled, { keyframes } from "styled-components";

const c = {
  card: "#0e1525",
  border: "#1a2236",
  text: "#f1f5f9",
  muted: "#64748b",
  accent: "#6366f1",
  accentGlow: "rgba(99,102,241,0.12)",
  green: "#10b981",
  greenBg: "rgba(16,185,129,0.1)",
  input: "#111827",
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.div`
  animation: ${fadeUp} 0.3s ease both;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  padding: 1.5rem;
`;

export const PanelTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${c.text};
  margin-bottom: 1.25rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const Field = styled.div`
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
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: ${c.text};
  outline: none;
  transition: border-color 0.15s;
  width: 100%;

  &::placeholder {
    color: #334155;
  }

  &:focus {
    border-color: ${c.accent};
  }
`;

export const Select = styled.select`
  background: ${c.input};
  border: 1px solid ${c.border};
  border-radius: 0.5rem;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: ${c.text};
  outline: none;
  cursor: pointer;
  width: 100%;

  option {
    background: #0e1525;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  background: ${c.accent};
  color: #fff;
  border: none;
  margin-top: 0.375rem;
  transition: background 0.15s;

  &:hover {
    background: #4f52e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RateCard = styled.div`
  background: ${c.accentGlow};
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.8125rem;
  color: ${c.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RateLabel = styled.span`
  color: ${c.muted};
`;

export const SectionTitle = styled.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${c.muted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.875rem;
`;

export const EmptyPanel = styled.div`
  background: ${c.card};
  border: 1px solid ${c.border};
  border-radius: 0.875rem;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: ${c.muted};
  font-size: 0.8125rem;
  text-align: center;
`;
