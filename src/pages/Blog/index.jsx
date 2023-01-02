import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import CoverImage from '../../components/Home/CoverImage';
import Header from '../../components/Home/Header';
import NavBar from '../../components/Home/NavBar';
import Footer from '../../components/Home/Footer';
const coverImageInfo = {
  label: 'Economics',
  title: 'Richird Norton photorealistic rendering as real photos',
  discription: 'Pogressively incentivize cooperative systems through technicall sound functionalities. The credibly productivte seamless data.',
  date: '08.08.10',
  choose : 2,
}

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      {blog ? (
        <div>
          <NavBar/>
          <CoverImage label={coverImageInfo.label} 
          description={coverImageInfo.description}
          title={coverImageInfo.title}
          date={coverImageInfo.date}
          choose={coverImageInfo.choose}
          />
           <div className='blog-wrap'>
              <header>
                <p className='blog-date'>Published {blog.createdAt}</p>
                <h1>{blog.title}</h1>
                <div className='blog-subCategory'>
                  {blog.subCategory.map((category, i) => (
                    <div key={i}>
                      <Chip label={category} />
                    </div>
                  ))}
                </div>
            </header>
            <img src={blog.cover} alt='cover' />
            <p className='blog-desc'>{blog.description}</p>
          </div>
          <Footer/>
        </div>
       
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
