import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Keyboard Racer",
    description: "Test your typing speed 🔥🔥🔥🔥",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pl">
        <body className={`${inter.className} bg-slate-800 text-slate-300`}>{children}</body>
        </html>
    );
}
