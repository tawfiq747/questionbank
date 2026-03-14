// ===================== TYPES =====================

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
}

export interface TopicData {
  label: string;
  description: string;
  questions: Question[];
}

export interface ChapterData {
  label: string;
  description: string;
  topics: Record<string, TopicData>;
}

export interface SubjectData {
  label: string;
  icon: string;
  color: string;
  description: string;
  chapters: Record<string, ChapterData>;
}

// ===================== SUBJECTS =====================

export const subjects: Record<string, SubjectData> = {
  // ──────────── PHYSICS ────────────
  physics: {
    label: "Physics",
    icon: "⚛️",
    color: "#3b82f6",
    description: "Mechanics, optics, electricity & more",
    chapters: {
      "chapter-1": {
        label: "ভৌত রাশি এবং পরিমাপ",
        description: "মাত্রা ও একক, পদার্থবিজ্ঞানের পরিসর এবং ক্রম বিকাশ, ভার্নিয়ার স্কেল ও ত্রুটি নির্ণয়",
        topics: {
          "মাত্রা ও একক": {
            label: "মাত্রা ও একক",
            description: "SI units, dimensional analysis",
            questions: [
              {
                id: "q1",
                question: "What is the SI unit of velocity?",
                options: ["m/s²", "m/s", "km/h", "cm/s"],
                correctIndex: 1,
                explanation: "Velocity is displacement per unit time, measured in m/s.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Speed is a ______ quantity.",
                options: ["Vector", "Scalar", "Tensor", "Dimensional"],
                correctIndex: 1,
                explanation: "Speed has only magnitude, no direction — scalar quantity.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "An object moves 20 m in 4 s. Average speed?",
                options: ["80 m/s", "5 m/s", "24 m/s", "16 m/s"],
                correctIndex: 1,
                explanation: "Average speed = 20/4 = 5 m/s.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "Velocity of a body can be negative when the body moves:",
                options: [
                  "In positive direction",
                  "In negative direction",
                  "Upward",
                  "In a circle",
                ],
                correctIndex: 1,
                explanation: "Velocity is negative when displacement is in the negative direction.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "If displacement is zero, average velocity is:",
                options: ["Maximum", "Minimum", "Zero", "Infinite"],
                correctIndex: 2,
                explanation: "Average velocity = total displacement / time. If displacement = 0, velocity = 0.",
                difficulty: "easy",
              },
            ],
          },
          "history-of-physics": {
            label: "পদার্থবিজ্ঞানের পরিসর এবং ক্রম বিকাশ",
            description: "History and scope of physics",
            questions: [
              {
                id: "q1",
                question: "SI unit of acceleration is:",
                options: ["m/s", "m/s²", "km/h", "m²/s"],
                correctIndex: 1,
                explanation: "Acceleration = Δv/Δt, unit is m/s².",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "When a body slows down, acceleration is:",
                options: ["Positive", "Zero", "Negative", "Infinite"],
                correctIndex: 2,
                explanation: "Deceleration = negative acceleration.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "A car goes from 0 to 20 m/s in 5 s. Acceleration?",
                options: ["2 m/s²", "4 m/s²", "10 m/s²", "100 m/s²"],
                correctIndex: 1,
                explanation: "a = (20 − 0)/5 = 4 m/s².",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "Uniform acceleration means:",
                options: [
                  "Speed is constant",
                  "Velocity changes equally in equal time intervals",
                  "Direction is constant",
                  "Object is at rest",
                ],
                correctIndex: 1,
                explanation: "Uniform acceleration → equal change in velocity per unit time.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "If velocity is constant, acceleration is:",
                options: ["Positive", "Negative", "Zero", "Variable"],
                correctIndex: 2,
                explanation: "No change in velocity → acceleration = 0.",
                difficulty: "easy",
              },
            ],
          },
          "vernier-scale": {
            label: "ভার্নিয়ার স্কেল ও ত্রুটি নির্ণয়",
            description: "Vernier calipers and error analysis",
            questions: [
              {
                id: "q1",
                question: "The least count of a Vernier caliper is:",
                options: ["1 mm", "0.1 mm", "0.01 mm", "0.001 mm"],
                correctIndex: 1,
                explanation: "Standard Vernier calipers have a least count of 0.1 mm.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Least count = 1 MSD −",
                options: ["1 VSD", "2 VSD", "0.5 VSD", "MSD/10"],
                correctIndex: 0,
                explanation: "Least count = 1 Main Scale Division − 1 Vernier Scale Division.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Systematic error can be:",
                options: ["Random", "Corrected", "Unpredictable", "Never eliminated"],
                correctIndex: 1,
                explanation: "Systematic errors are consistent and can be corrected once identified.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "Percentage error = (absolute error / mean value) × ?",
                options: ["10", "100", "1000", "1"],
                correctIndex: 1,
                explanation: "Percentage error = (absolute error / mean value) × 100.",
                difficulty: "easy",
              },
              {
                id: "q5",
                question: "Zero error in a Vernier caliper occurs when:",
                options: [
                  "The jaws are open",
                  "The jaws are closed but zero lines do not coincide",
                  "The scale is broken",
                  "The object is too large",
                ],
                correctIndex: 1,
                explanation: "Zero error occurs when the zero of the Vernier scale does not align with the zero of the main scale when jaws are closed.",
                difficulty: "hard",
              },
            ],
          },
        },
      },

      "chapter-2": {
        label: "গতি",
        description: "দূরত্ব, সরণ, বেগ, ত্বরণ, গতির সমীকরণ, মুক্ত পতন",
        topics: {
          "distance-displacement": {
            label: "দূরত্ব ও সরণ",
            description: "Distance vs displacement concepts",
            questions: [
              {
                id: "q1",
                question: "Displacement is a ______ quantity.",
                options: ["Scalar", "Vector", "Tensor", "Dimensionless"],
                correctIndex: 1,
                explanation: "Displacement has both magnitude and direction — it is a vector.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "A person walks 4 m East then 3 m North. Displacement magnitude?",
                options: ["7 m", "1 m", "5 m", "12 m"],
                correctIndex: 2,
                explanation: "Displacement = √(4² + 3²) = √25 = 5 m.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Distance is always:",
                options: ["Negative", "Zero", "Positive or zero", "Equal to displacement"],
                correctIndex: 2,
                explanation: "Distance is a scalar and is always positive or zero.",
                difficulty: "easy",
              },
            ],
          },
          "equations-of-motion": {
            label: "গতির সমীকরণ",
            description: "Kinematic equations for uniform acceleration",
            questions: [
              {
                id: "q1",
                question: "Which equation represents v = u + at?",
                options: [
                  "First equation of motion",
                  "Second equation of motion",
                  "Third equation of motion",
                  "Newton's second law",
                ],
                correctIndex: 0,
                explanation: "v = u + at is the first kinematic equation relating velocity and time.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "s = ut + ½at² is the ______ equation of motion.",
                options: ["First", "Second", "Third", "Fourth"],
                correctIndex: 1,
                explanation: "s = ut + ½at² is the second equation giving displacement.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "A ball is dropped from rest. After 3 s, velocity (g = 10 m/s²)?",
                options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
                correctIndex: 2,
                explanation: "v = u + gt = 0 + 10×3 = 30 m/s.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "v² = u² + 2as is used when ______ is not known.",
                options: ["velocity", "acceleration", "time", "displacement"],
                correctIndex: 2,
                explanation: "The third equation v² = u² + 2as does not involve time.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "Free fall acceleration on Earth is approximately:",
                options: ["5 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"],
                correctIndex: 1,
                explanation: "g ≈ 9.8 m/s² near Earth's surface.",
                difficulty: "easy",
              },
            ],
          },
          "projectile-motion": {
            label: "প্রাসের গতি",
            description: "Projectile and circular motion",
            questions: [
              {
                id: "q1",
                question: "In projectile motion, horizontal velocity is:",
                options: ["Increasing", "Decreasing", "Constant", "Zero"],
                correctIndex: 2,
                explanation: "No horizontal force acts, so horizontal velocity remains constant.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Maximum range of a projectile is at angle:",
                options: ["30°", "45°", "60°", "90°"],
                correctIndex: 1,
                explanation: "Range is maximum at 45° for a given initial speed.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "At the highest point of a projectile, vertical velocity is:",
                options: ["Maximum", "Minimum", "Zero", "Negative"],
                correctIndex: 2,
                explanation: "Vertical component becomes zero at the peak.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-3": {
        label: "বল",
        description: "নিউটনের গতিসূত্র, ঘর্ষণ, মহাকর্ষ",
        topics: {
          "newtons-laws": {
            label: "Newton's Laws",
            description: "Three laws of motion by Newton",
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
                correctIndex: 1,
                explanation: "First law → law of inertia.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "F = ma is from Newton's ______ law.",
                options: ["First", "Second", "Third", "Fourth"],
                correctIndex: 1,
                explanation: "Second law: Force = mass × acceleration.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "For every action there is an equal and opposite:",
                options: ["Force", "Reaction", "Acceleration", "Velocity"],
                correctIndex: 1,
                explanation: "Third law: action = −reaction.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "A body of mass 5 kg acted upon by 10 N. Acceleration?",
                options: ["2 m/s²", "50 m/s²", "15 m/s²", "0.5 m/s²"],
                correctIndex: 0,
                explanation: "a = F/m = 10/5 = 2 m/s².",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "Inertia depends on:",
                options: ["Velocity", "Acceleration", "Mass", "Force"],
                correctIndex: 2,
                explanation: "Inertia is directly proportional to mass.",
                difficulty: "easy",
              },
            ],
          },
          friction: {
            label: "ঘর্ষণ",
            description: "Types of friction and its effects",
            questions: [
              {
                id: "q1",
                question: "Friction always acts in the ______ of motion.",
                options: [
                  "Same direction",
                  "Opposite direction",
                  "Perpendicular",
                  "No fixed direction",
                ],
                correctIndex: 1,
                explanation: "Friction opposes relative motion.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Which friction is the smallest?",
                options: ["Static", "Sliding", "Rolling", "Fluid"],
                correctIndex: 2,
                explanation: "Rolling friction < sliding friction < static friction.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Friction can be reduced by:",
                options: [
                  "Increasing roughness",
                  "Using lubricants",
                  "Increasing weight",
                  "Increasing area",
                ],
                correctIndex: 1,
                explanation: "Lubricants reduce friction between surfaces.",
                difficulty: "easy",
              },
            ],
          },
          gravitation: {
            label: "মহাকর্ষ",
            description: "Newton's law of gravitation",
            questions: [
              {
                id: "q1",
                question: "Gravitational force between two bodies is proportional to:",
                options: [
                  "Sum of their masses",
                  "Product of their masses",
                  "Difference of their masses",
                  "Square root of masses",
                ],
                correctIndex: 1,
                explanation: "F = Gm₁m₂/r² — proportional to product of masses.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Value of universal gravitational constant G is:",
                options: [
                  "6.67 × 10⁻¹¹ N m² kg⁻²",
                  "9.8 m/s²",
                  "3 × 10⁸ m/s",
                  "1.6 × 10⁻¹⁹ C",
                ],
                correctIndex: 0,
                explanation: "G = 6.67 × 10⁻¹¹ N m² kg⁻².",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Weight of an object is zero at:",
                options: ["Earth's surface", "Earth's centre", "Moon's surface", "Sea level"],
                correctIndex: 1,
                explanation: "At Earth's centre, g = 0, so weight = mg = 0.",
                difficulty: "hard",
              },
            ],
          },
        },
      },

      "chapter-4": {
        label: "কাজ, শক্তি ও ক্ষমতা",
        description: "কাজের সংজ্ঞা, গতিশক্তি, বিভবশক্তি, শক্তির সংরক্ষণ, ক্ষমতা",
        topics: {
          "work-energy": {
            label: "কাজ ও শক্তি",
            description: "Definition and types of energy",
            questions: [
              {
                id: "q1",
                question: "Work done = Force × ?",
                options: ["Time", "Mass", "Displacement", "Velocity"],
                correctIndex: 2,
                explanation: "W = F × d (when force and displacement are parallel).",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "SI unit of work is:",
                options: ["Watt", "Joule", "Newton", "Pascal"],
                correctIndex: 1,
                explanation: "The SI unit of work and energy is the Joule (J).",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Kinetic energy = ?",
                options: ["mgh", "½mv²", "Fv", "mv"],
                correctIndex: 1,
                explanation: "KE = ½mv² where m is mass and v is velocity.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "If a body is at height h, its potential energy is:",
                options: ["½mv²", "mgh", "mv", "Fh"],
                correctIndex: 1,
                explanation: "Gravitational PE = mgh.",
                difficulty: "easy",
              },
              {
                id: "q5",
                question: "According to conservation of energy, total mechanical energy:",
                options: [
                  "Increases with time",
                  "Decreases with time",
                  "Remains constant",
                  "Becomes zero",
                ],
                correctIndex: 2,
                explanation: "In absence of non-conservative forces, total mechanical energy is conserved.",
                difficulty: "medium",
              },
            ],
          },
          power: {
            label: "ক্ষমতা",
            description: "Power and its applications",
            questions: [
              {
                id: "q1",
                question: "Power = Work / ?",
                options: ["Force", "Distance", "Time", "Mass"],
                correctIndex: 2,
                explanation: "Power = Work done / Time taken.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "SI unit of power is:",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                correctIndex: 2,
                explanation: "The SI unit of power is the Watt (W) = J/s.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "1 horsepower = ______ watts.",
                options: ["746", "1000", "500", "100"],
                correctIndex: 0,
                explanation: "1 horsepower ≈ 746 watts.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-5": {
        label: "পদার্থের অবস্থা ও চাপ",
        description: "কঠিন, তরল, বায়বীয় পদার্থ, চাপ, আর্কিমিডিসের সূত্র, প্লবতা",
        topics: {
          "states-of-matter": {
            label: "পদার্থের অবস্থা",
            description: "Solid, liquid, gas properties",
            questions: [
              {
                id: "q1",
                question: "Which state of matter has definite shape and volume?",
                options: ["Gas", "Liquid", "Solid", "Plasma"],
                correctIndex: 2,
                explanation: "Solids have both definite shape and definite volume.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Liquids have definite ______ but not definite shape.",
                options: ["Mass", "Volume", "Density", "Pressure"],
                correctIndex: 1,
                explanation: "Liquids have a fixed volume but take the shape of their container.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Plasma is considered the ______ state of matter.",
                options: ["First", "Second", "Third", "Fourth"],
                correctIndex: 3,
                explanation: "Plasma is the fourth state of matter, consisting of ionised gas.",
                difficulty: "medium",
              },
            ],
          },
          "pressure-archimedes": {
            label: "চাপ ও আর্কিমিডিসের সূত্র",
            description: "Pressure, buoyancy and Archimedes principle",
            questions: [
              {
                id: "q1",
                question: "Pressure = Force / ?",
                options: ["Volume", "Mass", "Area", "Time"],
                correctIndex: 2,
                explanation: "P = F/A — pressure is force per unit area.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "SI unit of pressure is:",
                options: ["Joule", "Newton", "Pascal", "Watt"],
                correctIndex: 2,
                explanation: "SI unit of pressure is Pascal (Pa) = N/m².",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Archimedes' principle states that buoyant force equals:",
                options: [
                  "Weight of the object",
                  "Weight of displaced fluid",
                  "Weight of the container",
                  "Pressure × volume",
                ],
                correctIndex: 1,
                explanation: "Buoyant force = weight of fluid displaced by the submerged object.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "An object floats when its density is ______ the fluid density.",
                options: ["Greater than", "Equal to or less than", "Ten times", "Unrelated to"],
                correctIndex: 1,
                explanation: "Objects float when their density ≤ density of the fluid.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "Atmospheric pressure at sea level is approximately:",
                options: ["1 Pa", "101325 Pa", "9.8 Pa", "760 Pa"],
                correctIndex: 1,
                explanation: "Standard atmospheric pressure = 101325 Pa ≈ 1 atm.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-6": {
        label: "তাপ",
        description: "তাপমাত্রা, তাপ প্রসারণ, তাপ সঞ্চালন, বাষ্পীভবন ও ঘনীভবন",
        topics: {
          "temperature-scales": {
            label: "তাপমাত্রা ও স্কেল",
            description: "Celsius, Kelvin, Fahrenheit scales",
            questions: [
              {
                id: "q1",
                question: "0°C = ______ K",
                options: ["0", "100", "273", "373"],
                correctIndex: 2,
                explanation: "K = °C + 273. So 0°C = 273 K.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "100°C = ______ K",
                options: ["100", "273", "373", "473"],
                correctIndex: 2,
                explanation: "100 + 273 = 373 K.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Boiling point of water in Fahrenheit is:",
                options: ["100°F", "180°F", "212°F", "373°F"],
                correctIndex: 2,
                explanation: "Water boils at 100°C = 212°F.",
                difficulty: "medium",
              },
            ],
          },
          "heat-transfer": {
            label: "তাপ সঞ্চালন",
            description: "Conduction, convection and radiation",
            questions: [
              {
                id: "q1",
                question: "Heat transfer in solids mainly occurs by:",
                options: ["Convection", "Radiation", "Conduction", "Reflection"],
                correctIndex: 2,
                explanation: "Conduction is the primary mode of heat transfer in solids.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Heat transfer in fluids mainly occurs by:",
                options: ["Conduction", "Convection", "Radiation", "Diffusion"],
                correctIndex: 1,
                explanation: "Convection (fluid movement) transfers heat in liquids and gases.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Radiation can transfer heat through:",
                options: ["Only solids", "Only fluids", "Vacuum", "Only dense media"],
                correctIndex: 2,
                explanation: "Radiation (electromagnetic waves) can travel through vacuum.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "Specific heat capacity of water is:",
                options: ["1 J/kg°C", "4200 J/kg°C", "1000 J/kg°C", "100 J/kg°C"],
                correctIndex: 1,
                explanation: "Water has a high specific heat capacity of 4200 J/kg°C.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-7": {
        label: "তরঙ্গ ও শব্দ",
        description: "তরঙ্গের বৈশিষ্ট্য, শব্দের বেগ, প্রতিধ্বনি, আল্ট্রাসনিক",
        topics: {
          "wave-properties": {
            label: "তরঙ্গের বৈশিষ্ট্য",
            description: "Amplitude, frequency, wavelength",
            questions: [
              {
                id: "q1",
                question: "Wave speed = frequency × ?",
                options: ["Amplitude", "Wavelength", "Time period", "Phase"],
                correctIndex: 1,
                explanation: "v = fλ — wave speed equals frequency times wavelength.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Sound waves are ______ waves.",
                options: ["Transverse", "Electromagnetic", "Longitudinal", "Surface"],
                correctIndex: 2,
                explanation: "Sound waves are longitudinal — particles vibrate parallel to wave direction.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Frequency is measured in:",
                options: ["Metre", "Hertz", "Second", "Newton"],
                correctIndex: 1,
                explanation: "Frequency is measured in Hertz (Hz) = cycles per second.",
                difficulty: "easy",
              },
            ],
          },
          "sound": {
            label: "শব্দ",
            description: "Speed of sound, echo, ultrasound",
            questions: [
              {
                id: "q1",
                question: "Speed of sound in air at 0°C is approximately:",
                options: ["330 m/s", "3×10⁸ m/s", "1500 m/s", "100 m/s"],
                correctIndex: 0,
                explanation: "Sound travels at about 330 m/s in air at 0°C.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Echo is formed due to ______ of sound.",
                options: ["Refraction", "Diffraction", "Reflection", "Absorption"],
                correctIndex: 2,
                explanation: "Echo occurs when sound reflects off a surface and returns to the listener.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Ultrasound frequency is greater than:",
                options: ["20 Hz", "200 Hz", "20,000 Hz", "200,000 Hz"],
                correctIndex: 2,
                explanation: "Ultrasound frequency > 20,000 Hz (above human hearing range).",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "The minimum distance required for an echo is:",
                options: ["10 m", "17 m", "34 m", "50 m"],
                correctIndex: 1,
                explanation: "A reflecting surface must be at least 17 m away for an echo to be heard (sound round trip at 340 m/s, with 0.1 s persistence).",
                difficulty: "hard",
              },
            ],
          },
        },
      },

      "chapter-8": {
        label: "আলোর প্রতিফলন",
        description: "প্রতিফলনের সূত্র, দর্পণ, প্রতিবিম্ব গঠন",
        topics: {
          "laws-of-reflection": {
            label: "প্রতিফলনের সূত্র",
            description: "Laws and types of reflection",
            questions: [
              {
                id: "q1",
                question: "Angle of incidence = ?",
                options: [
                  "Angle of refraction",
                  "Angle of reflection",
                  "Angle of deviation",
                  "90°",
                ],
                correctIndex: 1,
                explanation: "First law of reflection: angle of incidence = angle of reflection.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The image in a plane mirror is:",
                options: [
                  "Real and inverted",
                  "Virtual and erect",
                  "Real and erect",
                  "Virtual and inverted",
                ],
                correctIndex: 1,
                explanation: "A plane mirror forms a virtual, erect, and laterally inverted image.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Focal length of a concave mirror of radius 20 cm is:",
                options: ["20 cm", "10 cm", "5 cm", "40 cm"],
                correctIndex: 1,
                explanation: "f = R/2 = 20/2 = 10 cm.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "A convex mirror always forms a ______ image.",
                options: [
                  "Real, inverted",
                  "Virtual, diminished",
                  "Real, enlarged",
                  "Virtual, enlarged",
                ],
                correctIndex: 1,
                explanation: "Convex mirrors always form virtual, erect, and diminished images.",
                difficulty: "medium",
              },
            ],
          },
          "mirrors": {
            label: "দর্পণ",
            description: "Concave and convex mirrors",
            questions: [
              {
                id: "q1",
                question: "Concave mirrors are used in:",
                options: ["Rear-view mirrors", "Torches", "ATM machines", "Windows"],
                correctIndex: 1,
                explanation: "Concave mirrors are used in torches, headlights and solar cookers.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Convex mirrors are used as:",
                options: [
                  "Shaving mirrors",
                  "Rear-view mirrors in vehicles",
                  "Solar collectors",
                  "Microscope mirrors",
                ],
                correctIndex: 1,
                explanation: "Convex mirrors provide a wider field of view — used as rear-view mirrors.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Mirror formula: 1/f = ?",
                options: ["1/v + 1/u", "1/v − 1/u", "v/u", "u/v"],
                correctIndex: 0,
                explanation: "Mirror formula: 1/f = 1/v + 1/u.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-9": {
        label: "আলোর প্রতিসরণ",
        description: "স্নেলের সূত্র, লেন্স, পূর্ণ অভ্যন্তরীণ প্রতিফলন",
        topics: {
          "refraction": {
            label: "আলোর প্রতিসরণ",
            description: "Snell's law and refractive index",
            questions: [
              {
                id: "q1",
                question: "Snell's law states: n₁ sin θ₁ = ?",
                options: ["n₂ sin θ₂", "n₂ cos θ₂", "n₁ cos θ₁", "n₂ tan θ₂"],
                correctIndex: 0,
                explanation: "Snell's law: n₁ sin θ₁ = n₂ sin θ₂.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Refractive index of glass is approximately:",
                options: ["1.0", "1.5", "2.0", "0.5"],
                correctIndex: 1,
                explanation: "Glass typically has a refractive index of about 1.5.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Total internal reflection occurs when light travels from:",
                options: [
                  "Rarer to denser medium",
                  "Denser to rarer medium beyond critical angle",
                  "Air to water",
                  "Vacuum to glass",
                ],
                correctIndex: 1,
                explanation: "TIR occurs when light hits the boundary of a denser-to-rarer medium at an angle exceeding the critical angle.",
                difficulty: "hard",
              },
            ],
          },
          "lenses": {
            label: "লেন্স",
            description: "Convex and concave lenses",
            questions: [
              {
                id: "q1",
                question: "A convex lens is also called a ______ lens.",
                options: ["Diverging", "Converging", "Concave", "Planar"],
                correctIndex: 1,
                explanation: "Convex lens converges parallel rays to a focal point.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Lens formula: 1/f = ?",
                options: ["1/v + 1/u", "1/v − 1/u", "v × u", "1/u − 1/v"],
                correctIndex: 1,
                explanation: "Lens formula: 1/f = 1/v − 1/u.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Power of a lens of focal length 0.5 m is:",
                options: ["0.5 D", "1 D", "2 D", "5 D"],
                correctIndex: 2,
                explanation: "P = 1/f = 1/0.5 = 2 diopters.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "Concave lenses are used to correct:",
                options: ["Hypermetropia", "Myopia", "Astigmatism", "Colour blindness"],
                correctIndex: 1,
                explanation: "Concave (diverging) lenses correct short-sightedness (myopia).",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-10": {
        label: "স্থির বিদ্যুৎ",
        description: "কুলম্বের সূত্র, বৈদ্যুতিক ক্ষেত্র, বিভব",
        topics: {
          "coulombs-law": {
            label: "কুলম্বের সূত্র",
            description: "Electrostatic force between charges",
            questions: [
              {
                id: "q1",
                question: "Like charges:",
                options: ["Attract each other", "Repel each other", "Have no effect", "Cancel out"],
                correctIndex: 1,
                explanation: "Like charges repel; unlike charges attract.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "SI unit of electric charge is:",
                options: ["Ampere", "Volt", "Coulomb", "Ohm"],
                correctIndex: 2,
                explanation: "The SI unit of charge is the Coulomb (C).",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Coulomb's force between charges is inversely proportional to:",
                options: ["Distance", "Square of distance", "Mass", "Velocity"],
                correctIndex: 1,
                explanation: "F ∝ 1/r² — force decreases with square of distance.",
                difficulty: "medium",
              },
            ],
          },
          "electric-field": {
            label: "বৈদ্যুতিক ক্ষেত্র ও বিভব",
            description: "Electric field and potential",
            questions: [
              {
                id: "q1",
                question: "Electric field is defined as force per unit:",
                options: ["Mass", "Charge", "Area", "Volume"],
                correctIndex: 1,
                explanation: "E = F/q — electric field = force per unit positive charge.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "SI unit of electric field is:",
                options: ["V/m or N/C", "J/C", "C/m²", "Ohm"],
                correctIndex: 0,
                explanation: "Electric field is measured in V/m or equivalently N/C.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Electric potential is a ______ quantity.",
                options: ["Vector", "Scalar", "Tensor", "Dimensionless"],
                correctIndex: 1,
                explanation: "Electric potential is a scalar quantity measured in Volts.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-11": {
        label: "চল বিদ্যুৎ",
        description: "ওহমের সূত্র, রোধ, বর্তনী, তড়িৎ ক্ষমতা",
        topics: {
          "ohms-law": {
            label: "ওহমের সূত্র",
            description: "Current, voltage and resistance",
            questions: [
              {
                id: "q1",
                question: "Ohm's law states V = ?",
                options: ["I/R", "IR", "I + R", "I² R"],
                correctIndex: 1,
                explanation: "V = IR — voltage equals current times resistance.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "SI unit of resistance is:",
                options: ["Ampere", "Volt", "Ohm", "Watt"],
                correctIndex: 2,
                explanation: "Resistance is measured in Ohms (Ω).",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "In a series circuit, total resistance is:",
                options: [
                  "Sum of all resistances",
                  "Product of resistances",
                  "Less than smallest resistance",
                  "Equal to smallest resistance",
                ],
                correctIndex: 0,
                explanation: "Series: R_total = R₁ + R₂ + R₃ ...",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "In a parallel circuit, total resistance is:",
                options: [
                  "Sum of resistances",
                  "Less than the smallest resistance",
                  "Equal to largest resistance",
                  "Product of resistances",
                ],
                correctIndex: 1,
                explanation: "1/R_total = 1/R₁ + 1/R₂ — total resistance is less than any individual resistance.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "Electric power P = ?",
                options: ["VI", "V/I", "I/V", "V²/I"],
                correctIndex: 0,
                explanation: "P = VI = I²R = V²/R.",
                difficulty: "easy",
              },
            ],
          },
          "circuits": {
            label: "বর্তনী ও তড়িৎ ক্ষমতা",
            description: "Circuits and electrical energy",
            questions: [
              {
                id: "q1",
                question: "A 100 W bulb used for 2 hours consumes:",
                options: ["100 J", "200 J", "720000 J", "72000 J"],
                correctIndex: 2,
                explanation: "E = P × t = 100 W × 7200 s = 720,000 J.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "A fuse wire has ______ resistance and ______ melting point.",
                options: [
                  "High, high",
                  "Low, low",
                  "High, low",
                  "Low, high",
                ],
                correctIndex: 1,
                explanation: "Fuse wire has low resistance and low melting point to melt quickly under excess current.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "The unit of electrical energy consumed is:",
                options: ["Watt", "Joule", "kWh", "Ampere"],
                correctIndex: 2,
                explanation: "Household electrical energy is billed in kilowatt-hours (kWh).",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-12": {
        label: "চৌম্বকত্ব",
        description: "চুম্বক, চৌম্বক ক্ষেত্র, তড়িৎচুম্বক আবেশ",
        topics: {
          "magnetism": {
            label: "চুম্বক ও চৌম্বক ক্ষেত্র",
            description: "Magnets, magnetic field and force",
            questions: [
              {
                id: "q1",
                question: "Like magnetic poles:",
                options: ["Attract", "Repel", "Have no effect", "Cancel"],
                correctIndex: 1,
                explanation: "Like poles repel; unlike poles attract.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "A freely suspended magnet aligns in the ______ direction.",
                options: ["East-West", "North-South", "Vertical", "Random"],
                correctIndex: 1,
                explanation: "A bar magnet aligns along Earth's magnetic North-South axis.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "SI unit of magnetic field strength is:",
                options: ["Ampere", "Tesla", "Volt", "Ohm"],
                correctIndex: 1,
                explanation: "Magnetic field (B) is measured in Tesla (T).",
                difficulty: "medium",
              },
            ],
          },
          "electromagnetic-induction": {
            label: "তড়িৎচুম্বক আবেশ",
            description: "Faraday's law and electromagnetic induction",
            questions: [
              {
                id: "q1",
                question: "Electromagnetic induction was discovered by:",
                options: ["Newton", "Faraday", "Einstein", "Ohm"],
                correctIndex: 1,
                explanation: "Michael Faraday discovered electromagnetic induction in 1831.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "A generator converts ______ energy to ______ energy.",
                options: [
                  "Electrical, mechanical",
                  "Mechanical, electrical",
                  "Chemical, electrical",
                  "Heat, electrical",
                ],
                correctIndex: 1,
                explanation: "A generator converts mechanical energy into electrical energy.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Lenz's law is related to:",
                options: [
                  "Direction of induced current",
                  "Magnitude of induced current",
                  "Resistance of coil",
                  "Voltage of battery",
                ],
                correctIndex: 0,
                explanation: "Lenz's law states the induced current opposes the change causing it.",
                difficulty: "hard",
              },
            ],
          },
        },
      },

      "chapter-13": {
        label: "আধুনিক পদার্থবিজ্ঞান",
        description: "তেজস্ক্রিয়তা, পারমাণবিক গঠন, কোয়ান্টাম ধারণা",
        topics: {
          "radioactivity": {
            label: "তেজস্ক্রিয়তা",
            description: "Radioactive decay, alpha, beta, gamma",
            questions: [
              {
                id: "q1",
                question: "Alpha particles consist of:",
                options: ["2 protons + 2 neutrons", "Electrons", "Photons", "Protons only"],
                correctIndex: 0,
                explanation: "Alpha particle = helium-4 nucleus = 2 protons + 2 neutrons.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Which radiation has the highest penetrating power?",
                options: ["Alpha", "Beta", "Gamma", "All equal"],
                correctIndex: 2,
                explanation: "Gamma rays are electromagnetic and have the highest penetrating power.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Half-life is the time for half the nuclei to:",
                options: ["Gain energy", "Decay", "Fission", "Absorb neutrons"],
                correctIndex: 1,
                explanation: "Half-life is the time for half the radioactive nuclei to decay.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "Nuclear fission is the splitting of:",
                options: ["Electrons", "Molecules", "Heavy nuclei", "Light nuclei"],
                correctIndex: 2,
                explanation: "Nuclear fission is the splitting of heavy nuclei (e.g., U-235) releasing energy.",
                difficulty: "medium",
              },
            ],
          },
          "atomic-structure": {
            label: "পারমাণবিক গঠন",
            description: "Atomic models and quantum concepts",
            questions: [
              {
                id: "q1",
                question: "The nucleus of an atom contains:",
                options: ["Electrons only", "Protons and neutrons", "Neutrons only", "Electrons and protons"],
                correctIndex: 1,
                explanation: "The nucleus contains protons and neutrons; electrons orbit outside.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Atomic number is the number of ______ in the nucleus.",
                options: ["Neutrons", "Protons", "Electrons", "Nucleons"],
                correctIndex: 1,
                explanation: "Atomic number Z = number of protons.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Isotopes have the same ______ but different ______.",
                options: [
                  "Mass number, atomic number",
                  "Atomic number, mass number",
                  "Neutrons, protons",
                  "Electrons, protons",
                ],
                correctIndex: 1,
                explanation: "Isotopes: same atomic number (protons), different mass number (neutrons differ).",
                difficulty: "medium",
              },
            ],
          },
        },
      },
    },
  },

  // ──────────── MATH ────────────
  math: {
    label: "Mathematics",
    icon: "📐",
    color: "#f59e0b",
    description: "Algebra, geometry, trigonometry & more",
    chapters: {
      "chapter-1": {
        label: "Number Systems",
        description: "Real numbers, rational & irrational numbers",
        topics: {
          "real-numbers": {
            label: "Real Numbers",
            description: "Properties of the real number system",
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
                correctIndex: 2,
                explanation: "All rational numbers are real numbers.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Which is irrational?",
                options: ["0.5", "√4", "√2", "3/7"],
                correctIndex: 2,
                explanation: "√2 ≈ 1.41421… non-terminating, non-recurring.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "The decimal expansion of 1/3 is:",
                options: [
                  "Terminating",
                  "Non-terminating recurring",
                  "Non-terminating non-recurring",
                  "None",
                ],
                correctIndex: 1,
                explanation: "1/3 = 0.333… recurring.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "Between 1 and 2, how many irrationals exist?",
                options: ["10", "100", "0", "Infinitely many"],
                correctIndex: 3,
                explanation: "Infinitely many irrationals exist between any two reals.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "π is:",
                options: ["Rational", "Irrational", "Natural", "Integer"],
                correctIndex: 1,
                explanation: "π = 3.14159… is non-terminating, non-recurring → irrational.",
                difficulty: "easy",
              },
            ],
          },
          "irrational-numbers": {
            label: "Irrational Numbers",
            description: "Surds and their properties",
            questions: [
              {
                id: "q1",
                question: "√9 is:",
                options: ["Irrational", "Rational", "Complex", "None"],
                correctIndex: 1,
                explanation: "√9 = 3, a rational number.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Product of two irrationals is:",
                options: [
                  "Always irrational",
                  "Always rational",
                  "Sometimes rational",
                  "Always zero",
                ],
                correctIndex: 2,
                explanation: "√2 × √2 = 2 (rational), but √2 × √3 = √6 (irrational).",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "√5 + √5 = ?",
                options: ["√10", "2√5", "5", "√25"],
                correctIndex: 1,
                explanation: "√5 + √5 = 2√5.",
                difficulty: "easy",
              },
            ],
          },
        },
      },
    },
  },

  // ──────────── BANGLADESH & GLOBAL STUDIES ────────────
  bangladesh: {
    label: "বাংলাদেশ ও বিশ্বপরিচয়",
    icon: "🌏",
    color: "#10b981",
    description: "History, geography, civics & economics of Bangladesh",
    chapters: {
      "chapter-1": {
        label: "পূর্ব বাংলার আন্দোলন ও জাতীয়তাবাদের উত্থান (১৯৪৭–১৯৭০)",
        description: "Language movement, political developments and rise of nationalism",
        topics: {
          "language-movement": {
            label: "ভাষা আন্দোলন",
            description: "1952 Language Movement and its significance",
            questions: [
              {
                id: "q1",
                question: "The Language Movement took place in:",
                options: ["1947", "1952", "1971", "1969"],
                correctIndex: 1,
                explanation: "The Bengali Language Movement reached its climax on 21 February 1952.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "International Mother Language Day is observed on:",
                options: ["16 December", "26 March", "21 February", "7 March"],
                correctIndex: 2,
                explanation: "21 February is observed as International Mother Language Day, in honour of the 1952 martyrs.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "The demand of the 1952 Language Movement was to make ______ a state language.",
                options: ["Urdu", "English", "Bengali", "Hindi"],
                correctIndex: 2,
                explanation: "The movement demanded Bengali be recognised as a state language of Pakistan.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "The Six-Point Programme was announced by:",
                options: ["Maulana Bhashani", "Sheikh Mujibur Rahman", "Huseyn Shaheed Suhrawardy", "Zulfikar Ali Bhutto"],
                correctIndex: 1,
                explanation: "Sheikh Mujibur Rahman announced the Six-Point Programme in 1966 as a charter of autonomy for East Pakistan.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "The Mass Uprising (গণঅভ্যুত্থান) occurred in:",
                options: ["1952", "1966", "1969", "1971"],
                correctIndex: 2,
                explanation: "The Mass Uprising of 1969 led to the fall of Ayub Khan's government.",
                difficulty: "medium",
              },
            ],
          },
          "elections-1970": {
            label: "১৯৭০ সালের নির্বাচন",
            description: "1970 General Election and its outcome",
            questions: [
              {
                id: "q1",
                question: "In the 1970 general election, the Awami League won ______ seats in the National Assembly.",
                options: ["100", "160", "167", "300"],
                correctIndex: 2,
                explanation: "The Awami League won 167 out of 169 East Pakistan seats in the 1970 election.",
                difficulty: "hard",
              },
              {
                id: "q2",
                question: "The 1970 election was held under the government of:",
                options: ["Ayub Khan", "Yahya Khan", "Zulfikar Ali Bhutto", "Tikka Khan"],
                correctIndex: 1,
                explanation: "Yahya Khan's military government held the 1970 general elections.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-2": {
        label: "বাংলাদেশের স্বাধীনতা",
        description: "Liberation War 1971, declaration of independence, role of Mukti Bahini",
        topics: {
          "liberation-war": {
            label: "মুক্তিযুদ্ধ ১৯৭১",
            description: "The 1971 Liberation War",
            questions: [
              {
                id: "q1",
                question: "Bangladesh declared independence on:",
                options: ["21 February 1971", "7 March 1971", "26 March 1971", "16 December 1971"],
                correctIndex: 2,
                explanation: "Bangladesh declared independence on 26 March 1971.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Victory Day of Bangladesh is celebrated on:",
                options: ["26 March", "16 December", "21 February", "7 March"],
                correctIndex: 1,
                explanation: "Bangladesh achieved victory on 16 December 1971 when Pakistani forces surrendered.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Operation Searchlight was launched by Pakistan on:",
                options: ["25 March 1971", "26 March 1971", "16 December 1971", "7 March 1971"],
                correctIndex: 0,
                explanation: "Pakistan Army launched Operation Searchlight on the night of 25 March 1971.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "The provisional government of Bangladesh was formed in:",
                options: ["Dhaka", "Mujibnagar", "Chittagong", "Sylhet"],
                correctIndex: 1,
                explanation: "Bangladesh's provisional government was formed at Mujibnagar on 17 April 1971.",
                difficulty: "medium",
              },
              {
                id: "q5",
                question: "The historic speech of 7 March was delivered by:",
                options: ["Ziaur Rahman", "Tajuddin Ahmad", "Sheikh Mujibur Rahman", "A.K. Fazlul Haq"],
                correctIndex: 2,
                explanation: "Sheikh Mujibur Rahman delivered the historic 7 March speech at the Race Course Ground.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-3": {
        label: "সৌরজগৎ ও ভূমন্ডল",
        description: "Solar system, Earth's structure and movements",
        topics: {
          "solar-system": {
            label: "সৌরজগৎ",
            description: "Planets, satellites and the Sun",
            questions: [
              {
                id: "q1",
                question: "How many planets are in our solar system?",
                options: ["7", "8", "9", "10"],
                correctIndex: 1,
                explanation: "There are 8 planets in our solar system (Pluto was reclassified as a dwarf planet in 2006).",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The largest planet in the solar system is:",
                options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
                correctIndex: 2,
                explanation: "Jupiter is the largest planet in our solar system.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Earth revolves around the Sun in approximately:",
                options: ["24 hours", "365 days", "28 days", "30 days"],
                correctIndex: 1,
                explanation: "Earth takes approximately 365.25 days to complete one revolution around the Sun.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "The natural satellite of Earth is:",
                options: ["Mars", "Venus", "The Moon", "Pluto"],
                correctIndex: 2,
                explanation: "The Moon is Earth's only natural satellite.",
                difficulty: "easy",
              },
            ],
          },
          "earth-structure": {
            label: "ভূমন্ডল",
            description: "Earth's layers, rotation and revolution",
            questions: [
              {
                id: "q1",
                question: "Day and night are caused by Earth's:",
                options: ["Revolution", "Rotation", "Tilt", "Orbit"],
                correctIndex: 1,
                explanation: "Earth's rotation on its axis (once in ~24 hours) causes day and night.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Seasons are caused by Earth's:",
                options: ["Rotation", "Magnetic field", "Tilted axis and revolution", "Distance from Sun"],
                correctIndex: 2,
                explanation: "Seasons result from Earth's tilted axis (23.5°) combined with its revolution around the Sun.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "The outermost layer of the Earth is called:",
                options: ["Mantle", "Core", "Crust", "Asthenosphere"],
                correctIndex: 2,
                explanation: "The crust is the outermost solid layer of the Earth.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-4": {
        label: "বাংলাদেশের ভূপ্রকৃতি ও জলবায়ু",
        description: "Geographical features and climate of Bangladesh",
        topics: {
          "geography": {
            label: "বাংলাদেশের ভূপ্রকৃতি",
            description: "Physical geography of Bangladesh",
            questions: [
              {
                id: "q1",
                question: "Most of Bangladesh is covered by:",
                options: ["Highlands", "Desert", "Alluvial plains", "Mountains"],
                correctIndex: 2,
                explanation: "Bangladesh is predominantly a flat alluvial delta formed by the Ganges-Brahmaputra river system.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The highest peak of Bangladesh is:",
                options: ["Keokradong", "Tajingdong (Bijoy)", "Sitakund", "Modak Mual"],
                correctIndex: 1,
                explanation: "Tajingdong (also known as Bijoy) in the Chittagong Hill Tracts is the highest peak at about 1,231 m.",
                difficulty: "hard",
              },
              {
                id: "q3",
                question: "The Sundarbans is the world's largest:",
                options: ["Desert", "Coral reef", "Mangrove forest", "Rainforest"],
                correctIndex: 2,
                explanation: "The Sundarbans is the world's largest mangrove forest, shared by Bangladesh and India.",
                difficulty: "easy",
              },
            ],
          },
          "climate": {
            label: "বাংলাদেশের জলবায়ু",
            description: "Climate and monsoon of Bangladesh",
            questions: [
              {
                id: "q1",
                question: "Bangladesh has a ______ climate.",
                options: ["Arid", "Polar", "Tropical monsoon", "Mediterranean"],
                correctIndex: 2,
                explanation: "Bangladesh experiences a tropical monsoon climate with distinct wet and dry seasons.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The monsoon season in Bangladesh is from:",
                options: ["December to February", "March to May", "June to October", "November to January"],
                correctIndex: 2,
                explanation: "The monsoon (বর্ষা) season in Bangladesh generally runs from June to October.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "The main natural disaster frequently affecting Bangladesh is:",
                options: ["Earthquake", "Volcanic eruption", "Flood", "Drought"],
                correctIndex: 2,
                explanation: "Flooding is the most frequent and impactful natural disaster in Bangladesh due to its low-lying delta geography.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-5": {
        label: "বাংলাদেশের নদ-নদী ও প্রাকৃতিক সম্পদ",
        description: "Rivers, wetlands and natural resources of Bangladesh",
        topics: {
          "rivers": {
            label: "নদ-নদী",
            description: "Major rivers of Bangladesh",
            questions: [
              {
                id: "q1",
                question: "The longest river in Bangladesh is:",
                options: ["Padma", "Surma", "Meghna", "Brahmaputra (Jamuna)"],
                correctIndex: 3,
                explanation: "The Brahmaputra (called Jamuna in Bangladesh) is the longest river flowing through Bangladesh.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "The Padma is the distributary of which river?",
                options: ["Brahmaputra", "Meghna", "Ganges", "Teesta"],
                correctIndex: 2,
                explanation: "The Padma is the main distributary of the Ganges river entering Bangladesh.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "The Bay of Bengal is located to the ______ of Bangladesh.",
                options: ["North", "East", "West", "South"],
                correctIndex: 3,
                explanation: "The Bay of Bengal forms the southern boundary of Bangladesh.",
                difficulty: "easy",
              },
            ],
          },
          "natural-resources": {
            label: "প্রাকৃতিক সম্পদ",
            description: "Natural resources of Bangladesh",
            questions: [
              {
                id: "q1",
                question: "Bangladesh's main mineral resource used for energy is:",
                options: ["Coal", "Natural gas", "Oil", "Uranium"],
                correctIndex: 1,
                explanation: "Natural gas is Bangladesh's most significant mineral resource for energy production.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Bangladesh is one of the world's largest producers of:",
                options: ["Wheat", "Rice", "Jute", "Cotton"],
                correctIndex: 2,
                explanation: "Bangladesh is historically one of the largest producers and exporters of jute.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-6": {
        label: "রাষ্ট্র, নাগরিকতা ও আইন",
        description: "Concept of state, citizenship rights and rule of law",
        topics: {
          "state-citizenship": {
            label: "রাষ্ট্র ও নাগরিকতা",
            description: "State elements and citizenship",
            questions: [
              {
                id: "q1",
                question: "The four essential elements of a state are:",
                options: [
                  "Population, territory, government, sovereignty",
                  "Army, police, court, government",
                  "President, parliament, court, army",
                  "Capital, currency, flag, language",
                ],
                correctIndex: 0,
                explanation: "A state requires four elements: population, territory, government, and sovereignty.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Citizenship by birth means a person is a citizen because they were:",
                options: [
                  "Registered at a government office",
                  "Born within the country's territory",
                  "Married to a citizen",
                  "Awarded citizenship for service",
                ],
                correctIndex: 1,
                explanation: "Jus soli (right of the soil) grants citizenship based on place of birth.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Rule of law means:",
                options: [
                  "The ruler makes all laws",
                  "All people are equally subject to the law",
                  "Laws change based on the government",
                  "Military rules the country",
                ],
                correctIndex: 1,
                explanation: "Rule of law means no one is above the law — all persons and institutions are accountable to law.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-7": {
        label: "বাংলাদেশ সরকারের বিভিন্ন অঙ্গ ও প্রশাসন ব্যবস্থা",
        description: "Three branches of government and administrative system",
        topics: {
          "branches-of-government": {
            label: "সরকারের অঙ্গসমূহ",
            description: "Legislature, executive and judiciary",
            questions: [
              {
                id: "q1",
                question: "The three branches of government are:",
                options: [
                  "President, Prime Minister, Parliament",
                  "Legislature, Executive, Judiciary",
                  "Army, Police, Court",
                  "Union, District, Division",
                ],
                correctIndex: 1,
                explanation: "The three branches are the Legislature (makes laws), Executive (implements laws), and Judiciary (interprets laws).",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The Parliament of Bangladesh is known as:",
                options: ["Rajya Sabha", "Senate", "Jatiya Sangsad", "Majlis"],
                correctIndex: 2,
                explanation: "Bangladesh's parliament is called the Jatiya Sangsad (জাতীয় সংসদ).",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "The highest court in Bangladesh is the:",
                options: ["District Court", "Sessions Court", "High Court", "Supreme Court"],
                correctIndex: 3,
                explanation: "The Supreme Court of Bangladesh is the apex court, comprising the Appellate Division and High Court Division.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "The smallest administrative unit in Bangladesh is:",
                options: ["District", "Upazila", "Union", "Village"],
                correctIndex: 2,
                explanation: "The Union Parishad is the lowest tier of local government in Bangladesh.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-8": {
        label: "বাংলাদেশের গণতন্ত্র ও নির্বাচন",
        description: "Democracy, elections and the Election Commission",
        topics: {
          "democracy": {
            label: "গণতন্ত্র",
            description: "Principles and practice of democracy",
            questions: [
              {
                id: "q1",
                question: "Democracy literally means government of the:",
                options: ["Rich", "People", "Military", "Elite"],
                correctIndex: 1,
                explanation: "Democracy comes from Greek 'demos' (people) + 'kratos' (rule) — rule by the people.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The minimum voting age in Bangladesh is:",
                options: ["16", "18", "21", "25"],
                correctIndex: 1,
                explanation: "Citizens aged 18 and above are eligible to vote in Bangladesh.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Bangladesh follows a ______ system of government.",
                options: ["Presidential", "Parliamentary", "Federal", "Monarchical"],
                correctIndex: 1,
                explanation: "Bangladesh has a parliamentary system where the Prime Minister leads the government.",
                difficulty: "medium",
              },
            ],
          },
          "election-commission": {
            label: "নির্বাচন কমিশন",
            description: "Role and functions of the Election Commission",
            questions: [
              {
                id: "q1",
                question: "The Election Commission of Bangladesh is responsible for:",
                options: [
                  "Appointing ministers",
                  "Conducting free and fair elections",
                  "Making laws",
                  "Collecting taxes",
                ],
                correctIndex: 1,
                explanation: "The Election Commission conducts, supervises and controls elections in Bangladesh.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Members of the Jatiya Sangsad are elected for a term of:",
                options: ["3 years", "4 years", "5 years", "6 years"],
                correctIndex: 2,
                explanation: "Members of the Jatiya Sangsad serve a 5-year term.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-9": {
        label: "জাতিসংঘ ও বাংলাদেশ",
        description: "United Nations, its organs and Bangladesh's role",
        topics: {
          "united-nations": {
            label: "জাতিসংঘ",
            description: "UN founding, organs and objectives",
            questions: [
              {
                id: "q1",
                question: "The United Nations was founded in:",
                options: ["1939", "1945", "1947", "1952"],
                correctIndex: 1,
                explanation: "The United Nations was established on 24 October 1945.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The headquarters of the United Nations is in:",
                options: ["London", "Geneva", "New York", "Paris"],
                correctIndex: 2,
                explanation: "The UN headquarters is located in New York City, USA.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "The Security Council has ______ permanent members.",
                options: ["3", "4", "5", "10"],
                correctIndex: 2,
                explanation: "The five permanent members (P5) are USA, UK, France, Russia and China.",
                difficulty: "medium",
              },
              {
                id: "q4",
                question: "Bangladesh joined the United Nations in:",
                options: ["1971", "1972", "1974", "1976"],
                correctIndex: 2,
                explanation: "Bangladesh became a member of the UN on 17 September 1974.",
                difficulty: "medium",
              },
            ],
          },
          "bangladesh-un": {
            label: "জাতিসংঘে বাংলাদেশ",
            description: "Bangladesh's contributions to the UN",
            questions: [
              {
                id: "q1",
                question: "Bangladesh is one of the largest contributors to UN:",
                options: ["Security Council votes", "Peacekeeping missions", "Budget funding", "Resolutions"],
                correctIndex: 1,
                explanation: "Bangladesh is consistently one of the top contributors of troops to UN peacekeeping missions worldwide.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "UNICEF works for the welfare of:",
                options: ["Women", "Children", "Elderly", "Refugees"],
                correctIndex: 1,
                explanation: "UNICEF (United Nations Children's Fund) works for children's rights and welfare.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-10": {
        label: "জাতীয় সম্পদ ও অর্থনৈতিক ব্যবস্থা",
        description: "National resources, economic systems and sectors",
        topics: {
          "economic-systems": {
            label: "অর্থনৈতিক ব্যবস্থা",
            description: "Types of economic systems",
            questions: [
              {
                id: "q1",
                question: "In a capitalist economy, resources are owned by:",
                options: ["Government", "Private individuals", "Cooperatives", "Society equally"],
                correctIndex: 1,
                explanation: "In capitalism, the means of production are privately owned.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Bangladesh has a ______ economy.",
                options: ["Fully socialist", "Fully capitalist", "Mixed", "Command"],
                correctIndex: 2,
                explanation: "Bangladesh operates a mixed economy combining public and private sectors.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "The main export earner for Bangladesh is:",
                options: ["Rice", "Jute", "Ready-Made Garments (RMG)", "Fish"],
                correctIndex: 2,
                explanation: "The Ready-Made Garments (RMG) sector is Bangladesh's largest export industry.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-11": {
        label: "অর্থনৈতিক নির্দেশকসমূহ ও বাংলাদেশের অর্থনীতির প্রকৃতি",
        description: "Economic indicators: GDP, GNP, inflation, HDI",
        topics: {
          "economic-indicators": {
            label: "অর্থনৈতিক নির্দেশক",
            description: "Key macroeconomic indicators",
            questions: [
              {
                id: "q1",
                question: "GDP stands for:",
                options: [
                  "General Development Plan",
                  "Gross Domestic Product",
                  "Government Development Policy",
                  "Global Development Program",
                ],
                correctIndex: 1,
                explanation: "GDP = Gross Domestic Product — total value of goods and services produced in a country.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "HDI measures:",
                options: [
                  "Only economic growth",
                  "Military strength",
                  "Health, education and income",
                  "Natural resources",
                ],
                correctIndex: 2,
                explanation: "Human Development Index (HDI) combines life expectancy, education and per capita income.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Inflation means a general ______ in prices.",
                options: ["Fall", "Rise", "Stability", "Fluctuation"],
                correctIndex: 1,
                explanation: "Inflation is the sustained rise in the general price level of goods and services.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "Per capita income = Total national income / ?",
                options: ["GDP", "Area", "Total population", "Number of workers"],
                correctIndex: 2,
                explanation: "Per capita income = Total national income ÷ Total population.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-12": {
        label: "বাংলাদেশ সরকারের অর্থ ও ব্যাংক ব্যবস্থা",
        description: "Government finance, banking and Bangladesh Bank",
        topics: {
          "banking": {
            label: "ব্যাংক ব্যবস্থা",
            description: "Types of banks and their functions",
            questions: [
              {
                id: "q1",
                question: "The central bank of Bangladesh is:",
                options: ["Sonali Bank", "Janata Bank", "Bangladesh Bank", "BRAC Bank"],
                correctIndex: 2,
                explanation: "Bangladesh Bank is the central bank that regulates monetary policy and the banking system.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "Commercial banks primarily make profit by:",
                options: [
                  "Printing currency",
                  "Collecting taxes",
                  "Accepting deposits and giving loans",
                  "Buying government land",
                ],
                correctIndex: 2,
                explanation: "Commercial banks accept deposits and provide loans, earning profit from the interest rate difference.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Grameen Bank is famous for providing:",
                options: ["Industrial loans", "Micro-credit to the poor", "Home loans to the rich", "Foreign currency"],
                correctIndex: 1,
                explanation: "Grameen Bank pioneered micro-credit/microfinance to help the rural poor, especially women.",
                difficulty: "easy",
              },
            ],
          },
          "government-finance": {
            label: "সরকারি অর্থ",
            description: "Government budget and taxation",
            questions: [
              {
                id: "q1",
                question: "The government's annual financial plan is called the:",
                options: ["Balance sheet", "Budget", "Ledger", "Annual report"],
                correctIndex: 1,
                explanation: "The government budget is the annual statement of estimated revenues and expenditures.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "VAT stands for:",
                options: ["Value Added Tax", "Variable Asset Tax", "Volume Added Tax", "Value Adjusted Tariff"],
                correctIndex: 0,
                explanation: "VAT = Value Added Tax, a consumption tax levied at each stage of production.",
                difficulty: "easy",
              },
            ],
          },
        },
      },

      "chapter-13": {
        label: "বাংলাদেশের পরিবার কাঠামো ও সামাজিকীকরণ",
        description: "Family types, socialisation agents and cultural norms",
        topics: {
          "family-structure": {
            label: "পরিবার কাঠামো",
            description: "Types and functions of family",
            questions: [
              {
                id: "q1",
                question: "A nuclear family consists of:",
                options: [
                  "Parents, children, grandparents",
                  "Parents and their unmarried children",
                  "Three generations together",
                  "Only brothers and sisters",
                ],
                correctIndex: 1,
                explanation: "A nuclear family consists of parents (husband and wife) and their unmarried children.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "A joint family includes:",
                options: [
                  "Only parents and children",
                  "Multiple generations living together",
                  "Only siblings",
                  "Single parent and children",
                ],
                correctIndex: 1,
                explanation: "A joint family has multiple generations (grandparents, parents, children, uncles etc.) living together.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "The primary agent of socialisation is:",
                options: ["School", "Media", "Family", "Workplace"],
                correctIndex: 2,
                explanation: "The family is the first and primary agent of socialisation for a child.",
                difficulty: "easy",
              },
            ],
          },
          "socialisation": {
            label: "সামাজিকীকরণ",
            description: "Process and agents of socialisation",
            questions: [
              {
                id: "q1",
                question: "Socialisation is the process by which individuals:",
                options: [
                  "Learn to earn money",
                  "Acquire cultural norms and values",
                  "Get formal education",
                  "Gain political power",
                ],
                correctIndex: 1,
                explanation: "Socialisation is the lifelong process of learning cultural norms, values and behaviours.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Which is a secondary agent of socialisation?",
                options: ["Parents", "Siblings", "School", "Grandparents"],
                correctIndex: 2,
                explanation: "Schools are secondary agents of socialisation, following the primary role of the family.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-14": {
        label: "বাংলাদেশের সামাজিক পরিবর্তন",
        description: "Social change, urbanisation, migration and modernisation",
        topics: {
          "social-change": {
            label: "সামাজিক পরিবর্তন",
            description: "Causes and effects of social change",
            questions: [
              {
                id: "q1",
                question: "Which is a major cause of social change in Bangladesh?",
                options: [
                  "Decrease in population",
                  "Urbanisation and industrialisation",
                  "Reduction in trade",
                  "Decrease in literacy",
                ],
                correctIndex: 1,
                explanation: "Urbanisation and industrialisation are major drivers of social change in Bangladesh.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Urbanisation means movement of people from:",
                options: [
                  "City to city",
                  "Rural to urban areas",
                  "Urban to rural areas",
                  "Country to country",
                ],
                correctIndex: 1,
                explanation: "Urbanisation refers to the shift of population from rural areas to urban areas.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "The spread of education leads to:",
                options: [
                  "More superstitions",
                  "Less awareness",
                  "Social awareness and empowerment",
                  "Isolation from society",
                ],
                correctIndex: 2,
                explanation: "Education promotes social awareness, empowerment and positive social change.",
                difficulty: "easy",
              },
              {
                id: "q4",
                question: "Remittances refer to money sent by:",
                options: [
                  "Government to citizens",
                  "Overseas workers to their families",
                  "Banks to businesses",
                  "NGOs to poor families",
                ],
                correctIndex: 1,
                explanation: "Remittances are funds sent by Bangladeshi workers abroad to their families in Bangladesh.",
                difficulty: "medium",
              },
            ],
          },
        },
      },

      "chapter-15": {
        label: "বাংলাদেশের সামাজিক সমস্যা ও এর প্রতিকার",
        description: "Social problems: poverty, child marriage, dowry, drug abuse and remedies",
        topics: {
          "poverty": {
            label: "দারিদ্র্য",
            description: "Poverty: causes, effects and solutions",
            questions: [
              {
                id: "q1",
                question: "Absolute poverty means:",
                options: [
                  "Having less than others",
                  "Lacking basic necessities like food, shelter and clothing",
                  "Being unemployed",
                  "Living in rural areas",
                ],
                correctIndex: 1,
                explanation: "Absolute poverty is the state of lacking basic human necessities for survival.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "A major cause of poverty in Bangladesh is:",
                options: ["Too many industries", "Overpopulation and unemployment", "Too much education", "Strong currency"],
                correctIndex: 1,
                explanation: "Overpopulation and unemployment are among the primary causes of poverty in Bangladesh.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Microcredit helps reduce poverty by providing:",
                options: [
                  "Free food",
                  "Small loans to start income-generating activities",
                  "Government jobs",
                  "Free land",
                ],
                correctIndex: 1,
                explanation: "Microcredit gives small loans to the poor (especially women) to start small businesses and escape poverty.",
                difficulty: "medium",
              },
            ],
          },
          "child-marriage-dowry": {
            label: "বাল্যবিবাহ ও যৌতুক",
            description: "Child marriage, dowry and their effects",
            questions: [
              {
                id: "q1",
                question: "The legal minimum age for marriage for girls in Bangladesh is:",
                options: ["14", "16", "18", "21"],
                correctIndex: 2,
                explanation: "The Child Marriage Restraint Act 2017 sets the minimum age for girls at 18 years.",
                difficulty: "medium",
              },
              {
                id: "q2",
                question: "Dowry refers to:",
                options: [
                  "Gift from the groom's family to the bride",
                  "Property or cash demanded by the groom's family from the bride's family",
                  "Wedding celebration expenses",
                  "Monthly allowance to wife",
                ],
                correctIndex: 1,
                explanation: "Dowry is property or money demanded by the groom or his family from the bride's family as a condition of marriage.",
                difficulty: "easy",
              },
              {
                id: "q3",
                question: "Child marriage most directly harms girls by:",
                options: [
                  "Giving them more financial security",
                  "Interrupting their education and affecting their health",
                  "Improving their social status",
                  "Providing them more freedom",
                ],
                correctIndex: 1,
                explanation: "Child marriage forces girls to drop out of school and causes severe health risks due to early pregnancy.",
                difficulty: "medium",
              },
            ],
          },
          "drug-abuse": {
            label: "মাদকাসক্তি",
            description: "Drug abuse: causes, effects and prevention",
            questions: [
              {
                id: "q1",
                question: "Drug addiction most severely affects the:",
                options: ["Economy only", "Physical and mental health", "National budget", "Weather"],
                correctIndex: 1,
                explanation: "Drug addiction destroys physical health, mental wellbeing, family life and social relationships.",
                difficulty: "easy",
              },
              {
                id: "q2",
                question: "The most effective way to prevent drug abuse among youth is:",
                options: [
                  "Ignoring the problem",
                  "Awareness, counselling and family support",
                  "Providing cheaper drugs",
                  "Closing all schools",
                ],
                correctIndex: 1,
                explanation: "Prevention requires awareness education, counselling services and strong family and community support.",
                difficulty: "medium",
              },
              {
                id: "q3",
                question: "Which government agency leads anti-drug efforts in Bangladesh?",
                options: ["Bangladesh Police", "Department of Narcotics Control (DNC)", "RAB", "BGMEA"],
                correctIndex: 1,
                explanation: "The Department of Narcotics Control (DNC) under the Ministry of Home Affairs leads anti-narcotics efforts.",
                difficulty: "hard",
              },
            ],
          },
        },
      },
    },
  },

  // ★ Add chemistry, biology, etc. following same pattern
};

// ===================== HELPERS =====================

export function countTopicQuestions(subject: SubjectData): number {
  return Object.values(subject.chapters).reduce(
    (sum, ch) =>
      sum +
      Object.values(ch.topics).reduce(
        (tSum, t) => tSum + t.questions.length,
        0
      ),
    0
  );
}

export function countChapterQuestions(chapter: ChapterData): number {
  return Object.values(chapter.topics).reduce(
    (sum, t) => sum + t.questions.length,
    0
  );
}

export function countChapterTopics(chapter: ChapterData): number {
  return Object.keys(chapter.topics).length;
}

export function countSubjectChapters(subject: SubjectData): number {
  return Object.keys(subject.chapters).length;
}

export function countSubjectTopics(subject: SubjectData): number {
  return Object.values(subject.chapters).reduce(
    (sum, ch) => sum + Object.keys(ch.topics).length,
    0
  );
}