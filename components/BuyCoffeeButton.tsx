'use client';

import React from 'react';
import { useAccount, useConnect, useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';

interface BuyCoffeeButtonProps {
  pokemonName: string;
}

const BuyCoffeeButton: React.FC<BuyCoffeeButtonProps> = ({ pokemonName }) => {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { sendTransaction, error: sendError, isPending: isSendPending } = useSendTransaction();

  const handleBuyCoffee = async () => {
    if (!isConnected || !address) {
      // If not connected, connect first then send transaction
      if (connectors[0]) {
        connect({ connector: connectors[0] });
      }
      return;
    }

    try {
      await sendTransaction({
        to: '0x869a1E10cA4d1e1223676C0a4214C6cC10023244' as `0x${string}`,
        value: parseEther('0.001'),
      });
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div className="mt-6 space-y-4">
      {/* Single Buy Me Coffee Button */}
      <div className="flex justify-center">
        {isConnected ? (
          <div className="text-center space-y-4">
            <div className="retro-card bg-green-100 border-2 border-green-400 p-3">
              <p className="nintendo-text text-green-700 text-sm">
                ✓ WALLET CONNECTED
              </p>
              <p className="nintendo-text text-green-600 text-xs">
                Address: {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
            </div>
            <button
              onClick={handleBuyCoffee}
              disabled={isSendPending}
              className="retro-button bg-nintendo-yellow hover:bg-yellow-300 text-gameboy-dark font-bold py-3 px-6 text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed pixel-border"
            >
              <span className="nintendo-text flex items-center gap-2">
                ☕ 
                {isSendPending ? 'PROCESSING...' : `BUY ME COFFEE! (${pokemonName})`}
              </span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => connect({ connector: connectors[0] })}
            className="retro-button bg-nintendo-blue hover:bg-blue-600 text-white font-bold py-3 px-6 text-lg transition-all duration-200 pixel-border"
          >
            <span className="nintendo-text flex items-center gap-2">
              ☕ BUY ME COFFEE!
            </span>
          </button>
        )}
      </div>
      
      {/* Status Messages */}
      {sendError && (
        <div className="retro-card bg-red-100 border-2 border-red-400 p-3 text-center">
          <p className="nintendo-text text-red-700 text-sm">
            TRANSACTION FAILED: {sendError.message}
          </p>
        </div>
      )}
      
      {!isConnected && (
        <div className="retro-card bg-blue-100 border-2 border-blue-400 p-3 text-center">
          <p className="nintendo-text text-blue-700 text-sm">
            CLICK TO CONNECT WALLET & SUPPORT PROJECT
          </p>
        </div>
      )}
    </div>
  );
};

export default BuyCoffeeButton