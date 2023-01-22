import { useEffect, useState } from 'react';
import { useScript } from 'usehooks-ts';

const ElfsightPage: React.FC = () => {
  useScript('https://apps.elfsight.com/p/platform.js');

  const [holdOn, setHoldOn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('ho!!!!!!!!!!');
      setHoldOn(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      // console.log('mutations', mutations);
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          console.log('addedNodes', mutation.addedNodes);
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeName === 'DIV' &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (node as any).className ===
                'elfsight-app-e6964b74-bec4-474b-b53b-decc105f50c9'
            ) {
              console.log(node.cloneNode());
              console.log('elfsight-app-e6964b74-bec4-474b-b53b-decc105f50c9');
              // setHoldOn(false);
            }
          });
        }
      });
    });

    const config = { childList: true, subtree: true, characterData: true };
    observer.observe(document, config);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hoho">
      {holdOn && (
        <>
          <div className="elfsight-app-e6964b74-bec4-474b-b53b-decc105f50c9"></div>
          <div className="elfsight-app-92421e38-01d4-4ce8-8715-38edffeb309b"></div>
        </>
      )}
    </div>
  );
};

export default ElfsightPage;
