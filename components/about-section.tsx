import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                I'm currently pursuing my Master's in Computer Science at Georgia Tech, building on my unique background
                as a fire protection and plumbing engineer with a mechanical engineering degree. This transition has
                given me a strong foundation in problem-solving and systems thinking that I now apply to software
                development.
              </p>

              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Currently interning at Bentley Systems, I'm gaining hands-on experience in software engineering while
                actively seeking Spring and Summer 2026 internship opportunities. My engineering background provides a
                unique perspective on building robust, scalable solutions.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "JavaScript", "React", "Node.js", "Git", "SQL", "C++"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    MS Computer Science @ Georgia Tech
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Currently interning at Bentley Systems
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Background in Mechanical Engineering
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Seeking Spring/Summer 2026 internships
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
