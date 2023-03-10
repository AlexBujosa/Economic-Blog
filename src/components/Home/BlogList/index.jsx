import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import { useState } from 'react';

const BlogList = ({ blogs }) => {
	const [currentMenu, setCurrentMenu] = useState('Todo');
	const options = [
		'Todo',
		'Mercado Financiero',
		'Global',
		'Políticas Económicas',
		'Turismo',
	];

	return (
		<div style={{ marginTop: 120 }}>
			<b style={{ fontSize: '26px' }}>Temas Populares</b>
			<br />
			<br />
			<ul>
				{options.map((item) => (
					<li
						key={item}
						className={currentMenu === item ? 'current' : ''}
						onClick={() => setCurrentMenu(item)}
					>
						{item}
					</li>
				))}
			</ul>
			<br />
			<div className="blogList-wrap">
				{blogs.map((blog) => {
					if (currentMenu === 'Todo' || blog.category === currentMenu) {
						return <BlogItem blog={blog} key={blog._id} />;
					}
				})}
			</div>
		</div>
	);
};

export default BlogList;
