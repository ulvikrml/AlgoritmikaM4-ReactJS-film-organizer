import React, { useState } from 'react'
import './SearchForm.css'

const SearchForm = ({ onSubmit }) => {
  const [searchString, setSearchString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const searchString = formData.get('search');

    onSubmit(searchString);
  }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit} className="search-box__form" >
        <label className="search-box__form-label">
          Search movie by title:
          <input
            name='search'
            className="search-box__form-input"
            placeholder="Harry Potter, The Godfather, etc."
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
          />
        </label>
        <button disabled={!searchString} className="search-box__form-submit" type="submit" id="button-addon2">Button</button>
      </form>
    </div>
  )
}
export default SearchForm;