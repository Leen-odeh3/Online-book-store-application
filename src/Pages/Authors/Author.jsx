import React from 'react'
import './Authors.css'
import {authors} from '../../data/authors'

const Author = () => {
  return (
    <div className='author-content'>
      <div className='search-author'><input type="search" placeholder='search in authors' className='search-authors'/> </div>
      <div className='authors-wrapper'> 
        {authors.map((e) => {
          return (
            <div className='auther-item' key={e.id}>
              <img src={e.image} alt={e.name}  />
              <h4>{e.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Author;
