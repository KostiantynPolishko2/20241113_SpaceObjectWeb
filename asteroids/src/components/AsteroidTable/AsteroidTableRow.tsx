import React, { FC, useState, useEffect, useCallback, useMemo, useContext } from 'react';
import axios from 'axios';
import { AsteroidTableRowWrapper } from './AsteroidTableRow.styled';
import './AsteroidTable.css';
import { HandleNameContext } from '../Asteroid/Asteroid';

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

   const _handleName = useContext(HandleNameContext);

   const spaceObjectRequest = useMemo(() => 
      axios.create({
        baseURL: 'https://spaceobjectsserver.azurewebsites.net/api/SpaceObject',
        method: 'get',
        responseType: 'json',
      }), []
    );

   const handleRequest = useCallback(() => {

      if(props.isLoad){
         spaceObjectRequest.get('asteroiditems')
         .then(responce => {
            setAsteroidItemsDto(responce.data);
         })
         .catch(error => {
            setClientsError(error);
         });
      }
   }, [props.isLoad, spaceObjectRequest]);

   useEffect(() => {
         handleRequest();
   }, [handleRequest]);

   if (clientsError != null){
      return (
         <AsteroidTableRowWrapper>
            <h3>Error401! Bad request.</h3>
         </AsteroidTableRowWrapper>
      );
   }

   return (
         <tbody>
               {asteroidItemsDto.map((item, i) => (
                  <tr key={i + 1} onClick={_handleName}>
                     <td>{i + 1}</td>
                     <td>{item.name}</td>
                     <td>{item.type}</td>
                  </tr>
               ))}
         </tbody>
   );
}

export default AsteroidTableRow;
