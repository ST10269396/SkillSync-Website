 
import { Button } from "@/components/ui/button"

export function PurposeSection() {
  return (
    <section id="purpose" className="py-20 bg-background relative overflow-hidden scroll-offset-nav">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-(--container-padding) relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-grad-blue-amber">
            Why SkillSync?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            SkillSync helps individuals and organizations align learning with tangible career growth by connecting skill development to clear outcomes.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#problem-solution"><Button size="lg" className="bg-linear-to-r from-primary to-accent text-white">See How It Works</Button></a>
            <a href="#screenshots"><Button size="lg" variant="outline" className="border-2">View Screenshots</Button></a>
          </div>
        </div>
      </div>
    </section>
  )
}


