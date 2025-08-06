'use client';

import React from 'react';
import { QuizQuestion, QuizAnswer } from '../data/pokemon-data';

interface QuizScreenProps {
  question: QuizQuestion;
  questionHistory: number[];
  onAnswerSelected: (nextQuestionId?: number, pokemonId?: number) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, questionHistory, onAnswerSelected }) => {
  const handleAnswerClick = (answer: QuizAnswer) => {
    onAnswerSelected(answer.nextQuestionId, answer.pokemonId);
  };

  // Calculate progress based on actual question history
  const getProgressText = () => {
    const currentStep = questionHistory.length;
    const isFinalQuestion = question.answers.some(a => a.pokemonId);
    
    if (isFinalQuestion) {
      return "FINAL QUESTION";
    }
    
    // Dynamic progress based on actual steps taken
    const estimatedTotal = currentStep < 3 ? 5 : 6;
    return `QUESTION ${currentStep} OF ${estimatedTotal}`;
  };

  return (
    <div className="gameboy-screen min-h-screen flex flex-col items-center justify-center p-6">
      {/* Quiz Header */}
      <div className="text-center mb-8">
        <div className="pixel-border bg-gameboy-dark p-2 mb-4">
          <div className="bg-gameboy-lightest p-3">
            <p className="nintendo-text text-xs text-gameboy-dark">
              {getProgressText()}
            </p>
          </div>
        </div>
        <h1 className="nintendo-text retro-text text-xl md:text-2xl mb-4 text-gameboy-lightest">
          VIBE CHECK
        </h1>
      </div>

      {/* Question Card */}
      <div className="retro-card mb-8 max-w-2xl">
        <h2 className="nintendo-text text-sm md:text-base mb-6 text-gameboy-dark text-center leading-relaxed">
          {question.question}
        </h2>
        
        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className="quiz-option text-left p-4 min-h-[80px] flex items-center"
            >
              <div className="flex items-center">
                <span className="nintendo-text text-lg mr-3 text-nintendo-dark">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="font-pixel text-xs leading-relaxed">
                  {answer.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="pixel-border bg-gameboy-medium p-4 max-w-md">
        <p className="font-pixel text-xs text-gameboy-lightest text-center">
          {question.answers.some(a => a.pokemonId) 
            ? "Choose your answer to discover your Pokémon vibe!" 
            : "Choose your answer to continue the quiz!"
          }
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="mt-8 flex space-x-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-nintendo-yellow border-2 border-gameboy-dark animate-pixel-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;