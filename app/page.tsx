"use client";
import { useEffect } from "react";

/* ─── TYPES ───────────────────────────────────────────────────── */
type SKU = {
  name: string; type: string; id: string; img: string;
  primary: string; light: string; lighter: string;
  dark: string; mid: string;
  hex: string; rgb: string; cmyk: string; pantone: string;
  mood: string; flavourDesc: string; tagline: string;
};

/* ─── DATA ────────────────────────────────────────────────────── */
const SKUs: SKU[] = [
  {
    name: "Cotton Crush", type: "Sugar Free", id: "blue",
    img: "/images/product-cotton-candy.png",
    primary: "#00C8FF", light: "#40DAFF", lighter: "#A8EFFF",
    dark: "#001133", mid: "#003A6E",
    hex: "00C8FF", rgb: "0, 200, 255", cmyk: "100, 22, 0, 0", pantone: "Pantone 306 C",
    mood: "Icy · Electric · Euphoric",
    flavourDesc: "Electric blue ice. Clean and sharp with a cotton candy finish that hits instantly.",
    tagline: "ELECTRIC ICE",
  },
  {
    name: "Sour Watermelon", type: "4.8% ABV", id: "pink",
    img: "/images/product-watermelon.png",
    primary: "#FF4D8A", light: "#FF7DA8", lighter: "#FFADC6",
    dark: "#2A0011", mid: "#7A1A3A",
    hex: "FF4D8A", rgb: "255, 77, 138", cmyk: "0, 70, 46, 0", pantone: "Pantone 211 C",
    mood: "Juicy · Sour · Playful",
    flavourDesc: "The banger. Sour on entry, watermelon on the finish. Pure chaos in a can.",
    tagline: "PURE CHAOS",
  },
  {
    name: "Grape", type: "4.8% ABV", id: "purple",
    img: "/images/product-grape.png",
    primary: "#A020F0", light: "#C060FF", lighter: "#DDA8FF",
    dark: "#150022", mid: "#3D006B",
    hex: "A020F0", rgb: "160, 32, 240", cmyk: "33, 87, 0, 6", pantone: "Pantone 2603 C",
    mood: "Nocturnal · Mysterious · Deep",
    flavourDesc: "Dark, deep and unexpected. Grape like you've never tasted it before.",
    tagline: "DEEP NOCTURNAL",
  },
  {
    name: "Green Apple", type: "4.8% ABV", id: "green",
    img: "/images/product-green-apple.png",
    primary: "#39FF14", light: "#80FF66", lighter: "#B8FFB0",
    dark: "#001A00", mid: "#0A4D00",
    hex: "39FF14", rgb: "57, 255, 20", cmyk: "78, 0, 92, 0", pantone: "Pantone 802 C",
    mood: "Sour · Extreme · Chaos",
    flavourDesc: "Neon sour. Tastes like standing in neon rain at 2am.",
    tagline: "NEON SOUR",
  },
  {
    name: "Bubble G Burst", type: "Sugar Free", id: "magenta",
    img: "/images/product-bubble-g.png",
    primary: "#FF00CC", light: "#FF55DD", lighter: "#FFAAEE",
    dark: "#1A0011", mid: "#5E0044",
    hex: "FF00CC", rgb: "255, 0, 204", cmyk: "0, 100, 20, 0", pantone: "Pantone 812 C",
    mood: "Candy · Feminine · Pop",
    flavourDesc: "Bubblegum detonation. This one is for those who unapologetically like pink.",
    tagline: "CANDY DETONATION",
  },
];

const personalityWords = [
  { word: "LOUD",       sub: "Never whispers. Always announces.",   color: "#00C8FF", size: "9vw",   align: "left"   },
  { word: "PLAYFUL",    sub: "Life's too short for boring drinks.",  color: "#FF4D8A", size: "6vw",   align: "right"  },
  { word: "REBELLIOUS", sub: "Rules? Optional. Vibes? Mandatory.",  color: "#39FF14", size: "7.5vw", align: "center" },
  { word: "YOUTHFUL",   sub: "Permanently 23 years old.",           color: "#A020F0", size: "6.5vw", align: "left"   },
  { word: "ENERGETIC",  sub: "Pre-drinks that actually pre-drink.", color: "#FF00CC", size: "5.5vw", align: "right"  },
  { word: "CHAOTIC",    sub: "Beautifully unhinged.",               color: "#FF4D8A", size: "10vw",  align: "left"   },
];

const dosDonts = {
  dos: [
    "Use on dark or black backgrounds",
    "Let the bottle colour lead the visual",
    "Pair with bold, compressed type",
    "Use saturated photography with contrast",
    "Lean into the energy — it is the brand",
    "Crop product shots tight and dramatic",
  ],
  donts: [
    "Never place the logo on busy backgrounds",
    "Never use muted or desaturated tones",
    "Never use thin or serif typefaces",
    "Never reduce colour vibrancy in print",
    "Never add drop shadows to the logo",
    "Never mix SKU colours in a single layout",
  ],
};

const marqueeItems = [
  { text: "GET LOUD",         color: "#00C8FF" },
  { text: "GET GOING",        color: "#FF4D8A" },
  { text: "HITS THE SPOT",    color: "#F2F2FF" },
  { text: "GEE UP VODKA",     color: "#39FF14" },
  { text: "4.8% ABV",         color: "#A020F0" },
  { text: "275ML",            color: "#FF00CC" },
  { text: "FIVE FLAVOURS",    color: "#00C8FF" },
  { text: "ZERO COMPROMISE",  color: "#FF4D8A" },
  { text: "COTTON CRUSH",     color: "#00C8FF" },
  { text: "SOUR WATERMELON",  color: "#FF4D8A" },
  { text: "GRAPE",            color: "#A020F0" },
  { text: "GREEN APPLE",      color: "#39FF14" },
  { text: "BUBBLE G BURST",   color: "#FF00CC" },
  { text: "LETS GEE UP",      color: "#F2F2FF" },
];

/* ─── STRATEGY DATA ───────────────────────────────────────────── */
const brandStrategy = {
  enemyStatement: "For too long, the RTD shelf looked the same. Safe flavours. Beige packaging. Corporate marketing written by committee for nobody. Every brand played it quiet, played it for everyone — which meant it stood out to no one.",
  enemies: [
    { label: "Safe Flavours",  desc: "Chosen to offend nobody. Remembered by nobody.", color: "#00C8FF" },
    { label: "Beige Packaging",desc: "Designed to fit in. Invisible from three metres.", color: "#FF4D8A" },
    { label: "Corporate Tone", desc: "Speaks in press releases. Zero personality.",    color: "#39FF14" },
  ],
  positioning: "For 18–28 year old social drinkers who want their drinks as loud as their night, Gee Up Vodka is the flavour-coded vodka premix that makes the can itself the vibe — because every SKU is a fully designed colour world, not just a drink in a can.",
  essence: "Make every moment louder.",
  promise: "Your can is the vibe. The energy starts before the first sip.",
  origin: "We looked at the RTD shelf and saw a sea of safe. Every brand played it quiet, played it beige, played it for everyone. So we built something loud on purpose — a flavour-coded system where the bottle is the vibe before you even open it.",
};

const personalityDials = [
  { label: "Formal",       opposite: "Casual",      value: 9,  color: "#00C8FF" },
  { label: "Rational",     opposite: "Emotional",   value: 8,  color: "#FF4D8A" },
  { label: "Serious",      opposite: "Playful",     value: 9,  color: "#39FF14" },
  { label: "Conservative", opposite: "Bold",        value: 10, color: "#A020F0" },
  { label: "Reserved",     opposite: "Opinionated", value: 8,  color: "#FF00CC" },
  { label: "Complex",      opposite: "Simple",      value: 9,  color: "#00C8FF" },
  { label: "Polish",       opposite: "Raw",         value: 5,  color: "#FF4D8A" },
];

const weAreXNotY = [
  { x: "Loud",         notY: "Aggressive",   color: "#00C8FF" },
  { x: "Playful",      notY: "Immature",     color: "#FF4D8A" },
  { x: "Vibrant",      notY: "Garish",       color: "#39FF14" },
  { x: "Direct",       notY: "Blunt",        color: "#A020F0" },
  { x: "Unapologetic", notY: "Reckless",     color: "#FF00CC" },
];

const bannedWords = ["premium","refreshing","smooth","crisp","craft","artisanal","sophisticated","elevated","curated","authentic","quality","innovative"];

const taglineOptions = [
  {
    line: "Hits the Spot.",
    color: "#00C8FF", status: "Primary",
    trigger: "Satisfaction + instant connection",
    tone: "Conversational, punchy, versatile across all contexts",
    customer: "I got exactly what I needed",
    brand: "Self-assured. Knows what it delivers.",
  },
  {
    line: "Get Loud. Get Going.",
    color: "#FF4D8A", status: "Campaign",
    trigger: "Motivation + identity-first",
    tone: "Command energy, action-first, creates momentum",
    customer: "This is my signal to start the night",
    brand: "The catalyst. Makes pre-drinks feel like the main event.",
  },
  {
    line: "Zero Chill. All Flavour.",
    color: "#39FF14", status: "Challenger",
    trigger: "Rebellion + anti-blandness",
    tone: "Anti-corporate, bold, contrast-rich",
    customer: "I don't do boring",
    brand: "The antithesis of every safe RTD on the shelf.",
  },
];

const jtbd = [
  {
    type: "Functional", color: "#00C8FF",
    job: "Get pre-drinks sorted fast without settling for whatever's left on the shelf.",
    insight: "Decision time at the bottle shop is 90 seconds. The can needs to choose itself.",
  },
  {
    type: "Emotional", color: "#FF4D8A",
    job: "Feel like the night is already starting — energy and anticipation before the first sip.",
    insight: "The purchase is part of the ritual. Holding a Gee Up is already holding the vibe.",
  },
  {
    type: "Social", color: "#39FF14",
    job: "Signal to your crew (and your followers) that you've got taste and you're not boring.",
    insight: "The colour-coded system is inherently shareable. The can is content.",
  },
];

/* ─── SCROLL REVEAL ───────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.07, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── CAP RENDER ──────────────────────────────────────────────── */
function CapRender({ sku, size = "lg" }: { sku: SKU; size?: "sm" | "md" | "lg" | "xl" }) {
  const cfg = {
    sm: { w: 50,  eh: 10, bh: 28, fs: 5  },
    md: { w: 72,  eh: 14, bh: 38, fs: 6  },
    lg: { w: 104, eh: 20, bh: 54, fs: 8  },
    xl: { w: 140, eh: 28, bh: 72, fs: 10 },
  }[size];

  return (
    <div style={{ position: "relative", width: cfg.w, height: cfg.eh + cfg.bh + 14, display: "inline-block" }}>
      {/* Top ellipse — cap face */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: cfg.w, height: cfg.eh * 2,
        borderRadius: "50%",
        background: `radial-gradient(ellipse at 38% 32%, ${sku.lighter} 0%, ${sku.light} 28%, ${sku.primary} 58%, ${sku.mid} 100%)`,
        zIndex: 3,
        display: "flex", alignItems: "center", justifyContent: "center",
        paddingTop: `${cfg.eh * 0.15}px`,
        overflow: "hidden",
      }}>
        {size !== "sm" && (
          <span style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: `${cfg.fs}px`, letterSpacing: "1.5px",
            color: "rgba(0,0,0,0.28)", userSelect: "none", pointerEvents: "none",
          }}>GEE UP</span>
        )}
      </div>

      {/* Cylindrical body */}
      <div style={{
        position: "absolute", top: cfg.eh, left: 0,
        width: cfg.w, height: cfg.bh, zIndex: 2,
        borderRadius: `0 0 ${cfg.w * 0.04}px ${cfg.w * 0.04}px`,
        overflow: "hidden",
      }}>
        {/* Colour + cylindrical curvature */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(90deg,
            ${sku.dark} 0%, ${sku.mid} 12%,
            ${sku.primary} 36%, ${sku.light} 50%,
            ${sku.primary} 64%, ${sku.mid} 88%, ${sku.dark} 100%)`,
        }} />
        {/* Knurling lines */}
        <div style={{
          position: "absolute", inset: 0,
          background: `repeating-linear-gradient(0deg,
            transparent 0px, transparent 2.5px,
            rgba(0,0,0,0.055) 2.5px, rgba(0,0,0,0.055) 3.5px)`,
        }} />
        {/* Top rim highlight */}
        <div style={{
          position: "absolute", top: 0, left: "8%", right: "8%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
        }} />
        {/* Centre sheen */}
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          left: "30%", width: "20%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 100%)",
        }} />
      </div>

      {/* Bottom rim */}
      <div style={{
        position: "absolute", top: cfg.eh + cfg.bh - 2,
        left: "50%", transform: "translateX(-50%)",
        width: cfg.w, height: cfg.eh,
        borderRadius: "50%",
        background: `radial-gradient(ellipse at 50% 30%, ${sku.dark}EE 0%, ${sku.dark}77 60%, transparent 100%)`,
        zIndex: 1,
      }} />

      {/* Drop shadow */}
      <div style={{
        position: "absolute", bottom: -1,
        left: "50%", transform: "translateX(-50%)",
        width: cfg.w * 0.85, height: 12,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)",
        zIndex: 0,
      }} />
    </div>
  );
}

/* ─── LABEL CARD ──────────────────────────────────────────────── */
function LabelCard({ sku, large = false }: { sku: SKU; large?: boolean }) {
  const w = large ? 196 : 146;
  const h = large ? 372 : 276;
  const bandH = large ? 54 : 40;
  const bottomH = large ? 36 : 28;

  return (
    <div style={{
      width: w, height: h, borderRadius: "8px", overflow: "hidden",
      position: "relative", background: sku.dark, flexShrink: 0,
      boxShadow: `0 0 0 1px ${sku.primary}28, 0 20px 48px rgba(0,0,0,0.55)`,
    }}>
      {/* Top colour band */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: bandH,
        background: `linear-gradient(135deg, ${sku.primary}, ${sku.light})`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 14px",
      }}>
        <span style={{ fontFamily: "Anton, sans-serif", fontSize: large ? "13px" : "10px", color: "rgba(0,0,0,0.42)", letterSpacing: "0.5px" }}>GEE UP</span>
        <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: large ? "10px" : "8px", color: "rgba(0,0,0,0.32)", letterSpacing: "1px", fontWeight: 600 }}>{sku.type}</span>
      </div>

      {/* Separator */}
      <div style={{ position: "absolute", top: bandH, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* Flavour name */}
      <div style={{ position: "absolute", top: bandH + (large ? 18 : 13), left: large ? 14 : 10, right: large ? 14 : 10 }}>
        {sku.name.split(" ").map((word, i) => (
          <div key={i} style={{
            fontFamily: "Anton, sans-serif",
            fontSize: sku.name.split(" ").length > 2 ? (large ? "36px" : "27px") : (large ? "42px" : "32px"),
            lineHeight: 0.9, color: "#F2F2FF", letterSpacing: "-0.3px",
          }}>{word.toUpperCase()}</div>
        ))}
      </div>

      {/* Product info */}
      <div style={{ position: "absolute", bottom: bottomH + 14, left: large ? 14 : 10, right: large ? 14 : 10 }}>
        <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: large ? "10px" : "8.5px", letterSpacing: "2px", color: sku.primary, marginBottom: "3px" }}>VODKA PREMIX</div>
        <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: large ? "10px" : "8.5px", letterSpacing: "1px", color: "rgba(242,242,255,0.28)" }}>4.8% ABV · 275mL</div>
      </div>

      {/* Bottom colour band */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: bottomH,
        background: `linear-gradient(135deg, ${sku.mid}, ${sku.primary}AA)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: large ? "8px" : "7px", letterSpacing: "2px", color: "rgba(0,0,0,0.32)" }}>LETSGEEUP.COM.AU</span>
      </div>

      {/* Scanline texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.025) 3px, rgba(0,0,0,0.025) 4px)",
      }} />
    </div>
  );
}

/* ─── MARQUEE STRIP ───────────────────────────────────────────── */
function MarqueeStrip() {
  const track = [...marqueeItems, ...marqueeItems];
  return (
    <div style={{
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      padding: "16px 0", overflow: "hidden",
      background: "rgba(255,255,255,0.012)",
    }}>
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{
              fontFamily: "Bebas Neue, cursive",
              fontSize: "14px", letterSpacing: "3px",
              color: item.color, padding: "0 18px", whiteSpace: "nowrap",
            }}>{item.text}</span>
            <span style={{
              width: "4px", height: "4px", borderRadius: "50%",
              background: "rgba(255,255,255,0.18)", display: "inline-block", flexShrink: 0,
            }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────── */
export default function Home() {
  useScrollReveal();

  return (
    <main style={{ background: "var(--brand-black)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Film grain overlay */}
      <div className="grain-overlay" aria-hidden />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="nav-bar" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(7,7,16,0.9)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--brand-border)",
        padding: "0 48px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "60px",
      }}>
        <img src="/images/logo-white.svg" alt="Gee Up Vodka" style={{ height: "28px", width: "auto" }} />
        <div className="nav-links" style={{ display: "flex", gap: "28px" }}>
          {["strategy","identity","colours","typography","skus","messaging","voice","applications"].map(item => (
            <a key={item} href={`#${item}`} className="nav-link">{item}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", paddingTop: "60px",
      }}>
        {/* Atmospheric orbs */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[
            { t:"8%",  l:"2%",  w:700, h:700, c:"0,200,255",  a:"anim-float",   o:0.08 },
            { t:"15%", r:"3%",  w:550, h:550, c:"255,0,204",  a:"anim-float-b", o:0.07 },
            { b:"8%",  l:"25%", w:450, h:450, c:"57,255,20",  a:"anim-float",   o:0.06 },
            { b:"5%",  r:"15%", w:320, h:320, c:"160,32,240", a:"anim-float-b", o:0.07 },
          ].map((orb, i) => (
            <div key={i} className={orb.a} style={{
              position: "absolute",
              top: orb.t, left: orb.l, right: orb.r, bottom: orb.b,
              width: orb.w, height: orb.h,
              background: `radial-gradient(circle, rgba(${orb.c},${orb.o}) 0%, transparent 70%)`,
              borderRadius: "50%",
            }} />
          ))}
          {/* Scanline texture on hero bg */}
          <div style={{
            position: "absolute", inset: 0,
            background: "repeating-linear-gradient(0deg, transparent 0px, transparent 4px, rgba(255,255,255,0.008) 4px, rgba(255,255,255,0.008) 5px)",
            pointerEvents: "none",
          }} />
        </div>

        <div style={{ textAlign: "center", zIndex: 2, padding: "0 24px", maxWidth: "1200px", width: "100%" }}>
          <div className="section-label anim-fade-in" style={{ marginBottom: "28px", animationDelay: "0ms" }}>
            Brand Identity Guidelines · 2026
          </div>

          <div className="anim-slide-up" style={{ marginBottom: "44px", animationDelay: "80ms" }}>
            <img src="/images/logo-white.svg" alt="Gee Up Vodka"
              style={{ width: "100%", maxWidth: "460px", height: "auto" }} />
          </div>

          <div className="anim-slide-up" style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(64px, 10vw, 118px)",
            lineHeight: 0.9, letterSpacing: "-2px", marginBottom: "40px",
            animationDelay: "160ms",
          }}>
            <span className="text-chrome">GET LOUD.</span>
            <br />
            <span className="text-sku-gradient">GET GOING.</span>
          </div>

          <div className="anim-slide-up" style={{ marginBottom: "32px", animationDelay: "240ms" }}>
            <span style={{
              fontFamily: "Permanent Marker, cursive",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#F2F2FF", letterSpacing: "1px", opacity: 0.92,
            }}>Hits the Spot</span>
          </div>

          <p className="anim-slide-up" style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontSize: "16px", fontWeight: 500,
            letterSpacing: "5px", textTransform: "uppercase",
            color: "rgba(242,242,255,0.4)", marginBottom: "72px",
            animationDelay: "320ms",
          }}>
            Vodka · Premix · Electrolytes · 4.8% ABV · 275mL
          </p>

          {/* Bottle lineup with caps above */}
          <div className="anim-slide-up hero-lineup" style={{
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            gap: "clamp(12px, 2.5vw, 32px)", animationDelay: "360ms",
          }}>
            {SKUs.map((sku, i) => (
              <div key={sku.id} className={i % 2 === 0 ? "anim-float" : "anim-float-b"} style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                animationDelay: `${i * 0.4}s`,
              }}>
                <div style={{ marginBottom: "4px" }}>
                  <CapRender sku={sku} size="sm" />
                </div>
                <img src={sku.img} alt={sku.name} style={{
                  height: "clamp(160px, 18vw, 260px)", width: "auto", objectFit: "contain",
                  filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.5))", display: "block",
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.3,
        }}>
          <span className="section-label">Scroll</span>
          <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────── */}
      <MarqueeStrip />

      {/* ── 00 BRAND STRATEGY ─────────────────────────────────── */}
      <section id="strategy" className="s-alt" style={{
        padding: "120px 48px",
        background: "#08080F",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>00 / Brand Strategy</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          {/* Enemy */}
          <div className="reveal" style={{ marginBottom: "72px" }}>
            <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "5px", color: "#FF4D8A", marginBottom: "24px" }}>THE ENEMY</div>
            <blockquote style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(26px, 3.5vw, 48px)",
              lineHeight: 1.08, color: "#F2F2FF", letterSpacing: "-0.5px",
              maxWidth: "860px", marginBottom: "40px",
            }}>
              "{brandStrategy.enemyStatement}"
            </blockquote>
            <div className="rg-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {brandStrategy.enemies.map((e, i) => (
                <div key={e.label} className={`reveal reveal-d${i + 1}`} style={{
                  background: "var(--brand-card)", borderRadius: "12px", padding: "28px",
                  borderTop: `3px solid ${e.color}`,
                  border: `1px solid ${e.color}18`,
                  borderTopColor: e.color,
                }}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "16px", letterSpacing: "2px", color: e.color, marginBottom: "8px" }}>{e.label}</div>
                  <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", color: "rgba(242,242,255,0.5)", lineHeight: 1.55 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Positioning */}
          <div className="reveal" style={{
            background: "linear-gradient(135deg, rgba(0,200,255,0.05) 0%, rgba(255,0,204,0.04) 100%)",
            border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px",
            padding: "44px", marginBottom: "24px",
          }}>
            <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "5px", color: "rgba(242,242,255,0.3)", marginBottom: "16px" }}>POSITIONING STATEMENT</div>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "clamp(17px, 1.8vw, 22px)", lineHeight: 1.65, color: "rgba(242,242,255,0.85)", fontStyle: "italic" }}>
              {brandStrategy.positioning}
            </p>
          </div>

          {/* Essence + Promise */}
          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
            {[
              { label: "Brand Essence", value: brandStrategy.essence, color: "#00C8FF", sub: "The north star. One sentence that rejects anything that doesn't make moments louder." },
              { label: "Brand Promise", value: brandStrategy.promise, color: "#FF4D8A", sub: "What every touchpoint commits to. Implicit in the bottle, the colour, the copy." },
            ].map((item, i) => (
              <div key={item.label} className={`reveal reveal-d${i + 1}`} style={{
                background: "var(--brand-card)", borderRadius: "14px", padding: "36px",
                borderLeft: `3px solid ${item.color}`,
                border: `1px solid ${item.color}18`,
                borderLeftColor: item.color,
              }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "4px", color: item.color, marginBottom: "16px" }}>{item.label}</div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(20px, 2vw, 30px)", lineHeight: 1.15, color: "#F2F2FF", marginBottom: "14px" }}>{item.value}</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(242,242,255,0.38)", lineHeight: 1.55 }}>{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Origin */}
          <div className="reveal" style={{
            background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "14px", padding: "36px",
            display: "flex", gap: "24px", alignItems: "flex-start",
          }}>
            <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "11px", letterSpacing: "4px", color: "rgba(242,242,255,0.22)", paddingTop: "4px", flexShrink: 0, minWidth: "60px" }}>ORIGIN</div>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "18px", lineHeight: 1.7, color: "rgba(242,242,255,0.55)", fontStyle: "italic" }}>
              "{brandStrategy.origin}"
            </p>
          </div>
        </div>
      </section>

      {/* ── 01 BRAND IDENTITY ─────────────────────────────────── */}
      <section id="identity" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label reveal" style={{ marginBottom: "20px" }}>01 / Brand Identity</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div className="reveal">
            <h2 style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(52px, 5.5vw, 84px)",
              lineHeight: 0.95, letterSpacing: "-1px", marginBottom: "40px",
            }}>
              <span className="text-chrome">THE BRAND</span>
              <br /><span style={{ color: "#39FF14" }}>IN THREE</span>
              <br /><span style={{ color: "#F2F2FF" }}>WORDS.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { word: "LOUD",        color: "#00C8FF" },
                { word: "FLAVOURED",   color: "#FF4D8A" },
                { word: "UNIGNORABLE", color: "#39FF14" },
              ].map(({ word, color }) => (
                <div key={word} style={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "clamp(52px, 6vw, 80px)", lineHeight: 1.05,
                  color, letterSpacing: "1px",
                }}>{word}</div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{
              background: "var(--brand-card)", border: "1px solid var(--brand-border)",
              borderRadius: "14px", padding: "32px",
            }}>
              <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "4px", color: "rgba(242,242,255,0.35)", marginBottom: "14px" }}>BRAND MISSION</h3>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "21px", fontWeight: 400, lineHeight: 1.55, color: "var(--brand-white)" }}>
                Gee Up makes the moment louder. Flavour-first, colour-coded vodka premixes designed for the feed, the fridge, and the festival. Every bottle is a vibe in itself.
              </p>
            </div>
            <div style={{
              background: "var(--brand-card)", border: "1px solid var(--brand-border)",
              borderRadius: "14px", padding: "32px",
            }}>
              <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "4px", color: "rgba(242,242,255,0.35)", marginBottom: "14px" }}>TARGET AUDIENCE</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["18–28 year olds","Festival-goers","Social drinkers","Content creators","Night-out starters","Gaming sessions","Convenience stores","TikTok / Instagram"].map(tag => (
                  <span key={tag} style={{
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "40px", padding: "5px 14px",
                    fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px",
                    fontWeight: 500, letterSpacing: "0.5px", color: "rgba(242,242,255,0.65)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONALITY & ARCHETYPE ───────────────────────────── */}
      <section className="s-alt" style={{ padding: "80px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label reveal" style={{ marginBottom: "20px" }}>Brand Archetype & Personality</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        {/* Archetypes */}
        <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "48px" }}>
          {[
            { type: "Primary",   name: "The Jester",  color: "#FF4D8A", desc: "Playful, irreverent, life of the party. Gee Up finds humour in its own loudness — it doesn't take itself seriously, and that's the point.", traits: ["Playful","Irreverent","Fun","Disarming"] },
            { type: "Secondary", name: "The Outlaw",  color: "#39FF14", desc: "Rebellious against the status quo. Gee Up exists because it refused to make another safe, beige, forgettable RTD.", traits: ["Rebellious","Bold","Unapologetic","Disruptive"] },
          ].map((arch, i) => (
            <div key={arch.name} className={`reveal reveal-d${i + 1}`} style={{
              background: "var(--brand-card)", borderRadius: "14px", padding: "40px",
              border: `1px solid ${arch.color}22`, borderTopWidth: "3px", borderTopColor: arch.color,
            }}>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "11px", letterSpacing: "4px", color: arch.color, marginBottom: "12px", fontWeight: 600 }}>{arch.type} ARCHETYPE</div>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(32px, 3.5vw, 48px)", color: "#F2F2FF", lineHeight: 0.95, marginBottom: "20px" }}>{arch.name.toUpperCase()}</div>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.55)", lineHeight: 1.65, marginBottom: "24px" }}>{arch.desc}</p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {arch.traits.map(t => (
                  <span key={t} style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "2px", color: arch.color, border: `1px solid ${arch.color}40`, borderRadius: "4px", padding: "4px 12px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personality Dials */}
        <div className="reveal" style={{
          background: "var(--brand-card)", border: "1px solid var(--brand-border)",
          borderRadius: "14px", padding: "44px",
        }}>
          <div className="section-label" style={{ marginBottom: "32px" }}>Personality Dials</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {personalityDials.map((dial, i) => {
              const pct = (dial.value / 10) * 100;
              return (
                <div key={dial.label} style={{ display: "grid", gridTemplateColumns: "130px 1fr 130px", gap: "20px", alignItems: "center" }}>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", color: "rgba(242,242,255,0.35)", textAlign: "right", textTransform: "uppercase" }}>{dial.label}</div>
                  <div style={{ height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.06)", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${dial.color}66, ${dial.color})`, borderRadius: "2px" }} />
                    <div style={{ position: "absolute", top: "50%", left: `${pct}%`, transform: "translate(-50%, -50%)", width: "12px", height: "12px", borderRadius: "50%", background: dial.color, boxShadow: `0 0 8px ${dial.color}88` }} />
                  </div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", color: dial.color, textTransform: "uppercase" }}>{dial.opposite}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 02 LOGO SYSTEM ────────────────────────────────────── */}
      <section style={{
        padding: "80px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>02 / Logo System</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          <div className="rg-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "48px" }}>
            {[
              { bg: "#070710", border: "rgba(255,255,255,0.1)", logoSrc: "/images/logo-white.svg", label: "On Black — Primary Use", textColor: "rgba(255,255,255,0.28)" },
              { bg: "#F2F2FF", border: "transparent",           logoSrc: "/images/logo-black.svg", label: "On White — Secondary Use", textColor: "rgba(10,10,20,0.38)" },
              { bg: "linear-gradient(135deg, #001133 0%, #003A6E 100%)", border: "rgba(0,200,255,0.18)", logoSrc: "/images/logo-white.svg", label: "On SKU Colour — Campaign Use", textColor: "rgba(0,200,255,0.5)" },
            ].map((panel, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{
                background: panel.bg, border: `1px solid ${panel.border}`,
                borderRadius: "14px", padding: "52px 32px",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "20px",
              }}>
                <img src={panel.logoSrc} alt="Logo" style={{ width: "100%", maxWidth: "260px", height: "auto" }} />
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: panel.textColor }}>{panel.label}</span>
              </div>
            ))}
          </div>

          {/* Clear space */}
          <div className="reveal" style={{
            background: "var(--brand-card)", border: "1px solid var(--brand-border)",
            borderRadius: "14px", padding: "40px 48px",
            display: "flex", alignItems: "center", gap: "56px",
          }}>
            <div style={{ flex: "0 0 auto" }}>
              <div style={{
                position: "relative", padding: "28px 32px",
                border: "1px dashed rgba(255,255,255,0.18)",
                borderRadius: "10px", display: "inline-flex",
                alignItems: "center", justifyContent: "center",
              }}>
                <img src="/images/logo-white.svg" alt="Logo clear space" style={{ height: "44px", width: "auto" }} />
                {[
                  { top: "6px",  left: "50%", transform: "translateX(-50%)" },
                  { bottom: "6px", left: "50%", transform: "translateX(-50%)" },
                  { left: "6px", top: "50%", transform: "translateY(-50%)" },
                  { right: "6px", top: "50%", transform: "translateY(-50%)" },
                ].map((pos, i) => (
                  <div key={i} style={{
                    position: "absolute", ...pos,
                    fontFamily: "Barlow Condensed, sans-serif", fontSize: "10px",
                    color: "rgba(255,255,255,0.28)", letterSpacing: "1px",
                  }}>X</div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "26px", letterSpacing: "2px", marginBottom: "12px", color: "var(--brand-white)" }}>CLEAR SPACE RULE</h3>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.55)", lineHeight: 1.65, maxWidth: "520px" }}>
                Always maintain a minimum clear space equal to the cap height of the "G" in the Gee Up logotype on all four sides. This zone must be free of text, imagery, and graphic elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 COLOUR SYSTEM ──────────────────────────────────── */}
      <section id="colours" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label reveal" style={{ marginBottom: "20px" }}>03 / Colour System</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "5px", color: "rgba(242,242,255,0.35)", marginBottom: "20px" }}>PRIMARY PALETTE</h3>
        <div className="rg-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "72px" }}>
          {[
            { name: "Brand Black",  hex: "#070710", swatch: "#070710",  border: "rgba(255,255,255,0.1)" },
            { name: "Deep Night",   hex: "#0C0C18", swatch: "#0C0C18",  border: "rgba(255,255,255,0.08)" },
            { name: "Pure White",   hex: "#F2F2FF", swatch: "#F2F2FF",  border: "transparent" },
            { name: "Warm Silver",  hex: "#C8C8D4", swatch: "linear-gradient(135deg,#e0e0e8,#f8f8ff,#b8b8c8,#f0f0f8)", border: "transparent" },
          ].map((c, i) => (
            <div key={c.name} className={`reveal reveal-d${i + 1}`} style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.border}` }}>
              <div style={{ height: "120px", background: c.swatch }} />
              <div style={{ background: "var(--brand-card)", padding: "16px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", color: "var(--brand-white)", marginBottom: "3px" }}>{c.name}</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.38)", letterSpacing: "1px" }}>{c.hex}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "5px", color: "rgba(242,242,255,0.35)", marginBottom: "20px" }}>FLAVOUR-CODED SKU PALETTE</h3>
        <div className="rg-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
          {SKUs.map((sku, i) => (
            <div key={sku.id} className={`reveal reveal-d${Math.min(i + 1, 5)}`} style={{
              borderRadius: "12px", overflow: "hidden",
              border: `1px solid ${sku.primary}22`,
            }}>
              <div style={{
                height: "108px",
                background: `linear-gradient(160deg, ${sku.dark} 0%, ${sku.mid} 55%, ${sku.primary} 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <CapRender sku={sku} size="md" />
              </div>
              <div style={{ background: "var(--brand-card)", padding: "14px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "15px", color: sku.primary, letterSpacing: "0.5px", marginBottom: "6px" }}>{sku.name}</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(242,242,255,0.42)", lineHeight: 1.9 }}>
                  <div>#{sku.hex}</div>
                  <div>RGB {sku.rgb}</div>
                  <div>CMYK {sku.cmyk}</div>
                  <div style={{ marginTop: "6px", color: sku.primary, fontSize: "11px", letterSpacing: "0.5px" }}>{sku.pantone}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LABEL ARCHITECTURE ────────────────────────────────── */}
      <section style={{
        padding: "80px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>Label Architecture</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "80px" }}>
            <div className="reveal">
              <h2 style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(52px, 5.5vw, 80px)",
                lineHeight: 0.92, marginBottom: "28px",
              }}>
                <span className="text-chrome">THE LABEL</span>
                <br /><span style={{ color: "#39FF14" }}>IS THE</span>
                <br /><span style={{ color: "#F2F2FF" }}>CANVAS.</span>
              </h2>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "19px", color: "rgba(242,242,255,0.5)", lineHeight: 1.65, marginBottom: "40px", maxWidth: "480px" }}>
                Every Gee Up label is a fully designed artefact. The colour band signals the flavour instantly. The typography carries the attitude. The system is locked — every SKU lives within the same framework.
              </p>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { num: "01", label: "Brand Colour Band", desc: "Top band. SKU primary colour. First visual signal from the fridge door." },
                  { num: "02", label: "Brand Mark Zone",   desc: "GEE UP wordmark top-left. White lockup. Always present, never dominant." },
                  { num: "03", label: "Flavour Name",      desc: "Anton. Full width. White. Largest element on the label by design." },
                  { num: "04", label: "Product Info",      desc: "ABV · volume · type. Bebas Neue. Set in primary colour." },
                  { num: "05", label: "Closure Band",      desc: "Bottom band. Mid-tone variant. Seals the label system." },
                ].map(({ num, label, desc }, i, arr) => (
                  <div key={num} style={{
                    display: "grid", gridTemplateColumns: "32px 1fr", gap: "20px",
                    padding: "16px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}>
                    <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "14px", letterSpacing: "1px", color: "rgba(242,242,255,0.22)", paddingTop: "2px" }}>{num}</div>
                    <div>
                      <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "17px", letterSpacing: "2px", color: "var(--brand-white)", marginBottom: "4px" }}>{label}</div>
                      <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(242,242,255,0.42)", lineHeight: 1.5 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Large annotated label */}
            <div className="reveal reveal-d2" style={{ display: "flex", justifyContent: "center", paddingTop: "32px" }}>
              <LabelCard sku={SKUs[0]} large />
            </div>
          </div>

          {/* All 5 labels */}
          <div className="reveal" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            {SKUs.map(sku => <LabelCard key={sku.id} sku={sku} />)}
          </div>

          {/* Zone legend */}
          <div className="rg-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
            {[
              { num: "01", name: "Top Band",     desc: "SKU colour. Instant flavour ID.", color: SKUs[0].primary },
              { num: "02", name: "Brand Zone",   desc: "GEE UP wordmark. White lockup.",  color: SKUs[1].primary },
              { num: "03", name: "Flavour Name", desc: "Anton. Full width. Max impact.",   color: SKUs[2].primary },
              { num: "04", name: "Product Info", desc: "ABV, volume, type. Brand colour.", color: SKUs[3].primary },
              { num: "05", name: "Bottom Band",  desc: "Closure. Mid-tone variant.",       color: SKUs[4].primary },
            ].map((z, i) => (
              <div key={z.num} className={`reveal reveal-d${i + 1}`} style={{
                background: "var(--brand-card)", border: `1px solid ${z.color}22`,
                borderRadius: "10px", padding: "20px",
              }}>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "28px", color: z.color, marginBottom: "8px" }}>{z.num}</div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "15px", letterSpacing: "2px", color: "var(--brand-white)", marginBottom: "6px" }}>{z.name}</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.45)", lineHeight: 1.5 }}>{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 TYPOGRAPHY ─────────────────────────────────────── */}
      <section id="typography" style={{
        padding: "80px 48px", maxWidth: "1200px", margin: "0 auto",
      }}>
        <div className="section-label reveal" style={{ marginBottom: "20px" }}>04 / Typography</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        <div className="rg-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "40px" }}>
          {[
            {
              role: "Display / Headers", font: "Anton, sans-serif",
              sampleSize: "88px", sampleColor: "#F2F2FF",
              name: "Anton", sub: "Google Fonts · Display",
              sizes: ["64px — Hero Headline","48px — Section Title","32px — Sub Header"],
              accent: "#00C8FF", accentText: "GET LOUD", accentSize: "24px",
            },
            {
              role: "Label / Accent", font: "Bebas Neue, cursive",
              sampleSize: "88px", sampleColor: "#FF4D8A",
              name: "Bebas Neue", sub: "Google Fonts · Condensed",
              sizes: ["Section labels","Nav items","Product names","Badge callouts"],
              accent: "#FF4D8A", accentText: "SOUR WATERMELON", accentSize: "22px",
            },
            {
              role: "Body / UI Text", font: "Barlow Condensed, sans-serif",
              sampleSize: "88px", sampleColor: "#39FF14",
              name: "Barlow Condensed", sub: "Google Fonts · Body",
              sizes: ["18–20px — Body copy","14–16px — UI labels","12px — Metadata"],
              accent: undefined, accentText: "Best served cold.\nNot your average Friday.", accentSize: "16px",
            },
          ].map((t, i) => (
            <div key={t.name} className={`reveal reveal-d${i + 1}`} style={{
              background: "var(--brand-card)", border: "1px solid var(--brand-border)",
              borderRadius: "14px", padding: "36px",
            }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>{t.role}</div>
              <div style={{ fontFamily: t.font, fontSize: t.sampleSize, lineHeight: 0.9, color: t.sampleColor, marginBottom: "24px" }}>Aa</div>
              <div style={{ fontFamily: t.font, fontSize: "26px", color: "#F2F2FF", marginBottom: "2px" }}>{t.name}</div>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.35)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>{t.sub}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {t.sizes.map(s => <div key={s} style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.45)" }}>{s}</div>)}
              </div>
              <div style={{ marginTop: "20px", fontFamily: t.font, fontSize: t.accentSize, color: t.accent || "rgba(242,242,255,0.55)", letterSpacing: t.accent ? "0.5px" : undefined, lineHeight: 1.5 }}>
                {t.accentText}
              </div>
            </div>
          ))}
        </div>

        {/* Type scale specimen */}
        <div className="reveal" style={{
          background: "var(--brand-card)", border: "1px solid var(--brand-border)",
          borderRadius: "14px", padding: "44px 48px",
        }}>
          <div className="section-label" style={{ marginBottom: "28px" }}>Type Scale Specimen</div>
          {[
            { size: "96", font: "Anton, sans-serif",              w: 400, color: "#F2F2FF",              text: "GEE UP" },
            { size: "64", font: "Anton, sans-serif",              w: 400, color: "#FF00CC",              text: "COTTON CRUSH" },
            { size: "48", font: "Bebas Neue, cursive",            w: 400, color: "#A020F0",              text: "VODKA · PREMIX · ELECTROLYTES", ls: "4px" },
            { size: "24", font: "Barlow Condensed, sans-serif",   w: 600, color: "rgba(242,242,255,0.8)", text: "Best served ice cold at the festival, pregame, or wherever the night takes you." },
            { size: "16", font: "Barlow Condensed, sans-serif",   w: 400, color: "rgba(242,242,255,0.4)", text: "4.8% ABV · 275mL · Contains electrolytes · Vodka premix · Gluten free" },
          ].map((row, i, arr) => (
            <div key={row.size} style={{
              display: "flex", alignItems: "baseline", gap: "24px",
              borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              paddingBottom: "14px", marginBottom: "14px",
            }}>
              <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)", letterSpacing: "2px", minWidth: "64px" }}>{row.size}PX</span>
              <span style={{ fontFamily: row.font, fontSize: `${row.size}px`, fontWeight: row.w, color: row.color, lineHeight: 1, letterSpacing: row.ls }}>{row.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 CREATIVE HEADLINES ─────────────────────────────── */}
      <section style={{
        padding: "120px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
        maxWidth: "none",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>05 / Creative Headlines</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start", marginBottom: "80px" }}>
            <div className="reveal">
              <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(44px, 4.5vw, 64px)", lineHeight: 0.95, marginBottom: "20px" }}>
                <span className="text-chrome">THE HEADLINE</span><br />
                <span style={{ color: "#FF4D8A" }}>IS THE</span><br />
                <span className="text-chrome">DESIGN.</span>
              </h2>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "19px", color: "rgba(242,242,255,0.55)", lineHeight: 1.65, maxWidth: "480px" }}>
                A bold, vertically stacked subtitle system inspired by street posters, fashion editorials, nightclub flyers, and urban billboard typography.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Ultra-condensed sans serif",         color: "#00C8FF" },
                { label: "Oversized uppercase lettering",      color: "#FF4D8A" },
                { label: "Stacked word breaks",                color: "#39FF14" },
                { label: "Strong vertical rhythm",             color: "#A020F0" },
                { label: "Editorial / fashion poster influence",color: "#FF00CC" },
                { label: "Urban nightlife aesthetic",          color: "#00C8FF" },
                { label: "High readability at distance",       color: "#FF4D8A" },
                { label: "Distressed texture overlays",        color: "#39FF14" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: c.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.6)", letterSpacing: "0.5px" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="headline-panels" style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            {/* 1 — Stacked Impact */}
            <div className="reveal" style={{
              background: "var(--brand-card)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "14px 14px 3px 3px", padding: "48px",
              display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "center",
            }}>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(56px, 7vw, 100px)", lineHeight: 0.88, letterSpacing: "-1px" }}>
                <div className="text-chrome">LOUD.</div>
                <div className="text-chrome">COLD.</div>
                <div style={{ color: "#00C8FF" }}>NOW.</div>
              </div>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "4px", color: "#00C8FF", marginBottom: "10px" }}>STACKED IMPACT HEADLINE</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", color: "rgba(242,242,255,0.5)", lineHeight: 1.6 }}>Single words broken per line. Maximum vertical rhythm. Each word lands as its own moment.</p>
              </div>
            </div>

            {/* 2 — Editorial Street-Style */}
            <div className="reveal" style={{
              background: "#0C0C18", border: "1px solid rgba(255,77,138,0.15)",
              borderRadius: "3px", padding: "48px",
              display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "center",
            }}>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "clamp(14px, 1.8vw, 22px)", letterSpacing: "8px", color: "rgba(242,242,255,0.35)", marginBottom: "4px" }}>VODKA PREMIX</div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(52px, 6.5vw, 92px)", lineHeight: 0.9, color: "#F2F2FF", letterSpacing: "-1px" }}>HITS THE</div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(52px, 6.5vw, 92px)", lineHeight: 0.9, color: "#FF4D8A", letterSpacing: "-1px" }}>SPOT.</div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "clamp(12px, 1.5vw, 18px)", letterSpacing: "6px", color: "rgba(242,242,255,0.3)", marginTop: "8px" }}>4.8% ABV · 275ML · AUSTRALIA</div>
              </div>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "4px", color: "#FF4D8A", marginBottom: "10px" }}>EDITORIAL STREET-STYLE</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", color: "rgba(242,242,255,0.5)", lineHeight: 1.6 }}>Small label type above and below a large impact statement. Borrowed from fashion editorial and luxury streetwear.</p>
              </div>
            </div>

            {/* 3 — Urban Poster */}
            <div className="reveal" style={{
              background: "var(--brand-card)", border: "1px solid rgba(57,255,20,0.12)",
              borderRadius: "3px", padding: "48px",
              display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "center",
            }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "12px", color: "rgba(242,242,255,0.18)", lineHeight: 1 }}>TONIGHT</div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(60px, 8vw, 110px)", lineHeight: 0.85, letterSpacing: "-2px", marginLeft: "4px" }}>
                  <span style={{ color: "#39FF14" }}>GET</span><span className="text-chrome"> UP.</span>
                </div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(60px, 8vw, 110px)", lineHeight: 0.85, letterSpacing: "-2px", marginLeft: "48px" }}>
                  <span className="text-sku-gradient">GEE UP.</span>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "4px", color: "#39FF14", marginBottom: "10px" }}>URBAN POSTER TYPOGRAPHY</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", color: "rgba(242,242,255,0.5)", lineHeight: 1.6 }}>Offset indentation creates diagonal energy. Ghost text at low opacity sets depth. Inspired by nightclub flyers, concert posters, and rave culture.</p>
              </div>
            </div>

            {/* 4 — Bold Compressed */}
            <div className="reveal" style={{
              background: "#0C0C18", border: "1px solid rgba(160,32,240,0.15)",
              borderRadius: "3px", padding: "48px",
              display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "center",
            }}>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", letterSpacing: "2px", lineHeight: 0.92 }}>
                  <div style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "#A020F0" }}>FIVE FLAVOURS.</div>
                  <div style={{ fontSize: "clamp(56px, 7.5vw, 108px)", color: "#F2F2FF" }}>ZERO</div>
                  <div style={{ fontSize: "clamp(56px, 7.5vw, 108px)", color: "#F2F2FF" }}>COMPROMISE.</div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "4px", color: "#A020F0", marginBottom: "10px" }}>BOLD COMPRESSED DISPLAY</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", color: "rgba(242,242,255,0.5)", lineHeight: 1.6 }}>Bebas Neue at full compression. Mixed scale contrast. Used for campaign headlines, OOH, and digital banners at scale.</p>
              </div>
            </div>

            {/* 5 — High-Contrast Subtitle */}
            <div className="reveal" style={{
              background: "var(--brand-card)", border: "1px solid rgba(255,0,204,0.12)",
              borderRadius: "3px 3px 14px 14px", padding: "48px",
              display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "center",
            }}>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "clamp(13px, 1.6vw, 20px)", letterSpacing: "6px", color: "#FF00CC", marginBottom: "6px" }}>PRE-DRINKS SORTED.</div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(52px, 6.5vw, 90px)", lineHeight: 0.88, color: "#F2F2FF", letterSpacing: "-1px", marginBottom: "8px" }}>
                  YOUR NIGHT<br />STARTS HERE.
                </div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "clamp(13px, 1.6vw, 20px)", letterSpacing: "6px", color: "rgba(242,242,255,0.3)" }}>GEE UP VODKA · LETSGEEUP.COM.AU</div>
              </div>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "4px", color: "#FF00CC", marginBottom: "10px" }}>HIGH-CONTRAST SUBTITLE SYSTEM</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", color: "rgba(242,242,255,0.5)", lineHeight: 1.6 }}>Small Bebas Neue label sandwiches a large Anton statement. Three-tier hierarchy. Scales from social to billboard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MESSAGING HIERARCHY ───────────────────────────────── */}
      <section id="messaging" className="s-alt" style={{
        padding: "120px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>Messaging Hierarchy</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "5px", color: "rgba(242,242,255,0.35)", marginBottom: "24px" }}>TAGLINE OPTIONS</h3>
          <div className="rg-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "64px" }}>
            {taglineOptions.map((t, i) => (
              <div key={t.line} className={`reveal reveal-d${i + 1}`} style={{
                background: "var(--brand-card)", borderRadius: "14px", padding: "36px",
                border: `1px solid ${t.color}22`, borderTopWidth: "3px", borderTopColor: t.color,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "11px", letterSpacing: "4px", color: t.color, fontWeight: 600 }}>{t.status}</div>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "11px", letterSpacing: "2px", color: "rgba(242,242,255,0.2)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "3px 10px" }}>
                    OPTION {["A","B","C"][i]}
                  </div>
                </div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(26px, 2.8vw, 38px)", color: "#F2F2FF", lineHeight: 0.95, marginBottom: "28px" }}>{t.line}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "Trigger",  value: t.trigger },
                    { label: "Tone",     value: t.tone    },
                    { label: "Customer", value: `"${t.customer}"` },
                    { label: "Brand",    value: t.brand   },
                  ].map(row => (
                    <div key={row.label}>
                      <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "11px", letterSpacing: "3px", color: t.color, marginBottom: "3px" }}>{row.label}</div>
                      <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.5)", lineHeight: 1.5 }}>{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "64px" }}>
            <div className="reveal" style={{ background: "var(--brand-card)", border: "1px solid var(--brand-border)", borderRadius: "14px", padding: "36px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>One-liner</div>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(18px, 1.8vw, 26px)", lineHeight: 1.2, color: "#F2F2FF", marginBottom: "16px" }}>
                Flavour-coded vodka premixes designed for the feed, the fridge, and the festival.
              </div>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(242,242,255,0.4)", lineHeight: 1.55 }}>Homepage H1, social bios, elevator pitch. Covers who, what, and where without overexplaining.</p>
            </div>
            <div className="reveal reveal-d1" style={{ background: "var(--brand-card)", border: "1px solid var(--brand-border)", borderRadius: "14px", padding: "36px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>Messaging Levels</div>
              {[
                { level: "Tagline",  example: "Hits the Spot.",                                                              where: "Logo lockups, bios" },
                { level: "One-liner",example: "Flavour-coded vodka premixes for the feed, fridge and festival.",              where: "Homepage, pitch" },
                { level: "Campaign", example: "Get Loud. Get Going.",                                                        where: "Ad creative, launch" },
                { level: "Headline", example: "Five flavours. Zero compromise.",                                             where: "Ads, POS, OOH" },
              ].map((row, i, arr) => (
                <div key={row.level} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "16px", padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "2px", color: "rgba(242,242,255,0.25)", paddingTop: "2px" }}>{row.level}</div>
                  <div>
                    <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", fontWeight: 600, color: "#F2F2FF", marginBottom: "2px" }}>{row.example}</div>
                    <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(242,242,255,0.3)", letterSpacing: "1px" }}>{row.where}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "5px", color: "rgba(242,242,255,0.35)", marginBottom: "24px" }}>JOBS TO BE DONE</h3>
          <div className="rg-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {jtbd.map((j, i) => (
              <div key={j.type} className={`reveal reveal-d${i + 1}`} style={{
                background: "rgba(255,255,255,0.02)", border: `1px solid ${j.color}22`,
                borderRadius: "14px", padding: "36px",
              }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "14px", letterSpacing: "3px", color: j.color, marginBottom: "14px" }}>{j.type} Job</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "18px", fontWeight: 500, color: "#F2F2FF", lineHeight: 1.5, marginBottom: "16px" }}>{j.job}</p>
                <div style={{ height: "1px", background: `${j.color}22`, marginBottom: "16px" }} />
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.42)", lineHeight: 1.55 }}>
                  <span style={{ color: j.color }}>Insight: </span>{j.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLAVOUR WORLDS ────────────────────────────────────── */}
      <section id="skus" style={{ padding: "120px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 48px", marginBottom: "64px" }}>
          <div className="section-label reveal">06 / Flavour Worlds</div>
          <div className="divider" style={{ marginTop: "20px" }} />
        </div>

        {SKUs.map((sku, i) => (
          <div key={sku.id} className="reveal" style={{
            position: "relative",
            background: `linear-gradient(${i % 2 === 0 ? "135deg" : "225deg"}, ${sku.dark} 0%, ${sku.mid}55 100%)`,
            borderTop: "1px solid rgba(255,255,255,0.04)",
            overflow: "hidden",
          }}>
            {/* Top colour accent stripe */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: sku.primary }} />

            <div className="flavour-grid" style={{
              maxWidth: "1400px", margin: "0 auto", padding: "80px 48px",
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 1.4fr" : "1.4fr 1fr",
              gap: "64px", alignItems: "center", minHeight: "400px",
            }}>
              {/* Bottle */}
              <div className="flavour-bottle" style={{
                order: i % 2 === 0 ? 1 : 2,
                display: "flex", justifyContent: "center", position: "relative",
              }}>
                <div aria-hidden style={{
                  position: "absolute", width: "320px", height: "320px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${sku.primary}16 0%, transparent 70%)`,
                }} />
                <img src={sku.img} alt={sku.name} style={{
                  height: "clamp(220px, 24vw, 340px)", width: "auto", objectFit: "contain",
                  filter: `drop-shadow(0 8px 36px ${sku.primary}44)`,
                  position: "relative", zIndex: 1,
                }} />
              </div>

              {/* Text */}
              <div className="flavour-text" style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{
                  fontFamily: "Barlow Condensed, sans-serif", fontSize: "11px",
                  letterSpacing: "4px", color: sku.primary, marginBottom: "16px",
                  textTransform: "uppercase", fontWeight: 600,
                }}>SKU 0{i + 1}</div>

                <div style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "clamp(52px, 6.5vw, 88px)",
                  lineHeight: 0.88, letterSpacing: "-1px", color: "#F2F2FF", marginBottom: "16px",
                }}>
                  {sku.name.toUpperCase().split(" ").map((w, wi) => <div key={wi}>{w}</div>)}
                </div>

                <div style={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "clamp(18px, 2.5vw, 28px)", letterSpacing: "5px",
                  color: sku.primary, marginBottom: "20px",
                }}>{sku.tagline}</div>

                <p style={{
                  fontFamily: "Barlow Condensed, sans-serif", fontSize: "18px",
                  lineHeight: 1.65, color: "rgba(242,242,255,0.55)",
                  maxWidth: "440px", marginBottom: "32px",
                }}>{sku.flavourDesc}</p>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
                  {sku.mood.split(" · ").map(m => (
                    <span key={m} style={{
                      fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "2px",
                      color: sku.primary, border: `1px solid ${sku.primary}44`,
                      borderRadius: "4px", padding: "4px 12px",
                    }}>{m}</span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: sku.primary }} />
                  <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "16px", color: sku.primary, letterSpacing: "2px" }}>#{sku.hex}</span>
                  <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.3)", letterSpacing: "1px" }}>· {sku.pantone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── SKU DATA TABLE ────────────────────────────────────── */}
      <section style={{ padding: "80px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <h2 className="reveal" style={{
          fontFamily: "Anton, sans-serif", fontSize: "clamp(48px, 5vw, 72px)",
          lineHeight: 0.95, marginBottom: "56px",
        }}>
          <span className="text-chrome">FIVE FLAVOURS.</span>
          <br /><span style={{ color: "#FF4D8A" }}>FIVE WORLDS.</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {SKUs.map((sku, i) => (
            <div key={sku.id} className="reveal sku-row" style={{
              background: "var(--brand-card)", border: `1px solid ${sku.primary}20`,
              borderRadius: i === 0 ? "14px 14px 3px 3px" : i === SKUs.length - 1 ? "3px 3px 14px 14px" : "3px",
              padding: "36px 48px",
              display: "grid", gridTemplateColumns: "72px 1fr 190px 190px 1fr",
              alignItems: "center", gap: "40px",
            }}>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "52px", lineHeight: 1, color: `${sku.primary}28` }}>0{i + 1}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                <img src={sku.img} alt={sku.name} style={{
                  height: "112px", width: "auto", objectFit: "contain",
                  filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))", flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: "30px", color: sku.primary, letterSpacing: "0.5px", lineHeight: 1, marginBottom: "6px" }}>{sku.name.toUpperCase()}</div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.38)", letterSpacing: "3px", textTransform: "uppercase" }}>{sku.type}</div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.28)", marginTop: "4px" }}>{sku.mood}</div>
                </div>
              </div>
              <div>
                <div className="sku-row-extra" style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "rgba(242,242,255,0.28)", marginBottom: "8px" }}>PRIMARY HEX</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: sku.primary, flexShrink: 0 }} />
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "22px", color: sku.primary, letterSpacing: "2px" }}>#{sku.hex}</div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "rgba(242,242,255,0.28)", marginBottom: "8px" }}>RGB VALUE</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", fontWeight: 600, color: "rgba(242,242,255,0.65)" }}>{sku.rgb}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "rgba(242,242,255,0.28)", marginBottom: "8px" }}>PANTONE</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", fontWeight: 600, color: sku.primary }}>{sku.pantone}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSURE SYSTEM / CAP RENDERS ─────────────────────── */}
      <section style={{
        padding: "120px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>Closure System</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "88px" }}>
            <div className="reveal">
              <h2 style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(52px, 5.5vw, 80px)",
                lineHeight: 0.9, marginBottom: "24px",
              }}>
                <span className="text-chrome">THE CAP</span>
                <br /><span style={{ color: "#FF4D8A" }}>IS THE</span>
                <br /><span className="text-sku-gradient">SIGNAL.</span>
              </h2>
              <p style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: "19px", lineHeight: 1.65,
                color: "rgba(242,242,255,0.5)", maxWidth: "480px",
              }}>
                From two metres away, the cap colour tells you everything. The closure system is the fastest brand ID in the fridge. No label needed — the SKU speaks for itself.
              </p>
            </div>

            {/* Cap anatomy */}
            <div className="reveal reveal-d2">
              <div className="cap-anatomy" style={{
                background: "var(--brand-card)", border: "1px solid var(--brand-border)",
                borderRadius: "14px", padding: "36px",
                display: "grid", gridTemplateColumns: "148px 1fr", gap: "36px", alignItems: "center",
              }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CapRender sku={SKUs[2]} size="xl" />
                </div>
                <div>
                  <div className="section-label" style={{ marginBottom: "24px" }}>Cap Anatomy</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {[
                      { num: "01", label: "Brand Face",   desc: "Radial gradient. Lighter centre, mid-tone edge." },
                      { num: "02", label: "GEE UP Mark",  desc: "Embossed wordmark recessed into cap face." },
                      { num: "03", label: "Knurled Body", desc: "Cylindrical. Ribbed finish. SKU colour dominant." },
                      { num: "04", label: "Rim Detail",   desc: "Seam edge. Darker shade — closes the system." },
                    ].map(({ num, label, desc }) => (
                      <div key={num} style={{ display: "flex", gap: "14px" }}>
                        <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "11px", letterSpacing: "1px", color: "rgba(242,242,255,0.25)", minWidth: "20px", paddingTop: "2px" }}>{num}</span>
                        <div>
                          <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "15px", letterSpacing: "1.5px", color: "#F2F2FF", marginBottom: "2px" }}>{label}</div>
                          <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.4)", lineHeight: 1.4 }}>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Five caps */}
          <div className="rg-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
            {SKUs.map((sku, i) => (
              <div key={sku.id} className={`reveal reveal-d${Math.min(i + 1, 5)}`} style={{
                background: `linear-gradient(160deg, ${sku.dark} 0%, ${sku.mid}55 100%)`,
                border: `1px solid ${sku.primary}22`, borderRadius: "14px",
                padding: "44px 24px 32px",
                display: "flex", flexDirection: "column", alignItems: "center",
                position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  background: `radial-gradient(circle at 50% 40%, ${sku.primary}14 0%, transparent 65%)`,
                }} />

                <div className="cap-hover">
                  <CapRender sku={sku} size="lg" />
                </div>

                <div style={{ marginTop: "32px", textAlign: "center" }}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "11px", letterSpacing: "3px", color: "rgba(242,242,255,0.28)", marginBottom: "6px" }}>SKU 0{i + 1}</div>
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: "20px", color: sku.primary, letterSpacing: "0.5px", marginBottom: "4px" }}>{sku.name.toUpperCase()}</div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", letterSpacing: "2px", color: "rgba(242,242,255,0.28)", marginBottom: "12px" }}>{sku.type}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                    <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: sku.primary, flexShrink: 0 }} />
                    <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "15px", color: sku.primary, letterSpacing: "1px" }}>#{sku.hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 BRAND VOICE ────────────────────────────────────── */}
      <section id="voice" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label reveal" style={{ marginBottom: "20px" }}>07 / Brand Voice & Personality</div>
        <div className="divider" style={{ marginBottom: "72px" }} />

        <div style={{ marginBottom: "88px" }}>
          {personalityWords.map((t, i) => (
            <div key={t.word} className="reveal" style={{
              display: "flex",
              flexDirection: t.align === "right" ? "row-reverse" : "row",
              justifyContent: t.align === "center" ? "center" : "flex-start",
              alignItems: "baseline", gap: "24px",
              marginBottom: i < personalityWords.length - 1 ? "-8px" : 0,
            }}>
              <div style={{
                fontFamily: "Anton, sans-serif",
                fontSize: `clamp(40px, ${t.size}, 120px)`,
                lineHeight: 1, color: t.color, letterSpacing: "-1px",
              }}>{t.word}</div>
              <div style={{
                fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px",
                color: "rgba(242,242,255,0.35)", whiteSpace: "nowrap",
                alignSelf: "center", paddingBottom: "4px",
              }}>{t.sub}</div>
            </div>
          ))}
        </div>

        {/* We Are X Not Y */}
        <div style={{ marginBottom: "56px" }}>
          <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "5px", color: "rgba(242,242,255,0.35)", marginBottom: "20px" }}>WE ARE X, NOT Y</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {weAreXNotY.map((pair, i) => (
              <div key={pair.x} className={`reveal xnoty-row`} style={{
                background: "var(--brand-card)", border: "1px solid var(--brand-border)",
                borderRadius: i === 0 ? "12px 12px 3px 3px" : i === weAreXNotY.length - 1 ? "3px 3px 12px 12px" : "3px",
                padding: "18px 32px",
                display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "24px",
              }}>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(22px, 2.5vw, 34px)", color: pair.color }}>{pair.x.toUpperCase()}</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", letterSpacing: "4px", color: "rgba(242,242,255,0.2)", textTransform: "uppercase" }}>not</div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(22px, 2.5vw, 34px)", color: "rgba(242,242,255,0.18)", textDecoration: "line-through" }}>{pair.notY.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Banned Words */}
        <div className="reveal" style={{
          background: "rgba(255,77,138,0.04)", border: "1px solid rgba(255,77,138,0.14)",
          borderRadius: "14px", padding: "36px", marginBottom: "56px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF4D8A", flexShrink: 0 }} />
            <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "4px", color: "#FF4D8A" }}>BANNED WORDS</div>
          </div>
          <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(242,242,255,0.4)", marginBottom: "20px", lineHeight: 1.55 }}>
            These words are generic and invisible. None of them describe Gee Up. If you feel tempted — delete it, then ask why the copy isn't strong enough without it.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {bannedWords.map(w => (
              <span key={w} style={{
                fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "1px",
                background: "rgba(255,77,138,0.08)", border: "1px solid rgba(255,77,138,0.2)",
                borderRadius: "6px", padding: "6px 14px", color: "rgba(255,77,138,0.55)",
                textDecoration: "line-through",
              }}>{w}</span>
            ))}
          </div>
        </div>

        <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "56px" }}>
          <div className="reveal" style={{
            background: "rgba(57,255,20,0.05)", border: "1px solid rgba(57,255,20,0.18)",
            borderRadius: "14px", padding: "36px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#39FF14", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="#070710" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "22px", letterSpacing: "3px", color: "#39FF14" }}>WRITE LIKE THIS</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Caption",  text: "Your pre-drinks just got an upgrade. GEE UP. #LetsGeeUp" },
                { label: "Ad copy",  text: "5 flavours. Zero chill. Pick your vibe." },
                { label: "Tagline",  text: "Get Loud. Get Going. Get Gee Up." },
              ].map(ex => (
                <div key={ex.label}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "#39FF14", marginBottom: "4px" }}>{ex.label.toUpperCase()}</div>
                  <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.8)", lineHeight: 1.5 }}>{ex.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d1" style={{
            background: "rgba(255,77,138,0.04)", border: "1px solid rgba(255,77,138,0.16)",
            borderRadius: "14px", padding: "36px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#FF4D8A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="#F2F2FF" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </div>
              <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "22px", letterSpacing: "3px", color: "#FF4D8A" }}>NOT LIKE THIS</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Too corporate", text: "Gee Up Vodka Premix offers a premium drinking experience." },
                { label: "Too vague",     text: "Refreshing. Fruity. Affordable." },
                { label: "Wrong tone",    text: "Our product is available at select retail outlets nationwide." },
              ].map(ex => (
                <div key={ex.label} style={{ opacity: 0.65 }}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "#FF4D8A", marginBottom: "4px" }}>{ex.label.toUpperCase()}</div>
                  <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.6)", textDecoration: "line-through" }}>{ex.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {[
            { title: "DO'S",   color: "#39FF14", items: dosDonts.dos },
            { title: "DON'TS", color: "#FF4D8A", items: dosDonts.donts },
          ].map(({ title, color, items }) => (
            <div key={title} className="reveal" style={{
              background: "var(--brand-card)", border: `1px solid ${color}18`,
              borderRadius: "14px", padding: "36px",
            }}>
              <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "36px", color, marginBottom: "20px" }}>{title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {items.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: color, marginTop: "9px", flexShrink: 0 }} />
                    <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.65)", lineHeight: 1.45 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 08 PHOTOGRAPHY ────────────────────────────────────── */}
      <section style={{
        padding: "80px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>08 / Photography & Imagery</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div className="reveal">
              <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(48px, 4.5vw, 68px)", lineHeight: 0.95, marginBottom: "24px" }}>
                <span className="text-chrome">PRODUCT IS</span>
                <br /><span style={{ color: "#FF00CC" }}>THE HERO.</span>
              </h2>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "20px", color: "rgba(242,242,255,0.55)", lineHeight: 1.65, marginBottom: "36px" }}>
                The bottle is the star of every frame. Gee Up imagery is clean, colour-saturated, and product-centric.
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { title: "Backgrounds",     desc: "Pure white, solid black, or the SKU's dark colour variant" },
                  { title: "Lighting",        desc: "High-key studio or dramatic backlighting that emphasises the liquid colour" },
                  { title: "Composition",     desc: "Centred single bottle or 5-bottle lineup at equal angles" },
                  { title: "Post-processing", desc: "Saturated, high-contrast, minimal grain. Colour accuracy is critical." },
                  { title: "Avoid",           desc: "Lifestyle clutter, natural grain textures, earthy tones, muted filters" },
                ].map(({ title, desc }, i, arr) => (
                  <div key={title} style={{ padding: "16px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "17px", letterSpacing: "2px", color: "#00C8FF" }}>{title}: </span>
                    <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.55)" }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-d1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {SKUs.slice(0, 4).map(sku => (
                <div key={sku.id} style={{
                  background: `linear-gradient(160deg, ${sku.dark} 0%, ${sku.mid} 100%)`,
                  borderRadius: "14px", border: `1px solid ${sku.primary}20`,
                  padding: "28px 16px 16px",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
                }}>
                  <img src={sku.img} alt={sku.name} style={{
                    height: "152px", width: "auto", objectFit: "contain",
                    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
                  }} />
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "2px", color: sku.primary, textAlign: "center" }}>{sku.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 APPLICATIONS ───────────────────────────────────── */}
      <section id="applications" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label reveal" style={{ marginBottom: "20px" }}>09 / Brand Applications</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        <div className="rg-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {[
            { sku: SKUs[0], label: "INSTAGRAM / SOCIAL POST",  note: "1080×1080px. Product-centred. SKU background. Bold name lockup. No lifestyle clutter." },
            { sku: SKUs[4], label: "TIKTOK / REELS THUMBNAIL", note: "9:16 ratio. Bold hook text. Bottle in first frame. Flavour colour dominant." },
            { sku: SKUs[3], label: "RETAIL / POS DISPLAY",     note: "A3 shelf talkers. Wobblers. Fridge clings. White logo out on colour background." },
          ].map(({ sku, label, note }, i) => (
            <div key={sku.id} className={`reveal reveal-d${i + 1}`} style={{
              background: "var(--brand-card)", border: "1px solid var(--brand-border)",
              borderRadius: "14px", overflow: "hidden",
            }}>
              <div style={{
                background: `linear-gradient(160deg, ${sku.dark} 0%, ${sku.mid} 100%)`,
                padding: "40px 24px 28px",
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "16px", minHeight: "200px", justifyContent: "center",
              }}>
                <img src={sku.img} alt={sku.name} style={{ height: "136px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.4))" }} />
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "24px", color: sku.primary, letterSpacing: "0.5px" }}>{sku.name.toUpperCase()}</div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "14px", letterSpacing: "3px", color: "rgba(242,242,255,0.35)", marginBottom: "8px" }}>{label}</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(242,242,255,0.45)", lineHeight: 1.55 }}>{note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rg-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {[
            { abbr: "FV", color: "#00C8FF", name: "Festival Activation",  desc: "Experiential, high-energy. All 5 SKUs on display. Full colour immersion." },
            { abbr: "RT", color: "#FF4D8A", name: "Convenience Retail",   desc: "Cold fridge placement. Colour block merchandising. Bold shelf talkers." },
            { abbr: "SM", color: "#39FF14", name: "Social Media",         desc: "IG/TikTok. Product-hero content. UGC encouraged. #LetsGeeUp" },
            { abbr: "NL", color: "#A020F0", name: "Nightlife Pre-Drinks", desc: "Dark, neon-lit contexts. Club settings. Youth group scenarios." },
          ].map(({ abbr, color, name, desc }, i) => (
            <div key={abbr} className={`reveal reveal-d${i + 1}`} style={{
              background: "rgba(255,255,255,0.025)", border: "1px solid var(--brand-border)",
              borderRadius: "12px", padding: "24px",
            }}>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "28px", color, marginBottom: "12px", letterSpacing: "1px" }}>{abbr}</div>
              <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "17px", letterSpacing: "2px", color: "var(--brand-white)", marginBottom: "8px" }}>{name}</div>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.42)", lineHeight: 1.55 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL LINEUP ───────────────────────────────────────── */}
      <section style={{
        padding: "120px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", textAlign: "center" }}>
          <div className="section-label reveal" style={{ marginBottom: "20px" }}>The Complete Range</div>
          <h2 className="reveal" style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(56px, 7vw, 100px)",
            lineHeight: 0.9, letterSpacing: "-2px", marginBottom: "88px",
          }}>
            <span className="text-chrome">THE FULL</span>
            <br /><span className="text-sku-gradient">LINEUP.</span>
          </h2>

          <div style={{
            display: "flex", justifyContent: "center",
            alignItems: "flex-end", gap: "clamp(16px, 3vw, 48px)",
          }}>
            {SKUs.map((sku, i) => (
              <div key={sku.id} className={i % 2 === 0 ? "anim-float" : "anim-float-b"} style={{
                textAlign: "center", animationDelay: `${i * 0.35}s`,
              }}>
                {/* Cap above bottle */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                  <CapRender sku={sku} size="sm" />
                </div>
                <img src={sku.img} alt={sku.name} style={{
                  height: "clamp(200px, 22vw, 320px)", width: "auto", objectFit: "contain",
                  filter: "drop-shadow(0 8px 28px rgba(0,0,0,0.5))", display: "block",
                }} />
                <div style={{ marginTop: "28px" }}>
                  <div style={{
                    fontFamily: "Bebas Neue, cursive",
                    fontSize: "clamp(12px, 1.2vw, 15px)", letterSpacing: "2px", color: sku.primary,
                  }}>{sku.name}</div>
                  <div style={{ width: "20px", height: "3px", background: sku.primary, borderRadius: "2px", margin: "8px auto 0" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "56px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="footer-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <img src="/images/logo-white.svg" alt="Gee Up Vodka" style={{ height: "36px", width: "auto" }} />
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "28px", color: "#F2F2FF", letterSpacing: "0.5px" }}>
              GET LOUD. GET GOING.
            </div>
          </div>
          <div className="divider" style={{ marginBottom: "28px" }} />
          <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(242,242,255,0.2)", letterSpacing: "2px" }}>
              © 2026 GEE UP VODKA · BRAND GUIDELINES · STRICTLY CONFIDENTIAL
            </p>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(242,242,255,0.2)", letterSpacing: "2px" }}>
              LETSGEEUP.COM.AU
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
