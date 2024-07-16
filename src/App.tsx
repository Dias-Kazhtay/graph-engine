import { NodeShape } from './entities/Node';
import { NodeTypesEnum } from './shared/constants';
import { GraphContext, defaultGraphState } from './shared/context';

function App() {
  return (
    <GraphContext.Provider value={defaultGraphState}>
      <div
        style={{
          border: '1px solid black',
          height: '800px',
          width: '800px',
          overflow: 'hidden',
        }}
      >
        <NodeShape id="3" text="node" nodeType={NodeTypesEnum.Circle} />
        <NodeShape id="4" text="node" nodeType={NodeTypesEnum.Circle} />
      </div>
    </GraphContext.Provider>
  );
}

export default App;
