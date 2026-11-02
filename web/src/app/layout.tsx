import type { Metadata } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import { Providers } from "./providers";

const description =
  "A task manager for small teams: projects, tasks and the people doing them. Try the live demo, no sign-up needed.";

export const metadata: Metadata = {
  metadataBase: new URL("https://halfway-mert.vercel.app"),
  title: { default: "Halfway", template: "%s | Halfway" },
  description,
  openGraph: {
    type: "website",
    siteName: "Halfway",
    title: "Halfway",
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
