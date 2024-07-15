import styles from './styles.module.scss';

interface PointerProps {
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  isSelected: boolean;
}

export const Pointer = ({ left, right, top, bottom, isSelected }: PointerProps) => {
  return (
    <>
      {isSelected && (
        <div
          className={styles.Pointer}
          style={{
            left,
            right,
            top,
            bottom,
          }}
        />
      )}
    </>
  );
};
