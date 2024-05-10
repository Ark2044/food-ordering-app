import { AppProvider } from "@/components/AppContext";
import { EdgeStoreProvider } from "@/libs/edgestore";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "SLEEPZ PIZZA",
  description: "Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <EdgeStoreProvider>
            <AppProvider>
              <Toaster />
              <Header />
              {children}
              <Footer />
            </AppProvider>
          </EdgeStoreProvider>
        </main>
      </body>
    </html>
  );
}
