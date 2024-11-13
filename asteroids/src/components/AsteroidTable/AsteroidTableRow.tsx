import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { AsteroidTableRowWrapper } from './AsteroidTableRow.styled';
import './AsteroidTable.css';

interface IAsteroidItemDto {
   name: string,
   type: string,
}

interface IError {
   message: string,
}

type TListRow = {
   isLoad: boolean,
}

const AsteroidTableRow: FC<TListRow> = (props) => {
   const [asteroidItemsDto, setAsteroidItemsDto] = useState<Array<IAsteroidItemDto>>([]);
   const [clientsError, setClientsError] = useState<IError | null>(null)

   const productOrderRequest = axios.create({
       baseURL: 'https://spaceobjectsserver.azurewebsites.net/api/SpaceObject',
       method: 'get',
       responseType: 'json'
   });

   useEffect(() => 
      {
         if(props.isLoad){
            console.log('call axios');
            productOrderRequest.get('asteroiditems')
            .then(responce => {
               setAsteroidItemsDto(responce.data);
               console.log("data", asteroidItemsDto);
            })
            .catch(error => {
               setClientsError(error);
               console.log("error", clientsError);
            });
      }
   }, [props.isLoad]);

   return (
      <AsteroidTableRowWrapper>
         <tbody>
               {asteroidItemsDto.map((item, i) => (
                  <tr key={i + 1}>
                     <td>{i + 1}</td>
                     <td>{item.name}</td>
                     <td>{item.type}</td>
                  </tr>
               ))}
         </tbody>
      </AsteroidTableRowWrapper>
   );
}

export default AsteroidTableRow;
