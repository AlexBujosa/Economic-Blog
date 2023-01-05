import Header from '../../components/Home/Header';
import Footer from '../../components/Home/Footer';
import './index.css';
const About = () => {
	return (
		<div className="about">
			<Header />
			<div style={{display:'flex'}}>
				<div
					style={{ maxWidth: '70%', minWidth:'280px', margin:'auto' }}
				>
					<h2>Bienvenidos a nuestro blog</h2>
					<br/>
					<p style={{textAlign:'justify'}}>
					En Runo nos dedicamos a ofrecerle la información más reciente y relevante sobre diversos temas, como finanzas, turismo y política económica. Nuestro equipo trabaja incansablemente para ofrecerle artículos de alta calidad. Si es usted un profesional de las finanzas o simplemente está interesado en mantenerse informado sobre el mundo de la economía, tenemos algo para usted. Nuestros artículos están concebidos para informar y hacer reflexionar, y animamos a nuestros lectores a formar una opinión informada.
						<br/>
						<br/>
						Gracias por visitar nuestro blog. Esperamos que nuestros artículos le resulten útiles y educativos, y deseamos seguir compartiendo nuestros conocimientos con usted.
					</p>
					<br/>
					<h2>Integrantes del grupo</h2>
					<ul style={{display:'block'}} className='ul-about'>
						<li><p>Alex Bujosa</p> <div>1098913</div> </li>
						<li><p>Sahira Tejada</p> <div>1098917</div></li>
						<li><p>Oscar Duran</p> <div>1099235</div></li>
						<li><p>Ismael Dicent</p> <div>1100368</div></li>
						<li><p>Nathalie Elias</p> <div>1098163</div></li>
						<li><p>Christian Aquino</p> <div>1099784</div></li>
					</ul>

				</div>
			</div>
			
			<Footer/>
		</div>
	);
};

export default About;
