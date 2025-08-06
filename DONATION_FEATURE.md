# 💰 Buy Me a Coffee - Donation Feature

## Overview

The PokeVibe Check app now includes a "Buy me a coffee" donation feature that allows users to support the developer by sending a small amount of ETH on the Base network.

## How It Works

### Technical Implementation

1. **Wagmi Integration**: Uses Wagmi for Web3 wallet interactions
2. **Base Network**: Transactions are sent on the Base chain (most popular in Farcaster ecosystem)
3. **Farcaster Connector**: Seamlessly integrates with Farcaster's wallet connection
4. **Small Donations**: Default amount is 0.001 ETH (~$3-4 USD)

### User Experience

1. **Wallet Connection**: If user isn't connected, button shows "Connect & Buy Coffee ☕"
2. **Transaction Flow**: Once connected, clicking sends 0.001 ETH to the developer wallet
3. **Visual Feedback**: Button shows loading state, success message, and error handling
4. **Tooltip**: Hover shows helpful information about the donation

### Files Added/Modified

#### New Files:
- `lib/wagmi-config.ts` - Wagmi configuration with Base chain and Farcaster connector
- `components/BuyCoffeeButton.tsx` - The donation button component

#### Modified Files:
- `app/page.tsx` - Added Wagmi and QueryClient providers
- `components/ResultScreen.tsx` - Integrated the donation button
- `package.json` - Added new dependencies

## Customization Required

### 🔧 **IMPORTANT: Update Wallet Address**

In `components/BuyCoffeeButton.tsx`, replace the placeholder wallet address:

```typescript
// Replace this with your actual wallet address
const DONATION_WALLET_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6' // Placeholder address
```

**Change this to your actual wallet address that can receive ETH on Base network.**

### 💰 **Optional: Adjust Donation Amount**

To change the donation amount, modify this line in `BuyCoffeeButton.tsx`:

```typescript
value: parseEther('0.001'), // 0.001 ETH donation
```

Popular amounts:
- `0.001` ETH (~$3-4 USD) - Current default
- `0.005` ETH (~$15-20 USD) - Higher amount
- `0.0005` ETH (~$1-2 USD) - Lower amount

## Dependencies Added

```json
{
  "wagmi": "^2.x.x",
  "viem": "^2.x.x", 
  "@tanstack/react-query": "^5.x.x",
  "@farcaster/miniapp-wagmi-connector": "^1.x.x"
}
```

## Features

### ✅ **Implemented Features**
- Wallet connection via Farcaster
- ETH transactions on Base network
- Loading states and error handling
- Success feedback
- Retro-styled UI matching app theme
- Helpful tooltips and user guidance

### 🎨 **Styling**
- Matches the retro Nintendo Game Boy aesthetic
- Yellow coffee-themed button color
- Hover effects and animations
- Responsive design
- Error and success state styling

### 🔒 **Security**
- Uses established Wagmi library for Web3 interactions
- Proper error handling for failed transactions
- No private key storage or handling
- Relies on user's connected wallet for security

## Usage Instructions

1. **For Users**: 
   - Complete the quiz to reach the result screen
   - Click "Buy me a coffee! ☕" button
   - Connect wallet if prompted
   - Confirm transaction in wallet
   - Receive success confirmation

2. **For Developers**:
   - Update the wallet address in `BuyCoffeeButton.tsx`
   - Optionally adjust donation amount
   - Test with a testnet first
   - Deploy and monitor donations

## Testing

- Test wallet connection flow
- Test transaction on Base testnet first
- Verify error handling with insufficient funds
- Check responsive design on mobile
- Test tooltip and hover states

## Support

The donation feature is optional and doesn't affect the core quiz functionality. Users can still enjoy the full app experience without connecting a wallet or making donations.