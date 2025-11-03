import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Dialog = ({ open, onOpenChange, children, className, ...props }) => {
  if (!open) return null

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => onOpenChange(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                "bg-background p-6 rounded-lg shadow-lg max-w-lg w-full mx-4",
                className
              )}
              onClick={(e) => e.stopPropagation()}
              {...props}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

const DialogTrigger = ({ children, onClick, ...props }) => {
  return (
    <div onClick={onClick} {...props}>
      {children}
    </div>
  )
}

const DialogContent = ({ children, className, onClose, ...props }) => {
  return (
    <div className={cn("relative", className)} {...props}>
      {onClose && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      {children}
    </div>
  )
}

const DialogHeader = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props}>
      {children}
    </div>
  )
}

const DialogTitle = ({ children, className, ...props }) => {
  return (
    <h2 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
      {children}
    </h2>
  )
}

const DialogDescription = ({ children, className, ...props }) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription }

