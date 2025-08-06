import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pokevibe-check.vercel.app'),
  title: 'PokeVibe Check - Farcaster Mini App',
  description: 'Discover your Pokémon vibe with this retro Nintendo-style quiz!',
  keywords: ['Pokemon', 'Quiz', 'Farcaster', 'Nintendo', 'Retro', 'Game'],
  authors: [{ name: 'PokeVibe Team' }],
  openGraph: {
    title: 'PokeVibe Check',
    description: 'Discover your Pokémon vibe with this retro Nintendo-style quiz!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PokeVibe Check',
    description: 'Discover your Pokémon vibe with this retro Nintendo-style quiz!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}