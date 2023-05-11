import type { AppProps } from "next/app";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { AppProvider, AuthProvider } from "@/data/contexts/Index";

import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <div className={`${inter.variable} font-sans`}>
          <Toaster />
          <Component {...pageProps} />
        </div>
      </AppProvider>
    </AuthProvider>
  );
}
