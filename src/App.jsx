import { useState } from 'react'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const output = useSelector((state) => state.states.output)
    const handleSearch = async (searchTerm) => {
      // Handle the search logic here or pass it to another function
      try {
        const res = await axios.get(`http://localhost:3000/search?query=${searchTerm}&output=${output}`)
          .then(response => {
            console.log('successfully fetched Data', response.data);
          })
          .catch(error => {
            console.error('Error uploading file:', error);
          });
        fileInput.value = '';
      } catch (error) {
        console.error('Error reading JSON file:', error);
      }
    };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className='main'>hello</main>
    </>
  )
}

export default App
