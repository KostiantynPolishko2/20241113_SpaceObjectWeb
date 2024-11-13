import React, { FC, useState, useEffect } from 'react';
import { AsteroidTableWrapper } from './AsteroidTable.styled';
import AsteroidTableTitle from './AsteroidTableTitle';
import AsteroidTableRow from './AsteroidTableRow';
import './AsteroidTable.css';

interface AsteroidTableProps {

}

const AsteroidTable: FC<AsteroidTableProps> = () => {

   const [isDisplay, setIsDisplay] = useState<boolean>(false);
   const [display, setDisplay] = useState<string>('none');
   const [btnTitle, setBtnTitle] = useState<string>('SHOW');


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
