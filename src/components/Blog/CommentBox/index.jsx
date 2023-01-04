import React, { useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import './styles.css';

const CommentBox = () => {
	const [formData, setFormData] = useState({});

	const postComment = async (e) => {
		e.preventDefault();
		await fetch('https://economic-blog-backend.up.railway.app/api/comments', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then(() => {
				resetFormData();
				window.location.reload();
			});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			user: localStorage.getItem('username'),
			article: window.location.href.substring(
				window.location.href.lastIndexOf('/') + 1
			),
		});
	};

	const resetFormData = () => {
		setFormData({});
	};

	return (
		<div>
			<form onSubmit={postComment}>
				<div className="commentBox">
					<Avatar />
					<input
						value={formData.body || ''}
						onChange={handleChange}
						placeholder="Add a comment..."
						name="body"
					/>
				</div>
				<Button type="submit">Comment</Button>
			</form>
		</div>
	);
};

export default CommentBox;
