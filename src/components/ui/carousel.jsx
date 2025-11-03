import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Carousel = ({ children, className, ...props }) => {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  )
}

const CarouselContent = ({ children, className, ...props }) => {
  return (
    <div className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  )
}

const CarouselItem = ({ children, className, ...props }) => {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)} {...props}>
      {children}
    </div>
  )
}

const CarouselPrevious = ({ onClick, className, ...props }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("absolute left-4 top-1/2 -translate-y-1/2", className)}
      onClick={onClick}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

const CarouselNext = ({ onClick, className, ...props }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("absolute right-4 top-1/2 -translate-y-1/2", className)}
      onClick={onClick}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

const CarouselWithAnimation = ({ items, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className={cn("relative", className)}>
      <CarouselContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </CarouselContent>
      <CarouselPrevious onClick={previous} />
      <CarouselNext onClick={next} />
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-8" : "bg-gray-300 w-2"
            )}
          />
        ))}
      </div>
    </div>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselWithAnimation }

