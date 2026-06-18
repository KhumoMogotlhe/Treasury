"use client";

import { useState } from "react";
import * as S from "./styles";

export default function TransactionsView() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <S.Page>
      <S.FilterBar>
        <S.SearchInput
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <S.FilterSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All types</option>
          <option value="in">Received</option>
          <option value="out">Sent</option>
          <option value="convert">Conversions</option>
        </S.FilterSelect>
        <S.FilterSelect defaultValue="30">
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="all">All time</option>
        </S.FilterSelect>
      </S.FilterBar>

      <S.Table>
        <S.TableHead>
          <S.HeadCell />
          <S.HeadCell>Description</S.HeadCell>
          <S.HeadCell>Amount</S.HeadCell>
          <S.HeadCell>Status</S.HeadCell>
          <S.HeadCell>Date</S.HeadCell>
        </S.TableHead>
        <S.EmptyState>
          <EmptyIcon />
          No transactions found.
          <br />
          Transactions will appear here once you start sending or receiving payments.
        </S.EmptyState>
      </S.Table>
    </S.Page>
  );
}

function EmptyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
