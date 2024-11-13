import React, { FC } from 'react';
import { AsteroidTableWrapper } from './AsteroidTable.styled';
import '../../App.css'

interface AsteroidTableProps {
   img_path: string
}

const AsteroidTable: FC<AsteroidTableProps> = (props) => (
 <AsteroidTableWrapper>
    AsteroidTable Component
    <img src={props.img_path} className='App-logo' alt='logo'/>
 </AsteroidTableWrapper>
);

export default AsteroidTable;
