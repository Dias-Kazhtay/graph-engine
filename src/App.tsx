import { useState } from 'react';

function App() {
  const [label] = useState('Graph engine start');
  return <div className="App">{label}</div>;
}

export default App;
