import React, { useState } from "react";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    props.onSearch(searchTerm);
  }

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="container-fluid">
    <form className="flex" onSubmit={handleSearch} >
    <div className="row">
    <div className="col-md-8">
        <input
        type="text"
        placeholder="Search..."
        className="form-control"
        value={searchTerm}
        onChange={handleInputChange}
      />
       </div>
       <div className="col-md-4">
       <button type="submit" className="btn" style={{backgroundColor: 'black' ,color:'white'}}>Search</button>
       </div>
      </div>
    </form>
  </div>
  );
}

export default SearchBar;
