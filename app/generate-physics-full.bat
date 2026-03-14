@echo off

set BASE=app\mcq\class9-10\physics
set QBASE=questions\class9-10

mkdir questions
mkdir %QBASE%

echo Creating folders...

mkdir %BASE%\chapter-1\physical-quantities
mkdir %BASE%\chapter-1\measurement-tools
mkdir %BASE%\chapter-1\dimension

mkdir %BASE%\chapter-2\speed-velocity
mkdir %BASE%\chapter-2\acceleration
mkdir %BASE%\chapter-2\equations-of-motion
mkdir %BASE%\chapter-2\graphs

mkdir %BASE%\chapter-3\newtons-laws
mkdir %BASE%\chapter-3\momentum
mkdir %BASE%\chapter-3\friction
mkdir %BASE%\chapter-3\gravitation

mkdir %BASE%\chapter-4\work
mkdir %BASE%\chapter-4\energy
mkdir %BASE%\chapter-4\power

mkdir %BASE%\chapter-5\states-of-matter
mkdir %BASE%\chapter-5\pressure
mkdir %BASE%\chapter-5\buoyancy

mkdir %BASE%\chapter-6\heat-temperature
mkdir %BASE%\chapter-6\expansion
mkdir %BASE%\chapter-6\specific-heat
mkdir %BASE%\chapter-6\change-of-state

mkdir %BASE%\chapter-7\waves
mkdir %BASE%\chapter-7\sound
mkdir %BASE%\chapter-7\sound-properties

mkdir %BASE%\chapter-8\reflection-laws
mkdir %BASE%\chapter-8\plane-mirror
mkdir %BASE%\chapter-8\curved-mirror

mkdir %BASE%\chapter-9\refraction-laws
mkdir %BASE%\chapter-9\total-internal
mkdir %BASE%\chapter-9\lens

mkdir %BASE%\chapter-10\charge
mkdir %BASE%\chapter-10\electric-field
mkdir %BASE%\chapter-10\capacitor

mkdir %BASE%\chapter-11\current
mkdir %BASE%\chapter-11\circuit
mkdir %BASE%\chapter-11\electrical-energy

mkdir %BASE%\chapter-12\magnet
mkdir %BASE%\chapter-12\electromagnetism
mkdir %BASE%\chapter-12\motor-generator

mkdir %BASE%\chapter-13\atomic-model
mkdir %BASE%\chapter-13\semiconductor
mkdir %BASE%\chapter-13\electronics


echo Creating page.tsx files...

for /r %BASE% %%d in (.) do (
if not exist "%%d\page.tsx" (
echo import { loadQuestions } from "@/lib/parseQuestions";> "%%d\page.tsx"
echo import QuizClient from "@/app/mcq/components/QuizClient";>> "%%d\page.tsx"
echo.>> "%%d\page.tsx"
echo const questions = loadQuestions("physics-questions.txt");>> "%%d\page.tsx"
echo.>> "%%d\page.tsx"
echo export default function Quiz() {>> "%%d\page.tsx"
echo return ^(>> "%%d\page.tsx"
echo ^<QuizClient>> "%%d\page.tsx"
echo topicLabel="Physics Quiz">> "%%d\page.tsx"
echo chapterLabel="SSC Physics">> "%%d\page.tsx"
echo questions={questions}>> "%%d\page.tsx"
echo backHref="/mcq/class9-10/physics">> "%%d\page.tsx"
echo /^>^);>> "%%d\page.tsx"
echo }>> "%%d\page.tsx"
)
)

echo Creating question files...

for %%f in (
physics-ch1-quantities
physics-ch1-tools
physics-ch1-dimension
physics-ch2-speed
physics-ch2-acceleration
physics-ch2-equations
physics-ch2-graphs
physics-ch3-newtons
physics-ch3-momentum
physics-ch3-friction
physics-ch3-gravitation
physics-ch4-work
physics-ch4-energy
physics-ch4-power
physics-ch5-states
physics-ch5-pressure
physics-ch5-buoyancy
physics-ch6-heat
physics-ch6-expansion
physics-ch6-specific
physics-ch6-state
physics-ch7-waves
physics-ch7-sound
physics-ch7-properties
physics-ch8-laws
physics-ch8-plane
physics-ch8-curved
physics-ch9-laws
physics-ch9-total
physics-ch9-lens
physics-ch10-charge
physics-ch10-field
physics-ch10-capacitor
physics-ch11-current
physics-ch11-circuit
physics-ch11-energy
physics-ch12-magnet
physics-ch12-electromag
physics-ch12-motor
physics-ch13-atomic
physics-ch13-semiconductor
physics-ch13-electronics
) do (

echo LEVEL: easy> %QBASE%\%%f.txt
echo Q: এখানে প্রশ্ন লিখবে? >> %QBASE%\%%f.txt
echo A: option 1 >> %QBASE%\%%f.txt
echo B: option 2 >> %QBASE%\%%f.txt
echo C: option 3 >> %QBASE%\%%f.txt
echo D: option 4 >> %QBASE%\%%f.txt
echo ANS: A >> %QBASE%\%%f.txt
echo EXP: ব্যাখ্যা এখানে। >> %QBASE%\%%f.txt
)

echo DONE!
pause