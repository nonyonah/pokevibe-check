'use client'

import { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'

const DONATION_ADDRESS_ETH = '0xb188Fed9cD770637A151a0FA1E8d990d90149Bd5'
const DONATION_AMOUNT_ETH = '0.001' // 0.001 ETH

const BuyCoffeeButton: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  // Ethereum hooks
  const { address: ethAddress, isConnected: isEthConnected } = useAccount()
  const { writeContract, data: hash, error: writeError, isPending: isWritePending } = useWriteContract()
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const handleDonate = async () => {
    try {
      setIsProcessing(true)
      setTransactionStatus('pending')
      setErrorMessage('')
      setSuccessMessage('')

      writeContract({
        to: DONATION_ADDRESS_ETH as `0x${string}`,
        value: parseEther(DONATION_AMOUNT_ETH),
        data: '0x',
      })

    } catch (error) {
      console.error('Donation failed:', error)
      setErrorMessage('Failed to send donation. Please try again.')
      setTransactionStatus('error')
      setIsProcessing(false)
    }
  }

  // Handle transaction confirmation
  if (isConfirmed && transactionStatus === 'pending') {
    setSuccessMessage(`Successfully sent ${DONATION_AMOUNT_ETH} ETH on Base!`)
    setTransactionStatus('success')
    setIsProcessing(false)
  }

  // Handle transaction error
  if (writeError && transactionStatus === 'pending') {
    setErrorMessage('Failed to send donation. Please try again.')
    setTransactionStatus('error')
    setIsProcessing(false)
  }

  const getButtonText = () => {
    if (!isEthConnected) return 'Connect Wallet'
    if (isProcessing || isWritePending || isConfirming) return 'Processing...'
    return `Buy Coffee ☕ (${DONATION_AMOUNT_ETH} ETH)`
  }

  const getButtonStyle = () => {
    const baseStyle = "w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
    
    if (isProcessing || isWritePending || isConfirming) {
      return `${baseStyle} bg-gray-400 cursor-not-allowed`
    }
    
    return `${baseStyle} bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700`
  }

  const isDisabled = isWritePending || isProcessing || isConfirmed || (transactionStatus === 'success')

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      {/* Donation Button */}
      <button
        onClick={handleDonate}
        disabled={isProcessing || isWritePending || isConfirming}
        className={getButtonStyle()}
      >
        {getButtonText()}
      </button>

      {/* Status Messages */}
      {transactionStatus === 'success' && successMessage && (
        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      {transactionStatus === 'error' && errorMessage && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* Tooltip */}
      <div className="text-sm text-gray-600 text-center">
        Support the project with {DONATION_AMOUNT_ETH} ETH on Base network
      </div>
    </div>
  )
}

export default BuyCoffeeButton