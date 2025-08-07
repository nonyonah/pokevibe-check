// TypeScript interfaces for the multi-step quiz system
export interface QuizQuestion {
  id: number;
  question: string;
  answers: QuizAnswer[];
}

export interface QuizAnswer {
  text: string;
  nextQuestionId?: number;
  pokemonId?: number;
}

export interface PokemonResult {
  name: string;
  description: string;
  spriteUrl: string;
}

// Legacy interface for compatibility
export interface PokemonData {
  name: string;
  description: string;
  spriteUrl: string;
  vibeType?: string;
}

// Multi-step branching quiz data
export const quizData = {
  questions: [
    {
      id: 1,
      question: "What's your ideal way to spend a weekend?",
      answers: [
        { text: "Exploring the great outdoors", nextQuestionId: 2 },
        { text: "Reading a good book at home", nextQuestionId: 3 },
        { text: "Hanging out with friends", nextQuestionId: 4 },
        { text: "Working on a creative project", nextQuestionId: 5 }
      ]
    },
    {
      id: 2,
      question: "You're on an adventure. What environment calls to you?",
      answers: [
        { text: "Dense, mysterious forests", nextQuestionId: 6 },
        { text: "Vast oceans and beaches", nextQuestionId: 7 },
        { text: "Rocky mountains and caves", nextQuestionId: 8 },
        { text: "Open grasslands and meadows", nextQuestionId: 9 }
      ]
    },
    {
      id: 3,
      question: "When solving problems, you prefer to:",
      answers: [
        { text: "Think deeply and analyze every angle", nextQuestionId: 10 },
        { text: "Use intuition and go with your gut", nextQuestionId: 11 },
        { text: "Research and gather all the facts", nextQuestionId: 12 },
        { text: "Ask others for their perspectives", nextQuestionId: 13 }
      ]
    },
    {
      id: 4,
      question: "In your friend group, you're usually the one who:",
      answers: [
        { text: "Keeps everyone's spirits up", nextQuestionId: 14 },
        { text: "Plans all the activities", nextQuestionId: 15 },
        { text: "Mediates when there's conflict", nextQuestionId: 16 },
        { text: "Brings the group together", nextQuestionId: 17 }
      ]
    },
    {
      id: 5,
      question: "Your creative energy is best expressed through:",
      answers: [
        { text: "Bold, dramatic expressions", nextQuestionId: 18 },
        { text: "Delicate, precise craftsmanship", nextQuestionId: 19 },
        { text: "Innovative, experimental ideas", nextQuestionId: 20 },
        { text: "Harmonious, balanced compositions", nextQuestionId: 21 }
      ]
    },
    {
      id: 6,
      question: "In the forest, what draws your attention?",
      answers: [
        { text: "The ancient, towering trees", pokemonId: 3 }, // Venusaur
        { text: "Small creatures scurrying about", pokemonId: 25 }, // Pikachu
        { text: "Mysterious shadows and sounds", pokemonId: 94 }, // Gengar
        { text: "Beautiful flowers and plants", pokemonId: 45 } // Vileplume
      ]
    },
    {
      id: 7,
      question: "By the ocean, you're most likely to:",
      answers: [
        { text: "Dive deep to explore the depths", pokemonId: 9 }, // Blastoise
        { text: "Surf the biggest waves", pokemonId: 130 }, // Gyarados
        { text: "Collect beautiful shells on the shore", pokemonId: 91 }, // Cloyster
        { text: "Watch the sunset from the beach", pokemonId: 121 } // Starmie
      ]
    },
    {
      id: 8,
      question: "In rocky terrain, you feel most at home:",
      answers: [
        { text: "Climbing the highest peaks", pokemonId: 142 }, // Aerodactyl
        { text: "Exploring deep cave systems", pokemonId: 76 }, // Golem
        { text: "Finding rare minerals and gems", pokemonId: 112 }, // Rhydon
        { text: "Meditating in quiet stone gardens", pokemonId: 68 } // Machamp
      ]
    },
    {
      id: 9,
      question: "In open grasslands, you're drawn to:",
      answers: [
        { text: "Running free across the plains", pokemonId: 78 }, // Rapidash
        { text: "Watching clouds drift by", pokemonId: 144 }, // Articuno
        { text: "Discovering hidden groves", pokemonId: 103 }, // Exeggutor
        { text: "Feeling the wind in your hair", pokemonId: 18 } // Pidgeot
      ]
    },
    {
      id: 10,
      question: "Your analytical mind is most fascinated by:",
      answers: [
        { text: "Complex mathematical patterns", pokemonId: 65 }, // Alakazam
        { text: "Psychological behavior studies", pokemonId: 150 }, // Mewtwo
        { text: "Scientific experiments", pokemonId: 137 }, // Porygon
        { text: "Strategic game theory", pokemonId: 59 } // Arcanine
      ]
    },
    {
      id: 11,
      question: "When following your intuition, you often:",
      answers: [
        { text: "Sense things others can't", pokemonId: 97 }, // Hypno
        { text: "Feel deeply connected to nature", pokemonId: 38 }, // Ninetales
        { text: "Experience vivid dreams", pokemonId: 96 }, // Drowzee
        { text: "Have strong gut reactions", pokemonId: 57 } // Primeape
      ]
    },
    {
      id: 12,
      question: "Your research style focuses on:",
      answers: [
        { text: "Historical archives and ancient texts", pokemonId: 144 }, // Articuno
        { text: "Cutting-edge technology", pokemonId: 82 }, // Magneton
        { text: "Natural phenomena", pokemonId: 145 }, // Zapdos
        { text: "Cultural anthropology", pokemonId: 122 } // Mr. Mime
      ]
    },
    {
      id: 13,
      question: "When seeking advice, you turn to:",
      answers: [
        { text: "Wise elders with life experience", pokemonId: 143 }, // Snorlax
        { text: "Innovative thinkers", pokemonId: 101 }, // Electrode
        { text: "Empathetic listeners", pokemonId: 113 }, // Chansey
        { text: "Practical problem-solvers", pokemonId: 31 } // Nidoqueen
      ]
    },
    {
      id: 14,
      question: "You keep spirits up by:",
      answers: [
        { text: "Telling jokes and being playful", pokemonId: 35 }, // Clefairy
        { text: "Organizing fun activities", pokemonId: 39 }, // Jigglypuff
        { text: "Being optimistic about everything", pokemonId: 25 }, // Pikachu
        { text: "Celebrating small victories", pokemonId: 52 } // Meowth
      ]
    },
    {
      id: 15,
      question: "Your planning style is:",
      answers: [
        { text: "Detailed and methodical", pokemonId: 89 }, // Muk
        { text: "Flexible with backup options", pokemonId: 83 }, // Farfetch'd
        { text: "Bold and ambitious", pokemonId: 6 }, // Charizard
        { text: "Collaborative and inclusive", pokemonId: 40 } // Wigglytuff
      ]
    },
    {
      id: 16,
      question: "When mediating conflict, you:",
      answers: [
        { text: "Listen to all sides patiently", pokemonId: 113 }, // Chansey
        { text: "Find creative compromises", pokemonId: 122 }, // Mr. Mime
        { text: "Use humor to defuse tension", pokemonId: 107 }, // Hitmonchan
        { text: "Appeal to everyone's better nature", pokemonId: 36 } // Clefable
      ]
    },
    {
      id: 17,
      question: "You bring people together through:",
      answers: [
        { text: "Shared adventures and experiences", pokemonId: 149 }, // Dragonite
        { text: "Creating welcoming spaces", pokemonId: 143 }, // Snorlax
        { text: "Organizing community events", pokemonId: 26 }, // Raichu
        { text: "Being a reliable constant", pokemonId: 131 } // Lapras
      ]
    },
    {
      id: 18,
      question: "Your bold expressions often involve:",
      answers: [
        { text: "Fiery passion and intensity", pokemonId: 6 }, // Charizard
        { text: "Electric energy and excitement", pokemonId: 145 }, // Zapdos
        { text: "Dramatic flair and showmanship", pokemonId: 146 }, // Moltres
        { text: "Powerful, commanding presence", pokemonId: 34 } // Nidoking
      ]
    },
    {
      id: 19,
      question: "Your precise craftsmanship shines in:",
      answers: [
        { text: "Intricate, delicate details", pokemonId: 12 }, // Butterfree
        { text: "Perfect symmetry and balance", pokemonId: 121 }, // Starmie
        { text: "Refined, elegant simplicity", pokemonId: 38 }, // Ninetales
        { text: "Meticulous, careful construction", pokemonId: 15 } // Beedrill
      ]
    },
    {
      id: 20,
      question: "Your experimental ideas often explore:",
      answers: [
        { text: "Pushing technological boundaries", pokemonId: 137 }, // Porygon
        { text: "Blending different elements", pokemonId: 110 }, // Weezing
        { text: "Creating something entirely new", pokemonId: 132 }, // Ditto
        { text: "Challenging conventional wisdom", pokemonId: 150 } // Mewtwo
      ]
    },
    {
      id: 21,
      question: "Your harmonious compositions feature:",
      answers: [
        { text: "Natural, flowing rhythms", pokemonId: 3 }, // Venusaur
        { text: "Peaceful, calming melodies", pokemonId: 131 }, // Lapras
        { text: "Balanced, complementary elements", pokemonId: 144 }, // Articuno
        { text: "Gentle, nurturing themes", pokemonId: 113 } // Chansey
      ]
    }
  ],
  
  results: {
    1: { name: "Bulbasaur", description: "You're a natural starter! Reliable, grounded, and always ready to grow. You bring life and energy wherever you go.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/bulbasaur.png" },
    2: { name: "Ivysaur", description: "You're in your growth phase! Balanced and evolving, you're developing your unique strengths while staying true to your roots.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/ivysaur.png" },
    3: { name: "Venusaur", description: "You're a natural leader with deep roots! Wise, nurturing, and powerful, you help others flourish while standing strong.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/venusaur.png" },
    4: { name: "Charmander", description: "You're full of potential and burning passion! Small but mighty, your enthusiasm lights up any room.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/charmander.png" },
    5: { name: "Charmeleon", description: "You're in your rebellious phase! Fiery and independent, you're finding your own path with determination.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/charmeleon.png" },
    6: { name: "Charizard", description: "You're a natural leader with a fiery spirit! Bold, confident, and soaring high, you inspire others to reach new heights.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/charizard.png" },
    7: { name: "Squirtle", description: "You're cool under pressure! Adaptable and friendly, you go with the flow while staying true to yourself.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/squirtle.png" },
    8: { name: "Wartortle", description: "You're gaining wisdom and strength! Balanced between playful and serious, you're learning to navigate life's currents.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/wartortle.png" },
    9: { name: "Blastoise", description: "You're a powerhouse with a calm exterior! Strong, reliable, and protective, you're the anchor others depend on.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/blastoise.png" },
    10: { name: "Caterpie", description: "You're just getting started! Full of potential and dreams, you're preparing for an amazing transformation.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/caterpie.png" },
    11: { name: "Metapod", description: "You're in a period of growth and change! Patient and determined, you're building strength for your next phase.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/metapod.png" },
    12: { name: "Butterfree", description: "You're free-spirited and graceful! After your transformation, you bring beauty and joy wherever you flutter.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/butterfree.png" },
    13: { name: "Weedle", description: "You're small but determined! With a sharp focus and clear goals, you're ready to work hard for your dreams.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/weedle.png" },
    14: { name: "Kakuna", description: "You're building your strength quietly! Patient and focused, you're preparing for your moment to shine.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/kakuna.gif" },
    15: { name: "Beedrill", description: "You're precise and focused! Quick to act and fiercely protective, you get things done with efficiency and skill.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/beedrill.png" },
    16: { name: "Pidgey", description: "You're humble but ambitious! Starting small, you have big dreams and the determination to soar high.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/pidgey.png" },
    17: { name: "Pidgeotto", description: "You're spreading your wings! Confident and capable, you're finding your place in the world.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/pidgeotto.png" },
    18: { name: "Pidgeot", description: "You're soaring at great heights! Majestic and free, you see the big picture and inspire others to rise above.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/pidgeot.png" },
    19: { name: "Rattata", description: "You're quick and adaptable! Resourceful and energetic, you make the most of every opportunity.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/rattata.png" },
    20: { name: "Raticate", description: "You're street-smart and tough! Experienced and resilient, you know how to survive and thrive.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/raticate.png" },
    21: { name: "Spearow", description: "You're fierce and fearless! Small but mighty, you're not afraid to take on bigger challenges.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/spearow.png" },
    22: { name: "Fearow", description: "You're bold and commanding! With sharp instincts and unwavering focus, you're a natural leader.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/fearow.png" },
    23: { name: "Ekans", description: "You're mysterious and strategic! Quiet but observant, you strike when the moment is right.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/ekans.png" },
    24: { name: "Arbok", description: "You're intimidating but protective! Strong and loyal, you defend what matters most with fierce determination.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/arbok.png" },
    25: { name: "Pikachu", description: "You're energetic and loyal! Full of spark and enthusiasm, your positive energy lights up any room.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/pikachu.png" },
    26: { name: "Raichu", description: "You're powerful and confident! Having grown into your strength, you're ready to take on any challenge.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/raichu.png" },
    27: { name: "Sandshrew", description: "You're practical and hardworking! Down-to-earth and reliable, you build solid foundations for success.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/sandshrew.png" },
    28: { name: "Sandslash", description: "You're tough and independent! Self-reliant and strong, you've learned to protect yourself and others.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/sandslash.png" },
    29: { name: "Nidoran♀", description: "You're gentle but strong! Caring and protective, you have a fierce side when defending loved ones.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/nidoran-f.png" },
    30: { name: "Nidorina", description: "You're nurturing and brave! Growing in confidence, you balance compassion with courage.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/nidorina.png" },
    31: { name: "Nidoqueen", description: "You're a protective powerhouse! Strong and caring, you're the ultimate guardian for those you love.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/nidoqueen.png" },
    32: { name: "Nidoran♂", description: "You're spirited and determined! Small but brave, you're ready to prove yourself to the world.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/nidoran-m.png" },
    33: { name: "Nidorino", description: "You're aggressive and ambitious! Driven to succeed, you're not afraid to fight for what you want.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/nidorino.png" },
    34: { name: "Nidoking", description: "You're a commanding presence! Powerful and respected, you lead with strength and authority.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/nidoking.png" },
    35: { name: "Clefairy", description: "You're magical and playful! Bringing joy and wonder wherever you go, you make life more enchanting.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/clefairy.png" },
    36: { name: "Clefable", description: "You're graceful and mysterious! With an otherworldly charm, you inspire others to believe in magic.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/clefable.png" },
    37: { name: "Vulpix", description: "You're clever and charming! Beautiful and intelligent, you have a mischievous streak that keeps life interesting.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/vulpix.png" },
    38: { name: "Ninetales", description: "You're wise and elegant! With mystical knowledge and timeless beauty, you're both respected and admired.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/ninetales.png" },
    39: { name: "Jigglypuff", description: "You're sweet and entertaining! With a talent for bringing people together, you create harmony wherever you go.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/jigglypuff.png" },
    40: { name: "Wigglytuff", description: "You're soft-hearted and strong! Combining gentleness with surprising power, you're a comforting presence.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/wigglytuff.png" },
    41: { name: "Zubat", description: "You're persistent and adaptable! Thriving in challenging environments, you find your way even in darkness.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/zubat.png" },
    42: { name: "Golbat", description: "You're fast and determined! Having grown stronger through experience, you're ready for bigger adventures.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/golbat.png" },
    43: { name: "Oddish", description: "You're quiet and mysterious! Preferring the shadows, you have hidden depths waiting to be discovered.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/oddish.png" },
    44: { name: "Gloom", description: "You're complex and misunderstood! Beneath a tough exterior lies a heart ready to bloom.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/gloom.png" },
    45: { name: "Vileplume", description: "You're beautiful but dangerous! Striking and confident, you command attention and respect.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/vileplume.png" },
    46: { name: "Paras", description: "You're symbiotic and cooperative! Understanding the power of partnership, you thrive through collaboration.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/paras.png" },
    47: { name: "Parasect", description: "You're transformed and powerful! Having found your true calling, you're a force to be reckoned with.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/parasect.png" },
    48: { name: "Venonat", description: "You're curious and observant! With keen senses and a love of discovery, you see what others miss.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/venonat.png" },
    49: { name: "Venomoth", description: "You're nocturnal and mysterious! Drawn to the unknown, you find beauty in the darkness.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/venomoth.png" },
    50: { name: "Diglett", description: "You're hardworking and humble! Preferring to work behind the scenes, you make important contributions.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/diglett.png" },
    51: { name: "Dugtrio", description: "You're collaborative and efficient! Working as a team, you accomplish amazing things together.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/dugtrio.png" },
    52: { name: "Meowth", description: "You're clever and ambitious! With a mischievous charm, you always find creative ways to get what you want.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/meowth.png" },
    53: { name: "Persian", description: "You're elegant and proud! Sophisticated and confident, you carry yourself with natural grace.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/persian.png" },
    54: { name: "Psyduck", description: "You're confused but powerful! Often overwhelmed, you have hidden abilities waiting to emerge.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/psyduck.png" },
    55: { name: "Golduck", description: "You're psychic and serene! Having found your inner peace, you possess incredible mental powers.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/golduck.png" },
    56: { name: "Mankey", description: "You're energetic and passionate! Quick to anger but quick to forgive, you live life with intensity.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/mankey.png" },
    57: { name: "Primeape", description: "You're fierce and unstoppable! When motivated, your determination knows no bounds.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/primeape.png" },
    58: { name: "Growlithe", description: "You're loyal and brave! Faithful and protective, you're always ready to defend your friends.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/growlithe.png" },
    59: { name: "Arcanine", description: "You're majestic and noble! Legendary in your loyalty and strength, you inspire respect and admiration.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/arcanine.png" },
    60: { name: "Poliwag", description: "You're innocent and curious! Just starting your journey, you're eager to explore and learn.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/poliwag.png" },
    61: { name: "Poliwhirl", description: "You're developing and growing! In transition, you're discovering new aspects of yourself.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/poliwhirl.png" },
    62: { name: "Poliwrath", description: "You're disciplined and strong! Through hard work and training, you've become a formidable force.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/poliwrath.png" },
    63: { name: "Abra", description: "You're intelligent and elusive! Preferring mental challenges to physical ones, you think your way out of problems.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/abra.png" },
    64: { name: "Kadabra", description: "You're psychic and powerful! Your mental abilities are growing stronger every day.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/kadabra.png" },
    65: { name: "Alakazam", description: "You're incredibly intelligent and strategic! A master of the mind, you solve problems others can't even comprehend.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/alakazam.png" },
    66: { name: "Machop", description: "You're determined and hardworking! Small but mighty, you're building strength through dedication.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/machop.png" },
    67: { name: "Machoke", description: "You're powerful and disciplined! Your training is paying off as you grow stronger and more capable.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/machoke.png" },
    68: { name: "Machamp", description: "You're incredibly strong and capable! With multiple talents and unstoppable power, you can handle anything.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/machamp.png" },
    69: { name: "Bellsprout", description: "You're flexible and adaptable! Bending without breaking, you find creative solutions to challenges.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/bellsprout.png" },
    70: { name: "Weepinbell", description: "You're patient and strategic! Waiting for the right moment, you know when to act decisively.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/weepinbell.png" },
    71: { name: "Victreebel", description: "You're cunning and effective! Having perfected your approach, you achieve your goals with precision.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/victreebel.png" },
    72: { name: "Tentacool", description: "You're graceful and mysterious! Floating through life with ease, you adapt to any environment.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/tentacool.png" },
    73: { name: "Tentacruel", description: "You're commanding and formidable! With multiple talents and strong presence, you're a natural leader.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/tentacruel.png" },
    74: { name: "Geodude", description: "You're solid and dependable! Rock-steady and reliable, others can always count on you.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/geodude.png" },
    75: { name: "Graveler", description: "You're tough and resilient! Having weathered many storms, you're stronger than ever.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/graveler.png" },
    76: { name: "Golem", description: "You're unbreakable and powerful! A fortress of strength, you protect others with unwavering resolve.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/golem.png" },
    77: { name: "Ponyta", description: "You're spirited and free! Full of energy and passion, you gallop toward your dreams.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/ponyta.png" },
    78: { name: "Rapidash", description: "You're fast and magnificent! Racing toward your goals with blazing speed and determination.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/rapidash.png" },
    79: { name: "Slowpoke", description: "You're relaxed and thoughtful! Taking life at your own pace, you find wisdom in simplicity.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/slowpoke.png" },
    80: { name: "Slowbro", description: "You're calm and wise! Having found your balance, you approach life with peaceful confidence.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/slowbro.png" },
    81: { name: "Magnemite", description: "You're focused and magnetic! Drawn to your interests with single-minded determination.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/magnemite.png" },
    82: { name: "Magneton", description: "You're powerful and connected! Stronger together, you understand the value of unity.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/magneton.png" },
    83: { name: "Farfetch'd", description: "You're unique and resourceful! Standing out from the crowd, you make the most of what you have.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/farfetchd.png" },
    84: { name: "Doduo", description: "You're energetic and coordinated! Working in harmony with yourself, you accomplish twice as much.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/doduo.png" },
    85: { name: "Dodrio", description: "You're multitalented and efficient! Juggling multiple responsibilities, you excel at everything you do.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/dodrio.png" },
    86: { name: "Seel", description: "You're playful and adaptable! Comfortable in any environment, you bring joy wherever you go.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/seel.png" },
    87: { name: "Dewgong", description: "You're graceful and serene! Elegant and peaceful, you move through life with natural beauty.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/dewgong.png" },
    88: { name: "Grimer", description: "You're resilient and transformative! Thriving in tough conditions, you turn challenges into opportunities.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/grimer.png" },
    89: { name: "Muk", description: "You're powerful and unstoppable! Having overcome adversity, you're stronger and more capable than ever.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/muk.png" },
    90: { name: "Shellder", description: "You're protective and valuable! Guarding your treasures carefully, you know what's truly important.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/shellder.png" },
    91: { name: "Cloyster", description: "You're defensive and precious! Having built strong boundaries, you protect what matters most.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/cloyster.png" },
    92: { name: "Gastly", description: "You're mysterious and mischievous! Existing between worlds, you see things others cannot.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/gastly.png" },
    93: { name: "Haunter", description: "You're playful and otherworldly! Dancing between reality and dreams, you bring magic to everyday life.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/haunter.png" },
    94: { name: "Gengar", description: "You're mischievous and powerful! With a dark sense of humor, you're both feared and beloved.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/gengar.png" },
    95: { name: "Onix", description: "You're massive and grounded! A towering presence, you provide stability and strength to others.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/onix.png" },
    96: { name: "Drowzee", description: "You're dreamy and intuitive! Living between sleep and waking, you understand the power of dreams.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/drowzee.png" },
    97: { name: "Hypno", description: "You're hypnotic and wise! With deep understanding of the mind, you help others find their way.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/hypno.png" },
    98: { name: "Krabby", description: "You're feisty and determined! Small but fierce, you're not afraid to stand up for yourself.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/krabby.png" },
    99: { name: "Kingler", description: "You're powerful and commanding! With incredible strength, you're a force to be reckoned with.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/kingler.png" },
    100: { name: "Voltorb", description: "You're energetic and explosive! Full of potential energy, you're ready to burst into action.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/voltorb.png" },
    101: { name: "Electrode", description: "You're fast and electric! Quick to react and full of energy, you light up any situation.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/electrode.png" },
    102: { name: "Exeggcute", description: "You're collaborative and potential-filled! Working together as a team, you're preparing for something big.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/exeggcute.png" },
    103: { name: "Exeggutor", description: "You're tall and wise! Having reached new heights, you see the bigger picture and share your wisdom.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/exeggutor.png" },
    104: { name: "Cubone", description: "You're brave despite your struggles! Overcoming loss, you're building strength and resilience.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/cubone.png" },
    105: { name: "Marowak", description: "You're fierce and protective! Having overcome adversity, you're a warrior who defends others.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/marowak.png" },
    106: { name: "Hitmonlee", description: "You're flexible and skilled! A master of your craft, you approach challenges with precision and grace.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/hitmonlee.png" },
    107: { name: "Hitmonchan", description: "You're disciplined and powerful! Through training and dedication, you've become a formidable fighter.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/hitmonchan.png" },
    108: { name: "Lickitung", description: "You're unique and friendly! With your own special way of doing things, you bring joy to others.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/lickitung.png" },
    109: { name: "Koffing", description: "You're misunderstood but valuable! Despite appearances, you have hidden qualities that surprise others.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/koffing.png" },
    110: { name: "Weezing", description: "You're complex and powerful! Having evolved beyond first impressions, you're more than meets the eye.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/weezing.png" },
    111: { name: "Rhyhorn", description: "You're strong and determined! Charging toward your goals with unstoppable force and single-minded focus.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/rhyhorn.png" },
    112: { name: "Rhydon", description: "You're powerful and evolved! Having grown stronger through experience, you're a formidable presence.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/rhydon.png" },
    113: { name: "Chansey", description: "You're caring and nurturing! Bringing healing and happiness wherever you go, you make the world better.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/chansey.png" },
    114: { name: "Tangela", description: "You're mysterious and tangled! Complex and hard to understand, you have hidden depths waiting to be discovered.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/tangela.png" },
    115: { name: "Kangaskhan", description: "You're protective and nurturing! A fierce guardian, you'll do anything to protect those you love.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/kangaskhan.png" },
    116: { name: "Horsea", description: "You're graceful and curious! Swimming through life with elegance, you explore new depths.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/horsea.png" },
    117: { name: "Seadra", description: "You're elegant and powerful! Having grown more confident, you navigate life's currents with skill.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/seadra.png" },
    118: { name: "Goldeen", description: "You're beautiful and graceful! Swimming through life with natural elegance and charm.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/goldeen.png" },
    119: { name: "Seaking", description: "You're majestic and proud! A true beauty, you command attention and admiration wherever you go.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/seaking.png" },
    120: { name: "Staryu", description: "You're mysterious and regenerative! Able to heal and adapt, you bounce back from any setback.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/staryu.png" },
    121: { name: "Starmie", description: "You're cosmic and brilliant! Connected to something greater, you shine with otherworldly beauty.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/starmie.png" },
    122: { name: "Mr. Mime", description: "You're expressive and creative! A master of communication, you convey meaning without words.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/mr-mime.png" },
    123: { name: "Scyther", description: "You're swift and precise! A natural warrior, you move with deadly grace and efficiency.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/scyther.png" },
    124: { name: "Jynx", description: "You're unique and expressive! Dancing to your own rhythm, you're unforgettable and captivating.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/jynx.png" },
    125: { name: "Electabuzz", description: "You're electric and energetic! Crackling with power, you energize everyone around you.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/electabuzz.png" },
    126: { name: "Magmar", description: "You're fiery and passionate! Burning bright with intensity, you inspire others with your enthusiasm.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/magmar.png" },
    127: { name: "Pinsir", description: "You're strong and tenacious! With incredible grip and determination, you never let go of your goals.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/pinsir.png" },
    128: { name: "Tauros", description: "You're wild and powerful! Charging through life with unstoppable energy and fierce independence.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/tauros.png" },
    129: { name: "Magikarp", description: "You're humble but full of potential! Though underestimated, you're preparing for an incredible transformation.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/magikarp.png" },
    130: { name: "Gyarados", description: "You're fierce and transformed! Having overcome your humble beginnings, you're now a force of nature.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/gyarados.png" },
    131: { name: "Lapras", description: "You're gentle and wise! A peaceful soul who brings others together, you're beloved by all who know you.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/lapras.png" },
    132: { name: "Ditto", description: "You're adaptable and versatile! Able to become anything you need to be, you're the ultimate shapeshifter.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/ditto.png" },
    133: { name: "Eevee", description: "You're full of potential and possibilities! With unlimited options ahead, you're ready for any evolution.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/eevee.png" },
    134: { name: "Vaporeon", description: "You're fluid and adaptable! Like water, you flow around obstacles and find your own path.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/vaporeon.png" },
    135: { name: "Jolteon", description: "You're quick and electric! Fast-thinking and energetic, you spark excitement wherever you go.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/jolteon.png" },
    136: { name: "Flareon", description: "You're passionate and warm! Burning bright with enthusiasm, you bring warmth to everyone around you.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/flareon.png" },
    137: { name: "Porygon", description: "You're innovative and digital! A pioneer of the future, you bridge the gap between worlds.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/porygon.png" },
    138: { name: "Omanyte", description: "You're ancient and wise! Connected to the past, you carry timeless knowledge into the present.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/omanyte.png" },
    139: { name: "Omastar", description: "You're evolved and powerful! Having grown from ancient wisdom, you're a master of your domain.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/omastar.png" },
    140: { name: "Kabuto", description: "You're resilient and enduring! A survivor from ancient times, you adapt to any era.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/kabuto.png" },
    141: { name: "Kabutops", description: "You're swift and deadly! Having evolved perfect hunting skills, you're a master predator.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/kabutops.png" },
    142: { name: "Aerodactyl", description: "You're ancient and free! A creature of the skies, you soar above with prehistoric majesty.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/aerodactyl.png" },
    143: { name: "Snorlax", description: "You're peaceful and content! Taking life at your own pace, you find joy in simple pleasures.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/snorlax.png" },
    144: { name: "Articuno", description: "You're legendary and serene! A master of ice and grace, you bring calm to any storm.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/articuno.png" },
    145: { name: "Zapdos", description: "You're legendary and electric! A master of storms and power, you command respect and awe.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/zapdos.png" },
    146: { name: "Moltres", description: "You're legendary and fiery! A master of flame and rebirth, you inspire others to rise from ashes.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/moltres.png" },
    147: { name: "Dratini", description: "You're mystical and growing! A dragon in training, you're developing incredible potential.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/dratini.png" },
    148: { name: "Dragonair", description: "You're elegant and powerful! Growing into your dragon heritage, you're becoming truly magnificent.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/dragonair.png" },
    149: { name: "Dragonite", description: "You're gentle and mighty! Despite your power, you're kind-hearted and always ready to help others.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/dragonite.png" },
    150: { name: "Mewtwo", description: "You're powerful and complex! Created for greatness, you're finding your own path and purpose.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/mewtwo.png" },
    151: { name: "Mew", description: "You're rare and magical! The origin of all possibilities, you contain infinite potential within you.", spriteUrl: "https://img.pokemondb.net/sprites/gold/normal/mew.png" }
  }
};

// Helper function to get Pokémon result by ID
export const getPokemonById = (id: number): PokemonData | undefined => {
  const result = quizData.results[id as keyof typeof quizData.results];
  if (result) {
    return {
      name: result.name,
      description: result.description,
      spriteUrl: result.spriteUrl,
      vibeType: "POKÉMON VIBE" // Default vibe type
    };
  }
  return undefined;
};

// Helper function to get question by ID
export const getQuestionById = (id: number): QuizQuestion | undefined => {
  return quizData.questions.find(q => q.id === id);
};