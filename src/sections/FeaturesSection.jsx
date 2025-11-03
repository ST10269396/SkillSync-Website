import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { features } from "@/data/features"
import { Check } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 -mt-12 md:-mt-16 bg-background relative overflow-hidden scroll-offset-nav">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-[var(--container-padding)] relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-grad-blue-amber">
            Powerful Features
          </h2>
          <div className="w-24 h-1 bg-grad-blue-amber rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to track and improve your skills with <span className="text-primary font-semibold">cutting-edge tools</span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                {/* Glare Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>

                <CardHeader>
                  <div className="mb-4 mx-auto w-12 h-12 grid place-items-center rounded-lg bg-primary/10 overflow-hidden">
                    <div className="transition-transform duration-300 group-hover:scale-110 will-change-transform">{feature.icon}</div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Bottom spacer to maintain consistent background without visual fade */}
        <div className="h-8" />
      </div>
    </section>
  )
}
