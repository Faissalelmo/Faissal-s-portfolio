"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { sectionVariants, projectCardVariants } from "@/lib/animations"

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      title: "Prédiction COVID-19 avec ARIMA",
      description:
        "Modèle de prédiction épidémiologique utilisant l'analyse de séries temporelles ARIMA pour anticiper l'évolution des cas COVID-19 avec une précision remarquable.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "ARIMA", "Pandas", "Matplotlib", "Statsmodels", "Jupyter"],
      category: "Data Science",
      highlights: [
        "Analyse prédictive de séries temporelles",
        "Modélisation statistique avancée",
        "Visualisation interactive des tendances",
        "Validation croisée et métriques de performance",
      ],
      impact: "Précision de prédiction > 85%",
      github: "#",
      demo: "#",
    },
    {
      title: "Détection de Panneaux avec YOLOv8",
      description:
        "Système de vision par ordinateur en temps réel pour la détection automatique des panneaux de signalisation routière, optimisé pour les applications ADAS.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Computer Vision", "ADAS"],
      category: "Computer Vision",
      highlights: [
        "Détection en temps réel (>30 FPS)",
        "Précision de détection > 95%",
        "Optimisation pour systèmes embarqués",
        "Support multi-classes de panneaux",
      ],
      impact: "Détection temps réel haute précision",
      github: "#",
      demo: "#",
    },
    {
      title: "ML : Estimation Niveau d'Obésité",
      description:
        "Modèle de machine learning sophistiqué analysant les habitudes alimentaires et le mode de vie pour prédire et classifier les niveaux d'obésité.",
      image: "/Estimation niveau d'obésité.png?height=400&width=600",
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Random Forest", "XGBoost"],
      category: "Machine Learning",
      highlights: [
        "Classification multi-classe précise",
        "Feature engineering avancé",
        "Analyse exploratoire approfondie",
        "Modèles ensemble optimisés",
      ],
      impact: "Accuracy > 92% sur données test",
      github: "#",
      demo: "#",
    },
    {
      title: "Optimisation Énergétique IA + Pleiades",
      description:
        "Solution d'optimisation énergétique révolutionnaire combinant simulation thermique Pleiades et algorithmes d'IA pour maximiser l'efficacité énergétique.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Pleiades", "TensorFlow", "Optimization", "Energy Modeling", "Simulation"],
      category: "IA & Énergie",
      highlights: [
        "Simulation thermique haute fidélité",
        "Optimisation multi-objectifs",
        "Réduction énergétique significative",
        "Interface utilisateur intuitive",
      ],
      impact: "Réduction énergétique jusqu'à 30%",
      github: "#",
      demo: "#",
    },
    {
      title: "Data Warehouse avec Talend & Power BI",
      description:
        "Architecture complète de data warehouse avec pipelines ETL Talend et tableaux de bord Power BI pour l'analyse business intelligence avancée.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Power BI", "Talend", "SQL Server", "ETL", "DAX", "Data Modeling"],
      category: "Business Intelligence",
      highlights: [
        "Architecture ETL robuste",
        "Tableaux de bord interactifs",
        "KPIs métier en temps réel",
        "Gouvernance des données",
      ],
      impact: "Automatisation complète des rapports",
      github: "#",
      demo: "#",
    },
  ]

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "Data Science", label: "Data Science" },
    { id: "Computer Vision", label: "Computer Vision" },
    { id: "Machine Learning", label: "Machine Learning" },
    { id: "IA & Énergie", label: "IA & Énergie" },
    { id: "Business Intelligence", label: "Business Intelligence" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={sectionVariants.title}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            Projets Réalisés
          </motion.h2>

          {/* Category Filter */}
          <motion.div variants={sectionVariants.content} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setCurrentProject(0)
                  }}
                  className={`transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Project Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative mb-16"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-background to-muted/20 border-primary/20">
                <div className="lg:flex">
                  <div className="lg:w-1/2 relative">
                    <img
                      src={filteredProjects[currentProject]?.image || "/placeholder.svg"}
                      alt={filteredProjects[currentProject]?.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-4 right-4 bg-primary/90 text-white p-2 rounded-full cursor-pointer"
                    >
                      <Play className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {filteredProjects[currentProject]?.category}
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {filteredProjects[currentProject]?.impact}
                      </Badge>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{filteredProjects[currentProject]?.title}</h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {filteredProjects[currentProject]?.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">Points clés :</h4>
                      <ul className="space-y-2">
                        {filteredProjects[currentProject]?.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {filteredProjects[currentProject]?.technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge variant="secondary" className="bg-primary/5 hover:bg-primary/10 transition-colors">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline" className="bg-transparent hover:bg-primary/10">
                          <Github className="h-4 w-4 mr-2" />
                          Code Source
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-blue-600">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Voir la Démo
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Navigation Buttons */}
              {filteredProjects.length > 1 && (
                <>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-background/80 backdrop-blur-sm hover:bg-primary/10"
                      onClick={prevProject}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-background/80 backdrop-blur-sm hover:bg-primary/10"
                      onClick={nextProject}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </>
              )}

              {/* Dots Indicator */}
              {filteredProjects.length > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                  {filteredProjects.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentProject
                          ? "bg-primary scale-125"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      onClick={() => setCurrentProject(index)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* All Projects Grid */}
          <motion.div variants={sectionVariants.grid} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${selectedCategory}`}
                variants={projectCardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
                onClick={() => setCurrentProject(index)}
              >
                <Card className="overflow-hidden h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10">
                          <Github className="h-4 w-4" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
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
