import { useState } from 'react'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const output = useSelector((state) => state.states.output)
    const handleSearch = (searchTerm) => {
      // Handle the search logic here or pass it to another function
      console.log(`Searching for: ${searchTerm} and output: ${output}`);
    };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className='main'>hello</main>
    </>
  )
}

export default App
