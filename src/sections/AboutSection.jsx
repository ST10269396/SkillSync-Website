export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden scroll-offset-nav">
      <div className="w-full px-(--container-padding)">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-grad-blue-amber">About the Company</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SkillSync was developed for a tutoring company that manages many students and lecturers across different
            subjects and campuses. The platform centralizes skills, progress, and milestones so tutors can quickly
            understand where students are, what support they need, and how learning maps to outcomes. For teams, it
            provides consistent tracking, clearer accountability, and actionable insights that scale from individual
            classes to entire programs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/60 border border-border rounded-xl p-6">
            <div className="text-lg font-semibold mb-2">Mission</div>
            <p className="text-muted-foreground">Enable people to discover, track, and showcase skills with confidence.</p>
          </div>
          <div className="bg-card/60 border border-border rounded-xl p-6">
            <div className="text-lg font-semibold mb-2">Vision</div>
            <p className="text-muted-foreground">Bridge learning and opportunity through transparent progress.</p>
          </div>
          <div className="bg-card/60 border border-border rounded-xl p-6">
            <div className="text-lg font-semibold mb-2">Values</div>
            <p className="text-muted-foreground">Clarity, ownership, and continuous improvement.</p>
          </div>
        </div>

        {/* Developers */}
        <div className="max-w-6xl mx-auto mt-14">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-grad-blue-amber text-center">About the Developers</h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            We’re a small, hands‑on crew. We like building real things fast, getting feedback early, and polishing the
            details. Most of all, we care that SkillSync feels great to use — clear, quick, and helpful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/60 border border-border rounded-xl p-6">
              <a href="https://github.com/ThePedalingDev" className="font-semibold hover:underline">Markus Fourie</a>
              <p className="text-xs text-muted-foreground mt-1">Front-End Lead</p>
              <p className="text-sm text-muted-foreground mt-2">Oversees UI/UX implementation, ensures consistency, and reviews front‑end PRs. Strong focus on
                React + Tailwind craft and performance.
              </p>
            </div>

            <div className="bg-card/60 border border-border rounded-xl p-6">
              <a href="https://github.com/Vac-Dev" className="font-semibold hover:underline">Kyle Nel</a>
              <p className="text-xs text-muted-foreground mt-1">Back-End Lead</p>
              <p className="text-sm text-muted-foreground mt-2">Designs APIs and data models, ensures performance, and manages database interactions with a
                reliability-first mindset.
              </p>
            </div>

            <div className="bg-card/60 border border-border rounded-xl p-6">
              <a href="https://github.com/TheDevTrekker" className="font-semibold hover:underline">Derik Korf</a>
              <p className="text-xs text-muted-foreground mt-1">Requirements & QA Lead</p>
              <p className="text-sm text-muted-foreground mt-2">Gathers requirements, writes test cases, and manages quality assurance - keeping delivery aligned
                to user needs and acceptance criteria.
              </p>
            </div>

            <div className="bg-card/60 border border-border rounded-xl p-6">
              <a href="https://github.com/ShawnDuPreez" className="font-semibold hover:underline">Shawn Du Preez</a>
              <p className="text-xs text-muted-foreground mt-1">Architecture & Design Lead</p>
              <p className="text-sm text-muted-foreground mt-2">Defines system architecture, ensures scalability, performance, and security - guiding technical
                decisions and cohesive design.
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              As a team, we value quick iteration, clear communication, and measurable outcomes. We design for reliability,
              scale, and maintainability - so SkillSync can grow with its users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


