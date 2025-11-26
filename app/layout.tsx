import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "The Velvet Traveler - Your Ticket to Affordable Adventures",
  description:
    "Fly to your dream destinations at unbeatable prices. Simple booking, exclusive deals, and stress-free service.",
  icons: {
    icon: "/assets/vlogogold.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
