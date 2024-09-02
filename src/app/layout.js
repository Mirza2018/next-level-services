import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Shared/Navber";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next level services",
  description: "next-level-services",
  icons: {
    icon: "/logo.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber/>
        
        {children}
        
        <Footer/>
        
        </body>
    </html>
  );
}
