import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import CoverImage from '../../components/Home/CoverImage';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import blogList from '../../config/data';
//import SearchBar from '../../components/Home/SearchBar';
import { UserAuth } from '../../context/AuthContext';

const coverImageInfo = {
	label: 'Economics',
	title: 'Richird Norton photorealistic rendering as real photos',
	discription:
		'Pogressively incentivize cooperative systems through technicall sound functionalities. The credibly productivte seamless data.',
	date: '08.08.10',
	choose: 1,
};
const Home = () => {
	const [blogs, setBlogs] = useState([]);
	const [searchKey, setSearchKey] = useState('');

	// Search submit
	const handleSearchBar = (e) => {
		e.preventDefault();
		handleSearchResults();
	};

	// Search for blog by category
	const handleSearchResults = () => {
		blogs.filter((blog) =>
			blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
		);
	};

	// Clear search and show all blogs
	const handleClearSearch = () => {
		setSearchKey('');
	};

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
