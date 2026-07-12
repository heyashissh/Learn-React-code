import { useState, useEffect } from 'react'

function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchPosts() {
    setLoading(true)   
    setError(null)        

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      if (!res.ok) throw new Error("Server error!")
      const data = await res.json()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <h2>Blog Posts</h2>
      <button onClick={fetchPosts}>🔄 Refresh</button>

      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function App() {
  return (
    <div>
      <PostList />
    </div>
  )
}

export default App