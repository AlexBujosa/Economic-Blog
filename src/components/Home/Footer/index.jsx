import './styles.css';
const Footer = () =>{
    return (
        <div className='footer'>
            <div className='info'>
                <div className='footer-card'>
                    <b>Contact the Publisher</b>
                    <p>runoeconomics@gmail.com</p>
                    <p>+93 450 339 231</p>
                </div>
                <div className='footer-card'>
                    <b>Explorate</b>
                    <p>About</p>
                    <p>Patners</p>
                    <p>Job Opportunities</p>
                    <p>Advertise</p>
                    <p>Membershio</p>
                </div>
                <div className='footer-card'>
                    <b>Headquarter</b>
                    <p>191 Middleville Road, NY 1001, Sydney Australia</p>
                </div>
            </div>
            <div className='copyrights'>
                <b>2021 | RUNO Publisher Studio</b>
                <p>Subscribe Now</p>
            </div>
        </div>
    )
}

export default Footer;