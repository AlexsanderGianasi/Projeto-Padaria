import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { PromoSection } from "@/components/promo-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Loader } from "@/components/loader"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Loader />
      <main className="custom-cursor">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <StatsSection />
        <PromoSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
