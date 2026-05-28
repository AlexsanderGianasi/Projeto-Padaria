"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Heart } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const footerLinks = {
  Produtos: ["Pães", "Doces", "Bolos", "Cafés", "Salgados"],
  Empresa: ["Sobre", "História", "Equipe", "Carreiras"],
  Suporte: ["Contato", "FAQ", "Entregas", "Devoluções"],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 relative overflow-hidden">
      {/* Decorative wheat elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h3
              className="text-3xl font-serif font-bold text-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Bella Massa
            </motion.h3>
            <motion.p
              className="text-background/70 mb-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              O sabor artesanal que aquece seu dia. Desde 1985 trazendo tradição e qualidade para sua mesa.
            </motion.p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-gold hover:text-foreground transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], categoryIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
            >
              <h4 className="font-bold text-gold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="border-t border-background/10 pt-8 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-gold mb-1">Inscreva-se na nossa newsletter</h4>
              <p className="text-background/70 text-sm">Receba novidades e promoções exclusivas</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-3 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:border-gold outline-none flex-1 md:w-64"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gold text-foreground rounded-full font-semibold hover:bg-gold/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Assinar
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-background/60 text-sm">
            © 2024 Bella Massa. Todos os direitos reservados.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-destructive fill-destructive" /> em São Paulo
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
