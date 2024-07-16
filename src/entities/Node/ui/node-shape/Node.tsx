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
  const [, setSelected] = useState<boolean>(false);
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

  return (
    <div
      id={id}
      className={cn(styles.Node)}
      onClick={() => {
        setSelected((prev) => !prev);
      }}
    >
      <Pointer nodeId={id} id="left" left="11px" />
      <Pointer nodeId={id} id="right" right="11px" />
      <Pointer nodeId={id} id="top" top="11px" />
      <Pointer nodeId={id} id="bottom" bottom="11px" />
      {renderNodeType(text ?? '')}
    </div>
  );
};
