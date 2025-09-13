import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Wrench, Server, BookOpen } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      icon: Code,
      title: "Programming Languages",
      description: "Python, Java, JavaScript/TypeScript, C, C++",
      level: 85,
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "React, Node.js, HTML/CSS, REST APIs",
      level: 75,
    },
    {
      icon: Server,
      title: "Software Engineering",
      description: "Git, Agile, Testing, System Design",
      level: 70,
    },
    {
      icon: BookOpen,
      title: "Currently Learning",
      description: "Machine Learning, Cloud Computing, DevOps",
      level: 60,
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm text-center">{skill.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
