"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Croissant Artesanal",
    description: "Camadas folhadas de massa amanteigada, assadas até ficarem douradas e crocantes.",
    price: "R$ 8,90",
    image: "/images/croissant.png",
    category: "Doces",
  },
  {
    id: 2,
    name: "Pão Francês Premium",
    description: "Nossa receita tradicional com casca crocante e miolo macio, perfeito para qualquer hora.",
    price: "R$ 1,50",
    image: "/images/french-bread.png",
    category: "Pães",
  },
  {
    id: 3,
    name: "Sonho de Creme",
    description: "Massa fofinha recheada com creme de baunilha, coberta com açúcar refinado.",
    price: "R$ 7,50",
    image: "/images/sonho.png",
    category: "Doces",
  },
  {
    id: 4,
    name: "Bolo Artesanal",
    description: "Camadas de chocolate belga com recheio cremoso, decoração exclusiva.",
    price: "R$ 89,90",
    image: "/images/cake.png",
    category: "Bolos",
  },
  {
    id: 5,
    name: "Café Especial",
    description: "Grãos selecionados torrados artesanalmente, com notas de chocolate e caramelo.",
    price: "R$ 12,90",
    image: "/images/coffee.png",
    category: "Bebidas",
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50"
        whileHover={{ 
          y: -10, 
          boxShadow: "0 25px 50px -12px rgba(139, 90, 43, 0.25)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image container */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category badge */}
          <motion.span
            className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {product.category}
          </motion.span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-serif font-bold text-primary">
              {product.price}
            </span>
            <motion.button
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Adicionar
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cardapio" className="py-24 md:py-32 overflow-hidden">
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
            Nosso Cardápio
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Produtos em <span className="text-primary">Destaque</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Selecionamos os favoritos dos nossos clientes para você experimentar
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Cardápio Completo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
