import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUX · Visual Sleep Protocol | SOMNI",
  description:
    "Control light signals to reset your circadian rhythm. Blue-light blocking sleep masks, amber spectrum lights, and total blackout solutions.",
};

export default function VisualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
