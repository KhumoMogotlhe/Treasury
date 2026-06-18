"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as S from "./styles";

interface FieldErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  function validate(): boolean {
    const errors: FieldErrors = {};
    if (name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
    if (!email.includes("@")) errors.email = "Enter a valid email address.";
    if (password.length < 8) errors.password = "Password must be at least 8 characters.";
    else if (!/[A-Z]/.test(password)) errors.password = "Password must contain an uppercase letter.";
    else if (!/[0-9]/.test(password)) errors.password = "Password must contain a number.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGlobalError("");
    if (!validate()) return;

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setGlobalError(data.error ?? "Registration failed.");
      setLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setGlobalError("Account created but sign-in failed. Please sign in manually.");
      router.push("/sign-in");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  async function handleGoogle() {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
  }

  return (
    <S.Wrapper>
      <Link href="/" passHref legacyBehavior>
        <S.LogoLink>
          <S.LogoMark>
            <S.LogoMarkText>D</S.LogoMarkText>
          </S.LogoMark>
          <S.LogoName>Dimensity</S.LogoName>
        </S.LogoLink>
      </Link>

      <S.Card>
        <S.CardTitle>Create your account</S.CardTitle>
        <S.CardSubtitle>Start accepting stablecoin payments today.</S.CardSubtitle>

        <S.GoogleButton onClick={handleGoogle} disabled={googleLoading} type="button">
          <S.GoogleIcon viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </S.GoogleIcon>
          {googleLoading ? "Redirecting…" : "Continue with Google"}
        </S.GoogleButton>

        <S.Divider>
          <S.DividerLine />
          <S.DividerText>or register with email</S.DividerText>
          <S.DividerLine />
        </S.Divider>

        <S.Form onSubmit={handleSubmit}>
          {globalError && <S.GlobalError>{globalError}</S.GlobalError>}

          <S.Field>
            <S.Label htmlFor="name">Full name</S.Label>
            <S.Input
              id="name"
              type="text"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              $hasError={!!fieldErrors.name}
              autoComplete="name"
            />
            {fieldErrors.name && <S.FieldError>{fieldErrors.name}</S.FieldError>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="email">Email address</S.Label>
            <S.Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              $hasError={!!fieldErrors.email}
              autoComplete="email"
            />
            {fieldErrors.email && <S.FieldError>{fieldErrors.email}</S.FieldError>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              $hasError={!!fieldErrors.password}
              autoComplete="new-password"
            />
            {fieldErrors.password
              ? <S.FieldError>{fieldErrors.password}</S.FieldError>
              : <S.PasswordHint>Min. 8 characters, one uppercase, one number.</S.PasswordHint>
            }
          </S.Field>

          <S.Field>
            <S.Label htmlFor="confirmPassword">Confirm password</S.Label>
            <S.Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              $hasError={!!fieldErrors.confirmPassword}
              autoComplete="new-password"
            />
            {fieldErrors.confirmPassword && (
              <S.FieldError>{fieldErrors.confirmPassword}</S.FieldError>
            )}
          </S.Field>

          <S.SubmitButton type="submit" disabled={loading}>
            {loading && <S.Spinner />}
            {loading ? "Creating account…" : "Create account"}
          </S.SubmitButton>
        </S.Form>

        <S.Footer>
          Already have an account?{" "}
          <Link href="/sign-in" passHref legacyBehavior>
            <S.FooterLink>Sign in</S.FooterLink>
          </Link>
        </S.Footer>
      </S.Card>
    </S.Wrapper>
  );
}
