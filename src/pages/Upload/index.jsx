
import React, { useState } from 'react';
import Select from 'react-select';
import {blogList} from '../../config/data.js';
import './styles.css';
import {TbUpload} from 'react-icons/tb';

const options = [
    {value:'Mercado Financiero',label: 'Mercado Financiero'},
    {value:'Global',label: 'Global'},
    {value:'Políticas Económicas',label: 'Políticas Económicas'},
    {value:'Finanzas',label: 'Finanzas'},
    {value:'Turismo',label: 'Turismo'},
  ];

const Upload = () => {


const [selectedOption, setSelectedOption] = useState(null);
  return (

    <div className='upload'>
        <form action="" className='upload-form'>
            <div className='title-news'><p>Título</p> <input type="text" name="" id="" className='input-title'/></div>
            <div className='container-options'>
            <div className='select-container'>
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder='Categoria'
            />
            </div>
            <div className='upload-img'><TbUpload style={{paddingRight:'10px'}} size={35}/><input className='img-news' name="uploadImg" type="file" accept="image/*" id='img'/></div>
            </div>
            <div><textarea className='body-news' name="" id="" cols="130" rows="25" placeholder="Ingrese el texto"></textarea></div>
            <button className='btn-news'>Subir</button>
        </form>
    </div>
  )
}


export default Upload;