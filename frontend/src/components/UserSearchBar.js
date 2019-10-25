import React from 'react';

const UserSearchBar = (props) => {
  return (
    <div>

      {/* <strong>Sort by:</strong>
      <label>
      </label>
      <label>
        <input type="radio" value="Rating" checked={null} onChange={null}/>
        Rating
      </label>
      <label>
        <input type="radio" value="Difficulty" checked={null} onChange={null}/>
        Difficulty
      </label>
      <br/> */}

      <label>
        <strong>Filter Your Caches:</strong>
        <select onChange={(e)=>props.filterCaches(e.target.value)}>
          <option value="All">All</option>
          <option value="to_do">To-do's</option>
          <option value="favorite">Favorites</option>
          <option value="done">Completed</option>
        </select>
      </label>


    </div>
  );
}


export default UserSearchBar;
