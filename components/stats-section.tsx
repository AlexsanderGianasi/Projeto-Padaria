"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  {
    id: 1,
    number: 1247,
    label: "Pães vendidos hoje",
    suffix: "+",
    icon: "🥖",
  },
  {
    id: 2,
    number: 892,
    label: "Cafés servidos",
    suffix: "",
    icon: "☕",
  },
  {
    id: 3,
    number: 567,
    label: "Clientes felizes",
    suffix: "+",
    icon: "😊",
  },
]

function AnimatedCounter({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, isInView])

  return <>{count.toLocaleString()}</>
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-2">
            Feito Hoje com Amor
          </h2>
          <p className="text-primary-foreground/80">
            Acompanhe nossa produção em tempo real
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-4 text-4xl"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div
                className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
              >
                <AnimatedCounter target={stat.number} isInView={isInView} />
                {stat.suffix}
              </motion.div>
              
              <p className="text-primary-foreground/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
