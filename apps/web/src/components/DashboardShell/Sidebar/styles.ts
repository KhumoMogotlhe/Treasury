import styled from "styled-components";
import Link from "next/link";

const c = {
  bg: "#080d1a",
  border: "#1a2236",
  primary: "#6366f1",
  primaryBg: "rgba(99,102,241,0.12)",
  text: "#f1f5f9",
  muted: "#64748b",
  hover: "rgba(255,255,255,0.05)",
  logoMark: "#6366f1",
};

export const Nav = styled.aside`
  width: 220px;
  min-height: 100vh;
  background: ${c.bg};
  border-right: 1px solid ${c.border};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
`;

export const LogoArea = styled.div`
  padding: 1.25rem 1.25rem 1rem;
  border-bottom: 1px solid ${c.border};
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const LogoMark = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  background: ${c.logoMark};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8125rem;
  color: white;
  flex-shrink: 0;
`;

export const LogoName = styled.span`
  color: ${c.text};
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.02em;
`;

export const NavSection = styled.div`
  flex: 1;
  padding: 0.75rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  overflow-y: auto;
`;

export const SectionLabel = styled.p`
  color: ${c.muted};
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.75rem 0.625rem 0.375rem;
`;

export const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5625rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $active }) => ($active ? c.text : c.muted)};
  background: ${({ $active }) => ($active ? c.primaryBg : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "rgba(99,102,241,0.2)" : "transparent")};
  transition: all 0.15s ease;

  &:hover {
    color: ${c.text};
    background: ${({ $active }) => ($active ? c.primaryBg : c.hover)};
  }
`;

export const NavIcon = styled.span<{ $active?: boolean }>`
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active }) => ($active ? c.primary : c.muted)};
  flex-shrink: 0;
`;

export const NavLabel = styled.span``;

export const BottomArea = styled.div`
  padding: 0.75rem;
  border-top: 1px solid ${c.border};
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${c.hover};
  }
`;

export const Avatar = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background: ${c.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.p`
  color: ${c.text};
  font-size: 0.8125rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserEmail = styled.p`
  color: ${c.muted};
  font-size: 0.6875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SignOutBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${c.muted};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
  margin-top: 0.25rem;

  &:hover {
    color: #f87171;
    background: rgba(248, 113, 113, 0.08);
  }
`;
