import { motion } from 'framer-motion'

function ForgeLogo({ size = 220 }) {
  // Étoile 16 branches générée mathématiquement
  const starPoints = Array.from({ length: 32 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 32 - Math.PI / 2
    const r = i % 2 === 0 ? 88 : 30
    return `${150 + Math.cos(angle) * r},${128 + Math.sin(angle) * r}`
  }).join(' ')

  // D20 — pentagone avec faces triangulaires
  const d20Outer = Array.from({ length: 5 }, (_, i) => {
    const a = (i * Math.PI * 2) / 5 - Math.PI / 2
    return `${150 + Math.cos(a) * 36},${128 + Math.sin(a) * 36}`
  }).join(' ')

  return (
    <svg viewBox="0 0 300 320" width={size} xmlns="http://www.w3.org/2000/svg">
      {/* Arche */}
      <path
        d="M32 310 L32 138 Q32 22 150 22 Q268 22 268 138 L268 310"
        fill="none" stroke="#C8723A" strokeWidth="3.5" strokeDasharray="10 5"
      />
      {/* Barre horizontale */}
      <line x1="32" y1="242" x2="268" y2="242" stroke="#C8723A" strokeWidth="2.5"/>
      {/* Coins déco bas */}
      <rect x="32" y="238" width="12" height="12" fill="none" stroke="#C8723A" strokeWidth="2"/>
      <rect x="256" y="238" width="12" height="12" fill="none" stroke="#C8723A" strokeWidth="2"/>

      {/* Étoile 16 branches */}
      <polygon points={starPoints} fill="#2A5C6E"/>

      {/* D20 */}
      <polygon points={d20Outer} fill="none" stroke="#1a3a48" strokeWidth="2.5"/>
      {/* Lignes intérieures D20 */}
      {Array.from({ length: 5 }, (_, i) => {
        const a = (i * Math.PI * 2) / 5 - Math.PI / 2
        const x = 150 + Math.cos(a) * 36
        const y = 128 + Math.sin(a) * 36
        return <line key={i} x1="150" y1="128" x2={x} y2={y} stroke="#1a3a48" strokeWidth="1.5"/>
      })}
      {/* Cercle central D20 */}
      <circle cx="150" cy="128" r="16" fill="#1a3a48"/>
      {/* Symbole 8 */}
      <text x="150" y="134" textAnchor="middle" fill="#C8723A"
        fontSize="15" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold">
        8
      </text>

      {/* Enclume gauche */}
      <g>
        {/* Corne */}
        <path d="M58 188 Q72 182 86 186 L86 192 Q72 188 58 194 Z" fill="#2A5C6E"/>
        {/* Corps */}
        <rect x="68" y="184" width="58" height="24" rx="3" fill="#2A5C6E"/>
        {/* Fissure */}
        <path d="M118 184 L122 196 L116 196 L120 208" stroke="#0E0E0E" strokeWidth="1.5" fill="none"/>
        {/* Tige */}
        <rect x="78" y="208" width="38" height="14" rx="1" fill="#2A5C6E"/>
        {/* Base */}
        <rect x="64" y="222" width="52" height="7" rx="2" fill="#2A5C6E"/>
      </g>

      {/* Enclume droite (miroir) */}
      <g>
        {/* Corne */}
        <path d="M242 188 Q228 182 214 186 L214 192 Q228 188 242 194 Z" fill="#2A5C6E"/>
        {/* Corps */}
        <rect x="174" y="184" width="58" height="24" rx="3" fill="#2A5C6E"/>
        {/* Fissure */}
        <path d="M182 184 L178 196 L184 196 L180 208" stroke="#0E0E0E" strokeWidth="1.5" fill="none"/>
        {/* Tige */}
        <rect x="184" y="208" width="38" height="14" rx="1" fill="#2A5C6E"/>
        {/* Base */}
        <rect x="184" y="222" width="52" height="7" rx="2" fill="#2A5C6E"/>
      </g>

      {/* Éclair central cuivré */}
      <path
        d="M146 172 L153 188 L147 188 L154 210"
        stroke="#C8723A" strokeWidth="3" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-forge-black">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #C8723A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forge-black"/>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(42,92,110,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <ForgeLogo size={210} />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-forge-copper leading-none tracking-wide mb-4"
        >
          LA FORGE
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">DES MONDES</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-48 h-px bg-forge-copper/50 my-6"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-forge-stone italic tracking-widest"
        >
          Wargames · TCG · JDR · Modélisme
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-body text-base text-forge-stone/70 mt-3 max-w-sm leading-relaxed"
        >
          Ici, on forge des armées, des aventures…
          <br />et parfois la patience des héros.
        </motion.p>

        <motion.a
          href="#univers"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 px-8 py-3 border border-forge-copper text-forge-copper font-display text-sm tracking-widest uppercase hover:bg-forge-copper hover:text-forge-black transition-all duration-300"
        >
          Explorer la boutique
        </motion.a>
      </div>

      {/* Scroll indicator — centrage propre */}
      <div className="absolute bottom-8" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="cursor-pointer opacity-40 hover:opacity-90 transition-opacity"
          onClick={() => document.getElementById('univers').scrollIntoView({ behavior: 'smooth' })}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8723A" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}