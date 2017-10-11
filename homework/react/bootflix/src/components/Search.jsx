import React from 'react';

// Update the forms to utilize methods being passed down from App.js
const Search = (props) => {
  const { searchByTitle, searchById, handleSearchTitle, handleSearchId } = props;
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form id="title-search-form" method="get" onSubmit={searchByTitle}>
          <input type="text" name="title" placeholder="Enter movie title" onChange={handleSearchTitle} />
          <input type="submit" value="Search for this title" />
        </form>
      </div>

      <div className="search">
        <form id="id-search-form" method="get" onSubmit={searchById}>
          <input type="text" name="id" placeholder="Enter omdb movie ID" onChange={handleSearchId} />
          <input type="submit" value="Search by ID" />
        </form>
      </div>

    </section>
  );
};

export default Search;