import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/global.css';


export const metadata = {
title: 'CASTICaD',
};


export default function RootLayout({ children }) {
return (
  <html lang="en">
  <body>{children}</body>
  </html>
  );
}