import { Geist, Geist_Mono} from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css"

const geistSans = Geist({
    variable : "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title : "Blog Irfan",
    description: "Catatan Hidup",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <ThemeProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}