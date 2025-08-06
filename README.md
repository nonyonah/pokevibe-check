# 🎮 PokeVibe Check - Farcaster Mini App

A retro Nintendo Game Boy-style Pokémon personality quiz built as a Farcaster mini app using Next.js, TypeScript, and Tailwind CSS. Discover which Generation 1 Pokémon matches your vibe through an interactive multi-step quiz!

## ✨ Features

- **🎯 Multi-Step Branching Quiz**: Dynamic personality-based questions that adapt based on your answers
- **🎮 Retro Nintendo Aesthetic**: Authentic Game Boy-inspired design with pixel-perfect styling
- **🔗 Farcaster Integration**: Built with Farcaster Mini App SDK for seamless social sharing
- **📱 Responsive Design**: Works perfectly on mobile and desktop
- **⚡ Fast & Modern**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **🎨 151 Gen 1 Pokémon**: Complete coverage of all original Pokémon with unique descriptions
- **📊 Smart Progress Tracking**: Dynamic progress indication based on your unique quiz path

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

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