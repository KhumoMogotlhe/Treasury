import styled from "styled-components";

const c = {
  bg: "#080d1a",
  border: "#1a2236",
  text: "#f1f5f9",
  muted: "#64748b",
  badge: "#10b981",
  badgeBg: "rgba(16,185,129,0.1)",
};

export const Bar = styled.header`
  height: 3.5rem;
  border-bottom: 1px solid ${c.border};
  background: ${c.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const PageTitle = styled.h1`
  color: ${c.text};
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const KycBadge = styled.div<{ $verified: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background: ${({ $verified }) => ($verified ? c.badgeBg : "rgba(245,158,11,0.1)")};
  color: ${({ $verified }) => ($verified ? c.badge : "#f59e0b")};
  border: 1px solid ${({ $verified }) => ($verified ? "rgba(16,185,129,0.2)" : "rgba(245,158,11,0.2)")};
`;

export const Dot = styled.span<{ $verified: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: ${({ $verified }) => ($verified ? c.badge : "#f59e0b")};
`;
