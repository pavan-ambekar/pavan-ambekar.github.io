import { useEffect, useState } from "react";

interface SplashScreenProps {
  onStart: () => void;
}

const TITLE = "PAVAN AMBEKAR";
const SUBTITLE = "> SENIOR FULL STACK ENGINEER";
const YEAR = "© 2025  //  7 YRS EXP  //  LVL MAX";

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [yearText, setYearText] = useState("");
  const [showPressStart, setShowPressStart] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Typing sequence
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Type title
    let i = 0;
    const typeTitle = () => {
      if (i <= TITLE.length) {
        setTitleText(TITLE.slice(0, i));
        i++;
        timeout = setTimeout(typeTitle, 80);
      } else {
        // After title done, type subtitle
        let j = 0;
        const typeSub = () => {
          if (j <= SUBTITLE.length) {
            setSubtitleText(SUBTITLE.slice(0, j));
            j++;
            timeout = setTimeout(typeSub, 45);
          } else {
            // After subtitle, type year line
            let k = 0;
            const typeYear = () => {
              if (k <= YEAR.length) {
                setYearText(YEAR.slice(0, k));
                k++;
                timeout = setTimeout(typeYear, 35);
              } else {
                // Show PRESS START
                timeout = setTimeout(() => setShowPressStart(true), 400);
              }
            };
            timeout = setTimeout(typeYear, 300);
          }
        };
        timeout = setTimeout(typeSub, 400);
      }
    };

    timeout = setTimeout(typeTitle, 600);
    return () => clearTimeout(timeout);
  }, []);

  // Listen for any keypress
  useEffect(() => {
    if (!showPressStart) return;
    const handler = () => handleStart();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showPressStart]);

  const handleStart = () => {
    if (!showPressStart || exiting) return;
    setExiting(true);
    setTimeout(onStart, 600);
  };

  return (
    <div
      onClick={handleStart}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{
        background: "hsl(240 33% 3%)",
        transition: exiting ? "opacity 0.6s ease, transform 0.6s ease" : undefined,
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.04)" : "scale(1)",
      }}
    >
      {/* CRT scanlines overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(120 100% 50% / 0.025) 2px, hsl(120 100% 50% / 0.025) 4px)",
        }}
      />
      {/* CRT vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 55%, hsl(240 33% 2% / 0.85) 100%)",
        }}
      />

      {/* Corner brackets */}
      {[
        "top-4 left-4 border-t-2 border-l-2",
        "top-4 right-4 border-t-2 border-r-2",
        "bottom-4 left-4 border-b-2 border-l-2",
        "bottom-4 right-4 border-b-2 border-r-2",
      ].map((cls) => (
        <div key={cls} className={`absolute w-8 h-8 border-primary ${cls}`}
          style={{ boxShadow: "0 0 8px hsl(120 100% 50% / 0.6)" }} />
      ))}

      {/* HI-SCORE line */}
      <p
        className="font-['Press_Start_2P'] text-[10px] mb-12 tracking-widest"
        style={{ color: "hsl(38 100% 55%)", textShadow: "0 0 8px hsl(38 100% 55% / 0.9), 0 0 20px hsl(38 100% 55% / 0.4)" }}
      >
        ── HI-SCORE: 999,999 ──
      </p>

      {/* Title */}
      <h1
        className="font-['Press_Start_2P'] text-center leading-loose mb-4 px-4"
        style={{
          fontSize: "clamp(0.9rem, 3vw, 1.6rem)",
          color: "hsl(120 100% 55%)",
          textShadow: "0 0 10px hsl(120 100% 50% / 1), 0 0 30px hsl(120 100% 50% / 0.6), 0 0 60px hsl(120 100% 50% / 0.2)",
          minHeight: "3rem",
        }}
      >
        {titleText}
        {titleText.length < TITLE.length && (
          <span style={{ animation: "blink 0.7s step-end infinite" }}>█</span>
        )}
      </h1>

      {/* Subtitle */}
      <p
        className="font-['Share_Tech_Mono'] text-sm sm:text-base mb-2 tracking-widest"
        style={{
          color: "hsl(180 100% 55%)",
          textShadow: "0 0 8px hsl(180 100% 55% / 0.9), 0 0 20px hsl(180 100% 55% / 0.4)",
          minHeight: "1.5rem",
        }}
      >
        {subtitleText}
        {subtitleText.length > 0 && subtitleText.length < SUBTITLE.length && (
          <span style={{ animation: "blink 0.7s step-end infinite" }}>█</span>
        )}
      </p>

      {/* Year line */}
      <p
        className="font-['Share_Tech_Mono'] text-[10px] sm:text-xs mb-16 tracking-widest"
        style={{ color: "hsl(120 60% 45%)", minHeight: "1rem" }}
      >
        {yearText}
      </p>

      {/* PRESS START */}
      <div style={{ minHeight: "2rem" }}>
        {showPressStart && (
          <p
            className="font-['Press_Start_2P'] text-sm sm:text-base tracking-widest"
            style={{
              color: "hsl(38 100% 60%)",
              textShadow: "0 0 10px hsl(38 100% 55% / 1), 0 0 25px hsl(38 100% 55% / 0.6)",
              animation: "blink 1s step-end infinite",
            }}
          >
            ▶ PRESS START ◀
          </p>
        )}
      </div>

      {/* Bottom credits */}
      <div className="absolute bottom-8 text-center space-y-1">
        <p className="font-['Press_Start_2P'] text-[7px] tracking-widest" style={{ color: "hsl(120 30% 35%)" }}>
          REACT · PYTHON · AWS · K8S
        </p>
        <p className="font-['Share_Tech_Mono'] text-[10px]" style={{ color: "hsl(120 20% 30%)" }}>
          CLICK OR PRESS ANY KEY TO CONTINUE
        </p>
      </div>
    </div>
  );
}
