import { motion } from "framer-motion"

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-20 bg-background relative overflow-hidden scroll-offset-nav">
      <div className="w-full px-(--container-padding)">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-grad-blue-amber"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Disconnected Learning vs Growth
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            The challenge and how SkillSync bridges it
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <motion.div className="bg-card/60 border border-border rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="text-lg font-semibold mb-3">For Organizations</div>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <div className="text-sm uppercase tracking-wide text-primary mb-2">Problems</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Redundant training - duplicated effort without central tracking</li>
                  <li>• Misaligned learning - hard to link to business objectives</li>
                  <li>• Poor retention - growth feels undervalued</li>
                </ul>
              </div>
              <div className="md:border-l md:pl-6 border-border">
                <div className="text-sm uppercase tracking-wide text-primary mb-2">Solutions</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Centralized skill tracking and audit trails</li>
                  <li>• Objectives mapped to skills, milestones, and outcomes</li>
                  <li>• Recognition, levels, and streaks to boost engagement</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-card/60 border border-border rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
            <div className="text-lg font-semibold mb-3">For Individuals</div>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <div className="text-sm uppercase tracking-wide text-primary mb-2">Problems</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Career connection unclear - linking learning to advancement</li>
                  <li>• Progress hard to see - little visibility day to day</li>
                  <li>• Recognition gaps - efforts go unnoticed</li>
                </ul>
              </div>
              <div className="md:border-l md:pl-6 border-border">
                <div className="text-sm uppercase tracking-wide text-primary mb-2">Solutions</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Career milestones tied to skills and techniques</li>
                  <li>• Visual dashboards, diary entries, and artifacts</li>
                  <li>• Comments, levels, and activity streaks for motivation</li>
                </ul>
              </div>
            </div>
          </motion.div>
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

        {/* Tutor-based company focus and capabilities */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-grad-blue-amber">Built for Tutor & Student Collaboration</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-2">
              Designed for a tutoring company to give tutors and students a clear picture of the skills they are learning
              together. Track progress, capture learning context, and celebrate growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Diary Entries',
              'Resources (videos and articles)',
              'Artifacts (files and links)',
              'Techniques learned',
              'Problems and solutions',
              'Comments and feedback',
              'Skill levels',
              'Activity streaks'
            ].map((item) => (
              <div key={item} className="px-3 py-2 rounded-lg border border-primary/20 bg-card/60 text-sm text-foreground transition duration-300 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


