type ColumnProps = {
  name: String;
}

export default function Column({ name }: ColumnProps) {
  return (
    <div className="bg-neutral-900 w-72 p-4 rounded-xl">
      {name}
    </div>
  )
}