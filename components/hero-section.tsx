"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/friendly-developer-headshot.png"
              alt="Tyler Fong"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Hi, I'm <span className="text-primary">Tyler Fong</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            CS Master's Student & Aspiring Software Engineer
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Currently pursuing my Master's in Computer Science at Georgia Tech while interning at Bentley Systems.
            Seeking Spring/Summer 2026 internship opportunities to apply my engineering background to software
            development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <Button variant="ghost" size="sm" className="p-3">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="sm" className="p-3">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="sm" className="p-3">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <Button variant="ghost" onClick={scrollToAbout} className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll to about section</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
