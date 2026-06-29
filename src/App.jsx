import { useState } from 'react'
import './App.css'



// function MovieCard({ title, year }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>year: {year}</p>
//     </div>
//   )
// }

const movies = [
  { id: 1, title: "Avengers Endgame", year: 2019 },
  { id: 2, title: "Spider-Man: No Way Home", year: 2021 },
  { id: 3, title: "Black Panther", year: 2018 },
  { id: 4, title: "Iron Man", year: 2008 },
]

function SignupForm() {
  

}

function CharCounter (){
  const [text,setText] = useState("")

  return (
    <div>
      <input 
      type="text"
      value = {text}
      onChange={(e) => setText(e.target.value)}
      />
      <p>{text.length} characters typed</p>
    </div>
  )
}

function  Counter() {
  const [count, setCount] = useState(0)
  return (
  <div>
    <p>Count : {count}</p>
    <button onClick={()=> setCount(count + 1)}>+</button>
    <button onClick={()=> setCount(count - 1)}>-</button>
  </div>
  )
}

function MovieCard({ title, year }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Year: {year}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <CharCounter />
      <Counter/>
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} year={movie.year} />
      ))}
    </div>
  )
}

export default App
