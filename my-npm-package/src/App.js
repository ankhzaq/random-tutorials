import Graph from 'zaquielverse-d3-graph/lib/Graph';
import './App.css';

const localNodes = [
  {
    id: 1,
    image: 'proceso',
    originalName: 'process1',
    secondLabel: 'Second name',
  },
  {
    id: 2,
    image: 'proceso',
    originalName: 'node2'
  },
  {
    id: 3,
    image: 'node',
    originalName: 'node3'
  },
  {
    id: 4,
    image: 'proceso',
    originalName: 'node4'
  },
  {
    id: 5,
    image: 'node',
    originalName: 'node5',
    secondLabel: 'Second name'
  },
  {
    id: 6,
    image: 'npm',
    originalName: 'node6'
  },
  {
    id: 7,
    image: 'node',
    originalName: 'node7'
  },
  {
    id: 8,
    image: 'node',
    originalName: 'node8',
    secondLabel: 'Second name'
  },
  {
    id: 9,
    image: 'node',
    originalName: 'node9'
  },
  {
    id: 10,
    image: 'node',
    originalName: 'node10'
  },
  {
    id: 11,
    image: 'node',
    originalName: 'node10',
    secondLabel: 'Second name'
  },
  {
    id: 12,
    image: 'node',
    originalName: 'node10'
  },
  {
    id: 13,
    image: 'node',
    originalName: 'node10'
  },
  {
    id: 14,
    image: 'node',
    originalName: 'node10'
  },
  {
    id: 15,
    image: 'node',
    originalName: 'node10'
  }
];
const localLinks = [
  {
    source: 1,
    target: 2
  },
  {
    source: 3,
    target: 2
  },
  {
    source: 2,
    target: 5,
  },
  {
    source: 5,
    target: 6,
  },
  {
    source: 6,
    target: 1,
  },
  {
    source: 1,
    target: 7,
  },
  {
    source: 7,
    target: 10,
  },
  {
    source: 8,
    target: 10,
  },
  {
    source: 10,
    target: 2,
  },
  {
    source: 4,
    target: 7,
  },
  {
    source: 9,
    target: 7,
  },
  {
    source: 10,
    target: 14,
  },
  {
    source: 6,
    target: 12,
  },
  {
    source: 15,
    target: 8,
  },
  {
    source: 11,
    target: 3,
  },
  {
    source: 13,
    target: 5,
  }
];

function App() {
  return (
    <div>
      <Graph
        height={window.innerHeight}
        links={localLinks}
        nodes={localNodes}
        width={window.innerWidth}
      />
    </div>
  );
}

export default App;
