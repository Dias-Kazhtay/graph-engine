import styles from './styles.module.scss';

interface CircleProps {
  text: string;
}

export const Circle = ({ text }: CircleProps) => {
  return <div className={styles.Circle}>{text}</div>;
};
