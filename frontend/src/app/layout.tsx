import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import TanStackQueryProvider from "@/provider/TanstackProvider";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
