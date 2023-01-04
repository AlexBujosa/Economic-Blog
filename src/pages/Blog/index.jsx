import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import blogList from '../../config/data';
import './styles.css';
import CoverImage from '../../components/Home/CoverImage';
import Header from '../../components/Home/Header';
import NavBar from '../../components/Home/NavBar';
import Footer from '../../components/Home/Footer';
import CommentSection from '../../components/Blog/CommentSection';

const coverImageInfo = {
	label: 'Economics',
	title: 'Richird Norton photorealistic rendering as real photos',
	discription:
		'Pogressively incentivize cooperative systems through technicall sound functionalities. The credibly productivte seamless data.',
	date: '08.08.10',
	choose: 2,
};

const Blog = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		blogList.then((data) => {
			const article = data.find((article) => article._id === id);
			console.log(article);
			if (article) {
				setBlog(article);
			}
		});
	}, []);

	return (
		<>
			{blog ? (
				<div>
					<NavBar />
					<CoverImage
						label={coverImageInfo.label}
						description={coverImageInfo.discription}
						title={coverImageInfo.title}
						date={coverImageInfo.date}
						choose={coverImageInfo.choose}
					/>
					<div className="blog-wrap">
						<header>
							<p className="blog-date">Published {blog.createdAt}</p>
							<h1>{blog.title}</h1>
						</header>
						<img src={blog.cover} alt="cover" />
						<p style={{ whiteSpace: 'pre-line' }} className="blog-desc">
							{blog.description}
						</p>
						<hr></hr>
						<CommentSection />
					</div>
					<Footer />
				</div>
			) : (
				<EmptyList />
			)}
		</>
	);
};

export default Blog;
