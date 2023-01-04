import './styles.css';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { Logout } from '../../common/Logout/Logout';
const NavBar = () => {
	const currentURL = window.location.href;
	const urls = [
		{
			text: 'Home',
			url: 'http://localhost:3000/',
			direct: '/',
		},
		{
			text: 'About Us',
			url: 'http://localhost:3000/about',
			direct: '/about',
		},
		{
			text: 'Log In',
			url: 'http://localhost:3000/logIn',
			direct: '/logIn',
		},
	];
	return (
		<div className="navbar">
			<b>RUNO</b>

			<ul>
				{urls.map((url) => {
					return (
						<Link
							to={url.direct}
							style={{ textDecoration: 'none', color: 'white' }}
							key={url.text}
						>
							<li className={url.url === currentURL ? 'underline' : ''}>
								{url.text}
							</li>
						</Link>
					);
				})}
				<li
					onClick={() => {
						Logout();
					}}
				>
					Log Out
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
