import Chip from "../../common/Chip";
import './styles.css'
const CoverImage = () => {
    return(
        <div style={{height: '100vh', marginTop:40, display:'flex'}}>
            <div className='cover-image'></div>
            <div className='cover'>
                <div className="cover-economics">
                    <Chip label={'Economics'} margin={'middle'}/>
                    <b>
                        <center>
                            Richird Norton photorealistic rendering as real photos
                        </center>
                    </b>
                    <p className='cover-description'>
                        Pogressively incentivize cooperative systems through technicall
                        sound functionalities. The credibly productivte seamless data.
                    </p>
                    <div className='cover-line'></div>
                    <p className='cover-date'>
                        08.08.10
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default CoverImage;