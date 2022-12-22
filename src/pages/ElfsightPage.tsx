import { useScript } from 'usehooks-ts';

const ElfsightPage: React.FC = () => {
  useScript('https://apps.elfsight.com/p/platform.js');

  return (
    <div>
      <div className="elfsight-app-e6964b74-bec4-474b-b53b-decc105f50c9"></div>
    </div>
  );
};

export default ElfsightPage;
