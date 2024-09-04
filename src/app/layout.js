import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Shared/Navber";
import Footer from "@/components/Shared/Footer";
import Logo from "@/components/Logo/Logo";
import SelasNews from "@/components/Homepages/SelasNews";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next level services",
  description: "next-level-services",
  icons: {
    icon: Logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SelasNews/>
        <Navber/>
        
        {children}
        
        <Footer/>
        
        </body>
    </html>
  );
}
