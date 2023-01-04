import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
	blog: { description, title, created, postedBy, cover, category, _id },
}) => {
	return (
		<div className="blogItem-wrap">
			<div className="blogItem-image-container">
				<Link
					className="blogItem-link"
					to={`/blog/${_id}`}
					style={{ position: 'relative' }}
				>
					<Chip label={category} margin={'right-top'} />
					<img className="blogItem-cover" src={cover} alt="cover" />
				</Link>
			</div>
			<p className="blogItem-createdAt">
				{new Date(created).toISOString().split('T')[0]}
			</p>
			<h3 style={{ zIndex: 1 }}>{title}</h3>
			<p className="blogItem-desc">{description}</p>
		</div>
	);
};

export default BlogItem;
