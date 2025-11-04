import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function MobileVideoModal({ isOpen, onClose, videoSrc }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 z-[101] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="relative w-full max-w-lg h-full max-h-[90vh] bg-card rounded-3xl shadow-2xl border-2 border-primary/30 overflow-hidden pointer-events-auto flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50 bg-card/80 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground">SkillSync App Demo</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background border border-border hover:scale-110 transition-transform"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Video Container */}
              <div className="relative flex-1 w-full flex items-center justify-center bg-black overflow-hidden">
                {videoSrc ? (
                  <video
                    className="w-full h-full object-contain"
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    controls
                    controlsList="nodownload"
                  />
                ) : (
                  <div className="text-center text-muted-foreground p-8">
                    <p>Video not available</p>
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="p-4 border-t border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <p className="text-xs text-muted-foreground">Tap outside or close button to exit</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

