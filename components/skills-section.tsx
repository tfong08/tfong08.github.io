export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript/TypeScript", "Go", "C", "C++"],
      accent: "border-l-blue-500",
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "HTML/CSS", "REST APIs"],
      accent: "border-l-green-500",
    },
    {
      title: "Software Engineering",
      skills: ["Git", "Agile", "Testing", "System Design"],
      accent: "border-l-orange-500",
    },
    {
      title: "Currently Learning",
      skills: ["Machine Learning", "Cloud Computing", "DevOps"],
      accent: "border-l-teal-500",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Skills & Expertise</h2>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3
                  className={`text-sm font-medium text-muted-foreground uppercase tracking-wide border-l-4 ${category.accent} pl-3`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-base font-medium hover:bg-orange-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
