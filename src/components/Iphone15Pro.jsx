import { useEffect, useRef } from 'react'

export default function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  videoSrc,
  ...props
}) {
  const svgRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoSrc || !svgRef.current) return

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    // Only apply explicit sizing on mobile devices
    if (!isMobile) return

    const updateVideoSize = () => {
      const svg = svgRef.current
      const video = videoRef.current
      if (!svg || !video) return

      // Get the actual rendered SVG dimensions
      const svgRect = svg.getBoundingClientRect()
      const svgWidth = svgRect.width
      const svgHeight = svgRect.height

      // Skip if SVG not yet rendered
      if (svgWidth === 0 || svgHeight === 0) return

      // Calculate the scale factor
      const scaleX = svgWidth / width
      const scaleY = svgHeight / height
      
      // The video area in SVG coordinates
      const videoAreaWidth = 389.5
      const videoAreaHeight = 843.5
      
      // Calculate actual rendered size of video area
      const actualVideoWidth = videoAreaWidth * scaleX
      const actualVideoHeight = videoAreaHeight * scaleY

      // Set on the video element directly for mobile browsers
      // Make video slightly larger to account for transform shift
      const scaleFactor = 1.06
      video.style.width = `${actualVideoWidth * scaleFactor}px`
      video.style.height = `${actualVideoHeight * scaleFactor}px`
      video.style.maxWidth = `${actualVideoWidth * scaleFactor}px`
      video.style.maxHeight = `${actualVideoHeight * scaleFactor}px`
      video.style.objectPosition = 'left top'
    }

    // Wait for video element to be ready
    const init = () => {
      if (videoRef.current && svgRef.current) {
        updateVideoSize()
      } else {
        // Retry if not ready yet
        setTimeout(init, 50)
      }
    }

    // Initial update with delays to ensure DOM is ready
    const timeout1 = setTimeout(init, 100)
    const timeout2 = setTimeout(init, 300)
    
    // Update on resize
    window.addEventListener('resize', updateVideoSize)
    window.addEventListener('orientationchange', updateVideoSize)
    
    // Use ResizeObserver if available for better detection
    let resizeObserver
    if (svgRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        setTimeout(updateVideoSize, 10)
      })
      resizeObserver.observe(svgRef.current)
    }

    return () => {
      window.removeEventListener('resize', updateVideoSize)
      window.removeEventListener('orientationchange', updateVideoSize)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [videoSrc, width, height])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
      {...props}
    >
      <g filter="url(#outerShadow)">
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
        className="fill-white dark:fill-[#262626]"
        stroke="url(#frameInnerStroke)"
        strokeWidth="0.8"
      />
      <path
        opacity="0.5"
        d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
        stroke="url(#frameStroke)"
        strokeWidth="1.2"
      />
      </g>

      {/* Default background when no image/video */}
      {!src && !videoSrc && (
        <rect
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          rx="55.75"
          ry="55.75"
          fill="#000000"
          className="dark:fill-[#000000]"
          filter="url(#screenInner)"
        />
      )}

      {src && (
        <image
          href={src}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}

      {videoSrc && (
        <foreignObject
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          clipPath="url(#roundedCorners)"
          style={{ 
            overflow: 'hidden'
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: '55.75px',
              position: 'relative',
              boxSizing: 'border-box',
              margin: 0,
              padding: 0,
              display: 'block'
            }}
          >
            <video
              ref={videoRef}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left top',
                display: 'block',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="false"
            />
          </div>
        </foreignObject>
      )}

      <path
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
        className="fill-[#F5F5F5] dark:fill-[#262626]"
      />
      <path
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
        className="fill-[#F5F5F5] dark:fill-[#262626]"
      />
      <path
        d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />

      {/* Crisp inner stroke */}
      <rect x="21.25" y="19.25" width="389.5" height="843.5" rx="55.75" ry="55.75" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" pointerEvents="none" />

      <defs>
        <filter id="outerShadow" x="-50" y="-50" width="533" height="982" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="rgba(0,0,0,0.35)"/>
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.18)"/>
        </filter>
        <filter id="screenInner" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
          <feOffset dy="1"/>
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="innerShadow"/>
          <feColorMatrix in="innerShadow" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.35 0"/>
          <feBlend in="SourceGraphic"/>
        </filter>
        <linearGradient id="frameStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.2)"/>
        </linearGradient>
        <linearGradient id="frameInnerStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)"/>
        </linearGradient>
        <clipPath id="roundedCorners">
          <rect
            x="21.25"
            y="19.25"
            width="389.5"
            height="843.5"
            rx="55.75"
            ry="55.75"
          />
        </clipPath>
      </defs>
    </svg>
  );
}


