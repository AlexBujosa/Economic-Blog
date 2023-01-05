export const Logout = () => {
	localStorage.clear();
	window.location.href = 'https://economic-blog-oduranc.vercel.app/login';
};
