import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Playfair Display (Italic)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
  weight: ["400", "500", "600", "700"], // choose any
  display: "swap",
});

export const metadata = {
  title: "Sobha Hartland 2 | Homes from AED 1.6M | Dubai Living",
  description:
    "Discover Sobha Hartland 2 from AED 1.6M with a 40/60 plan—prime Dubai living offering direct beach access and strong investment potential.Discover Sobha Hartland 2 from AED 1.6M with a 40/60 plan—prime Dubai living offering direct beach access and strong investment potential.",

  openGraph: {
    title: "Sobha Hartland 2 | Homes from AED 1.6M | Dubai Living",
    description:
      "Discover Sobha Hartland 2 from AED 1.6M with a 40/60 plan—prime Dubai living offering direct beach access and strong investment potential.Discover Sobha Hartland 2 from AED 1.6M with a 40/60 plan—prime Dubai living offering direct beach access and strong investment potential.",
    url: "https://www.trustinhomes.ae/sobha-hartland2",
    siteName: "DAMAC Islands",
    images: [
      {
        url: "https://www.trustinhomes.ae/sobha-hartland2/backgrounds/sophistication.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        {/* Scripts */}
        <Script
          id="google-gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17729890866"
        />
        <Script
          id="google-gtag-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17729890866');
            `,
          }}
        />
        {/* Facebook Pixels */}
        <Script
          id="fb-pixels"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1472636327269407');
              fbq('init', '779280361560548');
              fbq('init', '1093323455143639');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body
        suppressHydrationWarning
        className="antialiased font-[var(--font-montserrat)]"
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1472636327269407&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
