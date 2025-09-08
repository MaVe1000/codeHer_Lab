
import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Colegio Nacional San Martín",
  description: "Sitio web oficial del colegio secundario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}