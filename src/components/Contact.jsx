import { motion } from 'framer-motion'

const infos = [
  {
    label: 'Adresse',
    icon: '📍',
    content: (
      <a
        href="https://maps.google.com/?q=7B+Rue+Emile+Legrelle+62000+Arras"
        target="_blank"
        rel="noreferrer"
        className="font-body text-forge-stone text-base leading-relaxed hover:text-forge-copper transition-colors"
      >
        7B Rue Émile Legrelle<br/>62000 Arras
      </a>
    ),
  },
  {
    label: 'Téléphone',
    icon: '📞',
    content: (
      <a
        href="tel:+33321515395"
        className="font-body text-forge-stone text-base hover:text-forge-copper transition-colors duration-300"
      >
        03 21 51 53 95
      </a>
    ),
  },
  {
    label: 'Horaires',
    icon: '🕐',
    content: (
      <div className="font-body text-forge-stone text-sm leading-relaxed space-y-0.5">
        <p><span className="text-forge-copper/70">Mar – Ven</span> · 10h00 – 19h00</p>
        <p><span className="text-forge-copper/70">Samedi</span> · 10h00 – 19h00</p>
        <p><span className="text-forge-copper/70">Dim – Lun</span> · Fermé</p>
      </div>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Titre section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-forge-copper tracking-widest uppercase text-sm mb-4">
            Viens nous rendre visite
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forge-light tracking-wide">
            Nous Trouver
          </h2>
          <div className="w-24 h-px bg-forge-copper mx-auto mt-6 opacity-60" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {infos.map((info) => (
              <div key={info.label} className="flex gap-5">
                <span className="text-2xl mt-1">{info.icon}</span>
                <div>
                  <p className="font-display text-forge-copper text-sm tracking-wider uppercase mb-1">
                    {info.label}
                  </p>
                  <p className="font-body text-forge-stone text-base leading-relaxed whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Bouton Instagram */}
            <a
              href="https://www.instagram.com/la_forge_des_mondes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-4 border border-forge-copper/40 px-6 py-3 text-forge-copper font-display text-sm tracking-widest uppercase hover:bg-forge-copper hover:text-forge-black transition-all duration-300"
            >
              <span>Instagram</span>
              <span>&#8594;</span>
            </a>
            </motion.div>

          {/* Carte Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="border border-forge-copper/20 p-1">
              <iframe
                title="La Forge des Mondes - Arras"
                src="https://maps.google.com/maps?q=7B+Rue+Emile+Legrelle+62000+Arras&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <p className="font-body text-xs text-forge-stone/40 mt-2 text-center tracking-wider">
              7B Rue Émile Legrelle · 62000 Arras
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-forge-stone/10 text-center space-y-3">
        <p className="font-display text-forge-copper/40 text-xs tracking-widest uppercase">
          © 2026 La Forge des Mondes · Arras
        </p>

        {/* Webmaster */}
        <p className="font-body text-forge-stone/30 text-xs">
          Site conçu et développé par{' '}
          <a
            href="mailto:matviolierpro@gmail.com"
            className="text-forge-copper/50 hover:text-forge-copper transition-colors duration-300 underline underline-offset-2"
          >
            Matthieu Violier
          </a>
        </p>
      </div>
    </section>
  )
}