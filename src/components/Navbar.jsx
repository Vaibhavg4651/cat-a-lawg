import React from "react";
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { setoutput } from "../reducers/stateSlice";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [output, setOutput] = useState("titles");
  const dispatch = useDispatch()

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    // Check if the selected file is a JSON file
    const fileInput = event.target.querySelector('input[type="file"]');
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
      if (selectedFile.name.endsWith('.json')) {
        try {
          const jsonData = await readFileContent(selectedFile);

          // Save the file in the assets (assuming 'assets' is a folder in the public directory)
          const fileName = `assets/${selectedFile.name}`;
          saveFile(selectedFile, fileName);

          axios.post('http://localhost:3000/index', selectedFile)
            .then(response => {
              console.log('Upload successful:', response.data);
            })
            .catch(error => {
              console.error('Error uploading file:', error);
            });
          fileInput.value = '';
        } catch (error) {
          console.error('Error reading JSON file:', error);
        }
      } else {
        console.error('Invalid file type. Please select a JSON file.');
      }
    } else {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  const handleOutputSelect = (event) => {
    setOutput(event.target.value);
    dispatch(setoutput(event.target.value))
  }


  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(JSON.parse(e.target.result));
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };


  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="logo">Cat-a-lawg</div>
          <section className="maintime">
          <select name="group" className="select" value={output} onChange={handleOutputSelect}>
                <option value="titles">Titles</option>
                <option value="similar">Similar</option>
                <option value="ids">Ids</option>
         </select>
          </section>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          <div className="json-input">
          <label htmlFor="Json Input">Enter Json File</label>
          <input type="file" placeholder="Json" id="jsonInput"
              accept=".json"/>
          </div>
        </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
