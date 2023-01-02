import React from 'react';
import './styles.css';
import {TbUpload} from 'react-icons/tb';
const Upload = () => {
  return (
    <div className='upload'>
        <form action="" className='upload-form'>
            <div className='title-news'><p>Titulo</p> <input type="text" name="" id="" className='input-title'/></div>
            <div className='upload-img'><TbUpload style={{paddingRight:'10px'}} size={35}/><input className='img-news' name="uploadImg" type="file" accept="image/*" id='img'/></div>
            <div><textarea className='body-news' name="" id="" cols="130" rows="25" placeholder="Ingrese el texto"></textarea></div>
            <button className='btn-news'>Subir</button>
        </form>
    </div>
  )
}


export default Upload;