import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gift-o-matic",
  description: "Santa's little helper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="App min-vh-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: 'url("/backdrop-blank.png")',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'bottom'
          }}>
          {children}
        </div>
      </body>
    </html>
  );
}
