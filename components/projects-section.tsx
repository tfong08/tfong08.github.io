import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Job Offer Tracker",
      description:
        "An Android application designed for tracking, storing, and comparing job offers with comprehensive functionality. The app features persistent storage for maintaining offer data, customizable comparison tools to evaluate different opportunities, and an intelligent job grading algorithm that helps assess offers based on multiple criteria.",
      technologies: ["Android", "Java", "SQLite", "XML"],
      isPrivate: true,
    },
    {
      title: "Distributed File System",
      description:
        "A robust distributed file system developed in C++ that utilizes gRPC for efficient client-server communication. The system supports multiple concurrent clients with client-side caching mechanisms to improve performance. Implementation includes both synchronous and asynchronous threading to handle real-time file system events and server updates, ensuring data consistency across all connected clients.",
      technologies: ["C++", "gRPC", "Threading", "Distributed Systems"],
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

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
