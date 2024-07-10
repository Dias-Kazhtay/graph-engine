import { useEffect, useRef } from 'react';

export const Canvas = (props: any) => {
  const ref = useRef();

  const drawHandler = (context: CanvasRenderingContext2D) => {
    context.fillRect(100, 100, 100, 100);
  };

  useEffect(() => {
    const canvas: any = ref.current;
    const context: any = canvas.getContext('2d');

    drawHandler(context);
  }, []);

  return <canvas ref={ref} {...props}></canvas>;
};
