import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, QrCode, Apple, Smartphone, Sparkles } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 -mt-12 md:-mt-16 bg-gradient-to-br from-primary via-accent to-primary text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-[var(--container-padding)] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Available Now</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Download SkillSync</h2>
          <div className="w-24 h-1 bg-white/50 rounded-full mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Start tracking your skills today. <span className="font-bold">Available on iOS and Android.</span>
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button 
              size="lg" 
              className="gap-3 h-16 px-8 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl border-0 font-semibold"
            >
              <Apple className="h-7 w-7" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="gap-3 h-16 px-8 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl border-0 font-semibold"
            >
              <Smartphone className="h-7 w-7" />
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform">
            <div className="w-36 h-36 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center rounded-xl border-2 border-primary/20">
              <QrCode className="h-20 w-20 text-primary" />
            </div>
          </div>
          <p className="text-sm opacity-90 font-medium">Scan QR code to download instantly</p>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-white/50 rounded-full animate-pulse delay-500"></div>
        {/* No bottom fade here to end strong with footer */}
      </div>
    </section>
  )
}
