import './styles.css';
const Footer = () =>{
    return (
        <div className='footer'>
            <div className='info'>
                <div className='footer-card'>
                    <b>Contacto</b>
                    <p>runoeconomics@gmail.com</p>
                    <p>+93 450 339 231</p>
                </div>
                <div className='footer-card'>
                    <b>Explorar</b>
                    <p>Mercado Financiero</p>
                    <p>Políticas Económicas</p>
                    <p>Finanzas</p>
                    <p>Turismo</p>
                </div>
                <div className='footer-card'>
                    <b>Sede Central</b>
                    <p>Santo Domingo D.N</p>
                </div>
            </div>
            <div className='copyrights'>
                <b>{new Date().getFullYear()} | RUNO Group </b>
                
            </div>
        </div>
    )
}

export default Footer;