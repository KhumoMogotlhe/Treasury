"use client";

import * as S from "./styles";

const features = [
  {
    icon: "⚡",
    title: "Instant USDC Payments",
    description:
      "Accept stablecoin payments from anywhere in the world with zero volatility risk on your end.",
  },
  {
    icon: "🔄",
    title: "Multi-currency Settlement",
    description:
      "Settle in ZAR, USD, or any supported currency. We handle the conversion at competitive rates.",
  },
  {
    icon: "📊",
    title: "Real-time Treasury",
    description:
      "Full visibility into your balances, transactions, and settlement status — all in one place.",
  },
];

export default function LandingPage() {
  return (
    <>
      <S.GlobalStyles />
      <S.PageWrapper>
        <S.NavWrapper>
          <S.NavInner>
            <S.Logo>
              <S.LogoMark>
                <S.LogoMarkText>D</S.LogoMarkText>
              </S.LogoMark>
              <S.LogoName>Dimensity</S.LogoName>
            </S.Logo>
            <S.NavActions>
              <S.NavLink href="/sign-in">Sign in</S.NavLink>
              <S.NavButtonPrimary href="/sign-up">Get started</S.NavButtonPrimary>
            </S.NavActions>
          </S.NavInner>
        </S.NavWrapper>

        <S.HeroSection>
          <S.HeroContent>
            <S.Badge>
              <S.BadgeDot />
              Now in private beta
            </S.Badge>

            <S.HeroTitle>
              Business Treasury
              <S.HeroTitleGradient>Built for Africa</S.HeroTitleGradient>
            </S.HeroTitle>

            <S.HeroSubtitle>
              Accept stablecoins. Settle in any currency. Manage your treasury
              with real-time visibility across all your accounts.
            </S.HeroSubtitle>

            <S.HeroButtons>
              <S.ButtonLarge href="/sign-up">Start for free</S.ButtonLarge>
              <S.ButtonOutline href="/sign-in">Sign in →</S.ButtonOutline>
            </S.HeroButtons>
          </S.HeroContent>

          <S.FeaturesGrid>
            {features.map((feature) => (
              <S.FeatureCard key={feature.title}>
                <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
                <S.FeatureTitle>{feature.title}</S.FeatureTitle>
                <S.FeatureDescription>{feature.description}</S.FeatureDescription>
              </S.FeatureCard>
            ))}
          </S.FeaturesGrid>
        </S.HeroSection>

        <S.FooterWrapper>
          <S.FooterInner>
            <span>© {new Date().getFullYear()} Dimensity</span>
            <span>Built for African businesses</span>
          </S.FooterInner>
        </S.FooterWrapper>
      </S.PageWrapper>
    </>
  );
}
