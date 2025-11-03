import { useEffect, useState } from "react"

export function useImagePreload(imageSrcs) {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const imagesToLoad = imageSrcs.filter(src => src && !loadedImages.has(src))
    
    if (imagesToLoad.length === 0) {
      setIsLoading(false)
      return
    }

    let loadedCount = 0
    const imagePromises = imagesToLoad.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]))
          loadedCount++
          if (loadedCount === imagesToLoad.length) {
            setIsLoading(false)
          }
          resolve()
        }
        img.onerror = reject
        img.src = src
      })
    })

    Promise.all(imagePromises).catch(() => {
      setIsLoading(false)
    })
  }, [imageSrcs, loadedImages])

  return { loadedImages, isLoading }
}

