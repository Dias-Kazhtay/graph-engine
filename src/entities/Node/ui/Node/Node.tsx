import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

export const Node = () => {
  const boxRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;

      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = parseInt(box.style.left);
      coords.current.lastY = parseInt(box.style.top);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);
    return () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.Container}>
      <svg
        ref={boxRef}
        className={styles.Node}
        width="126"
        height="92"
        viewBox="0 0 126 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H126V92H0V0Z" fill="blue" />
        <text fill="grey" font-size="18" font-weight="900">
          123
        </text>
      </svg>
    </div>
  );
};
