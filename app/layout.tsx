import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aseiro Industries - Automation & Machine Vision Solutions",
  description:
    "Global provider of automation and machine vision solutions for modern manufacturing. Transform your production with intelligent systems.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics (GA4) - place these first in <Head> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DYETLZSGMZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DYETLZSGMZ');
            `,
          }}
        />
        <title>Industrial Machine Vision & Quality Inspection Automation | Aseiro UK & India</title>
        <meta name="description" content="Aseiro provides machine vision, quality inspection, and automation solutions for manufacturers in the UK and India. Eliminate defects, boost productivity, and ensure compliance." />
        {/* Structured Data for Organization and LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aseiro Industries",
            "url": "https://aseiro.com",
            "logo": "https://aseiro.com/aseiro-logo-main.png",
            "sameAs": [
              "https://linkedin.com/company/aseiro-industries"
            ]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Aseiro Industries UK",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sheffield",
              "addressCountry": "UK"
            },
            "telephone": "+44-7825-031261"
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Aseiro Industries India",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hyderabad",
              "addressCountry": "India"
            },
            "telephone": "+91-7893-715471"
          })
        }} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
