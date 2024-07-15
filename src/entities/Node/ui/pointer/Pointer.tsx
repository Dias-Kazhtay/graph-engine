import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

interface PointerProps {
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  isSelected: boolean;
}

export const Pointer = ({ left, right, top, bottom, isSelected }: PointerProps) => {
  const [isMouseDown, setMouseDown] = useState<boolean>(false);
  const edgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mousemove = (e: any) => {
      if (isMouseDown && edgeRef.current) {
        edgeRef.current.style.left = `${e.clientX - 500}px`;
        edgeRef.current.style.top = `${e.clientY - 250}px`;
      }
    };

    const mousedown = () => {
      setMouseDown(false);
    };

    const mouseup = (e: any) => {
      if (isMouseDown) {
        console.log(123, e);
      }
    };
    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup);

    return () => {
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mousedown', mousedown);
      document.removeEventListener('mouseup', mouseup);
    };
  });

  return (
    <>
      {isSelected && (
        <>
          <div
            onMouseDown={(e) => {
              e.stopPropagation();
              setMouseDown(true);
            }}
            onMouseUp={(e) => {
              e.stopPropagation();

              setMouseDown(false);
            }}
            className={styles.Pointer}
            style={{
              left,
              right,
              top,
              bottom,
            }}
          />
        </>
      )}
      <div
        style={{
          width: '30px',
          height: '30px',
          background: 'red',
          position: 'absolute',
        }}
        ref={edgeRef}
      ></div>
    </>
  );
};
