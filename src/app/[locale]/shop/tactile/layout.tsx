import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TACTUS · Tactile Sleep Protocol | SOMNI",
  description:
    "Apply deep pressure to activate your parasympathetic nervous system. Weighted masks, silk pillowcases, acupressure mats, and cooling blankets.",
};

export default function TactileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
