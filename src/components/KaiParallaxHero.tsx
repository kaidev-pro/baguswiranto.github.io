'use client';

import { CSSProperties, PointerEvent, useEffect, useRef } from 'react';
import styles from './KaiParallaxHero.module.css';

const code = [
  "import { buildImpact } from '@kaidevlab/core';",
  '',
  'const studio = await createLab({',
  "  products: ['AI', 'Web', 'Creative Tech'],",
  '  principles: { craft: true, clarity: true },',
  '});',
  '',
  'export default studio.launch();',
];

export default function KaiParallaxHero() {
  const stageRef = useRef<HTMLElement>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const render = () => {
      x += (target.current.x - x) * 0.075;
      y += (target.current.y - y) * 0.075;
      stage.style.setProperty('--mx', x.toFixed(3));
      stage.style.setProperty('--my', y.toFixed(3));
      frame = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(frame);
  }, []);

  const move = (event: PointerEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    target.current = {
      x: ((event.clientX - box.left) / box.width - 0.5) * 2,
      y: ((event.clientY - box.top) / box.height - 0.5) * 2,
    };
  };

  return (
    <section
      ref={stageRef}
      className={styles.stage}
      onPointerMove={move}
      onPointerLeave={() => (target.current = { x: 0, y: 0 })}
      aria-label="Kai coding in a bright technology studio"
    >
      <img className={styles.background} src="/media/kai-parallax/studio-background.webp" alt="" />
      <img className={styles.kai} src="/media/kai-parallax/kai-interactive.webp" alt="Kai operating the interface" />

      <div className={styles.screen}>
        <div className={styles.touchpoint} aria-hidden="true"><i /><i /><b /></div>
        <div className={styles.header}>
          <b>KAIDEVLAB</b><span>● SYSTEM ONLINE</span>
        </div>
        <div className={styles.workspace}>
          <div className={styles.code}>
            <strong>{"// CODE EDITOR"}</strong>
            <pre>{code.map((line, i) => <span key={i}><i>{String(i + 1).padStart(2, '0')}</i>{line || ' '}</span>)}</pre>
          </div>
          <aside>
            <strong>{"// BUILD"}</strong>
            {['DESIGN 94%', 'CODE 98%', 'CREATE 91%'].map((metric) => <p key={metric}>{metric}</p>)}
          </aside>
        </div>
      </div>

      <div className={styles.keyboard} aria-hidden="true">
        {Array.from({ length: 56 }, (_, i) => <i key={i} style={{ '--delay': `${(i * .173) % 2.1}s` } as CSSProperties} />)}
      </div>
    </section>
  );
}
