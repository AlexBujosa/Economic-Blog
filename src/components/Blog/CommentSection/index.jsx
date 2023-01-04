import React, { useState, useEffect } from 'react';
import CommentBox from '../CommentBox';
import CommentPost from '../CommentPost';
import './styles.css';

const CommentSection = () => {
	const [comments, setComments] = useState([]);

	const getComments = async () => {
		await fetch(
			'https://economic-blog-backend.up.railway.app/api/comments/article/' +
				window.location.href.substring(
					window.location.href.lastIndexOf('/') + 1
				)
		)
			.then((response) => response.json())
			.then((data) => setComments(data));
	};

	useEffect(() => {
		getComments();
	}, []);

	return (
		<div className="comments">
			<CommentBox />
			{comments.map((item, _id) => {
				return <CommentPost key={_id} name={item.user} body={item.body} />;
			})}
		</div>
	);
};

export default CommentSection;
