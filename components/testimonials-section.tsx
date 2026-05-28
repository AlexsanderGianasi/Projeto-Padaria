"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente desde 2018",
    content: "Os croissants da Bella Massa são simplesmente divinos! Não encontro nada parecido em nenhum outro lugar. A massa é perfeita, crocante por fora e macia por dentro.",
    rating: 5,
    avatar: "MS",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Cliente desde 2020",
    content: "O pão francês deles me lembra da minha infância. Acordo cedo só para garantir o meu pãozinho fresquinho. A qualidade é incomparável!",
    rating: 5,
    avatar: "JS",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Cliente desde 2019",
    content: "Encomendei o bolo de aniversário do meu filho e superou todas as expectativas. Bonito, saboroso e feito com muito carinho. Recomendo demais!",
    rating: 5,
    avatar: "AC",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    role: "Cliente desde 2021",
    content: "O café especial é o melhor que já tomei. Combinado com um sonho de creme, é a receita perfeita para começar o dia. Ambiente acolhedor e atendimento impecável.",
    rating: 5,
    avatar: "PO",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Depoimentos
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            O que nossos clientes <span className="text-primary">dizem</span>
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 relative"
          >
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 mt-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-5 h-5 fill-gold text-gold" />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
