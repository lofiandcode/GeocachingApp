import React from 'react';

const UserSearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Type" checked={null} onChange={null}/>
        Type
      </label>
      <label>
        <input type="radio" value="Rating" checked={null} onChange={null}/>
        Rating
      </label>
      <label>
        <input type="radio" value="Difficulty" checked={null} onChange={null}/>
        Difficulty
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=>props.filterCaches(e.target.value)}>
          <option value="Completed">Caches Completed</option>
          <option value="Favorites">Favorites</option>
          <option value="To-do">To-do's</option>
          <option value="All">All</option>
        </select>
      </label>


    </div>
  );
}


export default UserSearchBar;
