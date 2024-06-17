import React, { Component, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./List";
// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `dragabble ${k}`
  }));
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function App() {
  const [listItems, setItems] = useState(getItems(10));

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      listItems,
      result.source.index,
      result.destination.index
    );
    setItems(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>DragDropContext</h1>
      <List items={listItems} />
    </DragDropContext>
  );
}
