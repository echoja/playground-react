import React, { ReactElement, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ArrayFrozenTest from './ArrayFrozenTest';
import logo from './logo.svg';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';

function App(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      <header>
        <ArrayFrozenTest />

        <p>
          <a
            className="text-purple-400 underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-purple-400 underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="text-purple-400 underline"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            tailwindcss Docs
          </a>
          {' | '}
          <Link className="text-purple-400 underline" to="/">
            HOME
          </Link>
          {' | '}
          <Link className="text-purple-400 underline" to="/testp2">
            TESTP2
          </Link>
        </p>
      </header>
      <Routes>
        <Route path="/" element={<TestPage1 />} />
        <Route path="testp2" element={<TestPage2 />} />
      </Routes>
    </div>
  );
}

export default App;
