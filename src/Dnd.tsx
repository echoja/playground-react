import { useEffect } from 'react';
import { useDrag, useDragDropManager, useDrop, useDragLayer } from 'react-dnd';

const Dnd: React.FC = () => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: 'abc',
    item: { id: '123' },
    collect(monitor) {
      return { isDragging: monitor.isDragging() };
    }
  }));

  const [dropCollected, drop] = useDrop({
    accept: 'abc',
    collect(monitor) {
      return { isOver: monitor.isOver() };
    },
    drop(item, monitor) {
      console.log('drop', item, monitor);
    }
  });

  useEffect(() => {
    console.log('collected', collected);
  }, [collected]);

  const collectedProps = useDragLayer((monitor) => {
    return {
      isDragging: monitor.isDragging(),
      item: monitor.getItem(),
      itemType: monitor.getItemType()
    };
  });

  const m = useDragDropManager();

  const monitor = m.getRegistry();

  useEffect(() => {
    console.log('monitor', monitor);
  }, [monitor]);

  return (
    <div className="p-10 border">
      {collected.isDragging ? (
        <div className="border" ref={dragPreview}>
          롤로로로로라러
        </div>
      ) : (
        <div ref={drag} className="p-10 border">
          이 놈을 드래그하세요!
          {JSON.stringify(collected)}
        </div>
      )}
      <div ref={drop} className="p-10 bg-slate-50">
        두롭다운
      </div>
      <span>dropCollected</span>
      <div>
        <pre>{JSON.stringify(dropCollected, null, 2)}</pre>
      </div>
      <span>collectedProps</span>
      <div>
        <pre>{JSON.stringify(collectedProps, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Dnd;
