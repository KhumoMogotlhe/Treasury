"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #0a0f1e;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1.75rem;
`;

interface Props {
  sidebar: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardLayoutShell({ sidebar, header, children }: Props) {
  return (
    <Wrapper>
      {sidebar}
      <Main>
        {header}
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
}
