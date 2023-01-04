import Chip from "../../common/Chip";
import './styles.css';
const CoverImage = ({label, title, description, date, choose, image} ) => {
    return(
        <div style={{height: '100vh', display:'flex'}}>
            {choose === 1 ? 
            (
                <div className='cover-image'></div>
            ) : 
            (
                <div className='cover-image-2' style={{backgroundImage: `url(${image})`}}></div>
            )}
            <div className='cover'>
                <div className="cover-economics">
                    <Chip label={label} margin={'middle'}/>
                    <b>
                        <center>
                           {title}
                        </center>
                    </b>
                    <p className='cover-description'>
                        {description}
                    </p>
                    <div className='cover-line'></div>
                    <p className='cover-date'>
                        {date}
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default CoverImage;