// ======================== TYPES ========================

export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  label: string;
  description: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  label: string;
  description: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  label: string;
  icon: string;
  color: string;
  chapters: Chapter[];
}

export interface ClassInfo {
  id: string;
  label: string;
  description: string;
  icon: string;
  subjects: Subject[];
}

// ======================== DATA ========================

export const mcqData: ClassInfo[] = [
  // ────────────── CLASS 9 ──────────────
  {
    id: "9",
    label: "Class 9",
    description: "Foundation concepts & core subjects",
    icon: "📘",
    subjects: [
      {
        id: "physics",
        label: "Physics",
        icon: "⚛️",
        color: "#3b82f6",
        chapters: [
          {
            id: "ভৌত রাশি এবং পরিমাপ",
            label: "ভৌত রাশি এবং পরিমাপ",
            description: "Speed, velocity, acceleration & graphs",
            topics: [
              {
                id: "speed-velocity",
                label: "Speed & Velocity",
                description: "Scalar vs vector quantities of motion",
                questions: [
                  {
                    id: "q1",
                    question: "What is the SI unit of velocity?",
                    options: ["m/s²", "m/s", "km/h", "cm/s"],
                    answer: 1,
                    explanation:
                      "Velocity is displacement per unit time, measured in metres per second (m/s).",
                  },
                  {
                    id: "q2",
                    question: "Speed is a ______ quantity.",
                    options: ["Vector", "Scalar", "Tensor", "Dimensional"],
                    answer: 1,
                    explanation:
                      "Speed has only magnitude and no direction, making it a scalar quantity.",
                  },
                  {
                    id: "q3",
                    question:
                      "An object moves 20 m in 4 s. What is its average speed?",
                    options: ["80 m/s", "5 m/s", "24 m/s", "16 m/s"],
                    answer: 1,
                    explanation: "Average speed = total distance / total time = 20/4 = 5 m/s.",
                  },
                ],
              },
              {
                id: "acceleration",
                label: "Acceleration",
                description: "Rate of change of velocity",
                questions: [
                  {
                    id: "q1",
                    question: "SI unit of acceleration is:",
                    options: ["m/s", "m/s²", "km/h", "m²/s"],
                    answer: 1,
                    explanation: "Acceleration = change in velocity / time, so the unit is m/s².",
                  },
                  {
                    id: "q2",
                    question:
                      "When a body slows down, the acceleration is:",
                    options: ["Positive", "Zero", "Negative", "Infinite"],
                    answer: 2,
                    explanation:
                      "Negative acceleration (deceleration) occurs when a body slows down.",
                  },
                  {
                    id: "q3",
                    question:
                      "A car accelerates from 0 to 20 m/s in 5 s. What is the acceleration?",
                    options: ["2 m/s²", "4 m/s²", "10 m/s²", "100 m/s²"],
                    answer: 1,
                    explanation: "a = (v − u)/t = (20 − 0)/5 = 4 m/s².",
                  },
                ],
              },
            ],
          },
          {
            id: "force",
            label: "Force & Laws of Motion",
            description: "Newton's laws, inertia, momentum",
            topics: [
              {
                id: "newtons-laws",
                label: "Newton's Laws",
                description: "Three fundamental laws of motion",
                questions: [
                  {
                    id: "q1",
                    question: "Newton's first law is also known as:",
                    options: [
                      "Law of acceleration",
                      "Law of inertia",
                      "Law of action-reaction",
                      "Law of gravitation",
                    ],
                    answer: 1,
                    explanation:
                      "The first law states that a body remains at rest or in uniform motion unless acted upon by an external force — the law of inertia.",
                  },
                  {
                    id: "q2",
                    question: "The formula F = ma is from Newton's ______ law.",
                    options: ["First", "Second", "Third", "Fourth"],
                    answer: 1,
                    explanation:
                      "Newton's second law: Force = mass × acceleration.",
                  },
                  {
                    id: "q3",
                    question: "For every action there is an equal and opposite:",
                    options: ["Force", "Reaction", "Acceleration", "Velocity"],
                    answer: 1,
                    explanation: "Newton's third law: every action has an equal and opposite reaction.",
                  },
                ],
              },
              {
                id: "friction",
                label: "Friction",
                description: "Types and effects of frictional force",
                questions: [
                  {
                    id: "q1",
                    question: "Friction always acts in the ______ of motion.",
                    options: [
                      "Same direction",
                      "Opposite direction",
                      "Perpendicular direction",
                      "No fixed direction",
                    ],
                    answer: 1,
                    explanation: "Friction opposes the relative motion between surfaces.",
                  },
                  {
                    id: "q2",
                    question: "Which type of friction is the smallest?",
                    options: ["Static", "Sliding", "Rolling", "Fluid"],
                    answer: 2,
                    explanation: "Rolling friction is generally the least among contact frictions.",
                  },
                  {
                    id: "q3",
                    question: "Friction can be reduced by:",
                    options: [
                      "Increasing roughness",
                      "Using lubricants",
                      "Increasing weight",
                      "Increasing surface area",
                    ],
                    answer: 1,
                    explanation: "Lubricants reduce friction between surfaces.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "math",
        label: "Mathematics",
        icon: "📐",
        color: "#f59e0b",
        chapters: [
          {
            id: "number-systems",
            label: "Number Systems",
            description: "Real numbers, rational & irrational numbers",
            topics: [
              {
                id: "real-numbers",
                label: "Real Numbers",
                description: "Properties of real number system",
                questions: [
                  {
                    id: "q1",
                    question: "Every rational number is a:",
                    options: [
                      "Natural number",
                      "Whole number",
                      "Real number",
                      "Prime number",
                    ],
                    answer: 2,
                    explanation: "All rational numbers are part of the real number system.",
                  },
                  {
                    id: "q2",
                    question: "Which of the following is irrational?",
                    options: ["0.5", "√4", "√2", "3/7"],
                    answer: 2,
                    explanation:
                      "√2 = 1.41421… is non-terminating and non-recurring, hence irrational.",
                  },
                  {
                    id: "q3",
                    question: "The decimal expansion of 1/3 is:",
                    options: [
                      "Terminating",
                      "Non-terminating recurring",
                      "Non-terminating non-recurring",
                      "None of these",
                    ],
                    answer: 1,
                    explanation: "1/3 = 0.333… which is non-terminating but recurring.",
                  },
                ],
              },
              {
                id: "irrational-numbers",
                label: "Irrational Numbers",
                description: "Surds and their properties",
                questions: [
                  {
                    id: "q1",
                    question: "Which is irrational?",
                    options: ["√9", "√16", "√5", "√25"],
                    answer: 2,
                    explanation: "√5 ≈ 2.236… cannot be expressed as a simple fraction.",
                  },
                  {
                    id: "q2",
                    question: "The product of two irrational numbers is:",
                    options: [
                      "Always irrational",
                      "Always rational",
                      "Sometimes rational",
                      "Always zero",
                    ],
                    answer: 2,
                    explanation: "e.g. √2 × √2 = 2 (rational), but √2 × √3 = √6 (irrational).",
                  },
                  {
                    id: "q3",
                    question: "Between 1 and 2, how many irrational numbers exist?",
                    options: ["10", "100", "1000", "Infinitely many"],
                    answer: 3,
                    explanation:
                      "There are infinitely many irrational numbers between any two real numbers.",
                  },
                ],
              },
            ],
          },
          {
            id: "polynomials",
            label: "Polynomials",
            description: "Degree, zeros, factor & remainder theorem",
            topics: [
              {
                id: "types",
                label: "Types of Polynomials",
                description: "Classification by degree and terms",
                questions: [
                  {
                    id: "q1",
                    question: "Degree of the polynomial 4x³ + 2x + 7 is:",
                    options: ["1", "2", "3", "7"],
                    answer: 2,
                    explanation: "The highest power of x is 3, so the degree is 3.",
                  },
                  {
                    id: "q2",
                    question: "A polynomial with degree 2 is called:",
                    options: ["Linear", "Quadratic", "Cubic", "Constant"],
                    answer: 1,
                    explanation: "Degree 2 → quadratic polynomial.",
                  },
                  {
                    id: "q3",
                    question: "The degree of a non-zero constant polynomial is:",
                    options: ["0", "1", "Undefined", "−1"],
                    answer: 0,
                    explanation: "A constant like 5 = 5x⁰, so the degree is 0.",
                  },
                ],
              },
              {
                id: "zeros",
                label: "Zeros of Polynomials",
                description: "Finding roots and verifying factors",
                questions: [
                  {
                    id: "q1",
                    question: "Zero of p(x) = x − 5 is:",
                    options: ["0", "−5", "5", "1"],
                    answer: 2,
                    explanation: "Set p(x) = 0 → x − 5 = 0 → x = 5.",
                  },
                  {
                    id: "q2",
                    question: "How many zeros can a quadratic polynomial have at most?",
                    options: ["0", "1", "2", "3"],
                    answer: 2,
                    explanation: "A polynomial of degree n has at most n real zeros.",
                  },
                  {
                    id: "q3",
                    question: "If p(a) = 0, then (x − a) is a ______ of p(x).",
                    options: ["Multiple", "Factor", "Coefficient", "Remainder"],
                    answer: 1,
                    explanation: "By the Factor Theorem, if p(a) = 0 then (x − a) is a factor.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ────────────── CLASS 10 ──────────────
  {
    id: "10",
    label: "Class 10",
    description: "Board preparation & advanced topics",
    icon: "📗",
    subjects: [
      {
        id: "physics",
        label: "Physics",
        icon: "⚛️",
        color: "#3b82f6",
        chapters: [
          {
            id: "light",
            label: "Light – Reflection & Refraction",
            description: "Mirrors, lenses and image formation",
            topics: [
              {
                id: "reflection",
                label: "Reflection of Light",
                description: "Laws of reflection, types of mirrors",
                questions: [
                  {
                    id: "q1",
                    question: "Angle of incidence equals angle of reflection is the:",
                    options: [
                      "Law of refraction",
                      "Law of reflection",
                      "Snell's law",
                      "Law of diffraction",
                    ],
                    answer: 1,
                    explanation: "This is the first law of reflection.",
                  },
                  {
                    id: "q2",
                    question: "A concave mirror can form:",
                    options: [
                      "Only real images",
                      "Only virtual images",
                      "Both real and virtual images",
                      "No images",
                    ],
                    answer: 2,
                    explanation:
                      "A concave mirror forms real images (object beyond F) and virtual images (object between P and F).",
                  },
                  {
                    id: "q3",
                    question:
                      "Image formed by a plane mirror is always:",
                    options: [
                      "Real & inverted",
                      "Virtual & erect",
                      "Real & erect",
                      "Virtual & inverted",
                    ],
                    answer: 1,
                    explanation:
                      "Plane mirrors always produce virtual, erect, laterally inverted images.",
                  },
                ],
              },
              {
                id: "refraction",
                label: "Refraction of Light",
                description: "Snell's law and refractive index",
                questions: [
                  {
                    id: "q1",
                    question: "Refractive index of air is approximately:",
                    options: ["0", "0.5", "1", "1.5"],
                    answer: 2,
                    explanation: "The refractive index of air/vacuum is approximately 1.",
                  },
                  {
                    id: "q2",
                    question:
                      "When light enters from a rarer to a denser medium it bends:",
                    options: [
                      "Away from normal",
                      "Towards normal",
                      "Does not bend",
                      "Reflects back",
                    ],
                    answer: 1,
                    explanation:
                      "Light bends towards the normal when going from rarer to denser medium.",
                  },
                  {
                    id: "q3",
                    question: "Snell's law relates to:",
                    options: ["Reflection", "Refraction", "Diffraction", "Polarisation"],
                    answer: 1,
                    explanation: "Snell's law: n₁ sin i = n₂ sin r describes refraction.",
                  },
                ],
              },
            ],
          },
          {
            id: "electricity",
            label: "Electricity",
            description: "Current, voltage, resistance & circuits",
            topics: [
              {
                id: "ohms-law",
                label: "Ohm's Law",
                description: "Relationship between V, I, and R",
                questions: [
                  {
                    id: "q1",
                    question: "Ohm's law states that V = :",
                    options: ["I/R", "IR", "R/I", "I²R"],
                    answer: 1,
                    explanation: "Ohm's law: V = I × R.",
                  },
                  {
                    id: "q2",
                    question: "SI unit of electric current is:",
                    options: ["Volt", "Ohm", "Ampere", "Watt"],
                    answer: 2,
                    explanation: "Electric current is measured in Amperes (A).",
                  },
                  {
                    id: "q3",
                    question:
                      "If V = 12 V and I = 3 A, then R = ?",
                    options: ["36 Ω", "4 Ω", "15 Ω", "9 Ω"],
                    answer: 1,
                    explanation: "R = V/I = 12/3 = 4 Ω.",
                  },
                ],
              },
              {
                id: "resistance",
                label: "Resistance & Resistivity",
                description: "Factors affecting resistance",
                questions: [
                  {
                    id: "q1",
                    question: "SI unit of resistance is:",
                    options: ["Ampere", "Volt", "Ohm", "Watt"],
                    answer: 2,
                    explanation: "Resistance is measured in Ohms (Ω).",
                  },
                  {
                    id: "q2",
                    question: "Resistivity depends on:",
                    options: ["Length", "Area", "Material", "Current"],
                    answer: 2,
                    explanation: "Resistivity is a property of the material, not dimensions.",
                  },
                  {
                    id: "q3",
                    question:
                      "In a series circuit, total resistance is:",
                    options: [
                      "R₁ × R₂",
                      "R₁ + R₂",
                      "1/R₁ + 1/R₂",
                      "R₁ − R₂",
                    ],
                    answer: 1,
                    explanation: "Series: R_total = R₁ + R₂ + R₃ + …",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chemistry",
        label: "Chemistry",
        icon: "🧪",
        color: "#10b981",
        chapters: [
          {
            id: "chemical-reactions",
            label: "Chemical Reactions & Equations",
            description: "Types of reactions & balancing equations",
            topics: [
              {
                id: "types-of-reactions",
                label: "Types of Reactions",
                description: "Combination, decomposition, displacement",
                questions: [
                  {
                    id: "q1",
                    question:
                      "2H₂ + O₂ → 2H₂O is a ______ reaction.",
                    options: ["Decomposition", "Combination", "Displacement", "Redox"],
                    answer: 1,
                    explanation: "Two reactants combine to form one product — combination reaction.",
                  },
                  {
                    id: "q2",
                    question: "Rusting of iron is an example of:",
                    options: ["Reduction", "Oxidation", "Neutralisation", "Combustion"],
                    answer: 1,
                    explanation: "Iron reacts with oxygen and moisture — oxidation (corrosion).",
                  },
                  {
                    id: "q3",
                    question:
                      "In a decomposition reaction, a single reactant breaks into:",
                    options: [
                      "One product",
                      "Two or more products",
                      "No products",
                      "Same substance",
                    ],
                    answer: 1,
                    explanation: "Decomposition: AB → A + B (one reactant → multiple products).",
                  },
                ],
              },
              {
                id: "balancing",
                label: "Balancing Equations",
                description: "Law of conservation of mass",
                questions: [
                  {
                    id: "q1",
                    question:
                      "A balanced chemical equation has equal number of ______ on both sides.",
                    options: ["Molecules", "Atoms", "Moles", "Electrons"],
                    answer: 1,
                    explanation:
                      "By the law of conservation of mass, atoms must be equal on both sides.",
                  },
                  {
                    id: "q2",
                    question: "The balanced form of Fe + O₂ → Fe₂O₃ is:",
                    options: [
                      "2Fe + O₂ → Fe₂O₃",
                      "4Fe + 3O₂ → 2Fe₂O₃",
                      "Fe + O₂ → Fe₂O₃",
                      "3Fe + 2O₂ → Fe₃O₄",
                    ],
                    answer: 1,
                    explanation: "4Fe + 3O₂ → 2Fe₂O₃ balances Fe and O atoms.",
                  },
                  {
                    id: "q3",
                    question:
                      "Which law states that mass cannot be created or destroyed?",
                    options: [
                      "Law of definite proportions",
                      "Law of conservation of mass",
                      "Avogadro's law",
                      "Law of multiple proportions",
                    ],
                    answer: 1,
                    explanation:
                      "Lavoisier's law of conservation of mass underpins equation balancing.",
                  },
                ],
              },
            ],
          },
          {
            id: "acids-bases",
            label: "Acids, Bases & Salts",
            description: "pH scale, indicators and neutralisation",
            topics: [
              {
                id: "ph-scale",
                label: "pH Scale",
                description: "Measuring acidity and basicity",
                questions: [
                  {
                    id: "q1",
                    question: "pH of pure water is:",
                    options: ["0", "7", "14", "1"],
                    answer: 1,
                    explanation: "Pure water is neutral with a pH of 7.",
                  },
                  {
                    id: "q2",
                    question: "A solution with pH 3 is:",
                    options: ["Neutral", "Basic", "Acidic", "Alkaline"],
                    answer: 2,
                    explanation: "pH < 7 indicates an acidic solution.",
                  },
                  {
                    id: "q3",
                    question: "As pH increases from 7 to 14, the solution becomes more:",
                    options: ["Acidic", "Neutral", "Basic", "Concentrated"],
                    answer: 2,
                    explanation: "pH 7–14 range indicates increasing basicity.",
                  },
                ],
              },
              {
                id: "indicators",
                label: "Indicators",
                description: "Litmus, phenolphthalein and colour changes",
                questions: [
                  {
                    id: "q1",
                    question: "Blue litmus turns red in:",
                    options: ["Base", "Salt", "Water", "Acid"],
                    answer: 3,
                    explanation: "Acids turn blue litmus paper red.",
                  },
                  {
                    id: "q2",
                    question: "Phenolphthalein is ______ in acidic solution.",
                    options: ["Pink", "Colourless", "Blue", "Yellow"],
                    answer: 1,
                    explanation: "Phenolphthalein remains colourless in acidic and neutral solutions.",
                  },
                  {
                    id: "q3",
                    question: "NaOH is a strong:",
                    options: ["Acid", "Salt", "Base", "Indicator"],
                    answer: 2,
                    explanation: "Sodium hydroxide (NaOH) is a strong base.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// ======================== HELPERS ========================

export function getClassById(classId: string) {
  return mcqData.find((c) => c.id === classId);
}

export function getSubjectData(classId: string, subjectId: string) {
  const cls = getClassById(classId);
  if (!cls) return null;
  const subject = cls.subjects.find((s) => s.id === subjectId);
  if (!subject) return null;
  return { cls, subject };
}

export function getChapterData(
  classId: string,
  subjectId: string,
  chapterId: string
) {
  const data = getSubjectData(classId, subjectId);
  if (!data) return null;
  const chapter = data.subject.chapters.find((c) => c.id === chapterId);
  if (!chapter) return null;
  return { ...data, chapter };
}

export function getTopicData(
  classId: string,
  subjectId: string,
  chapterId: string,
  topicId: string
) {
  const data = getChapterData(classId, subjectId, chapterId);
  if (!data) return null;
  const topic = data.chapter.topics.find((t) => t.id === topicId);
  if (!topic) return null;
  return { ...data, topic };
}

// counting helpers
export function countQuestions(chapters: Chapter[]): number {
  return chapters.reduce(
    (sum, ch) =>
      sum + ch.topics.reduce((tSum, t) => tSum + t.questions.length, 0),
    0
  );
}

export function countTopics(chapters: Chapter[]): number {
  return chapters.reduce((sum, ch) => sum + ch.topics.length, 0);
}

export function countChapterQuestions(chapter: Chapter): number {
  return chapter.topics.reduce((sum, t) => sum + t.questions.length, 0);
}