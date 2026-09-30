/**
 * Insecurities, Root Causes, Solutions, Reframing & Community Seed Data
 * Curated for the EmbraceHer Women Empowerment Platform
 */

const INSECURITIES_DATA = [
  {
    id: "body-weight-shape",
    title: "Body Shape & Weight Expectations",
    category: "body",
    categoryLabel: "Body & Appearance",
    tag: "Self-Image",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    quickSummary: "Worrying about body size, weight fluctuations, softness, or feeling that your physical shape doesn't match ever-shifting cultural aesthetics.",
    causes: [
      {
        title: "Commercialized Beauty Standards",
        detail: "The global wellness and fashion industries thrive by constantly redefining the 'ideal' body type — from extreme thinness to hyper-curated curves — ensuring women always feel something needs fixing to sell products."
      },
      {
        title: "Digital Airbrushing & Filter Dysmorphia",
        detail: "Social media algorithms elevate digitally manipulated bodies with posed angles, lighting, and surgical enhancements, warping our baseline perception of normal, healthy human anatomy."
      },
      {
        title: "Intergenerational Body Policing",
        detail: "Many women grew up hearing mothers, aunts, or peers casually scrutinize weight, diets, or plate portions, passing down internalized anxieties as subconscious habits."
      }
    ],
    solutions: [
      {
        title: "Shift from Aesthetics to Body Neutrality",
        detail: "Practice body neutrality: appreciate your body for what it *does* rather than how it *looks*. Your legs carry you through life, your lungs breathe 20,000 times a day, and your arms hold the people you love."
      },
      {
        title: "Curate a Diverse Social Feed",
        detail: "Unfollow accounts that trigger comparison or guilt. Actively follow women of all sizes, ages, skin textures, and abilities celebrating life without apology."
      },
      {
        title: "Dress for the Body You Have Today",
        detail: "Discard the 'someday when I lose weight' clothes. Wearing clothes that fit comfortably right now honors your current self and relieves physical and mental constriction."
      }
    ],
    positiveReframe: {
      headline: "Your body is your home, not an ornament for display.",
      text: "Your body is not a static sculpture designed to satisfy public gaze; it is a living, breathing vessel that weathers seasons, adapts, protects you, and carries your wisdom, memories, and laughter. Softness, curves, muscle, and stretch marks are chapters of living fully — not design flaws."
    },
    affirmation: "I release the obligation to conform to a temporary beauty trend. My worth is non-negotiable, and my body deserves my gratitude today.",
    journalPrompt: "What are three miraculous things your body allowed you to experience or achieve this week that have nothing to do with how it looks?",
    communityTopicId: "body-weight-shape"
  },
  {
    id: "skin-imperfections",
    title: "Skin Texture, Acne & Hyperpigmentation",
    category: "body",
    categoryLabel: "Body & Appearance",
    tag: "Skin Realism",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
    quickSummary: "Feeling self-conscious about pores, breakouts, melasma, dark circles, or texture that departs from smooth 'glass skin'.",
    causes: [
      {
        title: "The Illusion of 'Poreless' Glass Skin",
        detail: "HD smoothing filters, ring lights, and cosmetics marketing have made completely normal biological functions (pores, natural oils, micro-texture) feel like personal defects."
      },
      {
        title: "Hormonal & Biological Dynamics",
        detail: "Adult female skin naturally responds to menstrual cycles, cortisol/stress levels, humidity, genetics, and gut health. Flare-ups are biological signals, not moral failures."
      },
      {
        title: "Fear of Being Seen Without Makeup",
        detail: "Societal conditioning tells women that bare skin is 'tired' or 'unprofessional', creating anxiety around being perceived in raw authenticity."
      }
    ],
    solutions: [
      {
        title: "Adopt Skin Realism",
        detail: "Remember: human skin has pores so it can breathe, sweat, and protect organs. 'Texture-free' skin does not exist outside computer screens."
      },
      {
        title: "Gentle Skin Care Over Punishment",
        detail: "Stop over-exfoliating or stripping your moisture barrier out of frustration. Treat inflamed skin with soothing barrier-repair ingredients (ceramides, centella, hydration) and patience."
      },
      {
        title: "The 3-Foot Rule",
        detail: "No one views your face with a 10x magnifying mirror. Step back 3 feet from the mirror — that is how the world sees your genuine smile, kindness, and eyes."
      }
    ],
    positiveReframe: {
      headline: "Skin is a living organ, not a sheet of glazed porcelain.",
      text: "Every scar tells a story of healing; every blush shows your passion; every smile line records genuine joy. Healthy skin has texture, warmth, and life. Free yourself from the burden of artificial plastic perfection."
    },
    affirmation: "My skin is constantly healing and renewing. I honor my face in all its natural seasons without needing a filter to feel worthy.",
    journalPrompt: "Look at your face in the mirror and name one feature you genuinely love, acknowledging the warmth and stories it carries.",
    communityTopicId: "skin-imperfections"
  },
  {
    id: "hair-insecurities",
    title: "Hair Loss, Texture & Body Hair Stigma",
    category: "body",
    categoryLabel: "Body & Appearance",
    tag: "Authentic Beauty",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    quickSummary: "Distress over thinning hair, natural curls/coils not fitting Eurocentric sleekness, early grays, or shame regarding natural body and facial hair.",
    causes: [
      {
        title: "Eurocentric & Heteronormative Hair Dogma",
        detail: "Centuries of cultural standards equated feminine beauty solely with long, thick, sleek hair, marginalizing natural afro textures, curls, fine hair, and hair thinning."
      },
      {
        title: "Taboos Surrounding Female Hair Biology",
        detail: "Hormonal shifts, PCOS, postpartum shedding, alopecia, and thyroid variations are common yet rarely spoken about openly, causing isolated shame."
      },
      {
        title: "Compulsory Hairlessness Pressure",
        detail: "The societal expectation that women must be hairless from the eyelashes down is a 20th-century commercial invention, not a biological norm."
      }
    ],
    solutions: [
      {
        title: "Celebrate Your Texture's Heritage",
        detail: "Whether coily, wavy, straight, or fine, discover care routines crafted specifically for your hair's unique nature rather than fighting its biology."
      },
      {
        title: "Seek Medical Insight Free of Shame",
        detail: "If dealing with unexpected hair thinning or hirsutism, consult empathetic dermatologists or endocrinologists to check blood panels without self-blame."
      },
      {
        title: "Reclaim Autonomy Over Body Hair",
        detail: "Decide what to trim, shave, or keep based entirely on personal comfort and joy, never out of fear of someone else's unearned disgust."
      }
    ],
    positiveReframe: {
      headline: "Hair is an expression of self, not your entire identity.",
      text: "Whether your hair is voluminous, thinning, silver, braided, shaved, or covered, your beauty, intellect, and grace reside in who you are. Crown yourself with confidence."
    },
    affirmation: "My hair does not define my womanhood. I embrace my natural texture, honor my body's changes, and carry myself with dignity.",
    journalPrompt: "What would you do today if you felt completely free from societal rules about feminine hair?",
    communityTopicId: "hair-insecurities"
  },
  {
    id: "aging-appearance",
    title: "Aging, Graying & Maturing",
    category: "body",
    categoryLabel: "Body & Appearance",
    tag: "Grace & Wisdom",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    quickSummary: "Fear of wrinkles, silver strands, losing youthful vitality, or feeling rendered 'invisible' by youth-obsessed culture.",
    causes: [
      {
        title: "'Anti-Aging' Panic Marketing",
        detail: "Language in beauty industries frames normal chronological aging as a medical emergency to be prevented, creating dread around living longer."
      },
      {
        title: "The Gendered Double Standard of Aging",
        detail: "Men are celebrated as 'distinguished' and 'seasoned' as they gray, while women are pressured to hide every line and gray hair to retain perceived relevance."
      },
      {
        title: "Fear of Invisibility & Loss of Power",
        detail: "Societal fixation on women's youth equates youthful appearance with value, leaving maturing women feeling overlooked in media and workplaces."
      }
    ],
    solutions: [
      {
        title: "Reframe Aging as a Privilege Denied to Many",
        detail: "Every year lived is a victory and a privilege. Wrinkles mark thousands of shared laughs, sunlit afternoons, deep conversations, and survived challenges."
      },
      {
        title: "Amplify Inspiring Maturing Role Models",
        detail: "Follow women in their 40s, 60s, 80s who are thriving in creative pursuits, athletics, leadership, and bold fashion."
      },
      {
        title: "Invest in Vitality, Not Concealment",
        detail: "Focus on strength training, joint mobility, restful sleep, and mental clarity rather than trying to freeze the clock at 22."
      }
    ],
    positiveReframe: {
      headline: "Aging is evidence of survival, wisdom, and deepening power.",
      text: "You are not fading; you are becoming more defined. With each passing decade, you shed trivial insecurities, gain emotional mastery, and step into self-possession that youth could only dream of."
    },
    affirmation: "I welcome the wisdom of time. Aging is my crown of resilience, experience, and authentic freedom.",
    journalPrompt: "Write down the qualities of your spirit, mind, and character that have grown dramatically richer over the last five years.",
    communityTopicId: "aging-appearance"
  },
  {
    id: "imposter-syndrome",
    title: "Imposter Syndrome & Chronic Self-Doubt",
    category: "career",
    categoryLabel: "Career & Ambition",
    tag: "Inner Confidence",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    quickSummary: "Feeling like an accidental fraud who got lucky, terrified that peers will discover you are 'not smart or qualified enough'.",
    causes: [
      {
        title: "Systemic Exclusion & Lack of Representation",
        detail: "When women don't see people who look like them at the helm or in boardrooms, the brain naturally asks: 'Do I really belong here?'"
      },
      {
        title: "The Attribution Trap",
        detail: "Studies reveal women frequently attribute their successes to 'luck' or 'timing', while blaming failures on internal incompetence; whereas men often do the reverse."
      },
      {
        title: "Perfectionist Upbringing",
        detail: "Girls are frequently praised for being 'good, neat, and quiet' rather than taking messy risks, instilling a belief that any misstep invalidates capability."
      }
    ],
    solutions: [
      {
        title: "Build a 'Brag Sheet' or Hype Document",
        detail: "Maintain an evidence folder: client praise, completed milestones, peer testimonials, hard data. When doubt creeps in, review objective facts, not anxious feelings."
      },
      {
        title: "Distinguish Competence from Omniscience",
        detail: "You do not need to know every answer to be an expert. True leadership lies in knowing how to find answers, ask great questions, and collaborate."
      },
      {
        title: "Reframe Doubt as an Edge of Growth",
        detail: "Imposters don't experience imposter syndrome; caring, conscientious people pushing their boundaries do. Feeling stretched simply means you are expanding."
      }
    ],
    positiveReframe: {
      headline: "You didn't get lucky — you earned your seat at the table.",
      text: "Your skills, persistence, unique perspectives, and grit brought you here. If you were invited into the room, you belong in the room. And if there is no room, you have the power to build your own table."
    },
    affirmation: "I am fully capable, prepared, and deserving of every opportunity that comes my way. My contributions have distinct and irreplaceable value.",
    journalPrompt: "List three major obstacles you overcame in your journey. What specific strengths within you made that triumph possible?",
    communityTopicId: "imposter-syndrome"
  },
  {
    id: "speaking-up-assertiveness",
    title: "Fear of Speaking Up & Being Labeled 'Bossy'",
    category: "career",
    categoryLabel: "Career & Ambition",
    tag: "Voice & Authority",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>`,
    quickSummary: "Hesitating in meetings, over-qualifying statements ('Just a small thought...'), or worrying about seeming aggressive when asserting ideas.",
    causes: [
      {
        title: "The 'Likeability vs. Competence' Double Bind",
        detail: "Sociological research proves assertive women are often penalized as 'unlikable' or 'abrasive', whereas the same behaviors in men are hailed as 'decisive leadership'."
      },
      {
        title: "Frequent Interruption Patterns",
        detail: "Studies show women in professional settings are interrupted significantly more often, eroding confidence and encouraging self-censorship."
      },
      {
        title: "Conditioning to Maintain Social Harmony",
        detail: "Women are socialized from childhood to de-escalate tension and cushion directness with excessive apologies and polite softeners."
      }
    ],
    solutions: [
      {
        title: "Drop Unnecessary Apologies & Diminishers",
        detail: "Replace 'I'm sorry, I just wanted to ask...' with 'I have a question.' Replace 'Does that make sense?' with 'I look forward to your thoughts.'"
      },
      {
        title: "Practice the 3-Second Claim Technique",
        detail: "When an idea occurs to you in a meeting, speak within 3 seconds before overthinking talks you out of it. State your opening point clearly and pause."
      },
      {
        title: "Use Amplification Alliances",
        detail: "Partner with an ally in meetings: when you share an idea, they echo and attribute it ('As Sarah just pointed out, that solves our bottleneck')."
      }
    ],
    positiveReframe: {
      headline: "Your voice is not a disruption; it is essential clarity.",
      text: "Assertiveness is simply self-respect made audible. Speaking directly without groveling is not aggression; it is professionalism and honesty. The world needs your unique perspective, uninterrupted."
    },
    affirmation: "My voice has weight, clarity, and purpose. I speak with calm conviction and do not apologize for occupying space.",
    journalPrompt: "What is an important opinion or boundary you have been holding back? How would you articulate it with calm, grounded authority?",
    communityTopicId: "speaking-up-assertiveness"
  },
  {
    id: "career-gap-pacing",
    title: "Career Breaks & Nonlinear Pacing",
    category: "career",
    categoryLabel: "Career & Ambition",
    tag: "Life Seasons",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    quickSummary: "Feeling 'behind' peers because of maternity leave, health recovery, caregiving for elders, or pivoting careers later in life.",
    causes: [
      {
        title: "The Myth of the Linear Career Ladder",
        detail: "Corporate systems were originally designed around workers who had full-time home support, punishing caregiving seasons as 'gaps' rather than valuable life stages."
      },
      {
        title: "Social Comparison & LinkedIn Envy",
        detail: "Watching highlight reels of title promotions makes nonlinear journeys feel like failure rather than a rich, multi-dimensional life."
      },
      {
        title: "Undervalued Soft Skills of Caretaking",
        detail: "Crisis management, intense multitasking, empathy, and negotiation acquired during caretaking are rarely given official resume credit."
      }
    ],
    solutions: [
      {
        title: "Narrate Your Gap as Intentional Growth",
        detail: "Own your hiatus with poise: 'I dedicated focused time to family care/health, which sharpened my resilience, prioritization, and perspective for my next chapter.'"
      },
      {
        title: "Reframe Life into Decades, Not Sprints",
        detail: "A career spans 40+ years. Taking 1-5 years to care for your health or loved ones is a thoughtful chapter in an expansive book, not an abrupt ending."
      },
      {
        title: "Network Through authentic Relationships",
        detail: "Warm introductions and conversations about shared vision open far more doors than cold algorithms that screen for unbroken timelines."
      }
    ],
    positiveReframe: {
      headline: "Your timeline is customized for your journey, not a mass-produced track.",
      text: "Careers are jungle gyms, not linear ladders. Life events that temporarily paused your professional climb often cultivate the deepest emotional intelligence, grit, and clarity that will propel your greatest work."
    },
    affirmation: "I am never too late or behind. Every chapter of my journey has prepared me for the wisdom and strengths I bring today.",
    journalPrompt: "What invaluable resilience, patience, or empathy did you develop during your time away from standard work that now makes you exceptional?",
    communityTopicId: "career-gap-pacing"
  },
  {
    id: "financial-confidence",
    title: "Financial Autonomy & Money Anxiety",
    category: "career",
    categoryLabel: "Career & Ambition",
    tag: "Financial Freedom",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    quickSummary: "Intimidation around investing, negotiating raises, managing independent wealth, or relying financially on a partner.",
    causes: [
      {
        title: "Gendered Financial Socialization",
        detail: "Media often coaches women to 'save on lattes and clip coupons' while coaching men to 'invest boldly and negotiate aggressively', skewing wealth-building mindset."
      },
      {
        title: "Jargon as a Gatekeeper",
        detail: "Wall Street terminology and financial institutions can feel unnecessarily arcane, intimidating capable women into thinking they 'aren't math people'."
      },
      {
        title: "The Gender Wage & Superannuation Gap",
        detail: "Compound effects of pay discrepancies and time off for caregiving mean women historically accumulate less safety net, driving higher financial vulnerability."
      }
    ],
    solutions: [
      {
        title: "Begin with Micro-Investments & Automation",
        detail: "You do not need an MBA to invest. Low-cost broad market index funds and automated monthly deposits build compounding wealth steadily."
      },
      {
        title: "Always Negotiate Your Compensation",
        detail: "Every initial offer leaves room for negotiation. Rehearse with scripts: 'Based on my track record delivering X results, I am targeting a base of $Y.'"
      },
      {
        title: "Hold Regular 'Money Dates' with Yourself",
        detail: "Set aside 30 minutes every two weeks with tea to review bank statements, investments, and goals with calm curiosity rather than guilt."
      }
    ],
    positiveReframe: {
      headline: "Wealth is not about greed; it is about freedom, choices, and security.",
      text: "Money in the hands of women transforms families, communities, and future generations. You are entirely capable of understanding, growing, and commanding your financial destiny."
    },
    affirmation: "I am deserving of abundant compensation for my work. I make wise, empowering financial choices with clarity and calm.",
    journalPrompt: "What would true financial peace of mind look like for you, and what is one small empowering step you can take toward it this week?",
    communityTopicId: "financial-confidence"
  },
  {
    id: "people-pleasing",
    title: "People-Pleasing & Fear of Boundaries",
    category: "mindset",
    categoryLabel: "Mind & Emotions",
    tag: "Healthy Boundaries",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    quickSummary: "Saying 'yes' when you mean 'no', dreading conflict, feeling responsible for other people's happiness, and burning out.",
    causes: [
      {
        title: "Fawn Response & Survival Mechanism",
        detail: "People-pleasing is often a psychological trauma response (fawning) learned in childhood to keep volatile environments calm and avoid rejection."
      },
      {
        title: "Societal Equating of Female Goodness with Self-Sacrifice",
        detail: "Culture glorifies the martyr-mother and compliant daughter, teaching women that asserting personal needs is selfish or unkind."
      },
      {
        title: "Fear of Abandonment or Disapproval",
        detail: "The unconscious belief that affection and belonging must be continuously purchased through relentless servitude and accommodation."
      }
    ],
    solutions: [
      {
        title: "Practice the 24-Hour Buffer",
        detail: "Never agree to extra requests immediately. Use: 'Let me check my calendar and current commitments, and I will get back to you by tomorrow.'"
      },
      {
        title: "Recognize that 'No' is a Complete Sentence",
        detail: "You do not owe elaborate excuses or justifications. A gracious, firm 'I won't be able to take that on, but thank you for thinking of me' suffices."
      },
      {
        title: "Separate Their Feelings from Your Responsibility",
        detail: "Someone else feeling disappointed when you set a healthy boundary does not mean you did something wrong. Disappointment is theirs to navigate."
      }
    ],
    positiveReframe: {
      headline: "Boundaries are not walls to keep people out; they are doors to protect what's inside.",
      text: "Saying 'no' to others is how you say 'yes' to your own mental sanity, creativity, and loved ones. True friends and healthy partners will honor your limits, not resent them."
    },
    affirmation: "I am allowed to protect my peace. My worth is not tied to how much of myself I give away to keep others comfortable.",
    journalPrompt: "Where in your life are you currently saying 'yes' out of obligation or fear, and how would it feel to reclaim that energy?",
    communityTopicId: "people-pleasing"
  },
  {
    id: "over-emotional-stigma",
    title: "Being Labeled 'Too Sensitive' or Emotional",
    category: "mindset",
    categoryLabel: "Mind & Emotions",
    tag: "Emotional Wisdom",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    quickSummary: "Feeling ashamed of crying easily, having high empathy, or being told you are 'overreacting' or 'too dramatic' when expressing hurt.",
    causes: [
      {
        title: "Gaslighting & Patriarchal Stoicism",
        detail: "Modern institutions often favor robotic detachment over emotional honesty, dismissing legitimate grievances as 'female irrationality'."
      },
      {
        title: "Sensory & Empathic Processing Differences",
        detail: "Highly Sensitive Persons (HSPs) possess deeper nervous system processing, feeling social subtleties and emotional currents with vivid intensity."
      },
      {
        title: "Generational Repression",
        detail: "Growing up in households where big emotions were met with mockery or irritation teaches girls to swallow their tears and distrust their intuition."
      }
    ],
    solutions: [
      {
        title: "Reframe Empathy as a Superpower",
        detail: "High emotional intelligence, empathy, and sensitivity are the bedrock of visionary leadership, creative brilliance, and profound human connection."
      },
      {
        title: "Name Your Emotional Signals Without Apology",
        detail: "Tears are simply a physiological release of cortisol and tension, not a badge of incompetence. Say: 'My tears are just physiological processing; please let me continue my point.'"
      },
      {
        title: "Protect Your Emotional Sponge",
        detail: "Create mental shielding rituals when entering emotionally charged environments so you do not absorb others' stress as your own."
      }
    ],
    positiveReframe: {
      headline: "Sensitivity is not fragility; it is the courage to feel deeply in an unfeeling world.",
      text: "The world does not need more hardened hearts; it desperately needs women who can feel truth, spot injustice, empathize with pain, and build compassionate solutions. Your heart is an instrument of immense strength."
    },
    affirmation: "My deep feelings are my compass and wisdom. I honor my sensitive heart as a rare gift of empathy and insight.",
    journalPrompt: "Recall a moment where your sensitivity or intuition guided you to help someone or avoid a bad situation. How did it protect you?",
    communityTopicId: "over-emotional-stigma"
  },
  {
    id: "perfectionism-burnout",
    title: "Perfectionism & The 'Do-It-All' Trap",
    category: "mindset",
    categoryLabel: "Mind & Emotions",
    tag: "Self-Compassion",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    quickSummary: "Feeling like anything less than 100% excellence is failure; feeling guilty whenever you sit down to rest or take a break.",
    causes: [
      {
        title: "The 'Superwoman' Cultural Ideal",
        detail: "Women are bombarded with images of individuals flawlessly balancing high-powered careers, gourmet home cooking, fitness, immaculate homes, and flawless parenting."
      },
      {
        title: "Equating Self-Worth with Productivity",
        detail: "Capitalist conditioning teaches us that resting is 'lazy' or 'wasted time', turning downtime into a source of nagging anxiety."
      },
      {
        title: "Perfectionism as a Defense Armor",
        detail: "As author Brené Brown notes, perfectionism is the belief that 'if we look perfect, live perfect, and work perfect, we can avoid or minimize shame, judgment, and blame'."
      }
    ],
    solutions: [
      {
        title: "Embrace 'Good Enough' (The 80% Rule)",
        detail: "Most tasks require 80% effort to achieve 100% of their intended outcome. The extra 20% of neurotic fine-tuning is what causes chronic burnout."
      },
      {
        title: "Schedule Guilt-Free Non-Productive Time",
        detail: "Treat rest as biological maintenance, not a luxury reward you must suffer to earn. Rest *is* productive."
      },
      {
        title: "Conduct Post-Mortems on Imperfection",
        detail: "Intentionally leave a small detail imperfect (a typo in a casual email, an unmade bed) and notice: the sky does not fall, and you remain whole."
      }
    ],
    positiveReframe: {
      headline: "You are a human being, not a human doing.",
      text: "Perfectionism is a thief that steals the joy of creation and the peace of presence. Embracing messy progress, laughter, and vulnerability allows you to live authentically rather than perform for an audience."
    },
    affirmation: "I am worthy of rest without justification. Done with love and care is always better than paralyzed perfection.",
    journalPrompt: "What is one expectation you hold over yourself that you would never demand of your best friend? Give yourself permission to release it.",
    communityTopicId: "perfectionism-burnout"
  },
  {
    id: "relationship-milestones",
    title: "Singlehood & Timeline Pressure",
    category: "relationships",
    categoryLabel: "Relationships & Life",
    tag: "Life Design",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    quickSummary: "Anxiety about age, the ticking biological clock, being unmarried while peers marry, or feeling pitied by family and society.",
    causes: [
      {
        title: "The Scripted Life Trajectory",
        detail: "Culture pre-programs a rigid schedule: graduate, marry in your 20s, buy property, have children by 30. Departing from this creates artificial existential dread."
      },
      {
        title: "Patronizing Inquiries & Family Scrutiny",
        detail: "Holiday dinners and family gatherings where the first question asked is 'Are you seeing someone?' reducing an accomplished woman's life to marital status."
      },
      {
        title: "Fear of Scarcity & Solitude",
        detail: "Romantic fiction trains women to believe true fulfillment only begins when a romantic partner arrives to 'complete' them."
      }
    ],
    solutions: [
      {
        title: "Celebrate the Autonomy of Singlehood",
        detail: "Recognize singlehood as an empowering, rich season of unmatched freedom: financial sovereignty, self-discovery, deep friendships, and personal peace."
      },
      {
        title: "Master the Polite Deflection Script",
        detail: "When nosy relatives inquire, smile warmly: 'My life is full and exciting right now! I'd love to tell you about my latest project instead.'"
      },
      {
        title: "Remember: It is Better to Be Alone Than in the Wrong Company",
        detail: "Rushing into lifelong commitments to beat a birthday deadline leads to profound heartbreak. Patient, selective standards protect your life."
      }
    ],
    positiveReframe: {
      headline: "Your life is already happening right now; it is not on hold for a partner.",
      text: "You are not half of a person waiting to be completed. You are the protagonist of your life story. Your worth is complete, your days are meaningful, and your timing is entirely your own."
    },
    affirmation: "My life is rich, beautiful, and unfolding in divine timing. I refuse to settle out of societal panic.",
    journalPrompt: "What adventures, passions, and personal joys are you savoring right now that belong exclusively to you?",
    communityTopicId: "relationship-milestones"
  },
  {
    id: "motherhood-mom-guilt",
    title: "Mom Guilt & Perfectionist Parenting",
    category: "relationships",
    categoryLabel: "Relationships & Life",
    tag: "Parenting Grace",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>`,
    quickSummary: "Feeling like you are never doing enough for your children, feeling guilty whether at work or at home, and comparing yourself to curated mom influencers.",
    causes: [
      {
        title: "The 'Intensive Mothering' Ideology",
        detail: "Modern standards expect mothers to be child-centered, emotionally omnipotent, expertly educated, and self-sacrificing 24/7 without community villages."
      },
      {
        title: "The Double Guilt of Working Mothers",
        detail: "Society demands mothers work as if they have no children, and raise children as if they have no work, setting an impossible paradox."
      },
      {
        title: "Social Media Bento-Box Envy",
        detail: "Instagram and TikTok showcase curated organic meals, spotless playrooms, and calm voices, hiding real tantrums, exhaustion, and mess."
      }
    ],
    solutions: [
      {
        title: "Good Enough Mothering (Donald Winnicott's Law)",
        detail: "Child psychology proves children do not need a perfect mother; they need a 'good enough' mother who is authentic, loving, and models human mistakes and repair."
      },
      {
        title: "Model Self-Care for Your Children",
        detail: "When children see a mother who respects her own needs, hobbies, and rest, they learn how to love and respect themselves as adults."
      },
      {
        title: "Eliminate Toxic Comparison Circles",
        detail: "Connect with fellow moms who are honest about messy dinners, screen time, and emotional exhaustion instead of competitive perfectionists."
      }
    ],
    positiveReframe: {
      headline: "A happy, fulfilled mother is the greatest gift to a child.",
      text: "You do not need to be a martyr to be an extraordinary mother. Your love, presence, warmth, and resilience are far more enduring than clean floors or handmade costumes."
    },
    affirmation: "I am the exact mother my child needs. My love and sincere efforts are more than enough every single day.",
    journalPrompt: "What is one moment of genuine connection or laughter you shared with your child recently that required no perfection at all?",
    communityTopicId: "motherhood-mom-guilt"
  },
  {
    id: "vulnerability-asking-for-help",
    title: "Hyper-Independence & Reluctance to Ask for Help",
    category: "relationships",
    categoryLabel: "Relationships & Life",
    tag: "True Strength",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>`,
    quickSummary: "Believing that asking for support makes you a burden, feeling you must carry every emotional and physical weight alone.",
    causes: [
      {
        title: "Childhood Emotional Neglect or Betrayal",
        detail: "Hyper-independence often stems from past experiences where asking for help resulted in punishment, disappointment, or feeling like an unwanted burden."
      },
      {
        title: "The 'Strong Black Woman' / 'Resilient Pillar' Myth",
        detail: "Cultural stereotypes disproportionately demand certain women be unbreakable rocks for everyone else, giving them no room to be vulnerable or soft."
      },
      {
        title: "Fear of Indebtedness & Vulnerability",
        detail: "Worrying that accepting assistance will be held against you later or used to exert control over your choices."
      }
    ],
    solutions: [
      {
        title: "Reframe Asking for Help as an Act of Trust",
        detail: "When you ask someone you care about for help, you give them the gift of feeling valued and useful. Interdependence is biological human nature."
      },
      {
        title: "Start with Micro-Delegation",
        detail: "Practice asking for small, low-stakes favors: 'Could you grab me a coffee?' or 'Could you watch the kids for 20 minutes while I shower?'"
      },
      {
        title: "De-link Strength from Suffering",
        detail: "Carrying a boulder alone doesn't prove your worth; it just breaks your back. Shared strength is smarter and sustainable."
      }
    ],
    positiveReframe: {
      headline: "Asking for help is not a collapse; it is an act of courageous connection.",
      text: "You were never meant to carry the world on your shoulders. Allowing yourself to be held, helped, and supported by others does not diminish your power — it deepens your humanity."
    },
    affirmation: "I am worthy of care, rest, and support. Asking for help is an act of wisdom and self-compassion.",
    journalPrompt: "What is one heavy burden you have been carrying alone this month that you could invite someone you trust to help you with?",
    communityTopicId: "vulnerability-asking-for-help"
  }
];

const INITIAL_COMMUNITY_COMMENTS = [
  {
    id: "comm-1",
    author: "Elena (Sister in Growth)",
    avatarColor: "bg-rose-400",
    insecurityId: "body-weight-shape",
    insecurityTitle: "Body Shape & Weight Expectations",
    timestamp: "2 hours ago",
    content: "For over 10 years, I hid behind oversized jackets even in summer because I hated my hips and softness. Turning 30 this year, I finally donated all the clothes that pinched me and bought a dress that felt like a hug. Dancing at my friend's wedding without checking the mirror was the most intoxicating feeling in the world. You deserve to take up space!",
    likes: 34,
    userLiked: false,
    replies: [
      {
        id: "rep-1-1",
        author: "Priya S.",
        timestamp: "1 hour ago",
        content: "Elena, this brought tears to my eyes. Donating my 'punishment clothes' was the best decision I ever made. Thank you for this reminder today!"
      }
    ]
  },
  {
    id: "comm-2",
    author: "Maya R. (Tech Lead)",
    avatarColor: "bg-purple-500",
    insecurityId: "imposter-syndrome",
    insecurityTitle: "Imposter Syndrome & Chronic Self-Doubt",
    timestamp: "5 hours ago",
    content: "When I got promoted to Senior Engineering Lead, I spent weeks feeling sick every morning convinced they made a clerical mistake. My mentor asked me to list every project I shipped that year. Seeing it on paper was undeniable proof. If your brain lies to you, force it to read the hard receipts!",
    likes: 58,
    userLiked: false,
    replies: [
      {
        id: "rep-2-1",
        author: "Amina K.",
        timestamp: "3 hours ago",
        content: "The 'Hype Doc' advice is pure gold. Whenever self-doubt speaks up, I open mine!"
      }
    ]
  },
  {
    id: "comm-3",
    author: "Zainab (Gentle Soul)",
    avatarColor: "bg-emerald-500",
    insecurityId: "people-pleasing",
    insecurityTitle: "People-Pleasing & Fear of Boundaries",
    timestamp: "Yesterday",
    content: "I used to say yes to every single committee, baby shower favor, and late-night work request until I literally collapsed from exhaustion. My therapist told me: 'Every time you say yes to avoid disappointing someone else, you are choosing to disappoint yourself.' That sentence rewired my entire brain.",
    likes: 42,
    userLiked: false,
    replies: []
  },
  {
    id: "comm-4",
    author: "Clara (Mother of Two)",
    avatarColor: "bg-amber-500",
    insecurityId: "motherhood-mom-guilt",
    insecurityTitle: "Mom Guilt & Perfectionist Parenting",
    timestamp: "2 days ago",
    content: "Yesterday dinner was cereal and scrambled eggs because I was too wiped out to cook. Old me would have cried. Yesterday me laughed with the kids, put on 90s music, and had a breakfast picnic on the living room rug. They told me it was the best dinner ever. Perfection is an illusion; love is the reality.",
    likes: 67,
    userLiked: false,
    replies: [
      {
        id: "rep-4-1",
        author: "Rachel D.",
        timestamp: "1 day ago",
        content: "Living room rug picnics for the win! Kids remember how we made them feel, not the gourmet side dishes."
      }
    ]
  },
  {
    id: "comm-5",
    author: "Fatima (Creative Soul)",
    avatarColor: "bg-teal-500",
    insecurityId: "skin-imperfections",
    insecurityTitle: "Skin Texture, Acne & Hyperpigmentation",
    timestamp: "3 days ago",
    content: "Adult hormonal acne almost made me cancel my first art exhibition because I was terrified of being photographed. A friend grabbed my hand and said: 'People are coming to admire your heart and art, not your sebaceous glands.' It put everything into perspective. Your skin is just the envelope; you are the masterpiece inside.",
    likes: 51,
    userLiked: false,
    replies: []
  }
];

const DAILY_AFFIRMATIONS = [
  "I honor the woman I am becoming, appreciating every step of the journey that brought me here.",
  "My worth is not defined by external gaze, societal timelines, or unattainable beauty standards.",
  "I choose peace over perfection. I give myself permission to be human, flawed, and deeply loved.",
  "My voice holds immense power and purpose. I will not shrink or apologize for speaking my truth.",
  "I am allowed to rest. Rest is not a luxury I have to earn; it is my fundamental birthright.",
  "The things that make me different are the very roots of my strength and creative brilliance.",
  "I release what no longer serves my peace, and I lovingly welcome what nourishes my soul.",
  "I look at my reflection with kindness, recognizing the brave, resilient heart beating within."
];
