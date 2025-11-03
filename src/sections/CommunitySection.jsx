import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, MessageCircle, Share2 } from "lucide-react"

export function CommunitySection() {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Connect with Learners",
      description: "Follow other users and see their progress",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Like & Comment",
      description: "Engage with community posts and achievements",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Share Skills",
      description: "Make your skills public and inspire others",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Share Achievements",
      description: "Celebrate milestones with the community",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section id="community" className="py-20 -mt-12 md:-mt-16 bg-card/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/50 rounded-full blur-2xl"></div>
      </div>

      <div className="w-full px-[var(--container-padding)] relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-grad-blue-amber">
            Community Features
          </h2>
          <div className="w-24 h-1 bg-grad-blue-amber rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with other learners and <span className="text-grad-blue-amber font-semibold">share your journey</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                <CardHeader className="text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Bottom fade */}
        <div className="section-fade-bottom" />
      </div>
    </section>
  )
}
