import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Smartphone, Target, Users, TrendingUp, Download } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: 'Purpose', href: '#purpose', icon: Target },
    { label: 'Problem & Solution', href: '#problem-solution', icon: TrendingUp },
    { label: 'Features', href: '#features', icon: Target },
    { label: 'Screenshots', href: '#screenshots', icon: Smartphone },
    { label: 'About', href: '#about', icon: Users },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-lg' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="w-full px-[var(--container-padding)]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#purpose" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="/Logo.svg"
                alt="SkillSync Logo"
                className="w-full h-full object-contain dark:invert animate-tilt-sway"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold text-foreground group-hover:text-primary transition-colors ${!isScrolled ? 'drop-shadow-lg' : ''}`}>
                SkillSync
              </span>
              <span className={`text-xs text-muted-foreground -mt-0.5 ${!isScrolled ? 'drop-shadow-lg' : ''}`}>
                Track. Learn. Grow.
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`text-base flex items-center gap-2 group hover:-translate-y-0.5 transition-all duration-200 ${!isScrolled ? 'drop-shadow-lg' : ''}`}
                  >
                    <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                    {item.label}
                  </Button>
                </a>
              )
            })}
            
            {/* Theme Toggle */}
            <div className="ml-4 hover:scale-105 transition-transform">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${!isScrolled ? 'bg-background/50 backdrop-blur-sm border-primary/20' : 'bg-background'} hover:bg-accent transition`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <div className="hover:scale-110 transition-transform">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border bg-background/80 backdrop-blur-sm hover:bg-accent transition"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-sm border-t border-border/50 rounded-b-lg shadow-lg">
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-base flex items-center gap-2 hover:-translate-x-1 transition-transform hover:bg-accent/50"
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Button>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
