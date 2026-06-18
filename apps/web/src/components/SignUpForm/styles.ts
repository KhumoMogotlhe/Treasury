import styled, { keyframes } from "styled-components";

const colors = {
  bgBase: "#0a0f1e",
  bgCard: "#0f172a",
  bgInput: "#1e293b",
  border: "#1e293b",
  borderFocus: "#6366f1",
  borderError: "#ef4444",
  primary: "#6366f1",
  primaryHover: "#818cf8",
  google: "#1e293b",
  googleHover: "#263347",
  googleBorder: "#334155",
  textPrimary: "#f1f5f9",
  textMuted: "#94a3b8",
  textSubtle: "#64748b",
  textError: "#f87171",
  divider: "#1e293b",
  link: "#818cf8",
  linkHover: "#a5b4fc",
};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  background: ${colors.bgBase};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const LogoMark = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background: #6366f1;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const LogoMarkText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;

export const LogoName = styled.span`
  color: ${colors.textPrimary};
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 26rem;
  background: ${colors.bgCard};
  border: 1px solid ${colors.border};
  border-radius: 1rem;
  padding: 2rem;
`;

export const CardTitle = styled.h1`
  color: ${colors.textPrimary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.375rem;
`;

export const CardSubtitle = styled.p`
  color: ${colors.textMuted};
  font-size: 0.875rem;
  margin-bottom: 1.75rem;
`;

export const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  background: ${colors.google};
  border: 1px solid ${colors.googleBorder};
  border-radius: 0.625rem;
  color: ${colors.textPrimary};
  font-size: 0.9375rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  font-family: inherit;

  &:hover {
    background: ${colors.googleHover};
    border-color: #475569;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const GoogleIcon = styled.svg`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.25rem 0;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${colors.divider};
`;

export const DividerText = styled.span`
  color: ${colors.textSubtle};
  font-size: 0.75rem;
  white-space: nowrap;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled.label`
  color: ${colors.textMuted};
  font-size: 0.8125rem;
  font-weight: 500;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  background: ${colors.bgInput};
  border: 1px solid ${({ $hasError }) =>
    $hasError ? colors.borderError : colors.border};
  border-radius: 0.625rem;
  color: ${colors.textPrimary};
  font-size: 0.9375rem;
  padding: 0.75rem 0.875rem;
  outline: none;
  transition: border-color 0.15s ease;
  font-family: inherit;
  width: 100%;

  &::placeholder {
    color: ${colors.textSubtle};
  }

  &:focus {
    border-color: ${({ $hasError }) =>
      $hasError ? colors.borderError : colors.borderFocus};
  }
`;

export const FieldError = styled.p`
  color: ${colors.textError};
  font-size: 0.75rem;
`;

export const PasswordHint = styled.p`
  color: ${colors.textSubtle};
  font-size: 0.75rem;
`;

export const GlobalError = styled.div`
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: 0.625rem;
  color: ${colors.textError};
  font-size: 0.8125rem;
  padding: 0.75rem 0.875rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: ${colors.primary};
  color: white;
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 0.8125rem 1rem;
  border-radius: 0.625rem;
  border: none;
  cursor: pointer;
  margin-top: 0.25rem;
  transition: background 0.15s ease;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: ${colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Spinner = styled.span`
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

export const Footer = styled.p`
  text-align: center;
  color: ${colors.textSubtle};
  font-size: 0.8125rem;
  margin-top: 1.5rem;
`;

export const FooterLink = styled.a`
  color: ${colors.link};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: ${colors.linkHover};
  }
`;
