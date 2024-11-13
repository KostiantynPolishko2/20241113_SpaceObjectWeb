import React, { FC, useState, useEffect, useContext } from 'react';
import AsteroidTableTitle from './AsteroidTableTitle';
import AsteroidTableRow from './AsteroidTableRow';
import './AsteroidTable.css';
import { HandleNameContext } from '../Asteroid/Asteroid';

interface AsteroidTableProps {

}

const AsteroidTable: FC<AsteroidTableProps> = () => {

   const [isDisplay, setIsDisplay] = useState<boolean>(false);
   const [display, setDisplay] = useState<string>('none');
   const [btnTitle, setBtnTitle] = useState<string>('SHOW');

   const _handleName = useContext(HandleNameContext);

   const handleDisplay = () => {
       setIsDisplay(!isDisplay);
   };

   useEffect(()=> {   
      if(isDisplay){
         setDisplay('block');
         setBtnTitle('HIDE');
      }
      else{
         setDisplay('none');
         setBtnTitle('SHOW');
         _handleName(null);
      }
   }
   , [isDisplay]);

   return (
      <div className="table-container">
         <div className="table-header">
            <h2>Space Objects</h2>
            <button className="download-button" onClick={handleDisplay}>{btnTitle}</button>
         </div>
         <div style={{display: display}}>
            <table>
               <AsteroidTableTitle/>
               <AsteroidTableRow isLoad={isDisplay}/>
            </table>
         </div>
      </div>
   );
}

export default AsteroidTable;
