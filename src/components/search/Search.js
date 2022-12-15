import React from 'react'
import './search.scss'

const Search = () => {
  return (
    <div className='search-form-uni'>
        <form>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            <input type='text' placeholder='Search'/>
        </form>
        <div className="select">
            <label htmlFor="select">Sort by</label>
            <select name="" id="select">
                <option value="">Most expensive</option>
                <option value="">Most expensive</option>
                <option value="">Most expensive</option>
                <option value="">Most expensive</option>
            </select>
        </div>
        
    </div>
  )
}

export default Search