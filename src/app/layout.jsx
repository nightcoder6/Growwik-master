import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ScrollProvider } from "@/lib/ScrollContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We're a global influencer marketing agency, powered by influencers. We pride ourselves in bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting."
        />
        <meta
          property="og:title"
          content="PR Prabandhak Media - Influencer marketing agency"
        />
        <meta
          property="og:description"
          content="We're a global influencer marketing agency, powered by influencers. We pride ourselves in bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting."
        />
        <meta property="og:image" content="https://utfs.io/f/1zJcitIgytnjq3zirxME4BmsUxrLHbkDwTaR5Q6KCfoOJIuP" />
        <meta property="og:url" content="https://PR Prabandhak.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PR Prabandhak Media - Influencer Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="We're a global influencer marketing agency, powered by influencers. We pride ourselves on bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting."
        />
        <meta
          name="twitter:image"
          content="https://utfs.io/f/1zJcitIgytnjq3zirxME4BmsUxrLHbkDwTaR5Q6KCfoOJIuP"
        />

        <title>PR Prabandhak Media - Influencer marketing Platform</title>
      </head>
      <body className="antialiased">
        <ScrollProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ScrollProvider>
      </body>
    </html>
  );
}
