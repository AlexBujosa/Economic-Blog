import React from 'react';
import './styles.css';


const Chip = ({ label, margin }) => <p className={'chip ' + margin}>{label}</p>;

export default Chip;
