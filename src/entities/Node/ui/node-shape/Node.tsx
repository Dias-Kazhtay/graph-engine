import useDragger from '../../lib/use-dragger';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Circle } from '../circle/Circle';
import { NodeTypesEnum } from '../../../../shared/constants';
import { useState } from 'react';
import { Pointer } from '../pointer/Pointer';

interface NodeProps {
  id: string;
  text?: string;
  nodeType: NodeTypesEnum;
}

export const NodeShape = ({ id, text, nodeType }: NodeProps) => {
  const [isSelected, setSelected] = useState<boolean>(false);
  useDragger({
    nodeId: id,
  });

  const renderNodeType = (text: string) => {
    switch (nodeType) {
      case NodeTypesEnum.Circle:
        return <Circle text={text} />;
      default:
        return <Circle text={text} />;
    }
  };

  // useEffect(() => {
  //   const blur = () => {
  //     setSelected(false);
  //   };
  //   document.addEventListener('click', blur);

  //   return () => {
  //     document.removeEventListener('click', blur);
  //   };
  // });

  return (
    <div
      id={id}
      className={cn(styles.Node, { [styles.Node__selected]: isSelected })}
      onClick={() => {
        setSelected((prev) => !prev);
      }}
    >
      <Pointer left="-4px" isSelected={isSelected} />
      {renderNodeType(text ?? '')}
    </div>
  );
};
