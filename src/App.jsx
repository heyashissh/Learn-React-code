import { useState, useEffect } from 'react'

import './App.css'

const movies = [
  { id: 1, title: "Avengers Endgame", year: 2019 },
  { id: 2, title: "Spider-Man: No Way Home", year: 2021 },
  { id: 3, title: "Black Panther", year: 2018 },
  { id: 4, title: "Iron Man", year: 2008 },
]

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome back, Ashish!</h2>
          <button onClick={() => { setIsLoggedIn(false); setShowWelcome(false) }}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => { setIsLoggedIn(true); setShowWelcome(true) }}>
            Log In
          </button>
        </div>
      )}
      {showWelcome && <p>Thanks for logging in!</p>}
    </div>
  )
}

function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return <p>Welcome, {name}!</p>
  }                              

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

function CharCounter() {
  const [text, setText] = useState("")

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text.length} characters typed</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>−</button>
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
  useEffect(() => {
    console.log("App loaded")
  }, [])
  return (
    <div>
      <LoginToggle />
      <CharCounter />
      <SignupForm />
      <Counter />
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} year={movie.year} />
      ))}
    </div>
  )
}

export default App