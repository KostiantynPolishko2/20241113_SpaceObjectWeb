import React, { FC } from 'react';
import './AsteroidTable.css';

interface AsteroidTableTitleProps {}

const AsteroidTableTitle: FC<AsteroidTableTitleProps> = () => (
   <thead>
      <tr>
         <th>№</th>
         <th>Name</th>
         <th>Type</th>
      </tr>
   </thead>
);

export default AsteroidTableTitle;
