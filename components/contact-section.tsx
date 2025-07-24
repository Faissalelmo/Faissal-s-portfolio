"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react"
import { sectionVariants, contactVariants } from "@/lib/animations"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "elmokaddem.faissal.04.12.2002@gmail.com",
      href: "mailto:elmokaddem.faissal.04.12.2002@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Mohammedia, Casablanca, Maroc",
      href: null,
      color: "from-green-500 to-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "faissal-elmokaddem",
      href: "https://www.linkedin.com/in/faissal-elmokaddem/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Faissalelmo",
      href: "https://github.com/Faissalelmo",
      color: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
            Collaborons Ensemble
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={contactVariants.info}>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Créons l'innovation ensemble</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Passionné par les défis techniques complexes, je suis toujours ouvert aux nouvelles opportunités qui
                  allient <span className="text-primary font-semibold">data science</span> et{" "}
                  <span className="text-primary font-semibold">ingénierie mécanique</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Que ce soit pour un stage, un projet collaboratif ou une opportunité professionnelle, n'hésitez pas à
                  me contacter. Transformons ensemble vos idées en solutions innovantes.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={contactVariants.item}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background to-muted/20 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors group-hover:text-primary"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <motion.div variants={contactVariants.actions} className="space-y-4">
                <h4 className="font-semibold text-lg">Actions rapides :</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300"
                    >
                      <a href="mailto:elmokaddem.faissal.04.12.2002@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Envoyer un email
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full border-2 hover:bg-primary/5 transition-all duration-300 bg-transparent"
                    >
                      <a
                        href="https://www.linkedin.com/in/faissal-elmokaddem/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={contactVariants.form}>
              <Card className="bg-gradient-to-br from-background to-muted/20 border-primary/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    Envoyez-moi un message
                  </CardTitle>
                  <CardDescription className="text-base">
                    Décrivez votre projet ou votre idée, et discutons de la façon dont nous pouvons collaborer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          required
                          className="border-primary/20 focus:border-primary/50 transition-colors"
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          required
                          className="border-primary/20 focus:border-primary/50 transition-colors"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        required
                        className="border-primary/20 focus:border-primary/50 transition-colors"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos besoins ou votre proposition de collaboration..."
                        rows={6}
                        required
                        className="border-primary/20 focus:border-primary/50 transition-colors resize-none"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300 py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                        ) : (
                          <Send className="h-5 w-5 mr-2" />
                        )}
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
