"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative z-10">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/bakery-interior.png"
                  alt="Interior da padaria"
                  width={600}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </motion.div>
            </div>
            
            <motion.div
              className="absolute -bottom-8 -right-4 md:right-0 w-48 md:w-64 z-20"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 3 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-card">
                <Image
                  src="/images/baker-hands.png"
                  alt="Mãos do padeiro"
                  width={300}
                  height={200}
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gold/20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Nossa História
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Uma tradição de
              <span className="text-primary"> sabor e qualidade</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Desde 1985, a Bella Massa traz para sua mesa o melhor da panificação artesanal. 
              Nossa família começou com um pequeno forno a lenha e um sonho: criar pães que 
              despertassem memórias e aquecessem corações.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Hoje, continuamos fiéis às receitas tradicionais, usando ingredientes selecionados 
              e técnicas passadas de geração em geração. Cada pão que sai do nosso forno carrega 
              a dedicação de quem faz com amor.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {[
                { number: "40+", label: "Anos de tradição" },
                { number: "50+", label: "Receitas únicas" },
                { number: "10k+", label: "Clientes felizes" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
