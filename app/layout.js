
import "./globals.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/bootstrap.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/aos.css";
import "@css/slick.min.css";
import "@css/style.css";


export const metadata = {
  title: "KHALsys - IT Solutions & Services Agency",
  description: "KHALsys - IT Solutions & Services Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
