import { sdk } from '@farcaster/miniapp-sdk';

// Configuration for the mini app
export const miniAppConfig = {
  name: 'PokeVibe Check',
  description: 'Discover your Pokémon vibe with this retro Nintendo-style quiz!',
  version: '1.0.0',
};

// Initialize SDK and handle authentication
export const initializeFarcasterSDK = async () => {
  try {
    // Call ready to signal the app is loaded
    await sdk.actions.ready();
    
    // Get user context for personalization
    const context = await sdk.context;
    
    return {
      isAuthenticated: true,
      user: context?.user || null,
      context,
    };
  } catch (error) {
    console.error('Failed to initialize Farcaster SDK:', error);
    return {
      isAuthenticated: false,
      user: null,
      context: null,
    };
  }
};

// Compose a cast with the quiz result
export const shareVibeResult = async (pokemonName: string, description: string) => {
  try {
    const castText = `🎮 My Pokémon vibe is ${pokemonName}! ${description} 

Find out your Pokémon vibe with this retro mini app! 🔥

#Pokemon #VibeCheck #Farcaster`;

    await sdk.actions.composeCast({
      text: castText,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Failed to compose cast:', error);
    return { success: false, error };
  }
};