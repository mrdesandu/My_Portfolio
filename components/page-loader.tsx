'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Start fade out before hiding
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2200)

    // Then hide completely
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <style>{`
        .loader-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .loader-eyebrow {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin-bottom: 1.8rem;
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.1s;
        }

        .loader-name-line {
          display: flex;
          gap: 0.05em;
          overflow: hidden;
        }

        .loader-name-char {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 4.5vw, 2.5rem);
          line-height: 1;
          color: hsl(var(--foreground));
          display: inline-block;
          opacity: 0;
          transform: translateY(70px);
          animation: charReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          letter-spacing: -0.02em;
        }

        .loader-name-char.space { width: 0.32em; }

        .loader-rule {
          width: 0;
          height: 0.5px;
          background: hsl(var(--border));
          margin: 1.6rem auto 0;
          animation: expand 1s ease forwards 2s;
        }

        @keyframes charReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes expand {
          to { width: 80px; }
        }
      `}</style>

      <div className="loader-wrap">
        <p className="loader-eyebrow">Portfolio</p>

        <div className="loader-name-line">
          <span className="loader-name-char" style={{ animationDelay: '0.30s' }}>D</span>
          <span className="loader-name-char" style={{ animationDelay: '0.37s' }}>e</span>
          <span className="loader-name-char" style={{ animationDelay: '0.44s' }}>s</span>
          <span className="loader-name-char" style={{ animationDelay: '0.51s' }}>a</span>
          <span className="loader-name-char" style={{ animationDelay: '0.58s' }}>n</span>
          <span className="loader-name-char" style={{ animationDelay: '0.65s' }}>d</span>
          <span className="loader-name-char" style={{ animationDelay: '0.72s' }}>u</span>
          <span className="loader-name-char space"></span>
          <span className="loader-name-char" style={{ animationDelay: '0.85s' }}>K</span>
          <span className="loader-name-char" style={{ animationDelay: '0.92s' }}>a</span>
          <span className="loader-name-char" style={{ animationDelay: '0.99s' }}>r</span>
          <span className="loader-name-char" style={{ animationDelay: '1.06s' }}>i</span>
          <span className="loader-name-char" style={{ animationDelay: '1.13s' }}>y</span>
          <span className="loader-name-char" style={{ animationDelay: '1.20s' }}>a</span>
          <span className="loader-name-char" style={{ animationDelay: '1.27s' }}>w</span>
          <span className="loader-name-char" style={{ animationDelay: '1.34s' }}>a</span>
          <span className="loader-name-char" style={{ animationDelay: '1.41s' }}>s</span>
          <span className="loader-name-char" style={{ animationDelay: '1.48s' }}>a</span>
          <span className="loader-name-char" style={{ animationDelay: '1.55s' }}>m</span>
        </div>

        <div className="loader-rule"></div>
      </div>
    </div>
  )
}
