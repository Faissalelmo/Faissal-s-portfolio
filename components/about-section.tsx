"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cog, Target, Lightbulb, Globe, Heart } from "lucide-react"
import { sectionVariants, cardVariants } from "@/lib/animations"

export default function AboutSection() {
  const qualities = [
    {
      icon: Brain,
      title: "Pensée Analytique",
      description: "Capacité à décomposer les problèmes complexes en solutions élégantes",
    },
    {
      icon: Cog,
      title: "Excellence Technique",
      description: "Maîtrise des outils modernes d'IA et d'ingénierie mécanique",
    },
    {
      icon: Target,
      title: "Orienté Impact",
      description: "Focus sur des solutions concrètes qui transforment les industries",
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Veille technologique et adoption des dernières avancées",
    },
    {
      icon: Globe,
      title: "Vision Globale",
      description: "Approche multidisciplinaire des défis technologiques",
    },
    {
      icon: Heart,
      title: "Passion Authentique",
      description: "Engagement sincère pour l'excellence et l'apprentissage",
    },
  ]

  const languages = [
    { name: "Français", level: "Natif" },
    { name: "Arabe", level: "Natif" },
    { name: "Anglais", level: "Professionnel" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={sectionVariants.title}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            À propos de moi
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={sectionVariants.content} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ingénieur passionné</strong> par l'intersection entre{" "}
                <span className="text-primary font-semibold">intelligence artificielle</span> et{" "}
                <span className="text-primary font-semibold">ingénierie mécanique</span>, je transforme les défis
                techniques en opportunités d'innovation.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon parcours unique me permet d'aborder les problèmes avec une{" "}
                <strong className="text-foreground">perspective multidisciplinaire</strong>, alliant la rigueur
                analytique de l'ingénierie à la puissance prédictive de la data science.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Je crois fermement que l'avenir appartient à ceux qui savent{" "}
                <span className="text-primary font-semibold">connecter les disciplines</span> pour créer des solutions
                qui n'existaient pas hier.
              </p>

              {/* Languages */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Langues</h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-primary/10 px-4 py-2 rounded-full"
                    >
                      <span className="font-medium text-primary">{lang.name}</span>
                      <span className="text-muted-foreground ml-2">({lang.level})</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants.image} className="relative">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold mb-4 text-center">Ma Mission</h3>
                  <p className="text-center text-muted-foreground leading-relaxed">
                    "Utiliser la puissance des données et de l'IA pour résoudre les défis d'ingénierie les plus
                    complexes et contribuer à un avenir technologique durable."
                  </p>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Qualities Grid */}
          <motion.div variants={sectionVariants.grid} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <quality.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{quality.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{quality.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
