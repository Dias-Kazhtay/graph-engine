import { Node } from './entities/Node';

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
      <Node id="1" />
      <Node id="2" />
      <Node id="3" />
    </div>
  );
}

export default App;
