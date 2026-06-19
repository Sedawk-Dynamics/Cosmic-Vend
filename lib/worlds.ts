/**
 * Configuration for each immersive "World of Energy" experience.
 * Faithful to the original standalone HTML rituals (theme colour, verse,
 * healing frequency, drone tuning, and the six-language affirmation set).
 */

export interface WorldAffirmation {
  lang: string
  text: string
  /** Indic script — uses the Noto Sans font stack + relaxed line-height. */
  indic?: boolean
}

export interface WorldConfig {
  slug: string
  /** Theme accent (drives gold-shimmer titles, rings, borders, controls). */
  accent: { hex: string; light: string; dark: string; rgb: string }
  /** Soft secondary glow for the cosmic background, as an "r, g, b" string. */
  glowRgb: string
  /** Eyebrow + portal label (e.g. "The Expansion Vector"). */
  label: string
  title: string
  subtitle: string
  verse: string
  verseAuthor: string
  hz: number
  freqLabel: string
  freqCaption: string
  /** [frequencyHz, relativeGain] sine layers for the ambient drone. */
  tuning: [number, number][]
  affirmations: WorldAffirmation[]
  /** SEO. */
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

export const WORLDS: Record<string, WorldConfig> = {
  abundance: {
    slug: 'abundance',
    accent: { hex: '#C9A84C', light: '#E0C06A', dark: '#A88430', rgb: '201, 168, 76' },
    glowRgb: '107, 63, 160',
    label: 'The Expansion Vector',
    title: 'Abundance',
    subtitle: 'Calling in Overflow',
    verse:
      'From the infinite well of the universe, abundance flows freely to those who open their hearts. Like rivers meeting the ocean, prosperity finds its way to the grateful soul.',
    verseAuthor: 'The Abundance Meditation',
    hz: 528,
    freqLabel: 'Healing Frequency',
    freqCaption: 'The frequency of infinite flow & material grace',
    tuning: [
      [264, 0.5],
      [528, 0.32],
      [792, 0.16],
    ],
    affirmations: [
      { lang: 'English', text: 'I am a magnet for abundance, and prosperity flows to me effortlessly.' },
      { lang: 'தமிழ்', indic: true, text: 'நான் செழிப்பை ஈர்க்கும் காந்தம், செழிப்பு என்னிடம் இயல்பாக வந்து சேர்கிறது.' },
      { lang: 'తెలుగు', indic: true, text: 'నేను సమృద్ధిని ఆకర్షించే అయస్కాంతం, శ్రేయస్సు నా వైపు సహజంగా ప్రవహిస్తుంది.' },
      { lang: 'മലയാളം', indic: true, text: 'ഞാൻ സമൃദ്ധിയെ ആകർഷിക്കുന്ന കാന്തമാണ്, ഐശ്വര്യം എന്നിലേക്ക് സ്വാഭാവികമായി ഒഴുകുന്നു.' },
      { lang: 'ಕನ್ನಡ', indic: true, text: 'ನಾನು ಸಮೃದ್ಧಿಯನ್ನು ಆಕರ್ಷಿಸುವ ಆಯಸ್ಕಾಂತ, ಸಂಪತ್ತು ನನ್ನೆಡೆಗೆ ಸಹಜವಾಗಿ ಹರಿಯುತ್ತದೆ.' },
      { lang: 'हिन्दी', indic: true, text: 'मैं समृद्धि को आकर्षित करने वाला चुंबक हूँ, और खुशहाली सहज रूप से मेरी ओर बहती है।' },
    ],
    metaTitle: 'Abundance — Calling in Overflow | CosmicVend',
    metaDescription:
      'Step into the Abundance world: an immersive 528 Hz sound bath, six-language affirmations, and a meditation timer designed to attract prosperity and overflow.',
    keywords: ['abundance meditation', '528 Hz frequency', 'prosperity affirmations', 'manifestation experience', 'CosmicVend'],
  },

  prosperity: {
    slug: 'prosperity',
    accent: { hex: '#FFD700', light: '#FFE373', dark: '#B89B00', rgb: '255, 215, 0' },
    glowRgb: '180, 140, 255',
    label: 'The Ascending Lattice',
    title: 'Prosperity',
    subtitle: 'Growth in All Directions',
    verse:
      'Prosperity is the crystalline lattice of aligned intention and righteous action. Like diamonds formed under pressure, your wealth emerges from the depths of purpose and perseverance.',
    verseAuthor: 'The Prosperity Meditation',
    hz: 639,
    freqLabel: 'Healing Frequency',
    freqCaption: 'The frequency of connection & manifestation',
    tuning: [
      [319.5, 0.5],
      [639, 0.32],
      [963, 0.16],
    ],
    affirmations: [
      { lang: 'English', text: 'I am aligned with the energy of prosperity, and success manifests in all areas of my life.' },
      { lang: 'தமிழ்', indic: true, text: 'நான் செழிப்பின் ஆற்றலுடன் ஒத்திசைந்துள்ளேன், வெற்றி என் வாழ்வின் அனைத்து தளங்களிலும் வெளிப்படுகிறது.' },
      { lang: 'తెలుగు', indic: true, text: 'నేను సంపద శక్తితో అనుసంధానమై ఉన్నాను, విజయం నా జీవితంలోని అన్ని రంగాలలో వ్యక్తమవుతుంది.' },
      { lang: 'മലയാളം', indic: true, text: 'ഞാൻ സമൃദ്ധിയുടെ ഊർജ്ജവുമായി ഇണങ്ങിയിരിക്കുന്നു, വിജയം എന്റെ ജീവിതത്തിന്റെ എല്ലാ മേഖലകളിലും പ്രകടമാകുന്നു.' },
      { lang: 'ಕನ್ನಡ', indic: true, text: 'ನಾನು ಸಮೃದ್ಧಿಯ ಶಕ್ತಿಯೊಂದಿಗೆ ಹೊಂದಿಕೊಂಡಿದ್ದೇನೆ, ಯಶಸ್ಸು ನನ್ನ ಜೀವನದ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ವ್ಯಕ್ತವಾಗುತ್ತದೆ.' },
      { lang: 'हिन्दी', indic: true, text: 'मैं समृद्धि की ऊर्जा से जुड़ा हूँ, और सफलता मेरे जीवन के हर क्षेत्र में प्रकट होती है।' },
    ],
    metaTitle: 'Prosperity — Growth in All Directions | CosmicVend',
    metaDescription:
      'Enter the Prosperity world: a 639 Hz ambient sound bath, six-language affirmations, and a guided meditation timer to align with success and growth.',
    keywords: ['prosperity meditation', '639 Hz frequency', 'success affirmations', 'manifestation experience', 'CosmicVend'],
  },

  'self-love': {
    slug: 'self-love',
    accent: { hex: '#E8B4A0', light: '#F3C9BC', dark: '#C98E78', rgb: '232, 180, 160' },
    glowRgb: '232, 150, 170',
    label: 'The Radiant Core',
    title: 'Self-Love',
    subtitle: 'Returning to Oneself',
    verse:
      'Within you blooms a garden of infinite worth. Tend to it with kindness, water it with compassion, and watch as the lotus of self-love rises from the depths of your being.',
    verseAuthor: 'The Self-Love Meditation',
    hz: 639,
    freqLabel: 'Healing Frequency',
    freqCaption: 'The frequency of love & inner harmony',
    tuning: [
      [319.5, 0.5],
      [639, 0.32],
      [852, 0.16],
    ],
    affirmations: [
      { lang: 'English', text: 'I honor myself deeply, and I am worthy of all the love I give to others.' },
      { lang: 'தமிழ்', indic: true, text: 'நான் என்னை ஆழமாக மதிக்கிறேன், மற்றவர்களுக்கு நான் தரும் அன்பு அனைத்திற்கும் நான் தகுதியானவன்.' },
      { lang: 'తెలుగు', indic: true, text: 'నేను నన్ను లోతుగా గౌరవిస్తాను, ఇతరులకు నేను ఇచ్చే ప్రేమ అంతటికీ నేను అర్హుడను.' },
      { lang: 'മലയാളം', indic: true, text: 'ഞാൻ എന്നെത്തന്നെ ആഴമായി ബഹുമാനിക്കുന്നു, മറ്റുള്ളവർക്ക് ഞാൻ നൽകുന്ന സ്നേഹത്തിന് ഞാൻ യോഗ്യനാണ്.' },
      { lang: 'ಕನ್ನಡ', indic: true, text: 'ನಾನು ನನ್ನನ್ನು ಆಳವಾಗಿ ಗೌರವಿಸುತ್ತೇನೆ, ಇತರರಿಗೆ ನಾನು ನೀಡುವ ಪ್ರೀತಿಗೆ ನಾನು ಅರ್ಹನು.' },
      { lang: 'हिन्दी', indic: true, text: 'मैं स्वयं का गहराई से सम्मान करता हूँ, और जो प्रेम मैं दूसरों को देता हूँ, उसका मैं स्वयं भी पात्र हूँ।' },
    ],
    metaTitle: 'Self-Love — Returning to Oneself | CosmicVend',
    metaDescription:
      'Enter the Self-Love world: a tender 639 Hz sound bath, six-language affirmations, and a guided meditation timer to honour your own infinite worth.',
    keywords: ['self love meditation', '639 Hz frequency', 'self worth affirmations', 'inner harmony', 'CosmicVend'],
  },

  peace: {
    slug: 'peace',
    accent: { hex: '#C0C0C0', light: '#DCDCDC', dark: '#9AA3B0', rgb: '192, 192, 192' },
    glowRgb: '150, 170, 200',
    label: 'The Infinite Void',
    title: 'Peace',
    subtitle: 'Stillness and Clarity',
    verse:
      'In the vast silence between thoughts lies infinite peace. Like the still horizon where sky meets earth, serenity dwells within you — unchanging, eternal, always accessible.',
    verseAuthor: 'The Peace Meditation',
    hz: 432,
    freqLabel: 'Healing Frequency',
    freqCaption: 'The frequency of stillness & serenity',
    tuning: [
      [216, 0.5],
      [432, 0.32],
      [648, 0.16],
    ],
    affirmations: [
      { lang: 'English', text: 'I am anchored in stillness, and peace flows through every part of my being.' },
      { lang: 'தமிழ்', indic: true, text: 'நான் அமைதியில் நிலைபெற்றுள்ளேன், சாந்தி என் முழு உள்ளத்திலும் பரவுகிறது.' },
      { lang: 'తెలుగు', indic: true, text: 'నేను ప్రశాంతతలో స్థిరంగా ఉన్నాను, శాంతి నా సమస్త అస్తిత్వంలో ప్రవహిస్తుంది.' },
      { lang: 'മലയാളം', indic: true, text: 'ഞാൻ നിശ്ചലതയിൽ ഉറച്ചിരിക്കുന്നു, സമാധാനം എന്റെ മുഴുവൻ അസ്തിത്വത്തിലും ഒഴുകുന്നു.' },
      { lang: 'ಕನ್ನಡ', indic: true, text: 'ನಾನು ನಿಶ್ಚಲತೆಯಲ್ಲಿ ಸ್ಥಿರವಾಗಿದ್ದೇನೆ, ಶಾಂತಿ ನನ್ನ ಸಂಪೂರ್ಣ ಅಸ್ತಿತ್ವದಲ್ಲಿ ಹರಿಯುತ್ತದೆ.' },
      { lang: 'हिन्दी', indic: true, text: 'मैं शांति में स्थिर हूँ, और सुकून मेरे पूरे अस्तित्व में बहता है।' },
    ],
    metaTitle: 'Peace — Stillness and Clarity | CosmicVend',
    metaDescription:
      'Enter the Peace world: a 432 Hz ambient sound bath, six-language affirmations, and a guided meditation timer to settle into stillness and serenity.',
    keywords: ['peace meditation', '432 Hz frequency', 'calm affirmations', 'serenity', 'CosmicVend'],
  },

  gratitude: {
    slug: 'gratitude',
    accent: { hex: '#CFB53B', light: '#E2CB6B', dark: '#A8922C', rgb: '207, 181, 59' },
    glowRgb: '210, 160, 90',
    label: 'The Echoing Ripple',
    title: 'Gratitude',
    subtitle: 'The Highest Vibration',
    verse:
      'Gratitude is the golden thread that weaves joy into the fabric of everyday life. Like sunlight rippling across still waters, thankfulness illuminates even the simplest moments.',
    verseAuthor: 'The Gratitude Meditation',
    hz: 528,
    freqLabel: 'Healing Frequency',
    freqCaption: 'The frequency of joy & thankfulness',
    tuning: [
      [264, 0.5],
      [528, 0.32],
      [741, 0.16],
    ],
    affirmations: [
      { lang: 'English', text: 'I am grateful for all that I have, and my thankfulness attracts more blessings.' },
      { lang: 'தமிழ்', indic: true, text: 'என்னிடம் இருப்பவை அனைத்திற்கும் நான் நன்றியுள்ளவன், என் நன்றியுணர்வு மேலும் ஆசீர்வாதங்களை ஈர்க்கிறது.' },
      { lang: 'తెలుగు', indic: true, text: 'నా దగ్గర ఉన్న అన్నిటికీ నేను కృతజ్ఞుడను, నా కృతజ్ఞత మరిన్ని ఆశీర్వాదాలను ఆకర్షిస్తుంది.' },
      { lang: 'മലയാളം', indic: true, text: 'എനിക്കുള്ള എല്ലാത്തിനും ഞാൻ നന്ദിയുള്ളവനാണ്, എന്റെ കൃതജ്ഞത കൂടുതൽ അനുഗ്രഹങ്ങളെ ആകർഷിക്കുന്നു.' },
      { lang: 'ಕನ್ನಡ', indic: true, text: 'ನನ್ನ ಬಳಿ ಇರುವ ಎಲ್ಲದಕ್ಕೂ ನಾನು ಕೃತಜ್ಞನಾಗಿದ್ದೇನೆ, ನನ್ನ ಕೃತಜ್ಞತೆ ಹೆಚ್ಚಿನ ಆಶೀರ್ವಾದಗಳನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ.' },
      { lang: 'हिन्दी', indic: true, text: 'मेरे पास जो कुछ भी है उसके लिए मैं आभारी हूँ, और मेरी कृतज्ञता अधिक आशीर्वाद आकर्षित करती है।' },
    ],
    metaTitle: 'Gratitude — The Highest Vibration | CosmicVend',
    metaDescription:
      'Enter the Gratitude world: a 528 Hz ambient sound bath, six-language affirmations, and a guided meditation timer to amplify joy and thankfulness.',
    keywords: ['gratitude meditation', '528 Hz frequency', 'thankfulness affirmations', 'joy', 'CosmicVend'],
  },
}

export const WORLD_SLUGS = Object.keys(WORLDS)
