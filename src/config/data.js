export default fetch(
	'https://economic-blog-backend.up.railway.app/api/articles'
).then((response) => response.json());
