'use client';

import React, { useState, useEffect } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import WelcomeScreen from '../components/WelcomeScreen';
import QuizScreen from '../components/QuizScreen';
import ResultScreen from '../components/ResultScreen';
import { getPokemonById, PokemonData, getQuestionById } from '../data/pokemon-data';
import { initializeFarcasterSDK } from '../farcaster-sdk-config';
import { config, baseChain } from '../lib/wagmi-config';

// Create a client for React Query
const queryClient = new QueryClient();

// App states
type AppState = 'welcome' | 'quiz' | 'result';

interface FarcasterContext {
  isAuthenticated: boolean;
  user: any;
  context: any;
}

// Main app content component
function AppContent() {
  // State management
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [questionHistory, setQuestionHistory] = useState<number[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(null);
  const [farcasterContext, setFarcasterContext] = useState<FarcasterContext>({
    isAuthenticated: false,
    user: null,
    context: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Farcaster SDK on component mount
  useEffect(() => {
    const initSDK = async () => {
      try {
        const context = await initializeFarcasterSDK();
        setFarcasterContext(context);
      } catch (error) {
        console.error('Failed to initialize Farcaster SDK:', error);
        // Continue without authentication for development/testing
        setFarcasterContext({
          isAuthenticated: false,
          user: null,
          context: null,
        });
      } finally {
        setIsLoading(false);
      }
    };

    initSDK();
  }, []);

  // Handle quiz start
  const handleStartQuiz = () => {
    setCurrentQuestionId(1); // Start with the first question
    setQuestionHistory([1]); // Initialize history
    setAppState('quiz');
  };

  // Handle answer selection
  const handleAnswerSelected = (nextQuestionId?: number, pokemonId?: number) => {
    if (pokemonId) {
      // Final answer - set result
      const pokemon = getPokemonById(pokemonId);
      if (pokemon) {
        setSelectedPokemon(pokemon);
        setAppState('result');
      }
    } else if (nextQuestionId) {
      // Continue to next question
      setQuestionHistory(prev => [...prev, nextQuestionId]);
      setCurrentQuestionId(nextQuestionId);
    }
  };

  // Handle restart
  const handleRestart = () => {
    setSelectedPokemon(null);
    setCurrentQuestionId(1);
    setQuestionHistory([]);
    setAppState('welcome');
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="gameboy-screen min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="nintendo-text text-xl mb-4 animate-pixel-pulse">
            LOADING...
          </div>
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-nintendo-yellow border-2 border-gameboy-dark animate-pixel-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Get username from Farcaster context
  const username = farcasterContext.user?.displayName || 
                   farcasterContext.user?.username || 
                   farcasterContext.user?.fid ? `User ${farcasterContext.user.fid}` : undefined;

  const currentQuestion = getQuestionById(currentQuestionId);

  // Render appropriate screen based on app state
  switch (appState) {
    case 'welcome':
      return (
        <WelcomeScreen
          username={username}
          onStartQuiz={handleStartQuiz}
        />
      );

    case 'quiz':
      return currentQuestion ? (
        <QuizScreen
          question={currentQuestion}
          questionHistory={questionHistory}
          onAnswerSelected={handleAnswerSelected}
        />
      ) : (
        // Fallback if no question found
        <div className="gameboy-screen min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="nintendo-text text-lg mb-4">ERROR!</p>
            <button onClick={handleRestart} className="retro-button">
              RESTART
            </button>
          </div>
        </div>
      );

    case 'result':
      return selectedPokemon ? (
        <ResultScreen
          pokemon={selectedPokemon}
          onRestart={handleRestart}
        />
      ) : (
        // Fallback if no pokemon selected
        <div className="gameboy-screen min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="nintendo-text text-lg mb-4">ERROR!</p>
            <button onClick={handleRestart} className="retro-button">
              RESTART
            </button>
          </div>
        </div>
      );

    default:
      return (
        <div className="gameboy-screen min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="nintendo-text text-lg mb-4">SYSTEM ERROR</p>
            <button onClick={handleRestart} className="retro-button">
              RESTART
            </button>
          </div>
        </div>
      );
  }
}

// Main component with providers
export default function Home() {
  return (
    <MiniKitProvider chain={baseChain}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <AppContent />
        </QueryClientProvider>
      </WagmiProvider>
    </MiniKitProvider>
  );
}