import { Github, Twitter, Linkedin, Mail, Sparkles, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 backdrop-blur-sm text-muted-foreground border-t border-border relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-[var(--container-padding)] py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/Logo.svg"
                  alt="SkillSync Logo"
                  className="w-full h-full object-contain dark:invert"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground">SkillSync</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Track your skills, build your future. The all-in-one platform for <span className="text-grad-blue-amber font-semibold">skill development</span> and community learning.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-grad-blue-amber">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Screenshots
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-grad-blue-amber">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-grad-blue-amber">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-primary transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-primary transition-colors">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm max-w-7xl mx-auto">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {currentYear} SkillSync. All rights reserved.</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="flex items-center gap-1">
              Developed by:
              <a href="https://github.com/ShawnDuPreez" className="hover:underline hover:text-primary">Shawn Du Preez</a>,
              <a href="https://github.com/ThePedalingDev" className="hover:underline hover:text-primary">Markus Fourie</a>,
              <a href="https://github.com/Vac-Dev" className="hover:underline hover:text-primary">Kyle Nel</a>
              &nbsp;and&nbsp;
              <a href="https://github.com/TheDevTrekker" className="hover:underline hover:text-primary">Derik Korf</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
