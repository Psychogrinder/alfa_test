import React from 'react';

function Search(props) {
  return (
    // <div className="search-bar">{props.content}</div>
    <div className="search-container">
      <input type="text" className="search-bar" />
    </div>
  );
}

 // Search.propTypes = {
 //   content: React.PropTypes.string.isRequired
 // };

 export default Search;
