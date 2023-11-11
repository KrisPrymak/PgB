import React from 'react';
import WithDragAndDrop from './WithDrapAndDrop';

const DraggableComponent = ({ isDragging, startPosition, currentPosition }) => {
  const styles = {
    position: 'absolute',
    left: isDragging ? currentPosition.x : startPosition.x,
    top: isDragging ? currentPosition.y : startPosition.y,
    cursor: 'grab',
  };

  return (
    <div style={styles}>
      {/* Ваш компонент, который вы хотите сделать перетаскиваемым */}
      <div style={{ border: '1px solid black', padding: '10px' }}>Drag me!</div>
    </div>
  );
};

export default WithDragAndDrop(DraggableComponent);