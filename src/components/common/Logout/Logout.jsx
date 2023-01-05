export const Logout = () => {
	localStorage.clear();
	window.location.href = 'https://economic-blog.up.railway.app/login';
};
