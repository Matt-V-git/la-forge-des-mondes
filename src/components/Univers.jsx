import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const univers = [
  {
    title: 'Wargames',
    desc: 'Warhammer 40K, Age of Sigmar, Kill Team… Construis et peins tes armées, commande en précommande.',
    color: '#2A5C6E',
    img: 'https://images.unsplash.com/photo-1529981188441-8a2e6fe30103?w=800&q=80',
  },
  {
    title: 'TCG',
    desc: 'Magic, Pokémon, Lorcana, One Piece… Boosters, decks et singles pour tous les collectionneurs.',
    color: '#C8723A',
    img: 'https://images.unsplash.com/photo-1644007824843-37e9069834bd?w=800&q=80',
  },
  {
    title: 'Jeux de Rôle',
    desc: 'Donjons & Dragons, Pathfinder, Call of Cthulhu… Tout pour tes parties épiques.',
    color: '#2A5C6E',
    img: 'https://images.unsplash.com/photo-1772121034582-c7d18ae49e5c?w=800&q=80',
  },
  {
    title: 'Modélisme',
    desc: 'Peintures, outils, décors et accessoires. Tout pour donner vie à tes figurines.',
    color: '#C8723A',
    img: 'https://images.unsplash.com/photo-1681367050784-8da9b6c95cd9?w=800&q=80',
  },
]

function Card({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      whileHover={{ y: -6 }}
      className="relative group overflow-hidden"
      style={{ minHeight: '340px' }}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${item.img})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(14,14,14,0.96) 0%, rgba(14,14,14,0.6) 55%, rgba(14,14,14,0.25) 100%)',
        }}
      />

      {/* Bordure bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px group-hover:h-1 transition-all duration-500"
        style={{ backgroundColor: item.color }}
      />

      {/* Contenu */}
      <div className="relative z-10 p-8 flex flex-col justify-end" style={{ minHeight: '340px' }}>
        <h3
          className="font-display text-2xl mb-3 tracking-wide"
          style={{ color: item.color }}
        >
          {item.title}
        </h3>
        <p className="font-body text-forge-stone leading-relaxed text-base">
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Univers() {
  return (
    <section id="univers" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-forge-copper tracking-widest uppercase text-sm mb-4">
          Ce que tu trouveras ici
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-forge-light tracking-wide">
          Nos Univers
        </h2>
        <div className="w-24 h-px bg-forge-copper mx-auto mt-6 opacity-60" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {univers.map((item, i) => (
          <Card key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}