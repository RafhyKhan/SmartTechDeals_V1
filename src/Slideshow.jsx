import { useEffect, useState } from 'react'

export default function Slideshow({ slides, interval }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  useEffect(() => {
    if (paused || count < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearInterval(id)
  }, [paused, count, interval])

  const go = (i) => setIndex((i + count) % count)

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`slide ${i === index ? 'active' : ''}`}
          aria-hidden={i !== index}
        />
      ))}

      {count > 1 && (
        <>
          <button className="nav prev" onClick={() => go(index - 1)} aria-label="Previous slide">
            ‹
          </button>
          <button className="nav next" onClick={() => go(index + 1)} aria-label="Next slide">
            ›
          </button>
          <div className="dots">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
