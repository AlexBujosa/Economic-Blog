import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap' key={'blogItem-'+id}>
      <div className='blogItem-image-container'>
        <Link className='blogItem-link' to={`/blog/${id}`} style={{position:'relative'}}>
          <Chip label={category} margin={'right-top'}/>
          <img className='blogItem-cover' src={cover} alt='cover'/>
        </Link>
      </div>
      <p className='blogItem-createdAt' >{createdAt}</p>
      <h3 style={{zIndex: 1}}>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
    </div>
  );
};

export default BlogItem;
