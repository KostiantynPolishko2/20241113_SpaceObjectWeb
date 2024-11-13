import React, { FC } from 'react';
import { AsteroidTableWrapper } from './AsteroidTable.styled';

interface AsteroidTableProps {
   img_path: string
}

const AsteroidTable: FC<AsteroidTableProps> = (props) => (
 <AsteroidTableWrapper>
    AsteroidTable Component
    <img src={props.img_path} alt='logo'/>
 </AsteroidTableWrapper>
);

export default AsteroidTable;
