"use client";
import Image from "next/image";

const SKUs = [
  {
    name: "Cotton Crush",
    type: "Sugar Free",
    id: "blue",
    img: "/images/product-cotton-candy.png",
    primary: "#00C8FF",
    dark: "#001133",
    mid: "#003A6E",
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
    dark: "#2A0011",
    mid: "#7A1A3A",
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
    dark: "#150022",
    mid: "#3D006B",
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
    dark: "#001A00",
    mid: "#0A4D00",
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
    dark: "#1A0011",
    mid: "#5E0044",
    hex: "FF00CC",
    rgb: "255, 0, 204",
    cmyk: "0, 100, 20, 0",
    pantone: "Pantone 812 C",
    mood: "Candy · Feminine · Pop",
  },
];

const personalityWords = [
  { word: "LOUD",       sub: "Never whispers. Always announces.",   color: "#00C8FF", size: "9vw",  align: "left"   },
  { word: "PLAYFUL",    sub: "Life's too short for boring drinks.",  color: "#FF4D8A", size: "6vw",  align: "right"  },
  { word: "REBELLIOUS", sub: "Rules? Optional. Vibes? Mandatory.",  color: "#39FF14", size: "7.5vw",align: "center" },
  { word: "YOUTHFUL",   sub: "Permanently 23 years old.",           color: "#A020F0", size: "6.5vw",align: "left"   },
  { word: "ENERGETIC",  sub: "Pre-drinks that actually pre-drink.", color: "#FF00CC", size: "5.5vw",align: "right"  },
  { word: "CHAOTIC",    sub: "Beautifully unhinged.",               color: "#FF4D8A", size: "10vw", align: "left"   },
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

/* ─────────────────────────────────────────── */

export default function Home() {
  return (
    <main style={{ background: "var(--brand-black)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(7,7,16,0.88)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--brand-border)",
        padding: "0 48px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "60px",
      }}>
        <img src="/images/logo-white.svg" alt="Gee Up Vodka" style={{ height: "28px", width: "auto" }} />
        <div style={{ display: "flex", gap: "36px" }}>
          {["identity","colours","typography","skus","voice","applications"].map(item => (
            <a key={item} href={`#${item}`} className="nav-link">{item}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", paddingTop: "60px",
      }}>
        {/* Atmospheric colour wash — very low opacity, no sharp glows */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[
            { t:"8%",  l:"2%",  w:700, h:700, c:"0,200,255",  a:"anim-float",   o:0.07 },
            { t:"15%", r:"3%",  w:550, h:550, c:"255,0,204",  a:"anim-float-b", o:0.06 },
            { b:"8%",  l:"25%", w:450, h:450, c:"57,255,20",  a:"anim-float",   o:0.05 },
            { b:"5%",  r:"15%", w:320, h:320, c:"160,32,240", a:"anim-float-b", o:0.06 },
          ].map((orb, i) => (
            <div key={i} className={orb.a} style={{
              position: "absolute",
              top: orb.t, left: orb.l, right: orb.r, bottom: orb.b,
              width: orb.w, height: orb.h,
              background: `radial-gradient(circle, rgba(${orb.c},${orb.o}) 0%, transparent 70%)`,
              borderRadius: "50%",
            }} />
          ))}
        </div>

        <div style={{ textAlign: "center", zIndex: 2, padding: "0 24px", maxWidth: "1200px", width: "100%" }}>
          <div className="section-label anim-fade-in" style={{ marginBottom: "28px", animationDelay: "0ms" }}>
            Brand Identity Guidelines · 2026
          </div>

          <div className="anim-slide-up" style={{ marginBottom: "44px", animationDelay: "80ms" }}>
            <img
              src="/images/logo-white.svg"
              alt="Gee Up Vodka"
              style={{ width: "100%", maxWidth: "460px", height: "auto" }}
            />
          </div>

          <div className="anim-slide-up" style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(64px, 10vw, 118px)",
            lineHeight: 0.9,
            letterSpacing: "-2px",
            marginBottom: "40px",
            animationDelay: "160ms",
          }}>
            <span className="text-chrome">GET LOUD.</span>
            <br />
            <span className="text-sku-gradient">GET GOING.</span>
          </div>

          <p className="anim-slide-up" style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontSize: "16px", fontWeight: 500,
            letterSpacing: "5px", textTransform: "uppercase",
            color: "rgba(242,242,255,0.4)",
            marginBottom: "72px",
            animationDelay: "240ms",
          }}>
            Vodka · Premix · Electrolytes · 4.8% ABV · 275mL
          </p>

          {/* Bottle lineup */}
          <div className="anim-slide-up" style={{
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            gap: "clamp(12px, 2.5vw, 32px)",
            animationDelay: "360ms",
          }}>
            {SKUs.map((sku, i) => (
              <div key={sku.id} className={i % 2 === 0 ? "anim-float" : "anim-float-b"} style={{
                animationDelay: `${i * 0.4}s`,
              }}>
                <img
                  src={sku.img}
                  alt={sku.name}
                  style={{
                    height: "clamp(160px, 18vw, 260px)",
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.5))",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: 0.3,
        }}>
          <span className="section-label">Scroll</span>
          <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* ── 01 BRAND IDENTITY ───────────────────────────────── */}
      <section id="identity" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: "20px" }}>01 / Brand Identity</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <h2 style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(52px, 5.5vw, 84px)",
              lineHeight: 0.95, letterSpacing: "-1px",
              marginBottom: "40px",
            }}>
              <span className="text-chrome">THE BRAND</span>
              <br />
              <span style={{ color: "#39FF14" }}>IN THREE</span>
              <br />
              <span style={{ color: "#F2F2FF" }}>WORDS.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              {[
                { word: "LOUD",        color: "#00C8FF" },
                { word: "FLAVOURED",   color: "#FF4D8A" },
                { word: "UNIGNORABLE",color: "#39FF14" },
              ].map(({ word, color }) => (
                <div key={word} style={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "clamp(52px, 6vw, 80px)",
                  lineHeight: 1.05,
                  color: color,
                  letterSpacing: "1px",
                }}>{word}</div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "14px", padding: "32px",
            }}>
              <h3 style={{
                fontFamily: "Bebas Neue, cursive", fontSize: "18px",
                letterSpacing: "4px", color: "rgba(242,242,255,0.35)",
                marginBottom: "14px",
              }}>BRAND MISSION</h3>
              <p style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: "21px", fontWeight: 400, lineHeight: 1.55,
                color: "var(--brand-white)",
              }}>
                Gee Up makes the moment louder. Flavour-first, colour-coded vodka premixes designed for the feed, the fridge, and the festival. Every bottle is a vibe in itself.
              </p>
            </div>

            <div style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "14px", padding: "32px",
            }}>
              <h3 style={{
                fontFamily: "Bebas Neue, cursive", fontSize: "18px",
                letterSpacing: "4px", color: "rgba(242,242,255,0.35)",
                marginBottom: "14px",
              }}>TARGET AUDIENCE</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["18–28 year olds","Festival-goers","Social drinkers","Content creators","Night-out starters","Gaming sessions","Convenience stores","TikTok / Instagram"].map(tag => (
                  <span key={tag} style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "40px", padding: "5px 14px",
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "14px", fontWeight: 500, letterSpacing: "0.5px",
                    color: "rgba(242,242,255,0.65)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 LOGO SYSTEM ──────────────────────────────────── */}
      <section style={{
        padding: "80px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "20px" }}>02 / Logo System</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          {/* Three usage panels */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "48px" }}>

            {/* On Black — white logo */}
            <div style={{
              background: "#070710",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px", padding: "52px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "20px",
            }}>
              <img src="/images/logo-white.svg" alt="Logo on black" style={{ width: "100%", maxWidth: "260px", height: "auto" }} />
              <span style={{
                fontFamily: "Barlow Condensed, sans-serif", fontSize: "11px",
                letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
              }}>On Black — Primary Use</span>
            </div>

            {/* On White — black logo */}
            <div style={{
              background: "#F2F2FF",
              borderRadius: "14px", padding: "52px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "20px",
            }}>
              <img src="/images/logo-black.svg" alt="Logo on white" style={{ width: "100%", maxWidth: "260px", height: "auto" }} />
              <span style={{
                fontFamily: "Barlow Condensed, sans-serif", fontSize: "11px",
                letterSpacing: "3px", textTransform: "uppercase", color: "rgba(10,10,20,0.38)",
              }}>On White — Secondary Use</span>
            </div>

            {/* On SKU colour — white logo */}
            <div style={{
              background: "linear-gradient(135deg, #001133 0%, #003A6E 100%)",
              border: "1px solid rgba(0,200,255,0.18)",
              borderRadius: "14px", padding: "52px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "20px",
            }}>
              <img src="/images/logo-white.svg" alt="Logo on SKU colour" style={{ width: "100%", maxWidth: "260px", height: "auto" }} />
              <span style={{
                fontFamily: "Barlow Condensed, sans-serif", fontSize: "11px",
                letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,200,255,0.5)",
              }}>On SKU Colour — Campaign Use</span>
            </div>
          </div>

          {/* Clear space */}
          <div style={{
            background: "var(--brand-card)",
            border: "1px solid var(--brand-border)",
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
                  { top: "6px", left: "50%", transform: "translateX(-50%)" },
                  { bottom: "6px", left: "50%", transform: "translateX(-50%)" },
                  { left: "6px",  top: "50%", transform: "translateY(-50%)" },
                  { right: "6px", top: "50%", transform: "translateY(-50%)" },
                ].map((pos, i) => (
                  <div key={i} style={{
                    position: "absolute", ...pos,
                    fontFamily: "Barlow Condensed, sans-serif",
                    fontSize: "10px", color: "rgba(255,255,255,0.28)",
                    letterSpacing: "1px",
                  }}>X</div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{
                fontFamily: "Bebas Neue, cursive", fontSize: "26px",
                letterSpacing: "2px", marginBottom: "12px", color: "var(--brand-white)",
              }}>CLEAR SPACE RULE</h3>
              <p style={{
                fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px",
                color: "rgba(242,242,255,0.55)", lineHeight: 1.65, maxWidth: "520px",
              }}>
                Always maintain a minimum clear space equal to the cap height of the "G" in the Gee Up logotype on all four sides. This zone must be free of text, imagery, and graphic elements. The dashed boundary shown represents the minimum exclusion zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 COLOUR SYSTEM ────────────────────────────────── */}
      <section id="colours" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: "20px" }}>03 / Colour System</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        {/* Primary palette */}
        <h3 style={{
          fontFamily: "Bebas Neue, cursive", fontSize: "18px",
          letterSpacing: "5px", color: "rgba(242,242,255,0.35)", marginBottom: "20px",
        }}>PRIMARY PALETTE</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "72px" }}>
          {[
            { name: "Brand Black",  hex: "#070710", swatch: "#070710",  border: "rgba(255,255,255,0.1)", textDark: false },
            { name: "Deep Night",   hex: "#0C0C18", swatch: "#0C0C18",  border: "rgba(255,255,255,0.08)", textDark: false },
            { name: "Pure White",   hex: "#F2F2FF", swatch: "#F2F2FF",  border: "transparent",            textDark: true  },
            { name: "Warm Silver",  hex: "#C8C8D4", swatch: "linear-gradient(135deg,#e0e0e8,#f8f8ff,#b8b8c8,#f0f0f8)", border: "transparent", textDark: true },
          ].map(c => (
            <div key={c.name} style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${c.border}` }}>
              <div style={{ height: "120px", background: c.swatch }} />
              <div style={{ background: "var(--brand-card)", padding: "16px" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "18px", color: "var(--brand-white)", marginBottom: "3px" }}>{c.name}</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.38)", letterSpacing: "1px" }}>{c.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* SKU palette */}
        <h3 style={{
          fontFamily: "Bebas Neue, cursive", fontSize: "18px",
          letterSpacing: "5px", color: "rgba(242,242,255,0.35)", marginBottom: "20px",
        }}>FLAVOUR-CODED SKU PALETTE</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
          {SKUs.map(sku => (
            <div key={sku.id} style={{
              borderRadius: "12px", overflow: "hidden",
              border: `1px solid ${sku.primary}22`,
            }}>
              <div style={{
                height: "88px",
                background: `linear-gradient(160deg, ${sku.dark} 0%, ${sku.mid} 55%, ${sku.primary} 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: sku.primary,
                }} />
              </div>
              <div style={{ background: "var(--brand-card)", padding: "14px 14px" }}>
                <div style={{
                  fontFamily: "Bebas Neue, cursive", fontSize: "15px",
                  color: sku.primary, letterSpacing: "0.5px", marginBottom: "6px",
                }}>{sku.name}</div>
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

      {/* ── 04 TYPOGRAPHY ───────────────────────────────────── */}
      <section id="typography" style={{
        padding: "80px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "20px" }}>04 / Typography</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "40px" }}>

            {/* Anton */}
            <div style={{ background: "var(--brand-card)", border: "1px solid var(--brand-border)", borderRadius: "14px", padding: "36px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>Display / Headers</div>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "88px", lineHeight: 0.9, color: "#F2F2FF", marginBottom: "24px" }}>Aa</div>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "26px", color: "#F2F2FF", marginBottom: "2px" }}>Anton</div>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.35)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Google Fonts · Display</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {["64px — Hero Headline","48px — Section Title","32px — Sub Header"].map(s => (
                  <div key={s} style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.45)" }}>{s}</div>
                ))}
              </div>
              <div style={{ marginTop: "20px", fontFamily: "Anton, sans-serif", fontSize: "24px", color: "#00C8FF", letterSpacing: "0.5px" }}>
                GET LOUD
              </div>
            </div>

            {/* Bebas Neue */}
            <div style={{ background: "var(--brand-card)", border: "1px solid var(--brand-border)", borderRadius: "14px", padding: "36px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>Label / Accent</div>
              <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "88px", lineHeight: 0.9, color: "#FF4D8A", marginBottom: "24px" }}>Aa</div>
              <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "26px", color: "#F2F2FF", marginBottom: "2px" }}>Bebas Neue</div>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.35)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Google Fonts · Condensed</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {["Section labels","Nav items","Product names","Badge callouts"].map(s => (
                  <div key={s} style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.45)" }}>{s}</div>
                ))}
              </div>
              <div style={{ marginTop: "20px", fontFamily: "Bebas Neue, cursive", fontSize: "22px", color: "#FF4D8A", letterSpacing: "3px" }}>
                SOUR WATERMELON
              </div>
            </div>

            {/* Barlow Condensed */}
            <div style={{ background: "var(--brand-card)", border: "1px solid var(--brand-border)", borderRadius: "14px", padding: "36px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>Body / UI Text</div>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "88px", lineHeight: 0.9, fontWeight: 700, color: "#39FF14", marginBottom: "24px" }}>Aa</div>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "26px", fontWeight: 700, color: "#F2F2FF", marginBottom: "2px" }}>Barlow Condensed</div>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.35)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>Google Fonts · Body</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {["18–20px — Body copy","14–16px — UI labels","12px — Metadata"].map(s => (
                  <div key={s} style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.45)" }}>{s}</div>
                ))}
              </div>
              <div style={{ marginTop: "20px", fontFamily: "Barlow Condensed, sans-serif", fontSize: "16px", color: "rgba(242,242,255,0.55)", lineHeight: 1.6 }}>
                Best served cold.<br />Not your average Friday.
              </div>
            </div>
          </div>

          {/* Type scale specimen */}
          <div style={{
            background: "var(--brand-card)", border: "1px solid var(--brand-border)",
            borderRadius: "14px", padding: "44px 48px",
          }}>
            <div className="section-label" style={{ marginBottom: "28px" }}>Type Scale Specimen</div>
            {[
              { size: "96", font: "Anton, sans-serif", w: 400, color: "#F2F2FF", text: "GEE UP" },
              { size: "64", font: "Anton, sans-serif", w: 400, color: "#FF00CC", text: "COTTON CRUSH" },
              { size: "48", font: "Bebas Neue, cursive", w: 400, color: "#A020F0", text: "VODKA · PREMIX · ELECTROLYTES", ls: "4px" },
              { size: "24", font: "Barlow Condensed, sans-serif", w: 600, color: "rgba(242,242,255,0.8)", text: "Best served ice cold at the festival, pregame, or wherever the night takes you." },
              { size: "16", font: "Barlow Condensed, sans-serif", w: 400, color: "rgba(242,242,255,0.4)", text: "4.8% ABV · 275mL · Contains electrolytes · Vodka premix · Gluten free" },
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
        </div>
      </section>

      {/* ── 05 SKU LINEUP ───────────────────────────────────── */}
      <section id="skus" style={{ padding: "120px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: "20px" }}>05 / SKU Lineup</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        <h2 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(48px, 5vw, 72px)",
          lineHeight: 0.95, marginBottom: "56px",
        }}>
          <span className="text-chrome">FIVE FLAVOURS.</span>
          <br />
          <span style={{ color: "#FF4D8A" }}>FIVE WORLDS.</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {SKUs.map((sku, i) => (
            <div key={sku.id} style={{
              background: "var(--brand-card)",
              border: `1px solid ${sku.primary}20`,
              borderRadius: i === 0 ? "14px 14px 3px 3px" : i === SKUs.length - 1 ? "3px 3px 14px 14px" : "3px",
              padding: "36px 48px",
              display: "grid",
              gridTemplateColumns: "72px 1fr 190px 190px 1fr",
              alignItems: "center",
              gap: "40px",
            }}>
              {/* Index number */}
              <div style={{
                fontFamily: "Anton, sans-serif", fontSize: "52px", lineHeight: 1,
                color: `${sku.primary}28`,
              }}>0{i + 1}</div>

              {/* Bottle + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                <img
                  src={sku.img}
                  alt={sku.name}
                  style={{
                    height: "112px", width: "auto", objectFit: "contain",
                    filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{
                    fontFamily: "Anton, sans-serif", fontSize: "30px",
                    color: sku.primary, letterSpacing: "0.5px", lineHeight: 1, marginBottom: "6px",
                  }}>{sku.name.toUpperCase()}</div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.38)", letterSpacing: "3px", textTransform: "uppercase" }}>{sku.type}</div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "13px", color: "rgba(242,242,255,0.28)", marginTop: "4px" }}>{sku.mood}</div>
                </div>
              </div>

              {/* Hex */}
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "rgba(242,242,255,0.28)", marginBottom: "8px" }}>PRIMARY HEX</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: sku.primary, flexShrink: 0 }} />
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "22px", color: sku.primary, letterSpacing: "2px" }}>#{sku.hex}</div>
                </div>
              </div>

              {/* RGB */}
              <div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "rgba(242,242,255,0.28)", marginBottom: "8px" }}>RGB VALUE</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", fontWeight: 600, color: "rgba(242,242,255,0.65)" }}>{sku.rgb}</div>
              </div>

              {/* Pantone */}
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "12px", letterSpacing: "3px", color: "rgba(242,242,255,0.28)", marginBottom: "8px" }}>PANTONE</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", fontWeight: 600, color: sku.primary }}>{sku.pantone}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 06 BRAND VOICE ──────────────────────────────────── */}
      <section id="voice" style={{
        padding: "80px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "20px" }}>06 / Brand Voice & Personality</div>
          <div className="divider" style={{ marginBottom: "72px" }} />

          {/* Personality — staggered word wall, not card grid */}
          <div style={{ marginBottom: "88px" }}>
            {personalityWords.map((t, i) => (
              <div key={t.word} style={{
                display: "flex",
                flexDirection: t.align === "right" ? "row-reverse" : "row",
                justifyContent: t.align === "center" ? "center" : "flex-start",
                alignItems: "baseline",
                gap: "24px",
                marginBottom: i < personalityWords.length - 1 ? "-8px" : 0,
              }}>
                <div style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: `clamp(40px, ${t.size}, 120px)`,
                  lineHeight: 1,
                  color: t.color,
                  letterSpacing: "-1px",
                }}>{t.word}</div>
                <div style={{
                  fontFamily: "Barlow Condensed, sans-serif",
                  fontSize: "15px",
                  color: "rgba(242,242,255,0.35)",
                  whiteSpace: "nowrap",
                  alignSelf: "center",
                  paddingBottom: "4px",
                }}>{t.sub}</div>
              </div>
            ))}
          </div>

          {/* Tone examples */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "56px" }}>
            {/* Write like this */}
            <div style={{
              background: "rgba(57,255,20,0.05)",
              border: "1px solid rgba(57,255,20,0.18)",
              borderRadius: "14px", padding: "36px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "#39FF14",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
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

            {/* Not like this */}
            <div style={{
              background: "rgba(255,77,138,0.04)",
              border: "1px solid rgba(255,77,138,0.16)",
              borderRadius: "14px", padding: "36px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "#FF4D8A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
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

          {/* Do's and Don'ts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[
              { title: "DO'S",    color: "#39FF14", items: dosDonts.dos },
              { title: "DON'TS",  color: "#FF4D8A", items: dosDonts.donts },
            ].map(({ title, color, items }) => (
              <div key={title} style={{
                background: "var(--brand-card)",
                border: `1px solid ${color}18`,
                borderRadius: "14px", padding: "36px",
              }}>
                <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "36px", color: color, marginBottom: "20px" }}>{title}</h3>
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
        </div>
      </section>

      {/* ── 07 PHOTOGRAPHY ──────────────────────────────────── */}
      <section style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: "20px" }}>07 / Photography & Imagery</div>
        <div className="divider" style={{ marginBottom: "64px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <h2 style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(48px, 4.5vw, 68px)",
              lineHeight: 0.95, marginBottom: "24px",
            }}>
              <span className="text-chrome">PRODUCT IS</span>
              <br />
              <span style={{ color: "#FF00CC" }}>THE HERO.</span>
            </h2>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "20px", color: "rgba(242,242,255,0.55)", lineHeight: 1.65, marginBottom: "36px" }}>
              The bottle is the star of every frame. Gee Up imagery is clean, colour-saturated, and product-centric. The background always serves the bottle.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { title: "Backgrounds",      desc: "Pure white, solid black, or the SKU's dark colour variant" },
                { title: "Lighting",         desc: "High-key studio or dramatic backlighting that emphasises the liquid colour" },
                { title: "Composition",      desc: "Centred single bottle or 5-bottle lineup at equal angles" },
                { title: "Post-processing",  desc: "Saturated, high-contrast, minimal grain. Colour accuracy is critical." },
                { title: "Avoid",            desc: "Lifestyle clutter, natural grain textures, earthy tones, muted filters" },
              ].map(({ title, desc }, i, arr) => (
                <div key={title} style={{
                  padding: "16px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "17px", letterSpacing: "2px", color: "#00C8FF" }}>{title}: </span>
                  <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "17px", color: "rgba(242,242,255,0.55)" }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {SKUs.slice(0, 4).map(sku => (
              <div key={sku.id} style={{
                background: `linear-gradient(160deg, ${sku.dark} 0%, ${sku.mid} 100%)`,
                borderRadius: "14px",
                border: `1px solid ${sku.primary}20`,
                padding: "28px 16px 16px",
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "12px",
              }}>
                <img
                  src={sku.img}
                  alt={sku.name}
                  style={{
                    height: "152px", width: "auto", objectFit: "contain",
                    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
                  }}
                />
                <div style={{
                  fontFamily: "Bebas Neue, cursive", fontSize: "13px",
                  letterSpacing: "2px", color: sku.primary, textAlign: "center",
                }}>{sku.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 BRAND APPLICATIONS ───────────────────────────── */}
      <section id="applications" style={{
        padding: "80px 48px",
        background: "var(--brand-deep)",
        borderTop: "1px solid var(--brand-border)",
        borderBottom: "1px solid var(--brand-border)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "20px" }}>08 / Brand Applications</div>
          <div className="divider" style={{ marginBottom: "64px" }} />

          {/* Application mockup cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "40px" }}>
            {[
              { sku: SKUs[0], label: "INSTAGRAM / SOCIAL POST",    note: "1080×1080px. Product-centred. SKU background. Bold name lockup. No lifestyle clutter." },
              { sku: SKUs[4], label: "TIKTOK / REELS THUMBNAIL",   note: "9:16 ratio. Bold hook text. Bottle in first frame. Flavour colour dominant." },
              { sku: SKUs[3], label: "RETAIL / POS DISPLAY",       note: "A3 shelf talkers. Wobblers. Fridge clings. White logo out on colour background." },
            ].map(({ sku, label, note }) => (
              <div key={sku.id} style={{
                background: "var(--brand-card)",
                border: "1px solid var(--brand-border)",
                borderRadius: "14px", overflow: "hidden",
              }}>
                <div style={{
                  background: `linear-gradient(160deg, ${sku.dark} 0%, ${sku.mid} 100%)`,
                  padding: "40px 24px 28px",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: "16px", minHeight: "200px",
                  justifyContent: "center",
                }}>
                  <img
                    src={sku.img}
                    alt={sku.name}
                    style={{ height: "136px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.4))" }}
                  />
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: "24px", color: sku.primary, letterSpacing: "0.5px" }}>
                    {sku.name.toUpperCase()}
                  </div>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "14px", letterSpacing: "3px", color: "rgba(242,242,255,0.35)", marginBottom: "8px" }}>{label}</div>
                  <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "15px", color: "rgba(242,242,255,0.45)", lineHeight: 1.55 }}>{note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Context grid — no emojis, styled with abbreviation marks */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {[
              { abbr: "FV", color: "#00C8FF", name: "Festival Activation",   desc: "Experiential, high-energy. All 5 SKUs on display. Full colour immersion." },
              { abbr: "RT", color: "#FF4D8A", name: "Convenience Retail",    desc: "Cold fridge placement. Colour block merchandising. Bold shelf talkers." },
              { abbr: "SM", color: "#39FF14", name: "Social Media",          desc: "IG/TikTok. Product-hero content. UGC encouraged. #LetsGeeUp" },
              { abbr: "NL", color: "#A020F0", name: "Nightlife Pre-Drinks",  desc: "Dark, neon-lit contexts. Club settings. Youth group scenarios." },
            ].map(({ abbr, color, name, desc }) => (
              <div key={abbr} style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid var(--brand-border)",
                borderRadius: "12px", padding: "24px",
              }}>
                <div style={{
                  fontFamily: "Anton, sans-serif", fontSize: "28px",
                  color: color, marginBottom: "12px", letterSpacing: "1px",
                }}>{abbr}</div>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "17px", letterSpacing: "2px", color: "var(--brand-white)", marginBottom: "8px" }}>{name}</div>
                <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "14px", color: "rgba(242,242,255,0.42)", lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL LINEUP ─────────────────────────────────────── */}
      <section style={{ padding: "120px 48px", maxWidth: "1400px", margin: "0 auto", textAlign: "center" }}>
        <div className="section-label" style={{ marginBottom: "20px" }}>The Complete Range</div>
        <h2 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(56px, 7vw, 100px)",
          lineHeight: 0.9, letterSpacing: "-2px",
          marginBottom: "88px",
        }}>
          <span className="text-chrome">THE FULL</span>
          <br />
          <span className="text-sku-gradient">LINEUP.</span>
        </h2>

        <div style={{
          display: "flex", justifyContent: "center",
          alignItems: "flex-end",
          gap: "clamp(16px, 3vw, 48px)",
        }}>
          {SKUs.map((sku, i) => (
            <div key={sku.id} className={i % 2 === 0 ? "anim-float" : "anim-float-b"} style={{
              textAlign: "center",
              animationDelay: `${i * 0.35}s`,
            }}>
              <img
                src={sku.img}
                alt={sku.name}
                style={{
                  height: "clamp(200px, 22vw, 320px)",
                  width: "auto", objectFit: "contain",
                  filter: "drop-shadow(0 8px 28px rgba(0,0,0,0.5))",
                  display: "block",
                }}
              />
              <div style={{ marginTop: "28px" }}>
                <div style={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "clamp(12px, 1.2vw, 15px)",
                  letterSpacing: "2px", color: sku.primary,
                  lineHeight: 1.3,
                }}>{sku.name}</div>
                <div style={{
                  width: "20px", height: "3px",
                  background: sku.primary, borderRadius: "2px",
                  margin: "8px auto 0",
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{
        background: "#050508",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "56px 48px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <img src="/images/logo-white.svg" alt="Gee Up Vodka" style={{ height: "36px", width: "auto" }} />
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "28px", color: "#F2F2FF", letterSpacing: "0.5px" }}>
              GET LOUD. GET GOING.
            </div>
          </div>
          <div className="divider" style={{ marginBottom: "28px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
