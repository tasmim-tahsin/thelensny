import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'The Lens NY — Cinematic Media Agency | New York',
  description: 'The Lens is a New York-based creative media agency delivering cinematic visuals, impactful advertisements, and authentic documentaries that connect brands with people.',
  keywords: ['cinematography', 'videography', 'New York', 'brand film', 'documentary', 'advertisement'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){try{var t=localStorage.getItem('lens-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
        ` }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
