"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ScrollProgress from "@/components/scroll-progress"
import { pageVariants } from "@/lib/animations"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg font-medium text-muted-foreground"
          >
            Chargement de l'innovation...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageVariants}
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
      >
        <ScrollProgress />
        <Navigation />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>

        <footer className="bg-gradient-to-r from-background to-muted/20 py-12 border-t">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 text-center"
          >
            <p className="text-muted-foreground mb-2">© 2024 Faissal Elmokaddem. Tous droits réservés.</p>
            <p className="text-sm text-muted-foreground">
              Conçu avec passion pour l'innovation et l'excellence technique
            </p>
          </motion.div>
        </footer>
      </motion.div>
    </ThemeProvider>
  )
}
