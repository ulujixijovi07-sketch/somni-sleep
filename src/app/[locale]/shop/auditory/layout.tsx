import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SONUS · Auditory Sleep Protocol | SOMNI",
  description:
    "Mask disruptive noise to prevent nocturnal arousals. Non-looping white noise machines, sleep earbuds, and sound therapy devices.",
};

export default function AuditoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
