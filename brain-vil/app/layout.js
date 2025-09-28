import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/global.css';


export const metadata = {
  title: "CASTICaD",
  description: "Cross-Attentional SpatioTemporal Brain Connectivity Study",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brain-line-icon.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}