import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Play, Sparkles, TrendingUp, Users } from "lucide-react"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { MobileVideoModal } from "@/components/MobileVideoModal"

export function HeroSection() {
  const [downloadCta, setDownloadCta] = useState("default")
  const [playDemo, setPlayDemo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileModal, setShowMobileModal] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleViewDemo = (e) => {
    if (isMobile) {
      e.preventDefault()
      setShowMobileModal(true)
    } else {
      setPlayDemo(true)
    }
  }
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-accent/5 to-background pt-24 md:pt-28 relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-[var(--container-padding)] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Skill Tracking Platform</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-grad-blue-amber leading-tight text-center">
            Track Your Skills,<br />
            Build Your Future
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            SkillSync connects tutors and learners through transparent skill tracking. Built for a tutor-based company,
            it helps tutors see students' skills, progress, and milestones - all in one place.
          </p>


          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Button 
              size="lg" 
              variant="gPrimary" 
              className="gap-2 border-0 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform shadow-xl"
              onClick={handleViewDemo}
            >
              <Play className="h-5 w-5" />
              View Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-2 px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform hover:bg-primary/10 overflow-hidden"
              onClick={() => setDownloadCta("soon")}
            >
              <Download className="h-5 w-5" />
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  {downloadCta === "default" ? (
                    <motion.span
                      key="download"
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      className="block leading-none"
                    >
                      Download App
                    </motion.span>
                  ) : (
                    <motion.span
                      key="soon"
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 24 }}
                      className="block leading-none"
                    >
                      Coming soon
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Button>
          </div>
        </motion.div>

        {/* App screenshot/mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex justify-center pb-16 overflow-visible"
        >
          <div className="relative w-full max-w-7xl px-[var(--container-padding)] scroll-offset-nav overflow-visible" id="iphone-demo">
            <div className="grid grid-cols-1 md:grid-cols-[320px_auto_320px] items-start gap-8 py-8 md:py-12 overflow-visible">
              {/* Left keywords */}
              <div className="hidden md:flex flex-wrap justify-end gap-2 text-xs text-muted-foreground w-[320px] items-start pt-4">
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Skill Tracking</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Tutor Insights</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Milestones</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Roles & RLS</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Goal Alignment</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Notifications</span>
              </div>

              {/* Phone column - Desktop only */}
              <div className="hidden md:block relative mx-auto w-full flex justify-center items-start p-8 md:p-12">
                <div className="relative max-w-[320px] lg:max-w-[380px] xl:max-w-[420px]">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-30 animate-pulse -z-10"></div>
                  {/* Phone mockup with daisyUI - exact structure from website */}
                  <div className="relative shadow-2xl hover:scale-105 transition-transform duration-300 overflow-visible origin-center">
                    <div className="mockup-phone">
                      <div className="mockup-phone-camera"></div>
                      <div className="mockup-phone-display text-white grid place-content-center bg-neutral-900 relative">
                        {playDemo ? (
                          <video
                            className="w-full h-full object-cover absolute inset-0"
                            src="/images/mockups/iPhoneMock.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            webkit-playsinline="true"
                          />
                        ) : (
                          <div className="text-center relative z-10">
                            <Play className="w-16 h-16 mx-auto mb-4 text-primary opacity-50" />
                            <p className="text-muted-foreground text-sm">Click "View Demo" to play</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -bottom-5 inset-x-10 h-8 rounded-full bg-black/40 blur-2xl opacity-50" />
                  </div>
                </div>
              </div>

              {/* Right keywords */}
              <div className="hidden md:flex flex-wrap justify-start gap-2 text-xs text-muted-foreground w-[320px] items-start pt-4">
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Progress Diary</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Analytics</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Community</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Milestones & Tasks</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Sharing</span>
                <span className="px-2 py-1 rounded-full bg-card/70 border border-primary/20 shadow-sm">Mobile-first</span>
              </div>
            </div>

            {/* Floating elements */}
            <div className="hidden md:block absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="hidden md:block absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
            <div className="hidden md:block absolute top-1/2 -right-8 w-4 h-4 bg-primary/30 rounded-full animate-pulse delay-500"></div>
          </div>
        </motion.div>
        {/* Bottom fade to blend into next section */}
        <div className="section-fade-bottom" />
      </div>

      {/* Mobile Video Modal */}
      <MobileVideoModal 
        isOpen={showMobileModal} 
        onClose={() => setShowMobileModal(false)} 
        videoSrc="/images/mockups/iPhoneMock.mp4"
      />
    </section>
  )
}
