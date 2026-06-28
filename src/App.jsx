import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
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
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} year={movie.year} />
      ))}
    </div>
  )
}

export default App
