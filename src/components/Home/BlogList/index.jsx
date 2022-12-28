import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import {useState} from 'react';

const BlogList = ({ blogs }) => {
  const [currentMenu, setCurrentMenu] = useState('All');
  const options = [
    'All',
    'Mercado Financiero',
    'Global',
    'Politicas Económicas',
    'Finanzas',
    'Turismo'
  ]

  return (
    <div>
      <b>Popular Topics</b>
      <br/>
      <br/>
      <ul>
        {options.map((item) => (
          <li key={item} className={currentMenu === item ? 'current' : ''} onClick={()=>setCurrentMenu(item)}>
            {item}
          </li>
        ))}
      </ul>
      <br/>
      <div className='blogList-wrap'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </div>
    
  );
};

export default BlogList;
