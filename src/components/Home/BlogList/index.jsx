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
    'Políticas Económicas',
    'Finanzas',
    'Turismo'
  ]

  return (
    <div style={{marginTop: 120}}>
      <b style={{fontSize: '26px'}}>Popular Topics</b>
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
        {blogs.map((blog, index)  => {
          if(currentMenu === 'All' || blog.category === currentMenu){
            return <BlogItem blog={blog} key={'BlogItem-'+index}/>
          }
        }
        )}
      </div>
    </div>
    
  );
};

export default BlogList;
