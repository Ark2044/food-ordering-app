import { AppProvider } from "@/components/AppContext";
import { EdgeStoreProvider } from "@/libs/edgestore";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <EdgeStoreProvider>
              <Toaster />
              <Header />
              {children}
              <Footer />
            </EdgeStoreProvider>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
