"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ChevronDown } from "lucide-react"
import { sectionVariants, timelineVariants } from "@/lib/animations"

export default function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  const experiences = [
    {
      title: "Stagiaire Data Analyst",
      company: "Expleo",
      location: "Casablanca, Maroc",
      period: "Juin 2024 - Août 2024",
      type: "Stage",
      description:
        "Développement de solutions d'intelligence artificielle pour l'optimisation des processus industriels dans le secteur automobile.",
      achievements: [
        "Conception et implémentation de modèles prédictifs pour l'optimisation énergétique",
        "Création de tableaux de bord Power BI interactifs pour le suivi des KPIs en temps réel",
        "Automatisation complète des processus d'analyse de données avec Python",
        "Collaboration avec les équipes R&D pour l'intégration de solutions IA",
      ],
      technologies: ["Python", "Power BI", "SQL", "Machine Learning", "TensorFlow", "Pandas"],
      impact: "Réduction de 25% du temps d'analyse des données",
      companyInfo: "Leader mondial de l'ingénierie, des technologies et du conseil",
    },
    {
      title: "Stagiaire Ingénieur Mécanique",
      company: "Renault Commerce Maroc",
      location: "Casablanca, Maroc",
      period: "Juillet 2023 - Septembre 2023",
      type: "Stage",
      description:
        "Participation aux projets d'ingénierie automobile et d'optimisation des processus de production dans l'industrie automobile.",
      achievements: [
        "Analyse approfondie des processus de production automobile",
        "Optimisation des workflows de conception avec les outils CAO",
        "Collaboration étroite avec les équipes R&D sur les projets d'innovation",
        "Étude de faisabilité pour l'amélioration des systèmes mécaniques",
      ],
      technologies: ["CATIA", "SolidWorks", "Lean Manufacturing", "CAO", "Analyse des processus"],
      impact: "Amélioration de 15% de l'efficacité des processus",
      companyInfo: "Constructeur automobile français, leader de l'innovation",
    },
    {
      title: "Stagiaire Technique",
      company: "SEBN-MA",
      location: "Mohammedia, Maroc",
      period: "Juin 2022 - Août 2022",
      type: "Stage d'initiation",
      description:
        "Première immersion dans le monde industriel avec découverte des métiers de l'ingénierie et des technologies de pointe.",
      achievements: [
        "Découverte complète des processus industriels et de fabrication",
        "Participation active aux projets techniques et d'amélioration continue",
        "Formation intensive aux outils de conception et de modélisation",
        "Développement des compétences en gestion de projet industriel",
      ],
      technologies: ["AutoCAD", "Maintenance industrielle", "Gestion de projet", "Qualité"],
      impact: "Acquisition des fondamentaux de l'ingénierie industrielle",
      companyInfo: "Société d'ingénierie spécialisée dans les solutions industrielles",
    },
  ]

  const toggleExpanded = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={sectionVariants.title}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            Parcours Professionnel
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary to-blue-600 hidden md:block"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={timelineVariants}
                  initial="initial"
                  whileInView="animate"
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute left-6 w-6 h-6 bg-gradient-to-r from-primary to-blue-600 rounded-full border-4 border-background shadow-lg hidden md:block z-10"
                  />

                  <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.3 }} className="md:ml-20">
                    <Card className="overflow-hidden bg-gradient-to-br from-background to-muted/20 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <CardHeader className="cursor-pointer" onClick={() => toggleExpanded(index)}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-gradient-to-r from-primary/10 to-blue-600/10 text-primary border-primary/30"
                            >
                              {exp.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {exp.impact}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <CardTitle className="text-xl lg:text-2xl flex items-center justify-between">
                          {exp.title}
                          <motion.div
                            animate={{ rotate: expandedExperience === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          </motion.div>
                        </CardTitle>

                        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold text-foreground">{exp.company}</span>
                          </div>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>

                      <AnimatePresence>
                        {expandedExperience === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                              <div className="mb-6">
                                <p className="text-sm text-muted-foreground mb-2 italic">{exp.companyInfo}</p>
                              </div>

                              <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-lg">Réalisations clés :</h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map((achievement, achIndex) => (
                                    <motion.li
                                      key={achIndex}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: achIndex * 0.1 }}
                                      className="flex items-start gap-3 text-sm text-muted-foreground"
                                    >
                                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                      <span>{achievement}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-3">Technologies utilisées :</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech, techIndex) => (
                                    <motion.div
                                      key={tech}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: techIndex * 0.05 }}
                                    >
                                      <Badge
                                        variant="outline"
                                        className="text-xs bg-primary/5 hover:bg-primary/10 transition-colors"
                                      >
                                        {tech}
                                      </Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
