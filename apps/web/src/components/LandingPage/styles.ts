import styled, { createGlobalStyle, keyframes } from "styled-components";
import Link from "next/link";

// ─── Design Tokens ────────────────────────────────────────────────────────────

const colors = {
  bgBase: "#0a0f1e",
  bgCard: "rgba(15, 23, 42, 0.6)",
  border: "rgba(30, 41, 59, 0.6)",
  borderHover: "#334155",
  primary: "#6366f1",
  primaryHover: "#818cf8",
  accent: "#10b981",
  textPrimary: "#f1f5f9",
  textMuted: "#94a3b8",
  textSubtle: "#475569",
  badgeBg: "rgba(79, 70, 229, 0.12)",
  badgeBorder: "rgba(99, 102, 241, 0.3)",
  badgeText: "#a5b4fc",
  btnSecondaryBorder: "#334155",
  btnSecondaryBorderHover: "#64748b",
  btnSecondaryText: "#cbd5e1",
};

// ─── Animations ───────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

// ─── Global ───────────────────────────────────────────────────────────────────

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: inherit;
    color: ${colors.textPrimary};
    background: ${colors.bgBase};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${colors.bgBase};
`;

// ─── Nav ──────────────────────────────────────────────────────────────────────

export const NavWrapper = styled.nav`
  border-bottom: 1px solid ${colors.border};
  padding: 1rem 1.5rem;
`;

export const NavInner = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const LogoMark = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${colors.primary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const LogoMarkText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const LogoName = styled.span`
  color: ${colors.textPrimary};
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: -0.02em;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: ${colors.textMuted};
  font-size: 0.875rem;
  transition: color 0.15s ease;

  &:hover {
    color: ${colors.textPrimary};
  }
`;

export const NavButtonPrimary = styled(Link)`
  background: ${colors.primary};
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background 0.15s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HeroSection = styled.section`
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 1.5rem 5rem;
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.badgeBg};
  border: 1px solid ${colors.badgeBorder};
  color: ${colors.badgeText};
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  margin-bottom: 2rem;
`;

export const BadgeDot = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  background: ${colors.accent};
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 700;
  color: ${colors.textPrimary};
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
`;

export const HeroTitleGradient = styled.span`
  display: block;
  background: linear-gradient(135deg, #818cf8 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroSubtitle = styled.p`
  color: ${colors.textMuted};
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ButtonLarge = styled(Link)`
  display: block;
  background: ${colors.primary};
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  text-align: center;
  width: 100%;
  transition: background 0.15s ease;

  @media (min-width: 640px) {
    width: auto;
  }

  &:hover {
    background: ${colors.primaryHover};
  }
`;

export const ButtonOutline = styled(Link)`
  display: block;
  border: 1px solid ${colors.btnSecondaryBorder};
  color: ${colors.btnSecondaryText};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  text-align: center;
  width: 100%;
  transition: border-color 0.15s ease, color 0.15s ease;

  @media (min-width: 640px) {
    width: auto;
  }

  &:hover {
    border-color: ${colors.btnSecondaryBorderHover};
    color: ${colors.textPrimary};
  }
`;

// ─── Features ─────────────────────────────────────────────────────────────────

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: left;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${colors.borderHover};
  }
`;

export const FeatureIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(30, 41, 59, 0.8);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  color: ${colors.textPrimary};
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  color: ${colors.textMuted};
  font-size: 0.875rem;
  line-height: 1.6;
`;

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${colors.border};
  padding: 2rem 1.5rem;
  margin-top: 4rem;
`;

export const FooterInner = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: ${colors.textSubtle};
  font-size: 0.875rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
