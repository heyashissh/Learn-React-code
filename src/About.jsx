import useFetch from './useFetch'

function About() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <h1>About Page</h1>
      <h2>Latest Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About