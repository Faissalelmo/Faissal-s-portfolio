"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import { sectionVariants, cardVariants } from "@/lib/animations"

export default function EducationSection() {
  const education = [
    {
      degree: "Diplôme d'Ingénieur en Génie Mécanique",
      institution: "École Normale Supérieure de l'Enseignement Technique (ENSET)",
      location: "Mohammedia, Maroc",
      period: "2020 - 2024",
      type: "Diplôme d'Ingénieur",
      description:
        "Formation d'excellence en ingénierie mécanique avec spécialisation en conception avancée et technologies de fabrication moderne.",
      highlights: [
        "Conception mécanique et modélisation 3D",
        "Thermodynamique et transferts thermiques",
        "Mécanique des fluides et aérodynamique",
        "Résistance des matériaux et calcul de structures",
        "Gestion de projet industriel et innovation",
        "Technologies de fabrication avancées",
      ],
      grade: "Mention Bien",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  const certifications = [
    {
      title: "Data Science & Machine Learning Program",
      issuer: "Explore AI Academy (ALX)",
      period: "2024",
      type: "Certification Professionnelle",
      description:
        "Formation intensive et pratique en data science, machine learning et intelligence artificielle avec projets réels.",
      skills: ["Python", "Machine Learning", "Deep Learning", "Data Analysis", "TensorFlow", "PyTorch"],
      credential: "Certifié avec distinction",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      period: "2024",
      type: "Certification Microsoft",
      description:
        "Certification officielle Microsoft en analyse de données et création de tableaux de bord avec Power BI.",
      skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "SQL", "Excel"],
      credential: "PL-300 Certified",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Diplôme Universitaire de Technologie",
      issuer: "École Supérieure de Technologie (EST) Casablanca",
      period: "2018 - 2020",
      type: "Formation Technique",
      description: "Formation technique préparatoire en sciences et technologies avec excellence académique.",
      skills: ["Mathématiques appliquées", "Physique", "Informatique", "Électronique", "Mécanique"],
      credential: "Mention Très Bien",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-muted/20">
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
            Formation & Certifications
          </motion.h2>

          {/* Education */}
          <div className="mb-20">
            <motion.h3
              variants={sectionVariants.subtitle}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              Formation Académique
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 bg-gradient-to-br from-background to-muted/20 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={edu.logo || "/placeholder.svg"}
                        alt={`${edu.institution} logo`}
                        className="w-16 h-16 rounded-lg object-cover border-2 border-primary/20"
                      />
                    </div>

                    <div className="flex-1">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <Badge
                            variant="default"
                            className="bg-gradient-to-r from-primary to-blue-600 text-white w-fit"
                          >
                            {edu.type}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 text-base">
                          <span className="font-semibold text-foreground">{edu.institution}</span>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>

                        <div className="mb-4">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {edu.grade}
                          </Badge>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Domaines d'expertise :</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {edu.highlights.map((highlight, hlIndex) => (
                              <motion.div
                                key={hlIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: hlIndex * 0.1 }}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span>{highlight}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              variants={sectionVariants.subtitle}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              Certifications & Formations Complémentaires
            </motion.h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.issuer} logo`}
                        className="w-12 h-12 rounded-lg object-cover border border-primary/20"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/30">
                            {cert.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{cert.period}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                        <CardDescription className="font-semibold text-foreground text-sm">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                    </div>

                    <CardContent className="p-0">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                      <div className="mb-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                          {cert.credential}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs bg-primary/5 hover:bg-primary/10 transition-colors"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
