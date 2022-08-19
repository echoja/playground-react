import { useState } from 'react';

const ArrayFrozenText: React.FC = () => {
  const [array, setArray] = useState([1, 2, 3]);

  array[2] = 4;

  return <></>;
};

export default ArrayFrozenText;
