import useFetch from './useFetch'

function Home() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Users</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home