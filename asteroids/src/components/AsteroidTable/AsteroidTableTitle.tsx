import React, { FC } from 'react';
import { AsteroidTableTitleWrapper } from './AsteroidTableTitle.styled';
import './AsteroidTable.css';

interface AsteroidTableTitleProps {}

const AsteroidTableTitle: FC<AsteroidTableTitleProps> = () => (
//  <AsteroidTableTitleWrapper>
   <thead>
      <tr>
         <th>№</th>
         <th>Name</th>
         <th>Type</th>
      </tr>
   </thead>
//  </AsteroidTableTitleWrapper>
);

export default AsteroidTableTitle;
