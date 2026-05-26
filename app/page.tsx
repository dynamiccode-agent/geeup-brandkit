"use client";
import Image from "next/image";

const SKUs = [
  {
    name: "Cotton Candy Crush",
    type: "Sugar Free",
    id: "blue",
    img: "/images/product-cotton-candy.png",
    primary: "#00C8FF",
    glow: "#0088FF",
    dark: "#001133",
    mid: "#003366",
    hex: "00C8FF",
    rgb: "0, 200, 255",
    cmyk: "100, 22, 0, 0",
    pantone: "Pantone 306 C",
    mood: "Icy · Electric · Euphoric",
  },
  {
    name: "Sour Watermelon",
    type: "4.8% ABV",
    id: "pink",
    img: "/images/product-watermelon.png",
    primary: "#FF4D8A",
    glow: "#FF0066",
    dark: "#2A0011",
    mid: "#880033",
    hex: "FF4D8A",
    rgb: "255, 77, 138",
    cmyk: "0, 70, 46, 0",
    pantone: "Pantone 211 C",
    mood: "Juicy · Sour · Playful",
  },
  {
    name: "Grape",
    type: "4.8% ABV",
    id: "purple",
    img: "/images/product-grape.png",
    primary: "#A020F0",
    glow: "#7B00CC",
    dark: "#15002A",
    mid: "#450075",
    hex: "A020F0",
    rgb: "160, 32, 240",
    cmyk: "33, 87, 0, 6",
    pantone: "Pantone 2603 C",
    mood: "Nocturnal · Mysterious · Deep",
  },
  {
    name: "Green Apple",
    type: "4.8% ABV",
    id: "green",
    img: "/images/product-green-apple.png",
    primary: "#39FF14",
    glow: "#00DD00",
    dark: "#001A00",
    mid: "#006600",
    hex: "39FF14",
    rgb: "57, 255, 20",
    cmyk: "78, 0, 92, 0",
    pantone: "Pantone 802 C",
    mood: "Sour · Extreme · Chaos",
  },
  {
    name: "Bubble G Burst",
    type: "Sugar Free",
    id: "magenta",
    img: "/images/product-bubble-g.png",
    primary: "#FF00CC",
    glow: "#CC0099",
    dark: "#1A0011",
    mid: "#660044",
    hex: "FF00CC",
    rgb: "255, 0, 204",
    cmyk: "0, 100, 20, 0",
    pantone: "Pantone 812 C",
    mood: "Candy · Feminine · Pop",
  },
];

const personalityTraits = [
  { word: "LOUD", sub: "Never whispers. Always announces." },
  { word: "PLAYFUL", sub: "Life's too short for boring drinks." },
  { word: "REBELLIOUS", sub: "Rules? Optional. Vibes? Mandatory." },
  { word: "YOUTHFUL", sub: "Permanently 23 years old." },
  { word: "ENERGETIC", sub: "Pre-drinks that actually pre-drink." },
  { word: "CHAOTIC", sub: "Beautifully unhinged." },
];

const dosDonts = {
  dos: [
    "Use on dark or black backgrounds",
    "Let the bottle color lead the visual",
    "Pair with bold, compressed type",
    "Use saturated photography with contrast",
    "Lean into the chaos — it's the brand",
    "Crop product shots tight and dramatic",
  ],
  donts: [
    "Never place logo on busy backgrounds",
    "Never use muted or desaturated tones",
    "Never use thin or serif typefaces",
    "Never reduce colour vibrancy in print",
    "Never add drop shadows to the logo",
    "Never mix SKU colours in one layout",
  ],
};

const colorPrimaries = [
  { name: "Brand Black", hex: "#070710", token: "black", bg: "#070710", text: "rgba(255,255,255,0.5)" },
  { name: "Deep Night", hex: "#0D0D1A", token: "deep", bg: "#0D0D1A", text: "rgba(255,255,255,0.5)" },
  { name: "Pure White", hex: "#F0F0FF", token: "white", bg: "#F0F0FF", text: "#0D0D1A" },
  { name: "Chrome Silver", hex: "#C8C8D4", token: "chrome", bg: "linear-gradient(135deg,#e8e8e8,#fff,#c0c0c0,#f8f8f8,#a8a8a8)", text: "#0D0D1A" },
];

export default function Home() {
  return (
    <main style={{ background: "var(--brand-black)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ─── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(7,7,16,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
      }}>
        <Image src="/images/logo.avif" alt="Gee Up Vodka" width={140} height={40} style={{ objectFit: "contain", height: "32px", width: "auto" }} />
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["identity", "colours", "typography", "skus", "voice", "applications"].map((item) => (
            <a key={item} href={`#${item}`} style={{
              fontFamily: "Barlow Condensed, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(240,240,255,0.5)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,240,255,0.5)")}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "60px",
      }}>
        {/* Background gradient orbs */}
        <div style={{
          position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
        }}>
          <div style={{
            position: "absolute", top: "10%", left: "5%",
            width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(0,200,255,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", top: "20%", right: "5%",
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(255,0,204,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float-delayed 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "10%", left: "30%",
            width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float 10s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "5%", right: "20%",
            width: "300px", height: "300px",
            background: "radial-gradient(circle, rgba(160,32,240,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            animation: "float-delayed 9s ease-in-out infinite",
          }} />
        </div>

        {/* Content */}
        <div style={{ textAlign: "center", zIndex: 2, padding: "0 20px", maxWidth: "1200px" }}>
          {/* Document label */}
          <div className="section-label" style={{ marginBottom: "32px", animation: "fade-in 1s ease-out forwards" }}>
            Brand Identity Guidelines · 2024
          </div>

          {/* Logo */}
          <div style={{ marginBottom: "48px", animation: "slide-up 0.8s ease-out forwards" }}>
            <Image
              src="/images/logo.avif"
              alt="Gee Up Vodka"
              width={500}
              height={160}
              style={{ objectFit: "contain", maxWidth: "480px", width: "100%", height: "auto", filter: "drop-shadow(0 0 40px rgba(255,255,255,0.15))" }}
            />
          </div>

          {/* Tagline */}
          <div style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(64px, 10vw, 120px)",
            lineHeight: 0.9,
            letterSpacing: "-2px",
            marginBottom: "48px",
            animation: "slide-up 1s ease-out 0.2s both",
          }}>
            <span className="text-chrome-bold">GET LOUD.</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #00C8FF, #FF00CC, #39FF14, #FF4D8A, #A020F0)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}>GET GOING.</span>
          </div>

          {/* Descriptor */}
          <p style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(240,240,255,0.5)",
            marginBottom: "64px",
            animation: "slide-up 1s ease-out 0.4s both",
          }}>
            Vodka · Premix · Electrolytes · 4.8% ABV · 275mL
          </p>

          {/* Bottle lineup */}
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "clamp(8px, 2vw, 24px)",
            animation: "slide-up 1s ease-out 0.6s both",
          }}>
            {SKUs.map((sku, i) => (
              <div key={sku.id} style={{
                textAlign: "center",
                animation: `float ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
              }}>
                <div style={{
                  position: "relative",
                  display: "inline-block",
                }}>
                  <div style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: "40px",
                    background: `radial-gradient(ellipse, ${sku.primary}40 0%, transparent 70%)`,
                    filter: "blur(8px)",
                  }} />
                  <Image
                    src={sku.img}
                    alt={sku.name}
                    width={100}
                    height={280}
                    style={{
                      objectFit: "contain",
                      height: "clamp(160px, 18vw, 260px)",
                      width: "auto",
                      filter: `drop-shadow(0 8px 30px ${sku.primary}50)`,
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
          animation: "float 2.5s ease-in-out infinite",
        }}>
          <span className="section-label" style={{ letterSpacing: "3px" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* ─── BRAND IDENTITY ──────────────────────────────────── */}
      <section id="identity" style={{
        padding: "120px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div className="section-label" style={{ marginBottom: "24px" }}>01 / Brand Identity</div>
        <div className="divider-glow" style={{ marginBottom: "64px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <h2 style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(56px, 6vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "-1px",
              marginBottom: "32px",
            }}>
              <span className="text-chrome-bold">THE BRAND</span>
              <br />
              <span style={{ color: "#39FF14", textShadow: "0 0 20px #39FF14, 0 0 40px #00DD00" }}>IN THREE</span>
              <br />
              <span className="text-chrome-bold">WORDS.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { word: "LOUD", color: "#00C8FF" },
                { word: "FLAVOURED", color: "#FF4D8A" },
                { word: "UNIGNORABLE", color: "#39FF14" },
              ].map(({ word, color }) => (
                <div key={word} style={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "72px",
                  lineHeight: 1,
                  color: color,
                  textShadow: `0 0 20px ${color}, 0 0 40px ${color}80`,
                  letterSpacing: "2px",
                }}>{word}</div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              padding: "32px",
            }}>
              <h3 style={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "22px",
                letterSpacing: "3px",
                color: "rgba(240,240,255,0.4)",
                marginBottom: "16px",
              }}>BRAND MISSION</h3>
              <p style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: "22px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "var(--brand-white)",
              }}>
                Gee Up makes the moment louder. Flavour-first, colour-coded vodka premixes that are designed for the feed, the fridge, and the festival. Every bottle is a vibe in itself.
              </p>
            </div>
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              padding: "32px",
            }}>
              <h3 style={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "22px",
                letterSpacing: "3px",
                color: "rgba(240,240,255,0.4)",
                marginBottom: "16px",
              }}>TARGET AUDIENCE</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["18–28 year olds", "Festival-goers", "Social drinkers", "Content creators", "Night-out starters", "Gaming sessions", "Convenience stores", "TikTok / Instagram"].map((tag) => (
                  <span key={tag} style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "40px",
                    padding: "6px 16px",
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    color: "rgba(240,240,255,0.7)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGO SYSTEM ──────────────────────────────────────── */}
      <section style={{
        padding: "80px 40px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "24px" }}>02 / Logo System</div>
          <div className="divider-glow" style={{ marginBottom: "64px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "64px" }}>
            {/* On black */}
            <div style={{
              background: "#070710",
              borderRadius: "16px",
              padding: "48px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <Image src="/images/logo.avif" alt="Logo on black" width={280} height={80} style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "60px" }} />
              <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>On Black — Primary Use</span>
            </div>

            {/* On white */}
            <div style={{
              background: "#F0F0FF",
              borderRadius: "16px",
              padding: "48px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}>
              <Image src="/images/logo.avif" alt="Logo on white" width={280} height={80} style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "60px" }} />
              <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>On White — Secondary Use</span>
            </div>

            {/* On colour */}
            <div style={{
              background: "linear-gradient(135deg, #001133, #003366)",
              borderRadius: "16px",
              padding: "48px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              border: "1px solid rgba(0,200,255,0.2)",
              boxShadow: "0 0 40px rgba(0,200,255,0.1)",
            }}>
              <Image src="/images/logo.avif" alt="Logo on colour" width={280} height={80} style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "60px", filter: "brightness(1.2)" }} />
              <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,200,255,0.6)" }}>On SKU Colour — Campaign Use</span>
            </div>
          </div>

          {/* Clear space rule */}
          <div style={{
            background: "var(--brand-card)",
            border: "1px solid var(--brand-border)",
            borderRadius: "16px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}>
            <div style={{ flex: "0 0 auto" }}>
              <div style={{
                position: "relative",
                padding: "24px",
                border: "2px dashed rgba(255,255,255,0.15)",
                borderRadius: "12px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image src="/images/logo.avif" alt="Logo clear space" width={200} height={60} style={{ objectFit: "contain", height: "48px", width: "auto" }} />
                <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", fontFamily: "Barlow Condensed, sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px" }}>X</div>
                <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", fontFamily: "Barlow Condensed, sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px" }}>X</div>
                <div style={{ position: "absolute", left: "4px", top: "50%", transform: "translateY(-50%)", fontFamily: "Barlow Condensed, sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px" }}>X</div>
                <div style={{ position: "absolute", right: "4px", top: "50%", transform: "translateY(-50%)", fontFamily: "Barlow Condensed, sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px" }}>X</div>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "Bebas Neue, cursive", fontSize: "28px", letterSpacing: "2px", marginBottom: "12px", color: "var(--brand-white)" }}>CLEAR SPACE RULE</h3>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(240,240,255,0.6)", lineHeight: 1.6, maxWidth: "500px" }}>
                Always maintain a minimum clear space equal to the cap height of the "G" in the Gee Up logotype. This space must be free of text, imagery, and other graphic elements. The dashed boundary shown represents the minimum exclusion zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COLOUR SYSTEM ───────────────────────────────────── */}
      <section id="colours" style={{
        padding: "120px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div className="section-label" style={{ marginBottom: "24px" }}>03 / Colour System</div>
        <div className="divider-glow" style={{ marginBottom: "64px" }} />

        {/* Primary palette */}
        <h3 style={{
          fontFamily: "Bebas Neue, cursive",
          fontSize: "22px",
          letterSpacing: "4px",
          color: "rgba(240,240,255,0.4)",
          marginBottom: "24px",
        }}>PRIMARY PALETTE</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "80px" }}>
          {colorPrimaries.map((c) => (
            <div key={c.name} style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <div style={{
                height: "140px",
                background: c.bg.startsWith("linear") ? c.bg : c.hex,
                display: "flex",
                alignItems: "flex-end",
                padding: "16px",
              }}>
                {c.name === "Chrome Silver" && (
                  <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(0,0,0,0.5)", letterSpacing: "2px", textTransform: "uppercase" }}>Metallic</span>
                )}
              </div>
              <div style={{ background: "var(--brand-card)", padding: "20px 20px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "20px", letterSpacing: "1px", color: "var(--brand-white)", marginBottom: "4px" }}>{c.name}</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(240,240,255,0.4)", letterSpacing: "1px" }}>{c.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* SKU Colour Palette */}
        <h3 style={{
          fontFamily: "Bebas Neue, cursive",
          fontSize: "22px",
          letterSpacing: "4px",
          color: "rgba(240,240,255,0.4)",
          marginBottom: "24px",
        }}>FLAVOUR-CODED SKU PALETTE</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
          {SKUs.map((sku) => (
            <div key={sku.id} style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: `1px solid ${sku.primary}30`,
              boxShadow: `0 0 30px ${sku.primary}20`,
            }}>
              {/* Colour swatch */}
              <div style={{ position: "relative" }}>
                <div style={{
                  height: "100px",
                  background: `linear-gradient(135deg, ${sku.dark}, ${sku.mid}, ${sku.primary})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: sku.primary,
                    boxShadow: `0 0 20px ${sku.primary}, 0 0 40px ${sku.glow}`,
                  }} />
                </div>
              </div>
              <div style={{ background: "var(--brand-card)", padding: "16px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "17px", color: sku.primary, letterSpacing: "1px", marginBottom: "4px" }}>{sku.name}</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(240,240,255,0.5)", lineHeight: 1.8 }}>
                  <div>#{sku.hex}</div>
                  <div>RGB {sku.rgb}</div>
                  <div>CMYK {sku.cmyk}</div>
                  <div style={{ marginTop: "8px", color: sku.primary, fontSize: "11px", letterSpacing: "1px" }}>{sku.pantone}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TYPOGRAPHY ──────────────────────────────────────── */}
      <section id="typography" style={{
        padding: "80px 40px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "24px" }}>04 / Typography</div>
          <div className="divider-glow" style={{ marginBottom: "64px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>

            {/* Display — Anton */}
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              padding: "40px",
            }}>
              <div className="section-label" style={{ marginBottom: "20px" }}>Display / Headers</div>
              <div style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "80px",
                lineHeight: 0.9,
                letterSpacing: "-1px",
              }}>
                <span className="text-chrome-bold">Aa</span>
              </div>
              <div style={{ marginTop: "24px", marginBottom: "24px" }}>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: "28px", color: "var(--brand-white)", marginBottom: "4px" }}>Anton</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(240,240,255,0.4)", letterSpacing: "2px", textTransform: "uppercase" }}>Google Fonts · Display</div>
              </div>
              <div style={{ fontFamily: "Anton, sans-serif", lineHeight: 1.2, color: "rgba(240,240,255,0.7)" }}>
                {["64px — Hero Headline", "48px — Section Title", "32px — Sub Header"].map((s) => (
                  <div key={s} style={{ fontSize: "14px", marginBottom: "8px", fontFamily: "Barlow Condensed, sans-serif" }}>{s}</div>
                ))}
              </div>
              <div style={{ marginTop: "20px", fontFamily: "Anton, sans-serif", fontSize: "24px", color: "#00C8FF", textShadow: "0 0 15px #00C8FF" }}>
                GET LOUD
              </div>
            </div>

            {/* Bebas Neue — Labels */}
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              padding: "40px",
            }}>
              <div className="section-label" style={{ marginBottom: "20px" }}>Label / Accent</div>
              <div style={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "80px",
                lineHeight: 0.9,
                letterSpacing: "2px",
                color: "#FF4D8A",
                textShadow: "0 0 20px #FF4D8A",
              }}>
                Aa
              </div>
              <div style={{ marginTop: "24px", marginBottom: "24px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "28px", color: "var(--brand-white)", marginBottom: "4px" }}>Bebas Neue</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(240,240,255,0.4)", letterSpacing: "2px", textTransform: "uppercase" }}>Google Fonts · Condensed</div>
              </div>
              <div style={{ lineHeight: 1.2, color: "rgba(240,240,255,0.7)" }}>
                {["Section labels", "Nav items", "Product names", "Badge callouts"].map((s) => (
                  <div key={s} style={{ fontSize: "14px", marginBottom: "8px", fontFamily: "Barlow Condensed, sans-serif" }}>{s}</div>
                ))}
              </div>
              <div style={{ marginTop: "20px", fontFamily: "Bebas Neue, cursive", fontSize: "24px", color: "#FF4D8A", letterSpacing: "3px" }}>
                SOUR WATERMELON
              </div>
            </div>

            {/* Barlow Condensed — Body */}
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              padding: "40px",
            }}>
              <div className="section-label" style={{ marginBottom: "20px" }}>Body / UI Text</div>
              <div style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: "80px",
                lineHeight: 0.9,
                fontWeight: 700,
                color: "#39FF14",
                textShadow: "0 0 20px #39FF14",
              }}>
                Aa
              </div>
              <div style={{ marginTop: "24px", marginBottom: "24px" }}>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "28px", fontWeight: 700, color: "var(--brand-white)", marginBottom: "4px" }}>Barlow Condensed</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(240,240,255,0.4)", letterSpacing: "2px", textTransform: "uppercase" }}>Google Fonts · Body</div>
              </div>
              <div style={{ lineHeight: 1.2, color: "rgba(240,240,255,0.7)" }}>
                {["18–20px — Body copy", "14–16px — UI labels", "12px — Metadata / fine print"].map((s) => (
                  <div key={s} style={{ fontSize: "14px", marginBottom: "8px", fontFamily: "Barlow Condensed, sans-serif" }}>{s}</div>
                ))}
              </div>
              <div style={{ marginTop: "20px", fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(240,240,255,0.6)", lineHeight: 1.6 }}>
                Best served cold. Not your<br />average Friday night drink.
              </div>
            </div>
          </div>

          {/* Type scale specimen */}
          <div style={{
            marginTop: "48px",
            background: "var(--brand-card)",
            border: "1px solid var(--brand-border)",
            borderRadius: "16px",
            padding: "48px",
          }}>
            <div className="section-label" style={{ marginBottom: "32px" }}>Type Scale Specimen</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "24px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "16px" }}>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px", minWidth: "80px" }}>96PX</span>
                <span style={{ fontFamily: "Anton, sans-serif", fontSize: "96px", lineHeight: 1 }} className="text-chrome-bold">GEE UP</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "24px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "16px" }}>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px", minWidth: "80px" }}>64PX</span>
                <span style={{ fontFamily: "Anton, sans-serif", fontSize: "64px", lineHeight: 1, color: "#FF00CC", textShadow: "0 0 20px #FF00CC" }}>COTTON CANDY CRUSH</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "24px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "16px" }}>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px", minWidth: "80px" }}>48PX</span>
                <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "48px", letterSpacing: "4px", color: "#A020F0", textShadow: "0 0 15px #A020F0" }}>VODKA · PREMIX · ELECTROLYTES</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "24px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "16px" }}>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px", minWidth: "80px" }}>24PX</span>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "24px", fontWeight: 600, color: "rgba(240,240,255,0.8)" }}>Best served ice cold at the festival, pregame, or wherever the night takes you.</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "24px" }}>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", letterSpacing: "2px", minWidth: "80px" }}>16PX</span>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", fontWeight: 400, color: "rgba(240,240,255,0.5)" }}>4.8% ABV · 275mL · Contains electrolytes · Vodka premix · Gluten free · No artificial colours in Cotton Candy Crush and Bubble G Burst</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKU LINEUP ──────────────────────────────────────── */}
      <section id="skus" style={{
        padding: "120px 40px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>
        <div className="section-label" style={{ marginBottom: "24px" }}>05 / SKU Lineup</div>
        <div className="divider-glow" style={{ marginBottom: "64px" }} />

        <h2 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(48px, 5vw, 72px)",
          lineHeight: 0.95,
          marginBottom: "64px",
        }}>
          <span className="text-chrome-bold">FIVE FLAVOURS.</span>
          <br />
          <span style={{ color: "#FF4D8A", textShadow: "0 0 20px #FF4D8A" }}>FIVE WORLDS.</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          {SKUs.map((sku, i) => (
            <div key={sku.id} style={{
              background: "var(--brand-card)",
              border: `1px solid ${sku.primary}25`,
              borderRadius: i === 0 ? "16px 16px 4px 4px" : i === SKUs.length - 1 ? "4px 4px 16px 16px" : "4px",
              padding: "40px 48px",
              display: "grid",
              gridTemplateColumns: "80px 1fr 200px 200px 1fr",
              alignItems: "center",
              gap: "40px",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Glow strip on left */}
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "3px",
                background: `linear-gradient(to bottom, ${sku.primary}, ${sku.glow})`,
                boxShadow: `0 0 20px ${sku.primary}`,
              }} />

              {/* Number */}
              <div style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "56px",
                lineHeight: 1,
                color: `${sku.primary}30`,
              }}>0{i + 1}</div>

              {/* Bottle */}
              <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                <div style={{ position: "relative" }}>
                  <div style={{
                    position: "absolute",
                    bottom: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "30px",
                    background: `radial-gradient(ellipse, ${sku.primary}50, transparent)`,
                    filter: "blur(6px)",
                  }} />
                  <Image
                    src={sku.img}
                    alt={sku.name}
                    width={60}
                    height={180}
                    style={{
                      objectFit: "contain",
                      height: "120px",
                      width: "auto",
                      filter: `drop-shadow(0 4px 20px ${sku.primary}60)`,
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div>
                  <div style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "32px",
                    color: sku.primary,
                    textShadow: `0 0 15px ${sku.primary}`,
                    letterSpacing: "0.5px",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}>{sku.name.toUpperCase()}</div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(240,240,255,0.4)", letterSpacing: "3px", textTransform: "uppercase" }}>{sku.type}</div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(240,240,255,0.3)", marginTop: "4px", letterSpacing: "1px" }}>{sku.mood}</div>
                </div>
              </div>

              {/* Primary hex */}
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "3px", color: "rgba(240,240,255,0.3)", marginBottom: "8px" }}>PRIMARY HEX</div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: sku.primary, boxShadow: `0 0 12px ${sku.primary}` }} />
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "24px", color: sku.primary, letterSpacing: "2px" }}>#{sku.hex}</div>
                </div>
              </div>

              {/* RGB */}
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "3px", color: "rgba(240,240,255,0.3)", marginBottom: "8px" }}>RGB VALUE</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "18px", fontWeight: 600, color: "rgba(240,240,255,0.7)", letterSpacing: "1px" }}>{sku.rgb}</div>
              </div>

              {/* Pantone */}
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "3px", color: "rgba(240,240,255,0.3)", marginBottom: "8px" }}>PANTONE</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", fontWeight: 600, color: sku.primary }}>{sku.pantone}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BRAND VOICE ─────────────────────────────────────── */}
      <section id="voice" style={{
        padding: "80px 40px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "24px" }}>06 / Brand Voice & Personality</div>
          <div className="divider-glow" style={{ marginBottom: "64px" }} />

          {/* Personality traits grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "80px" }}>
            {personalityTraits.map((t, i) => {
              const colors = ["#00C8FF", "#FF4D8A", "#39FF14", "#A020F0", "#FF00CC", "#FF4D8A"];
              const color = colors[i % colors.length];
              return (
                <div key={t.word} style={{
                  background: "var(--brand-card)",
                  border: `1px solid ${color}20`,
                  borderRadius: "16px",
                  padding: "32px",
                  boxShadow: `0 0 30px ${color}10`,
                }}>
                  <div style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "52px",
                    color: color,
                    textShadow: `0 0 20px ${color}80`,
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}>{t.word}</div>
                  <p style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "17px",
                    color: "rgba(240,240,255,0.5)",
                    lineHeight: 1.5,
                  }}>{t.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Tone example */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "64px" }}>
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid rgba(57,255,20,0.2)",
              borderRadius: "16px",
              padding: "40px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#39FF14",
                  boxShadow: "0 0 15px #39FF14",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}>✓</div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "24px", letterSpacing: "3px", color: "#39FF14" }}>WRITE LIKE THIS</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Caption", text: "Your pre-drinks just got an upgrade 🔥 GEE UP. #LetsGeeUp" },
                  { label: "Ad copy", text: "5 flavours. Zero chill. Pick your vibe." },
                  { label: "Tagline", text: "Get Loud. Get Going. Get Gee Up." },
                ].map((ex) => (
                  <div key={ex.label} style={{ borderLeft: "3px solid #39FF14", paddingLeft: "16px" }}>
                    <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "3px", color: "#39FF14", marginBottom: "4px" }}>{ex.label.toUpperCase()}</div>
                    <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(240,240,255,0.8)" }}>{ex.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: "var(--brand-card)",
              border: "1px solid rgba(255,77,138,0.2)",
              borderRadius: "16px",
              padding: "40px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#FF4D8A",
                  boxShadow: "0 0 15px #FF4D8A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                  color: "white",
                  fontWeight: "bold",
                }}>✕</div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "24px", letterSpacing: "3px", color: "#FF4D8A" }}>NOT LIKE THIS</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Too corporate", text: "Gee Up Vodka Premix offers a premium drinking experience." },
                  { label: "Too vague", text: "Refreshing. Fruity. Affordable." },
                  { label: "Wrong tone", text: "Our product is available at select retail outlets nationwide." },
                ].map((ex) => (
                  <div key={ex.label} style={{ borderLeft: "3px solid #FF4D8A40", paddingLeft: "16px", opacity: 0.7 }}>
                    <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "13px", letterSpacing: "3px", color: "#FF4D8A80", marginBottom: "4px" }}>{ex.label.toUpperCase()}</div>
                    <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(240,240,255,0.5)", textDecoration: "line-through" }}>{ex.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Do's and don'ts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {[
              { title: "DO'S", color: "#39FF14", items: dosDonts.dos },
              { title: "DON'TS", color: "#FF4D8A", items: dosDonts.donts },
            ].map(({ title, color, items }) => (
              <div key={title} style={{
                background: "var(--brand-card)",
                border: `1px solid ${color}20`,
                borderRadius: "16px",
                padding: "40px",
              }}>
                <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "40px", color: color, textShadow: `0 0 15px ${color}`, marginBottom: "24px" }}>{title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, boxShadow: `0 0 8px ${color}`, marginTop: "8px", flexShrink: 0 }} />
                      <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(240,240,255,0.7)", lineHeight: 1.4 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTOGRAPHY & IMAGERY ───────────────────────────── */}
      <section style={{
        padding: "120px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div className="section-label" style={{ marginBottom: "24px" }}>07 / Photography & Imagery</div>
        <div className="divider-glow" style={{ marginBottom: "64px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", marginBottom: "64px" }}>
          <div>
            <h2 style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(48px, 5vw, 72px)",
              lineHeight: 0.95,
              marginBottom: "24px",
            }}>
              <span className="text-chrome-bold">PRODUCT IS</span>
              <br />
              <span style={{ color: "#FF00CC", textShadow: "0 0 20px #FF00CC" }}>THE HERO.</span>
            </h2>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "20px", color: "rgba(240,240,255,0.6)", lineHeight: 1.6, marginBottom: "32px" }}>
              The bottle is the star of every frame. Gee Up imagery is clean, colour-saturated, and product-centric. The background should always serve the bottle — never compete with it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { title: "Backgrounds", desc: "Pure white, solid black, or the SKU's dark colour variant" },
                { title: "Lighting", desc: "High-key studio or dramatic backlighting that emphasises the liquid colour" },
                { title: "Composition", desc: "Centred single bottle or 5-bottle lineup at equal angles" },
                { title: "Post-processing", desc: "Saturated, high-contrast, minimal grain. Colour accuracy is critical." },
                { title: "Avoid", desc: "Lifestyle clutter, natural grain textures, earthy tones, muted filters" },
              ].map(({ title, desc }) => (
                <div key={title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "4px", background: "#00C8FF", borderRadius: "2px", alignSelf: "stretch", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "2px", color: "#00C8FF" }}>{title}: </span>
                    <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(240,240,255,0.6)" }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product showcase */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}>
            {SKUs.slice(0, 4).map((sku) => (
              <div key={sku.id} style={{
                background: `linear-gradient(135deg, ${sku.dark}, ${sku.mid}50)`,
                borderRadius: "16px",
                border: `1px solid ${sku.primary}25`,
                padding: "32px 16px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                boxShadow: `0 0 30px ${sku.primary}15`,
              }}>
                <Image
                  src={sku.img}
                  alt={sku.name}
                  width={80}
                  height={220}
                  style={{
                    objectFit: "contain",
                    height: "160px",
                    width: "auto",
                    filter: `drop-shadow(0 4px 16px ${sku.primary}60)`,
                  }}
                />
                <div style={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  color: sku.primary,
                  textAlign: "center",
                }}>{sku.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND APPLICATIONS ──────────────────────────────── */}
      <section id="applications" style={{
        padding: "80px 40px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "24px" }}>08 / Brand Applications</div>
          <div className="divider-glow" style={{ marginBottom: "64px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>

            {/* Instagram post mockup */}
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}>
              <div style={{
                background: "linear-gradient(135deg, #001133, #003366)",
                padding: "40px 24px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                minHeight: "220px",
                justifyContent: "center",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 50% 50%, rgba(0,200,255,0.15) 0%, transparent 70%)",
                }} />
                <Image src="/images/product-cotton-candy.png" alt="Instagram" width={80} height={220} style={{ height: "140px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 20px #00C8FF80)", position: "relative", zIndex: 1 }} />
                <div style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "28px",
                  color: "#00C8FF",
                  textShadow: "0 0 15px #00C8FF",
                  position: "relative",
                  zIndex: 1,
                  letterSpacing: "1px",
                }}>COTTON CANDY CRUSH</div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "16px", letterSpacing: "3px", color: "rgba(240,240,255,0.4)", marginBottom: "8px" }}>INSTAGRAM / SOCIAL POST</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(240,240,255,0.5)", lineHeight: 1.5 }}>
                  1080×1080px. Product-centred. SKU background colour. Bold name lockup. No lifestyle clutter.
                </p>
              </div>
            </div>

            {/* TikTok frame */}
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}>
              <div style={{
                background: "linear-gradient(135deg, #1A0011, #660044)",
                padding: "40px 24px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                minHeight: "220px",
                justifyContent: "center",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 50% 50%, rgba(255,0,204,0.15) 0%, transparent 70%)",
                }} />
                <Image src="/images/product-bubble-g.png" alt="TikTok" width={60} height={180} style={{ height: "140px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 20px #FF00CC80)", position: "relative", zIndex: 1 }} />
                <div style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "28px",
                  color: "#FF00CC",
                  textShadow: "0 0 15px #FF00CC",
                  position: "relative",
                  zIndex: 1,
                  letterSpacing: "1px",
                }}>BUBBLE G BURST</div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "16px", letterSpacing: "3px", color: "rgba(240,240,255,0.4)", marginBottom: "8px" }}>TIKTOK / REELS THUMBNAIL</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(240,240,255,0.5)", lineHeight: 1.5 }}>
                  9:16 aspect ratio. Bold hook text. Bottle in first frame. High-energy transitions. Flavour colour dominant.
                </p>
              </div>
            </div>

            {/* POS/Retail */}
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}>
              <div style={{
                background: "linear-gradient(135deg, #001A00, #006600)",
                padding: "40px 24px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                minHeight: "220px",
                justifyContent: "center",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 50% 50%, rgba(57,255,20,0.15) 0%, transparent 70%)",
                }} />
                <Image src="/images/product-green-apple.png" alt="POS" width={60} height={180} style={{ height: "140px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 20px #39FF1480)", position: "relative", zIndex: 1 }} />
                <div style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "28px",
                  color: "#39FF14",
                  textShadow: "0 0 15px #39FF14",
                  position: "relative",
                  zIndex: 1,
                  letterSpacing: "1px",
                }}>GREEN APPLE</div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "16px", letterSpacing: "3px", color: "rgba(240,240,255,0.4)", marginBottom: "8px" }}>RETAIL / POS DISPLAY</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(240,240,255,0.5)", lineHeight: 1.5 }}>
                  A3 shelf talkers. Wobblers. Fridge door clings. Use the SKU's full colour range. White logo out.
                </p>
              </div>
            </div>
          </div>

          {/* Application use case grid */}
          <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { name: "Festival Activation", icon: "🎪", desc: "Experiential, high-energy, all 5 SKUs on display. Full colour immersion." },
              { name: "Convenience Retail", icon: "🏪", desc: "Cold fridge placement. Colour block merchandising. Bold shelf talkers." },
              { name: "Social Media", icon: "📱", desc: "IG/TikTok. Product-hero content. UGC encouraged. #LetsGeeUp" },
              { name: "Nightlife Pre-Drinks", icon: "🌃", desc: "Dark, neon-lit contexts. Club colours. Youth group scenarios." },
            ].map(({ name, icon, desc }) => (
              <div key={name} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--brand-border)",
                borderRadius: "12px",
                padding: "24px",
              }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{icon}</div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", letterSpacing: "2px", color: "var(--brand-white)", marginBottom: "8px" }}>{name}</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(240,240,255,0.5)", lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL LINEUP BANNER ───────────────────────────────── */}
      <section style={{
        padding: "120px 40px",
        maxWidth: "1400px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div className="section-label" style={{ marginBottom: "24px" }}>The Complete Range</div>
        <h2 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(56px, 7vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-2px",
          marginBottom: "80px",
        }}>
          <span className="text-chrome-bold">THE FULL</span>
          <br />
          <span style={{
            background: "linear-gradient(135deg, #00C8FF, #FF4D8A, #A020F0, #39FF14, #FF00CC)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite",
          }}>LINEUP.</span>
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "clamp(16px, 3vw, 48px)",
        }}>
          {SKUs.map((sku, i) => (
            <div key={sku.id} style={{
              textAlign: "center",
              animation: `float ${5 + i * 0.7}s ease-in-out ${i * 0.4}s infinite`,
            }}>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute",
                  bottom: "-24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: "48px",
                  background: `radial-gradient(ellipse, ${sku.primary}60 0%, transparent 70%)`,
                  filter: "blur(12px)",
                }} />
                <Image
                  src={sku.img}
                  alt={sku.name}
                  width={120}
                  height={340}
                  style={{
                    objectFit: "contain",
                    height: "clamp(200px, 22vw, 320px)",
                    width: "auto",
                    filter: `drop-shadow(0 8px 32px ${sku.primary}60)`,
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
              <div style={{ marginTop: "32px" }}>
                <div style={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "clamp(12px, 1.2vw, 16px)",
                  letterSpacing: "2px",
                  color: sku.primary,
                  textShadow: `0 0 10px ${sku.primary}`,
                  lineHeight: 1.3,
                }}>{sku.name}</div>
                <div style={{
                  width: "24px",
                  height: "4px",
                  background: sku.primary,
                  borderRadius: "2px",
                  margin: "8px auto 0",
                  boxShadow: `0 0 8px ${sku.primary}`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer style={{
        background: "#050508",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 40px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <Image src="/images/logo.avif" alt="Gee Up Vodka" width={200} height={60} style={{ objectFit: "contain", height: "40px", width: "auto" }} />
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "32px", letterSpacing: "1px" }}>
              <span className="text-chrome-bold">GET LOUD. GET GOING.</span>
            </div>
          </div>
          <div className="divider-glow" style={{ marginBottom: "32px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(240,240,255,0.25)", letterSpacing: "2px" }}>
              © 2024 GEE UP VODKA · BRAND GUIDELINES · STRICTLY CONFIDENTIAL
            </p>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(240,240,255,0.25)", letterSpacing: "2px" }}>
              LETSGEEUP.COM.AU
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
