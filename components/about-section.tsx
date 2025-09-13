import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                I started my career as a fire protection and plumbing engineer, designing real-world systems and
                learning how small details can have huge impacts. That hands-on experience sparked my interest in
                problem-solving at a bigger scale, which led me to pursue a Master’s in Computer Science at Georgia
                Tech.
              </p>

              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Now, I’m diving into software engineering as an intern at Bentley Systems, building scalable solutions
                and exploring how technology can solve complex challenges. I’m excited to bring my unique blend of
                engineering experience and software skills to new projects and internship opportunities in Spring and
                Summer 2026.
              </p>
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
                    Expected Graduation: Spring 2027
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
