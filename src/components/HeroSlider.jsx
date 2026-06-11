import { useState, useEffect, useRef, useCallback } from "react";
import { slides } from "../data/content";

import img1 from "../assets/university4.jpg";
import img2 from "../assets/university2.jpg";
import img3 from "../assets/university1.jpg";

const IMAGES = [img1, img2, img3];
const DELAY = 5000;

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [pct, setPct] = useState(0);

  const autoRef = useRef(null);
  const rafRef = useRef(null);
  const t0Ref = useRef(null);

  const startProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setPct(0);
    t0Ref.current = performance.now();

    const tick = (now) => {
      const p = Math.min(((now - t0Ref.current) / DELAY) * 100, 100);
      setPct(p);
      if (p < 100) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const go = useCallback((idx) => {
    setCur(idx);
    startProgress();
  }, [startProgress]);

  useEffect(() => {
    startProgress();

    autoRef.current = setInterval(() => {
      setCur((c) => (c + 1) % slides.length);
      startProgress();
    }, DELAY);

    return () => {
      clearInterval(autoRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);


  const manualGo = (fn) => {
    clearInterval(autoRef.current);
    fn();

    autoRef.current = setInterval(() => {
      setCur((c) => (c + 1) % slides.length);
      startProgress();
    }, DELAY);
  };
const next = useCallback(() => {
  setCur((c) => (c + 1) % slides.length);
  startProgress();
}, [startProgress]);

const prev = useCallback(() => {
  setCur((c) => (c - 1 + slides.length) % slides.length);
  startProgress();
}, [startProgress]);

  return (
    <section className="hero" aria-label="Featured highlights">
      {/* Track */}
      {/* <div
        className="slides-track"
        style={{ transform: `translateX(-${cur * 100}%)`, width: `${slides.length * 100}%` }}
      > */}


      <div
  className="slides-track"
  style={{
    transform: `translateX(-${cur * 100}%)`,
    width: "100%",
  }}
>
        {slides.map((s, i) => {
          // const Geo = GEOS[i];
          return (
            <div
              key={s.id}
              className={`slide${i === cur ? " active" : ""}`}
              // style={{ background: IMAGES[i], width: `${100 / slides.length}%` }}
              style={{
  backgroundImage: `url(${IMAGES[i]})`,
  width: `${100 / slides.length}%`,
}}
              
              
            >
              
              {/* Geometric art */}
              <div className="slide-geo">
                
                
              </div>
              {/* Dark overlay */}
              <div className="slide-overlay" />
              {/* Text */}
              <div className="slide-content">
                <div className="site-container">
                  <div className="slide-inner">
                    <div className="slide-tag">
                      <span className="slide-tag-text">{s.eyebrow}</span>
                    </div>
                    <h1 className="slide-h">
                      <span className="slide-h-text" style={{ whiteSpace: "pre-line" }}>{s.heading}</span>
                    </h1>
                    <p className="slide-sub">
                      <span className="slide-sub-text">{s.sub}</span>
                    </p>
                    <div className="slide-cta">
                      <a href="#" className="slide-btn">
                        Learn More
                        <i className="ti ti-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>





<button className="hero-arrow left" onClick={prev}>
  ‹
</button>

<button className="hero-arrow right" onClick={next}>
  ›
</button>



      {/* Arrows */}
      {/* <button className="hero-arrow left" onClick={() => manualGo(prev)} aria-label="Previous slide">‹</button>
      <button className="hero-arrow right" onClick={() => manualGo(next)} aria-label="Next slide">›</button> */}

      {/* Dots */}
      <div className="hero-dots" role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === cur}
            aria-label={`Slide ${i + 1}`}
            className={`hero-dot${i === cur ? " active" : ""}`}
            style={{ width: i === cur ? "28px" : "8px" }}
            onClick={() => manualGo(() => go(i))}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero-progress-bar" style={{ width: `${pct}%` }} aria-hidden="true" />
    </section>
  );
}
