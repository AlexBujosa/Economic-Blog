import React, { useState, useEffect } from 'react';
import { Button, Avatar } from '@material-ui/core';
import './styles.css';
import { UserAuth } from '../../../context/AuthContext';

const CommentBox = () => {
	const {user} = UserAuth();
	const [formData, setFormData] = useState({});
	const [validToComment, setValidToComment] = useState(false);
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
	useEffect(()=>{
		const localAuthToken = localStorage.getItem('authToken');
		if(
		  localAuthToken !== undefined &&
		  localAuthToken !== null &&
		  localAuthToken !== 'undefined'
		  ){
		  setValidToComment(true);
		}
	  },[user])

	return (
		
		<div className="comment-side">
			{validToComment? (
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
			</form>) : (
				<div>
					<br/>
					<br/>
					<h2>Comentarios</h2>
					<br/>
				</div>
			)}
			
		</div>
	);
};

export default CommentBox;
