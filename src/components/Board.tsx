'use client';
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

export type CardType = {
  id: string;
  title: string;
  index: number;
  columnId: string;
}

const defaultColumns = [
  {id: "col1", name: "todo", index: 0},
  {id: "col2", name: "in progress", index: 1},
  {id: "col3", name: "done", index: 2},
];

const defaultCards = [
  {id: "aokid", title: "task1", index: 0, columnId: "col1"},
  {id: "aokif", title: "task2", index: 1, columnId: "col2"},
  {id: "aokig", title: "task3", index: 1, columnId: "col3"},
  {id: "aokih", title: "task4", index: 2, columnId: "col3"},
]

export default function Board() {
  
  const [columns, setColumns] = useState(defaultColumns);
  const [cards, setCards] = useState(defaultCards);
  
  return (
    <div className="flex gap-6">
      {columns.map(column => (
        <Column
          key={column.id}
          {...column} 
          cards={
            cards
            .sort((a, b) => a.index - b.index)
            .filter(card => card.columnId == column.id)
          }
          setCards={setCards}
        />
      ))}
      <NewColumnForm />
    </div>
  )
}