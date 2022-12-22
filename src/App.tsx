import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ElfsightPage from './pages/ElfsightPage';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';

function App(): ReactElement {
  const [count, setCount] = useState(0);

  const c = useCallback(async () => {
    return fetch('https://www.naver.com/aslkdjfasdfio/asd/f');
  }, []);

  useEffect(() => {
    c()
      .then(() => console.log('then'))
      .catch(() => console.log('catch'));
  }, []);

  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      <header>
        {/* <ArrayFrozenTest /> */}

        <p>
          {' | '}
          <Link className="text-purple-400 underline" to="/">
            HOME
          </Link>
          {' | '}
          <Link className="text-purple-400 underline" to="/testp2">
            TESTP2
          </Link>
          {' | '}
          <Link className="text-purple-400 underline" to="/elfsight">
            elfsight
          </Link>
        </p>
      </header>
      <Routes>
        <Route path="/" element={<TestPage1 />} />
        <Route path="testp2" element={<TestPage2 />} />
        <Route path="elfsight" element={<ElfsightPage />} />
      </Routes>
      {/* <div className="flex flex-col justify-start p-10 bg-slate-50">
        <div className="p-3 bg-black/5">1</div>
        <div className="p-3 bg-black/5">2</div>
        <div className="p-3 bg-black/5">3</div>
      </div> */}
      {/* <DndProvider backend={HTML5Backend}>
        <Dnd />
      </DndProvider> */}
    </div>
  );
}

export default App;
