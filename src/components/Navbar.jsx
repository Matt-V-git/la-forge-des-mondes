import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Univers', href: '#univers' },
  { label: 'À Propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-forge-black/95 backdrop-blur-sm border-b border-forge-copper/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-forge-copper text-sm tracking-widest uppercase hover:opacity-80 transition-opacity">
          La Forge des Mondes
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 font-body text-sm tracking-wider text-forge-stone">
          {links.map((link) => (
            <a key={link.label} href={link.href}
              className="hover:text-forge-copper transition-colors duration-300 cursor-pointer">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-forge-copper"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <path d="M6 18L18 6M6 6l12 12"/>
              : <path d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-forge-black/98 border-t border-forge-copper/10 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-forge-stone hover:text-forge-copper transition-colors tracking-wider">
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}