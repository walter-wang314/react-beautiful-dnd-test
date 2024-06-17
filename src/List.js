import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

export default function List({ items, isDropDisabled }) {
  const grid = 8;

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <Droppable droppableId="droppable" isDropDisabled={false}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}>
          Dropzone
          {items.map((item, index) => (
            <Item
              item={item}
              key={item.id}
              index={index}
              getItemStyle={getItemStyle}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
