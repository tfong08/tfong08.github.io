import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Course Management System",
      description:
        "A web application for managing course schedules and assignments built during my CS coursework. Features user authentication, CRUD operations, and responsive design.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      isPrivate: true,
    },
    {
      title: "Engineering Calculator App",
      description:
        "A specialized calculator for engineering calculations combining my mechanical engineering background with software development skills. Includes unit conversions and complex formulas.",
      image: "/task-management-dashboard.png",
      technologies: ["Python", "Tkinter", "NumPy", "SciPy"],
      isPrivate: true,
    },
  ]

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-balance">Featured Projects</h2>

          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Here are some key projects from my academic and personal work. Most repositories are private due to academic
            integrity policies.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 text-sm text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                      <Lock className="h-3 w-3 mr-2" />
                      Private Repo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Interested in discussing my projects in detail? Let's connect!
            </p>
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
