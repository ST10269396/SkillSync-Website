export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-20 bg-background relative overflow-hidden scroll-offset-nav">
      <div className="w-full px-(--container-padding)">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-grad-blue-amber">Disconnected Learning vs Growth</h2>
          <p className="text-xl text-muted-foreground">The challenge and how SkillSync bridges it</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="bg-card/60 border border-border rounded-xl p-6">
            <div className="text-lg font-semibold mb-3">For Organizations</div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Redundant training - duplicated efforts without central tracking</li>
              <li>• Misaligned learning - hard to tie to strategic objectives</li>
              <li>• Poor retention - undervalued growth leads to turnover</li>
            </ul>
          </div>
          <div className="bg-card/60 border border-border rounded-xl p-6">
            <div className="text-lg font-semibold mb-3">For Individuals</div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Career connection unclear - learning → advancement</li>
              <li>• Growth visualization missing - progress is invisible</li>
              <li>• Recognition gaps - efforts unnoticed reduce motivation</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 bg-accent/10 border border-accent/20 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm uppercase tracking-wide text-primary mb-1">Centralized Tracking</div>
              <p className="text-muted-foreground">Connect learning to goals with transparent records</p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wide text-primary mb-1">Clear Growth Paths</div>
              <p className="text-muted-foreground">Insights and milestones to steer development</p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wide text-primary mb-1">Holistic View</div>
              <p className="text-muted-foreground">One ecosystem for skills, progress and outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


