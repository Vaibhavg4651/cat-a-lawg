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

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Pass the search term to the parent component or perform the search logic here
    onSearch(searchTerm);
    setSearchTerm('');
  };

  const handleOutputSelect = (event) => {
    setOutput(event.target.value);
    dispatch(setoutput(event.target.value))
  }


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
          </form>
          <div className="json-input">
          <label htmlFor="Json Input">Enter Json</label>
          <input type="file" placeholder="Json" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
