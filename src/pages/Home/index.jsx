import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import CoverImage from '../../components/Home/CoverImage';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import blogList from '../../config/data';
//import SearchBar from '../../components/Home/SearchBar';

const coverImageInfo = {
	label: 'Economía',
	title: 'Blog Económico',
	discription: 'Desarrollado y redactado por Runo Group.',
	date: '22.12.28',
	choose: 1,
};
const Home = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		blogList.then((data) => setBlogs(data));
	}, []);

	return (
		<div>
			{/* Page Header */}
			<Header />

			{/* Search Bar 
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
      
      */}

			{/* Blog List & Empty View */}
			<div className="container">
				{!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
			</div>
			{/* Secondary Image <CoverImage/> */}
			<div style={{ marginTop: 40 }}>
				<CoverImage
					label={coverImageInfo.label}
					description={coverImageInfo.discription}
					title={coverImageInfo.title}
					date={coverImageInfo.date}
					choose={coverImageInfo.choose}
				/>
			</div>

			{/*Footer */}
			<Footer />
		</div>
	);
};

export default Home;
