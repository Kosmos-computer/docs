import {useEffect, useRef, type ReactNode} from 'react';
import {createFluidProgram, drawFluidFrame} from './fluidShader';
import styles from './styles.module.css';

type RainbowCircleProps = {
  className?: string;
};

export default function RainbowCircle({className}: RainbowCircleProps): ReactNode {
  const rootRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const program = createFluidProgram(canvas);
    if (!program) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let mouse: [number, number] = [0.42, 0.58];
    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(rect.width * dpr));
      height = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      mouse = [
        (event.clientX - rect.left) / rect.width,
        1 - (event.clientY - rect.top) / rect.height,
      ];
    };

    const onLeave = () => {
      mouse = [0.42, 0.58];
    };

    const draw = (time: number) => {
      drawFluidFrame(program, width, height, time, mouse);
      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(root);
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);

    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <span
      ref={rootRef}
      className={[styles.circle, className].filter(Boolean).join(' ')}
      aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </span>
  );
}
