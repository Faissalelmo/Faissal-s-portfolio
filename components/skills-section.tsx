"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { sectionVariants, skillCardVariants } from "@/lib/animations"

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const skillCategories = [
    {
      id: "data-science",
      title: "Data Science & IA",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Python", level: 95, category: "Langage" },
        { name: "TensorFlow", level: 85, category: "Framework" },
        { name: "PyTorch", level: 80, category: "Framework" },
        { name: "Scikit-learn", level: 90, category: "Librairie" },
        { name: "Pandas", level: 95, category: "Librairie" },
        { name: "NumPy", level: 90, category: "Librairie" },
        { name: "YOLOv8", level: 85, category: "Computer Vision" },
        { name: "OpenCV", level: 80, category: "Computer Vision" },
      ],
    },
    {
      id: "analysis",
      title: "Analyse & Visualisation",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Power BI", level: 90, category: "BI Tool" },
        { name: "SQL", level: 85, category: "Base de données" },
        { name: "Talend", level: 75, category: "ETL" },
        { name: "Matplotlib", level: 85, category: "Visualisation" },
        { name: "Seaborn", level: 80, category: "Visualisation" },
        { name: "Plotly", level: 75, category: "Visualisation" },
      ],
    },
    {
      id: "engineering",
      title: "Ingénierie & CAO",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "CATIA", level: 90, category: "CAO" },
        { name: "SolidWorks", level: 85, category: "CAO" },
        { name: "MATLAB", level: 80, category: "Calcul" },
        { name: "Simulink", level: 75, category: "Simulation" },
        { name: "AutoCAD", level: 80, category: "CAO" },
        { name: "Pleiades", level: 70, category: "Simulation" },
      ],
    },
    {
      id: "methodologies",
      title: "Méthodologies & Outils",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git/GitHub", level: 85, category: "Version Control" },
        { name: "Scrum", level: 80, category: "Méthodologie" },
        { name: "Prompt Engineering", level: 85, category: "IA" },
        { name: "ADAS", level: 75, category: "Automobile" },
        { name: "Industry 4.0", level: 80, category: "Industrie" },
        { name: "Docker", level: 70, category: "DevOps" },
      ],
    },
  ]

  const categories = [
    { id: "all", label: "Toutes" },
    ...skillCategories.map((cat) => ({ id: cat.id, label: cat.title })),
  ]

  const filteredSkills =
    activeCategory === "all" ? skillCategories : skillCategories.filter((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
            Expertise Technique
          </motion.h2>

          {/* Category Filter */}
          <motion.div variants={sectionVariants.content} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white"
                      : "hover:bg-primary/10"
                  }`}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredSkills.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={skillCardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`} />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{skill.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {skill.category}
                              </Badge>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* All Technologies Cloud */}
          {activeCategory === "all" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">Technologies Maîtrisées</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillCategories
                  .flatMap((cat) => cat.skills)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 bg-gradient-to-r from-primary/10 to-blue-600/10 hover:from-primary/20 hover:to-blue-600/20 transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
