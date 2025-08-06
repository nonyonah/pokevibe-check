import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nintendo Game Boy inspired color palette
        'gameboy-dark': '#0f380f',
        'gameboy-medium': '#306230',
        'gameboy-light': '#8bac0f',
        'gameboy-lightest': '#9bbc0f',
        // SNES inspired colors
        'nintendo-purple': '#4c2a85',
        'nintendo-blue': '#1e3a8a',
        'nintendo-red': '#dc2626',
        'nintendo-yellow': '#fbbf24',
        'nintendo-gray': '#6b7280',
        'nintendo-dark': '#1f2937',
      },
      fontFamily: {
        'pixel': ['Press Start 2P', 'Courier New', 'monospace'],
        'retro': ['Press Start 2P', 'Monaco', 'Menlo', 'monospace'],
        'mono': ['Courier New', 'Monaco', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0, 0, 0, 0.8)',
        'retro-pressed': '2px 2px 0px 0px rgba(0, 0, 0, 0.8)',
        'gameboy': 'inset -2px -2px 0px 0px rgba(0, 0, 0, 0.3), inset 2px 2px 0px 0px rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'pixel-pulse': 'pixel-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'retro-bounce': 'retro-bounce 1s ease-in-out infinite',
      },
      keyframes: {
        'pixel-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
        'retro-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config