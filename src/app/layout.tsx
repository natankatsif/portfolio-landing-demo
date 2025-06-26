import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Launch UI (Portfolio Demo)",
  description: "This is a non-commercial portfolio project by @natankatsif, showcasing frontend skills and UI design. Code available at github.com/natankatsif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
          {children}
      </body>
    </html>
  );
}
