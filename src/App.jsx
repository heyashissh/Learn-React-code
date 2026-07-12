// function Card({ children }) {
//   return (
//     <div style={{ border: '2px solid red', padding: '20px' }}>
//       {children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Card>
//         <p>I am inside the card!</p>
//       </Card>
//     </div>
//   )
// }


// function Card({ title, children }) {
//   return (
//     <div style={{ border: '2px solid red', padding: '20px', margin: '10px' }}>
//       <h3>{title}</h3>
//       {children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Card title="User Info">
//         <p>Name: Ashish</p>
//         <p>Role: Developer</p>
//       </Card>
//     </div>
//   )
// }

// export default App


// function Card({ title, children }) {
//   return (
//     <div style={{ border: '2px solid red', padding: '20px', margin: '10px' }}>
//       <h3>{title}</h3>
//       {children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Card title="User Info">
//         <p>Name: Ashish</p>
//         <p>Role: Developer</p>
//       </Card>

//       <Card title="Skills">
//         <p>React</p>
//         <p>JavaScript</p>
//         <p>Node.js</p>
//       </Card>

//       <Card title="Hobbies">
//         <p>Reading</p>
//         <p>Gaming</p>
//         <p>Coding</p>
//       </Card>
//     </div>
//   )
// }

// export default App


// import { useState } from 'react'

// function Card({ title, children }) {
//   return (
//     <div style={{ border: '2px solid red', padding: '20px', margin: '10px' }}>
//       <h3>{title}</h3>
//       {children}
//     </div>
//   )
// }

// function App() {
//   const [showModal, setShowModal] = useState(false)

//   return (
//     <div>
//       <Card title="User Info">
//         <p>Name: Ashish</p>
//         <p>Role: Developer</p>
//       </Card>

//       <Card title="Skills">
//         <p>React</p>
//         <p>JavaScript</p>
//         <p>Node.js</p>
//       </Card>

//       <Card title="Hobbies">
//         <p>Reading</p>
//         <p>Gaming</p>
//         <p>Coding</p>
//       </Card>

//       <button onClick={() => setShowModal(true)}>Open Modal</button>

//       {showModal && (
//         <div style={{ background: 'blue', padding: '20px' }}>
//           <p>I am a modal!</p>
//           <button onClick={() => setShowModal(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App

import { useState } from 'react'

function Card({ title, children }) {
  return (
    <div style={{ border: '2px solid red', padding: '20px', margin: '10px' }}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

function Modal({ children, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: '#16213e',
        padding: '30px',
        borderRadius: '10px',
        minWidth: '300px',
        color: 'white'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Card title="User Info">
        <p>Name: Ashish</p>
        <p>Role: Developer</p>
      </Card>

      <Card title="Skills">
        <p>React</p>
        <p>JavaScript</p>
        <p>Node.js</p>
      </Card>

      <Card title="Hobbies">
        <p>Reading</p>
        <p>Gaming</p>
        <p>Coding</p>
      </Card>

      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Hello from Modal!</h2>
          <p>This is reusable content inside a modal.</p>
        </Modal>
      )}
    </div>
  )
}

export default App






// export default App