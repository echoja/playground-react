import { ReactElement, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Link, Route, Routes } from 'react-router-dom';
import { useScript } from 'usehooks-ts';
import ArrayFrozenTest from './ArrayFrozenTest';
import Dnd from './Dnd';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';

function App(): ReactElement {
  const [count, setCount] = useState(0);

  useScript('https://apps.elfsight.com/p/platform.js');

  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      <header>
        <ArrayFrozenTest />
        <div className="elfsight-app-e6964b74-bec4-474b-b53b-decc105f50c9"></div>

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
      {/* <div className="flex flex-col justify-start p-10 bg-slate-50">
        <div className="p-3 bg-black/5">1</div>
        <div className="p-3 bg-black/5">2</div>
        <div className="p-3 bg-black/5">3</div>
      </div> */}
      <DndProvider backend={HTML5Backend}>
        <Dnd />
      </DndProvider>
    </div>
  );
}

export default App;
