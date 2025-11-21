import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "DAMAC Islands: Luxury Villas & Townhouses in Dubai",
  description:
    "Discover DAMAC Islands, Dubai's new chapter in island living. Explore luxury villas, twin villas, and townhouses inspired by the world's best tropical destinations. Invest now!",

  openGraph: {
    title: "DAMAC Islands: Luxury Villas & Townhouses in Dubai",
    description:
      "Discover DAMAC Islands, Dubai's new chapter in island living. Explore luxury villas, twin villas, and townhouses inspired by the world's best tropical destinations. Invest now!",

    url: "https://www.trustinhomes.ae/sobha-hartland2",
    siteName: "DAMAC Islands",
    images: [
      {
        url: "https://www.trustinhomes.ae/sobha-hartland2/preview-p1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* Google Tag (gtag.js) */}
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

        {/* Facebook Pixel Script */}
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
        {/* NoScript fallback for Pixels */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1472636327269407&ev=PageView&noscript=1"
            alt="facebook-pixel-1"
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=779280361560548&ev=PageView&noscript=1"
            alt="facebook-pixel-2"
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1093323455143639&ev=PageView&noscript=1"
            alt="facebook-pixel-3"
          />
        </noscript>

        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
