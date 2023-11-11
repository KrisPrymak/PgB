import React, { Component } from 'react';

const WithDragAndDrop = (WrappedComponent) => {
  class DragAndDrop extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isDragging: false,
        startPosition: { x: 0, y: 0 },
        currentPosition: { x: 0, y: 0 },
      };
    }

    handleMouseDown = (e) => {
      e.preventDefault();
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
      this.setState({
        isDragging: true,
        startPosition: { x: e.clientX, y: e.clientY },
      });
    };

    handleMouseMove = (e) => {
      if (this.state.isDragging) {
        this.setState({
          currentPosition: { x: e.clientX, y: e.clientY },
        });
      }
    };

    handleMouseUp = () => {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      this.setState({
        isDragging: false,
      });
    };

    render() {
      const { isDragging, startPosition, currentPosition } = this.state;

      return (
        <div
          style={{ position: 'relative' }}
          onMouseDown={this.handleMouseDown}
        >
          <WrappedComponent
            {...this.props}
            isDragging={isDragging}
            startPosition={startPosition}
            currentPosition={currentPosition}
          />
        </div>
      );
    }
  }

  return DragAndDrop;
};

export default WithDragAndDrop;