import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

const columns = [
  {id: "woqei", name: "todo", index: 0},
  {id: "woqeo", name: "in progress", index: 1},
  {id: "woqep", name: "done", index: 2},
];

export default function Board() {
  return (
    <div className="flex gap-6">
      {columns.map(column => (
        <Column key={column.id} {...column} />
      ))}
      <NewColumnForm />
    </div>
  )
}