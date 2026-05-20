import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="apropos" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-forge-dark">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #C8723A 0, #C8723A 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-forge-copper tracking-widest uppercase text-sm mb-4">
            Notre histoire
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forge-light tracking-wide">
            À Propos
          </h2>
          <div className="w-24 h-px bg-forge-copper mx-auto mt-6 opacity-60"/>
        </motion.div>

        {/* Citation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-forge-stone leading-relaxed italic text-center mb-12 max-w-3xl mx-auto"
        >
          « Boutique hobby au cœur d'Arras, La Forge des Mondes est le repaire
          de tous les passionnés de figurines, de jeux de rôle et de cartes. »
        </motion.p>

        {/* Deux colonnes */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-forge-copper/30 pl-6"
          >
            <h3 className="font-display text-forge-copper text-lg mb-3 tracking-wide">Notre mission</h3>
            <p className="font-body text-forge-stone/80 leading-relaxed">
              Rassembler les amoureux du hobby dans un espace dédié, accueillant et passionné.
              Que tu cherches ta prochaine armée, ton prochain deck ou ton prochain scénario —
              tu es au bon endroit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-forge-slate/40 pl-6"
          >
            <h3 className="font-display text-forge-copper text-lg mb-3 tracking-wide">Précommandes & Nouveautés</h3>
            <p className="font-body text-forge-stone/80 leading-relaxed">
              On suit de près toutes les sorties Warhammer, TCG et JDR pour t'offrir les meilleures
              précommandes. Suis-nous sur Instagram pour ne rien manquer.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-center"
        >
          {[
            { value: '5.0 ★', label: 'Note Google' },
            { value: '4+', label: 'Univers' },
            { value: '100%', label: 'Passion' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl text-forge-copper">{stat.value}</div>
              <div className="font-body text-xs text-forge-stone tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}