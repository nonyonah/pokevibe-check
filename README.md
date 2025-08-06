# PokeVibe Check - Farcaster Mini App with Minikit

A retro Nintendo-style Pokémon personality quiz built as a Farcaster Mini App using Minikit. Discover which Pokémon matches your vibe through an interactive quiz experience!

## Features

- 🎮 Retro Nintendo Game Boy aesthetic
- 🔮 Interactive personality quiz
- 🎯 Pokémon matching based on your answers
- 💰 Support the developer with ETH donations on Base network
- 📱 Optimized for Farcaster frames with Minikit integration
- 🖼️ Fixed image display with Next.js Image component

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS with custom Game Boy theme
- **Blockchain**: Wagmi, Viem, OnchainKit, Minikit
- **Wallets**: Coinbase Wallet with Farcaster integration
- **Deployment**: Vercel

## Minikit Integration

This app uses Minikit from OnchainKit to provide seamless wallet integration within Farcaster. Key features:

- **MiniKitProvider**: Wraps the application for global SDK access
- **Coinbase Wallet**: Smart wallet integration with Farcaster fallback
- **Base Network**: Optimized for Base mainnet transactions
- **Manifest**: Proper Farcaster Mini App manifest configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Farcaster account for testing

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pokevibe-check
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the .env file and update values as needed
cp .env .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy with default settings
4. Add your environment variables in Vercel dashboard

### Manual GitHub Setup

Since GitHub CLI is not available, follow these steps:

1. Go to [GitHub](https://github.com) and create a new repository
2. Copy the repository URL
3. Add the remote origin:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Environment Variables

```env
# Minikit Configuration
NEXT_PUBLIC_MINIKIT_APP_NAME="PokeVibe Check"
NEXT_PUBLIC_MINIKIT_APP_DESCRIPTION="Discover your Pokemon personality through an interactive quiz"

# Base Network Configuration
NEXT_PUBLIC_CHAIN_ID=8453
NEXT_PUBLIC_RPC_URL=https://mainnet.base.org

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Coinbase Developer Platform
# NEXT_PUBLIC_CDP_API_KEY=your_cdp_api_key_here
```

## Features

### Quiz System
- Multiple choice questions that determine personality traits
- Dynamic scoring system
- 150+ Pokémon results with detailed descriptions

### Wallet Integration
- **Ethereum (Base)**: Minikit with Coinbase Wallet integration
- **Smart Wallet**: Preference for smart wallet functionality
- Secure donation system with transaction feedback
- Removed Solana support for simplified user experience

### Responsive Design
- Mobile-first approach
- Game Boy-inspired pixel art styling
- Smooth animations and transitions
- Fixed image loading with proper fallbacks

## Recent Updates

### Minikit Implementation
- ✅ Replaced Farcaster Mini App connector with Minikit
- ✅ Integrated OnchainKit and Coinbase Wallet
- ✅ Removed Solana support for simplified experience
- ✅ Added proper manifest.json for Farcaster Mini Apps
- ✅ Fixed image display issues with Next.js Image component
- ✅ Updated environment variables for Minikit configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Pokémon data and sprites from [PokéAPI](https://pokeapi.co/)
- Retro styling inspired by Nintendo Game Boy
- Built for the Farcaster ecosystem with Minikit
- Powered by Base and OnchainKit

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles with retro theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main app component
├── components/
│   ├── WelcomeScreen.tsx    # Initial greeting screen
│   ├── QuizScreen.tsx       # Quiz question screen
│   └── ResultScreen.tsx     # Result display and sharing
├── data/
│   └── pokemon-data.ts      # Quiz data and Pokémon info
├── farcaster-sdk-config.ts  # Farcaster SDK setup
├── tailwind.config.ts       # Tailwind with retro styling
└── package.json
```

## 🎨 Design Features

- **Retro Color Palette**: Game Boy inspired greens and Nintendo console colors
- **Pixel Fonts**: Press Start 2P and monospace fonts for authentic feel
- **Retro Animations**: Pixel pulse and bounce effects
- **Button Styling**: 3D button effects with shadows and hover states
- **Responsive Layout**: Adapts to different screen sizes while maintaining retro aesthetic

## 🔧 Farcaster Integration

The app integrates with Farcaster through:

- **User Context**: Fetches user information for personalized greetings
- **Cast Composition**: Allows users to share their quiz results
- **SDK Configuration**: Proper initialization and error handling

## 🎯 Quiz Logic

### Multi-Step Branching System
- **Dynamic Progression**: 21 carefully crafted questions with branching paths
- **Personality-Based**: Questions focus on preferences, behaviors, and personality traits
- **Smart Routing**: Your answers determine the next question, creating unique paths
- **All 151 Gen 1 Pokémon**: Complete coverage with personalized descriptions
- **Progress Tracking**: Real-time indication of your quiz journey
- **Adaptive Length**: Quiz length varies (4-6 questions) based on your responses

### Question Categories
- **Lifestyle Preferences**: How you spend your time and energy
- **Challenge Response**: How you handle difficult situations
- **Social Dynamics**: Your interaction style with others
- **Environmental Choices**: Preferred settings and atmospheres
- **Decision Making**: Your approach to choices and problem-solving

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS with custom retro theme
- **Farcaster Mini Apps SDK**: Integration with Farcaster platform
- **PokeAPI**: Pokémon sprite images

## 📱 Usage

1. **Welcome Screen**: Displays personalized greeting and start button
2. **Quiz Screen**: Single question with multiple choice answers
3. **Result Screen**: Shows matched Pokémon with sharing option
4. **Share**: Compose cast with quiz result to share on Farcaster

## 🎮 Retro Styling Details

The app uses a carefully crafted retro aesthetic:

- **Colors**: Game Boy greens, Nintendo purples, blues, and yellows
- **Typography**: Pixel-perfect fonts with proper spacing
- **Shadows**: Retro button depth effects
- **Borders**: Chunky pixel-style borders
- **Animations**: Subtle retro-inspired animations

## 🔄 Development

To modify the quiz:

1. Edit `data/pokemon-data.ts` to add more questions or Pokémon
2. Update styling in `tailwind.config.ts` for theme changes
3. Modify components for different layouts or features

## 📄 License

This project is for educational and demonstration purposes. Pokémon characters and names are trademarks of Nintendo/Game Freak.