import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OLFACIO · Olfactory Sleep Protocol | SOMNI",
  description:
    "Signal safety to your amygdala through scent. Pillow sprays, essential oil blends, and portable aroma diffusers for deeper sleep.",
};

export default function OlfactoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
