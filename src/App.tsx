import React from 'react';
import { portfolioContent } from './config/portfolioContent';
import './App.css';

function App() {
  const { name } = portfolioContent.hero;

  return (
    <div className="App">
      <h1>{name}</h1>
      <div className="tech-stack">
        {portfolioContent.skills.map((skill: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
