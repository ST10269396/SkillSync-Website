import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { PurposeSection } from "@/sections/PurposeSection"
import { ProblemSolutionSection } from "@/sections/ProblemSolutionSection"
import { FeaturesSection } from "@/sections/FeaturesSection"
import { ScreenshotsSection } from "@/components/ScreenshotCarousel"
import { AboutSection } from "@/sections/AboutSection"
import { HeroSection } from "./sections/HeroSection"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <HeroSection />
            <PurposeSection />
            <ProblemSolutionSection />
            <FeaturesSection />
            <ScreenshotsSection />
            <AboutSection />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
