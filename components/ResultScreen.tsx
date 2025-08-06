'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PokemonData } from '../data/pokemon-data';
import { shareVibeResult } from '../farcaster-sdk-config';
import BuyCoffeeButton from './BuyCoffeeButton';

interface ResultScreenProps {
  pokemon: PokemonData;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ pokemon, onRestart }) => {
  const [isSharing, setIsSharing] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      const result = await shareVibeResult(pokemon.name, pokemon.description);
      if (result.success) {
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Share failed:', error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="gameboy-screen min-h-screen flex flex-col items-center justify-center p-6">
      {/* Result Header */}
      <div className="text-center mb-8">
        <div className="pixel-border bg-gameboy-dark p-2 mb-4">
          <div className="bg-gameboy-lightest p-3">
            <p className="nintendo-text text-xs text-gameboy-dark">
              QUIZ COMPLETE!
            </p>
          </div>
        </div>
        <h1 className="nintendo-text retro-text text-xl md:text-2xl mb-4 text-gameboy-lightest animate-pixel-pulse">
          YOUR VIBE IS...
        </h1>
      </div>

      {/* Pokemon Result Card */}
      <div className="retro-card mb-8 max-w-md text-center">
        {/* Pokemon Sprite */}
        <div className="mb-6 flex justify-center">
          <div className="pixel-border bg-gameboy-lightest p-4 inline-block">
            {!imageError ? (
              <Image
                src={pokemon.spriteUrl}
                alt={pokemon.name}
                width={96}
                height={96}
                className="pixel-art image-pixelated"
                style={{
                  imageRendering: 'pixelated'
                }}
                onError={() => setImageError(true)}
                unoptimized={true}
              />
            ) : (
              <div className="w-24 h-24 bg-gameboy-medium border-2 border-gameboy-dark flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🎮</div>
                  <div className="font-pixel text-xs text-gameboy-dark">
                    {pokemon.name.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pokemon Name */}
        <h2 className="nintendo-text retro-text text-2xl mb-2 text-gameboy-dark">
          {pokemon.name.toUpperCase()}
        </h2>

        {/* Vibe Type */}
        <div className="pixel-border bg-nintendo-purple p-2 mb-4 inline-block">
          <span className="font-pixel text-xs text-white">
            {pokemon.vibeType}
          </span>
        </div>

        {/* Description */}
        <p className="font-pixel text-xs text-gameboy-dark leading-relaxed mb-6">
          {pokemon.description}
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleShare}
            disabled={isSharing}
            className={`retro-button w-full ${
              isSharing ? 'opacity-50 cursor-not-allowed' : ''
            } ${shareSuccess ? 'bg-green-600' : ''}`}
          >
            {isSharing ? 'SHARING...' : shareSuccess ? 'SHARED!' : 'CAST YOUR VIBE!'}
          </button>

          {/* Buy Coffee Button */}
          <BuyCoffeeButton />

          <button
            onClick={onRestart}
            className="quiz-option w-full text-center"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>

      {/* Share Success Message */}
      {shareSuccess && (
        <div className="pixel-border bg-green-500 p-4 mb-4">
          <p className="font-pixel text-xs text-white text-center">
            Successfully shared to Farcaster! 🎉
          </p>
        </div>
      )}

      {/* Decorative Pokemon Elements */}
      <div className="flex space-x-6 mt-6">
        <div className="w-8 h-8 bg-nintendo-red rounded-full border-2 border-gameboy-dark animate-retro-bounce"></div>
        <div className="w-6 h-6 bg-nintendo-blue border-2 border-gameboy-dark animate-pixel-pulse"></div>
        <div className="w-8 h-8 bg-nintendo-yellow rounded-full border-2 border-gameboy-dark animate-retro-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Footer */}
      <div className="mt-8 pixel-border bg-gameboy-medium p-3 max-w-sm">
        <p className="font-pixel text-xs text-gameboy-lightest text-center">
          Share your result and challenge your friends!
        </p>
      </div>
    </div>
  );
};

export default ResultScreen;