import React from "react";
import MarketingLayoutClient from "@/components/MarketingLayoutClient";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingLayoutClient>{children}</MarketingLayoutClient>;
}
