
// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Line } from '@react-three/drei';

// Define the nodes with their coordinates
const nodes = [
  { id: 1, x: -8.7036, y: 0, z: 49.0748 },
  { id: 2, x: -72.9996, y: 0, z: 49.0748 },
  { id: 3, x: -75, y: 0, z: 49.0748 },
  { id: 4, x: -75.9996, y: 0, z: 43.8788 },
  { id: 5, x: -78.9996, y: 0, z: 38.6828 },
  { id: 6, x: -44.8512, y: 0, z: -13.5364 },
  { id: 7, x: -46.8516, y: 0, z: -16.9996 },
  { id: 8, x: -10.704, y: 0, z: 45.6104 },
  { id: 9, x: -80.0004, y: 0, z: 40.4144 },
  { id: 10, x: -38.148, y: 0, z: -32.0752 },
  { id: 11, x: -34.1484, y: 0, z: -32.0752 },
  { id: 12, x: -6, y: 0, z: -87.7576 },
  { id: 13, x: -5.0004, y: 0, z: -89.4892 },
  { id: 14, x: 8.7036, y: 0, z: 49.0748 },
  { id: 15, x: 72.9996, y: 0, z: 49.0748 },
  { id: 16, x: 75, y: 0, z: 49.0748 },
  { id: 17, x: 75.9996, y: 0, z: 43.8788 },
  { id: 18, x: 78.9996, y: 0, z: 38.6828 },
  { id: 19, x: 44.8512, y: 0, z: -13.5364 },
  { id: 20, x: 46.8516, y: 0, z: -16.9996 },
  { id: 21, x: 10.704, y: 0, z: 45.6104 },
  { id: 22, x: 80.0004, y: 0, z: 40.4144 },
  { id: 23, x: 38.148, y: 0, z: -32.0752 },
  { id: 24, x: 34.1484, y: 0, z: -32.0752 },
  { id: 25, x: 6, y: 0, z: -87.7576 },
  { id: 26, x: 5.0004, y: 0, z: -89.4892 },
  { id: 27, x: 0, y: 0, z: -87.7576 },
  { id: 28, x: 11.3127, y: 0, z: 6.5311 },
  { id: 29, x: 0, y: 0, z: -13.0622 },
  { id: 30, x: -11.3127, y: 0, z: 6.5311 },
  { id: 31, x: -77.4996, y: 0, z: 41.2808 },
  { id: 32, x: -74.4996, y: 0, z: 46.4768 },
  { id: 33, x: -64.0097, y: 60, z: 18.6311 },
  { id: 34, x: -64.0097, y: -12, z: 18.6311 },
  { id: 35, x: 18.5003, y: 60, z: -66.1068 },
  { id: 36, x: 18.5003, y: -12, z: -66.1068 },
  { id: 37, x: 54.5003, y: 60, z: -3.753 },
  { id: 38, x: 54.5003, y: -12, z: -3.753 },
  { id: 39, x: 72.0203, y: 60, z: 26.5926 },
  { id: 40, x: 72.0203, y: -12, z: 26.5926 },
  { id: 41, x: -24.1573, y: 60, z: 45.7931 },
  { id: 42, x: -24.1573, y: -36, z: 45.7931 },
  { id: 43, x: -59.178, y: 60, z: 46.2687 },
  { id: 44, x: -59.178, y: -12, z: 46.2687 },
];

// Define connections between nodes
const connections = [
  { startNode: 4, endNode: 30 },
  { startNode: 32, endNode: 8 },
  { startNode: 31, endNode: 6 },
  { startNode: 7, endNode: 1 },
  { startNode: 17, endNode: 28 },
  { startNode: 17, endNode: 21 },
  { startNode: 17, endNode: 19 },
  { startNode: 20, endNode: 14 },
  { startNode: 3, endNode: 16 },
  { startNode: 9, endNode: 13 },
  { startNode: 26, endNode: 22 },
  { startNode: 29, endNode: 27 },
  { startNode: 10, endNode: 23 },
  { startNode: 24, endNode: 27 },
  { startNode: 11, endNode: 27 },
  { startNode: 5, endNode: 2 },
  { startNode: 15, endNode: 18 },
  { startNode: 25, endNode: 12 },
  { startNode: 33, endNode: 34 },
  { startNode: 35, endNode: 36 },
  { startNode: 37, endNode: 38 },
  { startNode: 39, endNode: 40 },
  { startNode: 41, endNode: 42 },
  { startNode: 43, endNode: 44 },
];

// Graph component to render nodes and connections
const Graph = () => {
  return (
    <>
      {connections.map((conn, index) => {
        const start = nodes.find(node => node.id === conn.startNode);
        const end = nodes.find(node => node.id === conn.endNode);
        
        if (start && end) {
          return (
            <Line
              key={index}
              points={[
                [start.x, start.y, start.z],
                [end.x, end.y, end.z],
              ]}
              color="blue"
              lineWidth={2}
            />
          );
        }
        return null;
      })}

      {nodes.map((node) => (
        <mesh key={node.id} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[0.5, 32, 32]} /> {/* Geometry */}
          <meshStandardMaterial color="red" /> {/* Material */}
        </mesh>
      ))}
    </>
  );
};

// Main App component
function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Graph />
    </Canvas>
  );
}

export default App;
