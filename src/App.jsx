import { useState, useContext, createContext } from 'react'

const ThemeContext = createContext()


function UserCard() {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{
      border: theme === "light" ? "2px solid black" : "2px solid white",
      padding: '20px',
      marginTop: '20px',
      borderRadius: '8px'
    }}>
      <h3>Ashish Shrivastav</h3>
      <p>Full Stack Developer</p>
      <p>Current theme: {theme}</p>
    </div>
  )
}




function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <nav>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </nav>
  )
}



function Page() {
  return (
    <div>
      <h2>Welcome to the Page</h2>
      <UserCard />
      <Navbar />
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{
        background: theme === "light" ? "#ffffff" : "#1a1a2e",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: '100vh',
        padding: '20px'
      }}>
        <h1>My App</h1>
        <Page />
      </div>
    </ThemeContext.Provider>
  )
}

export default App