"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MapPin, ArrowDown } from "lucide-react"
import { heroVariants, staggerContainer } from "@/lib/animations"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Photo Profile */}
          <motion.div variants={heroVariants.image} className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <img
                  src="/placeholder.svg?height=192&width=192"
                  alt="Faissal Elmokaddem"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={heroVariants.title}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"
          >
            Faissal Elmokaddem
          </motion.h1>

          <motion.h2
            variants={heroVariants.subtitle}
            className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium"
          >
            Junior Data Scientist | Ingénieur Mécanique
          </motion.h2>

          {/* Location */}
          <motion.div
            variants={heroVariants.location}
            className="flex items-center justify-center gap-2 mb-8 text-muted-foreground"
          >
            <MapPin className="h-5 w-5" />
            <span>Mohammedia, Casablanca, Maroc</span>
          </motion.div>

          {/* Manifesto */}
          <motion.p
            variants={heroVariants.manifesto}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <span className="text-primary font-semibold">Construire l'innovation</span> à la croisée des{" "}
            <span className="text-primary font-semibold">données</span> et de la{" "}
            <span className="text-primary font-semibold">mécanique</span>.
            <br />
            <span className="text-lg mt-4 block">
              Transformer les défis complexes en solutions élégantes grâce à l'intelligence artificielle.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroVariants.buttons}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300"
                asChild
              >
                <a href="#projects">Découvrir mes projets</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="#contact">Collaborons ensemble</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={heroVariants.social} className="flex justify-center gap-6 mb-16">
            {[
              { href: "https://www.linkedin.com/in/faissal-elmokaddem/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Faissalelmo", icon: Github, label: "GitHub" },
            ].map((social, index) => (
              <motion.div key={social.label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-14 w-14 rounded-full bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={heroVariants.scroll}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-sm text-muted-foreground mb-2">Découvrir mon parcours</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="h-5 w-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
