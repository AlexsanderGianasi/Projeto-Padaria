"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.png",
    alt: "Variedade de produtos frescos",
    category: "Produtos",
  },
  {
    id: 2,
    src: "/images/gallery-2.png",
    alt: "Pão sourdough fatiado",
    category: "Pães",
  },
  {
    id: 3,
    src: "/images/gallery-3.png",
    alt: "Cinnamon rolls com cobertura",
    category: "Doces",
  },
  {
    id: 4,
    src: "/images/gallery-4.png",
    alt: "Focaccia com alecrim",
    category: "Pães",
  },
  {
    id: 5,
    src: "/images/gallery-5.png",
    alt: "Pain au chocolat",
    category: "Doces",
  },
  {
    id: 6,
    src: "/images/gallery-6.png",
    alt: "Variedade de pães artesanais",
    category: "Produtos",
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="galeria" className="py-24 md:py-32 overflow-hidden">
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
            Nossa Galeria
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Momentos <span className="text-primary">deliciosos</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Conheça mais sobre nossa produção artesanal
          </motion.p>
        </motion.div>

        {/* Gallery Grid - Pinterest Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <motion.div
                className="relative w-full h-full min-h-[200px] md:min-h-[250px]"
                style={{ height: index === 0 || index === 3 ? "100%" : undefined }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <motion.div
                  className="absolute bottom-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  {image.category}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-lg p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-card text-lg font-medium"
            >
              {selectedImage.alt}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
