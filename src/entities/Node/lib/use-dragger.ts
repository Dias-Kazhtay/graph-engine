import { useEffect, useRef } from 'react';

interface UsePraggerProps {
  nodeId: string;
}

function useDragger({ nodeId }: UsePraggerProps) {
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
    const target: HTMLElement | null = document.getElementById(nodeId);

    if (!target) throw new Error("Element with given id doesn't exist");

    const container = target.parentElement;

    if (!container) throw new Error('Target element must have a parent');

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;

      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = parseInt(target.style.left);
      coords.current.lastY = parseInt(target.style.top);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);
    return () => {
      target.removeEventListener('mousedown', onMouseDown);
      target.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    };
  }, []);
}

export default useDragger;
