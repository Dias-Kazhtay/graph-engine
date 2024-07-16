import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { GraphContext } from '../../../../shared/context';

interface PointerProps {
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  id: string;
  nodeId: string;
}

export const Pointer = ({ left, right, top, bottom, id, nodeId }: PointerProps) => {
  const context = useContext(GraphContext);
  const [isMouseDown, setMouseDown] = useState(false);
  const mouseDownHandler = () => {
    setMouseDown(true);
    console.log('down', id, nodeId);
  };

  useEffect(() => {
    const onMove = () => {
      if (isMouseDown) {
        // console.log('moving', e.clientX, e.clientY);
      }
    };

    const omMouseUp = (e: any) => {
      if (isMouseDown) {
        console.log('up element', `from ${nodeId}-${id}`, `to ${e.target.id}`);
        console.log('context', context);
        setMouseDown(false);
      }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', omMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', omMouseUp);
    };
  });
  return (
    <>
      <div
        id={`${nodeId}-${id}`}
        onMouseDown={mouseDownHandler}
        className={styles.Pointer}
        style={{
          left,
          right,
          top,
          bottom,
        }}
      />
    </>
  );
};
