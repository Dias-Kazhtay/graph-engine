import useDragger from '../../lib/use-dragger';
import styles from './styles.module.scss';

export const Node = ({ id }: any) => {
  useDragger({
    nodeId: id,
  });

  return (
    <svg
      id={id}
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
  );
};
