import NavBar from "../components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import GlobalContextProvider from "../context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feed Me App",
  description: "Discover delicious recipes to fill your belly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <NavBar />
          <div>{children}</div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
