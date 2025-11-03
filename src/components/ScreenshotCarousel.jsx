 
import CircularGallery from "@/components/CircularGallery"

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="relative py-20 overflow-hidden scroll-offset-nav">
      {/* Subtle vignette */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-grad-blue-amber">App Screenshots</h2>
          <p className="text-xl text-muted-foreground">
            See SkillSync in action
          </p>
        </div>
        
        {/* CircularGallery showcase */}
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </div>
    </section>
  )
}
