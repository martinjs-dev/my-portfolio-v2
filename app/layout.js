import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Dohou - Porfolio personnel : Compétences et Réalisations",
  description: "Salut, 👋 je suis Martin Dohou, développeur 🖥️ Backend & DevOps. Je code avec passion et rigueur pour donner vie à vos projets les plus ambitieux et ceci depuis 2021.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
