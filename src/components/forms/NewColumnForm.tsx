"use client";
import { FormEvent } from "react"

export default function NewColumnForm() {
  
  const handleNewColumn = (ev: FormEvent) => {
    ev.preventDefault();
    const input = (ev.target as HTMLFormElement).querySelector('input');
    const columnName = input?.value;
    alert("new column: " + columnName);
  }
  
  return (
    <form onSubmit={handleNewColumn} className="max-w-xs">
      <label className="block">
        <span className="block font-bold">Column name:</span>
        <input type="text" placeholder="New column name" />        
      </label>
      <button type="submit" className="mt-2 w-full">Create column</button>
    </form>
  )
}