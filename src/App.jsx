import { useState, memo, useMemo, useCallback } from 'react'

const ExpensiveList = memo(function ExpensiveList({ items, onDelete }) {
  console.log("ExpensiveList rendered!")
  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          {item}
          <button onClick={() => onDelete(item)}>X</button>
        </li>
      ))}
    </ul>
  )
})

function App() {
  const [count, setCount] = useState(0)

  const items = useMemo(() => {
    return ["React", "JavaScript", "Node.js", "CSS"]
  }, [])

  const handleDelete = useCallback((item) => {
    console.log("Deleted:", item)
  }, []) // empty array = same function reference every render

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ExpensiveList items={items} onDelete={handleDelete} />
    </div>
  )
}

export default App