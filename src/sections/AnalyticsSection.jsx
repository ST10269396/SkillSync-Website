import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react"

export function AnalyticsSection() {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Trends",
      value: "85%",
      description: "Average skill improvement",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Active Skills",
      value: "12",
      description: "Skills being tracked",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Completion Rate",
      value: "68%",
      description: "Of all tracked skills",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Daily Activity",
      value: "24",
      description: "Days streak",
      color: "from-orange-500 to-amber-500"
    }
  ]

  return (
    <section id="analytics" className="py-20 -mt-12 md:-mt-16 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-[var(--container-padding)] relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-grad-blue-amber">
            Analytics Dashboard
          </h2>
          <div className="w-24 h-1 bg-grad-blue-amber rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get <span className="text-primary font-semibold">powerful insights</span> into your learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden hover:border-primary/40 transition-colors max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="text-center relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-xl">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <p className="text-2xl font-bold mb-2">Analytics Charts</p>
            <p className="text-muted-foreground max-w-md mx-auto">Visual representation of your learning progress with beautiful, interactive charts</p>
          </div>

          {/* Floating elements */}
          <div className="absolute top-6 right-6 w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-12 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500"></div>
        </motion.div>
        {/* Bottom fade */}
        <div className="section-fade-bottom" />
      </div>
    </section>
  )
}
