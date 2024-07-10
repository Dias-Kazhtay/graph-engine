import useDragger from '../../lib/use-dragger';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Text } from '../text/Text';
import { Circle } from '../circle';
import { NodeTypesEnum } from '../../../../shared/constants';

interface NodeProps {
  id: string;
  text?: string;
  nodeType: NodeTypesEnum;
}

export const NodeShape = ({ id, text, nodeType }: NodeProps) => {
  useDragger({
    nodeId: id,
  });

  const renderNodeType = () => {
    switch (nodeType) {
      case NodeTypesEnum.Circle:
        return <Circle />;
      default:
        return <Circle />;
    }
  };

  return (
    <svg id={id} className={cn(styles.Node)} width={100} height={100} fill="#CAE8FF">
      {renderNodeType()}
      {text && <Text text={text} />}
    </svg>
  );
};
