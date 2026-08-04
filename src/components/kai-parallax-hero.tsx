"use client";

import Image from "next/image";
import { type CSSProperties, type PointerEvent, useEffect, useRef, useState } from "react";

const code = [
  "import { buildImpact } from '@kaidevlab/core';",
  "",
  "const lab = await createStudio({",
  "  products: ['AI', 'Web', 'Creative Tech'],",
  "  principles: {",
  "    craft: true,",
  "    clarity: true,",
  "    curiosity: true,",
  "  },",
  "});",
  "",
  "export default lab.launch();",
];

const metrics = [
  { label: "DESIGN", value: "94%" },
  { label: "CODE", value: "98%" },
  { label: "CREATE", value: "91%" },
];

export function KaiParallaxHero() {
  const stageRef = useRef<HTMLElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const isInteracting = useRef(false);
  const [activeLine, setActiveLine] = useState(2);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLine((line) => (line >= code.length - 1 ? 2 : line + 1));
    }, 720);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const render = (time: number) => {
      const idleX = isInteracting.current ? 0 : Math.sin(time / 2300) * 0.22;
      const idleY = isInteracting.current ? 0 : Math.cos(time / 2700) * 0.16;
      x += (target.current.x + idleX - x) * 0.075;
      y += (target.current.y + idleY - y) * 0.075;

      stage.style.setProperty("--bg-x", `${(-x * 3).toFixed(2)}px`);
      stage.style.setProperty("--bg-y", `${(-y * 3).toFixed(2)}px`);
      stage.style.setProperty("--kai-x", `${(x * 5).toFixed(2)}px`);
      stage.style.setProperty("--kai-y", `${(y * 4).toFixed(2)}px`);
      stage.style.setProperty("--ui-x", `${(x * 10).toFixed(2)}px`);
      stage.style.setProperty("--ui-y", `${(y * 8).toFixed(2)}px`);
      stage.style.setProperty("--front-x", `${(x * 13).toFixed(2)}px`);
      stage.style.setProperty("--front-y", `${(y * 10).toFixed(2)}px`);
      frame = window.requestAnimationFrame(render);
    };
    frame = window.requestAnimationFrame(render);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    isInteracting.current = true;
    const bounds = event.currentTarget.getBoundingClientRect();
    target.current = {
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    };
  }

  return (
    <section
      ref={stageRef}
      className="kai-parallax-stage"
      aria-label="Kai operating a live coding interface"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        isInteracting.current = false;
        target.current = { x: 0, y: 0 };
      }}
    >
      <div className="kai-layer kai-background" aria-hidden="true">
        <Image
          src="/media/kai-parallax/studio-background.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, 70vw"
        />
      </div>

      <div className="kai-layer kai-character">
        <Image
          src="/media/kai-parallax/kai-interactive.webp"
          alt="Kai interacting with a transparent interface"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 70vw"
        />
      </div>

      <div className="kai-layer kai-interface">
        <div className="kai-glass-screen">
          <div className="kai-touchpoint" aria-hidden="true"><i /><i /><b /></div>
          <header className="kai-screen-header">
            <span className="kai-screen-brand"><i /> KAIDEVLAB</span>
            <span className="kai-online"><i /> SYSTEM ONLINE</span>
          </header>

          <div className="kai-screen-grid">
            <div className="kai-code-panel">
              <strong>{"// CODE EDITOR"}</strong>
              <pre aria-label="Animated TypeScript code">
                <code>
                  {code.map((line, index) => (
                    <span className={activeLine === index ? "is-active" : undefined} key={`${index}-${line}`}>
                      <i>{String(index + 1).padStart(2, "0")}</i>{line || " "}
                      {index === code.length - 1 ? <b className="kai-code-caret" /> : null}
                    </span>
                  ))}
                </code>
              </pre>
            </div>

            <aside className="kai-build-panel">
              <strong>{"// BUILD"}</strong>
              {metrics.map((metric) => (
                <div className="kai-metric" key={metric.label}>
                  <span>{metric.label}</span><b>{metric.value}</b>
                  <i style={{ "--metric-value": metric.value } as CSSProperties} />
                </div>
              ))}
              <svg viewBox="0 0 240 86" role="img" aria-label="Live build activity">
                <polyline points="2,70 28,50 53,61 78,27 103,46 128,18 154,42 180,22 207,32 238,8" />
                <circle cx="238" cy="8" r="4" />
              </svg>
            </aside>

            <div className="kai-terminal-panel">
              <strong>{"// TERMINAL"}</strong>
              <p><b>$</b> kaidevlab build --production</p>
              <p><i>✓</i> Compiled successfully</p>
              <p><i>✓</i> Optimized creative systems</p>
              <p><i>✓</i> Ready on kaidevlab.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="kai-layer kai-foreground" aria-hidden="true">
        <div className="kai-input-deck">
          {Array.from({ length: 56 }, (_, index) => (
            <i
              key={index}
              style={{ "--key-delay": `${(index * 0.173) % 2.1}s` } as CSSProperties}
            />
          ))}
        </div>
        <div className="kai-light-sweep" />
      </div>

      <span className="kai-parallax-hint" aria-hidden="true">Interactive build surface</span>
    </section>
  );
}
