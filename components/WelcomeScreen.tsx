'use client';

import React from 'react';

interface WelcomeScreenProps {
  username?: string;
  onStartQuiz: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ username, onStartQuiz }) => {
  return (
    <div className="gameboy-screen min-h-screen flex flex-col items-center justify-center p-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="nintendo-text retro-text text-2xl md:text-4xl mb-4 animate-pixel-pulse">
          POKÉVIBE CHECK
        </h1>
        <div className="pixel-border bg-gameboy-dark p-2 mb-6">
          <div className="bg-gameboy-lightest p-4">
            <p className="nintendo-text text-xs md:text-sm text-gameboy-dark">
              NINTENDO STYLE QUIZ
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="retro-card mb-8 max-w-md text-center">
        <h2 className="nintendo-text text-lg mb-4 text-gameboy-dark">
          {username ? `Welcome, ${username}!` : 'Welcome, Trainer!'}
        </h2>
        <p className="font-pixel text-sm text-gameboy-dark leading-relaxed">
          Discover your inner Pokémon! Answer one simple question to find out which 
          Pokémon matches your vibe. Are you ready for this retro adventure?
        </p>
      </div>

      {/* Pokéball Animation */}
      <div className="mb-8">
        <div className="w-16 h-16 bg-nintendo-red rounded-full border-4 border-gameboy-dark relative animate-retro-bounce">
          <div className="w-full h-2 bg-gameboy-dark absolute top-1/2 transform -translate-y-1/2"></div>
          <div className="w-6 h-6 bg-gameboy-lightest rounded-full border-2 border-gameboy-dark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={onStartQuiz}
        className="retro-button text-lg px-8 py-4 mb-4"
      >
        START QUIZ
      </button>

      {/* Instructions */}
      <div className="pixel-border bg-gameboy-medium p-4 max-w-sm">
        <p className="font-pixel text-xs text-gameboy-lightest text-center">
          Press START to begin your Pokémon vibe journey!
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;