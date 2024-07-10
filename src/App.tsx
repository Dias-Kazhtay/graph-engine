import { NodeShape } from './entities/Node';
import { NodeTypesEnum } from './shared/constants';

function App() {
  return (
    <div
      style={{
        border: '1px solid black',
        height: '800px',
        width: '800px',
        overflow: 'hidden',
      }}
    >
      <NodeShape id="3" text="node" nodeType={NodeTypesEnum.Circle} />
    </div>
  );
}

export default App;
