import React, {FC, ReactNode, useEffect, useState} from 'react';
import './AsteroidCard.css';
import axios from 'axios';

type AsteroidInfoDto = {
  name: string,
  type: string, 
  size: number,
  weight: number,
  speed: number
}

type TAsteroidCard = {
  name?: string | null,
}

const AsteroidCard: FC<TAsteroidCard> = (props) => {

  const [asteroidInfoDto, setAsteroidInfoDto] = useState<AsteroidInfoDto | null>(null);

  return (
    <div className="profile-card">
      <div className="profile-details">
        <img className="avatar" src={'https://docfiles.blob.core.windows.net/files/images/TQ1_AzureSQLDatabaseOfflineMigration_00.png'} alt={`${asteroidInfoDto?.name || 'none'}`}/>
        <div className="profile-info">
          <h2>Name:   {asteroidInfoDto?.name}</h2>
          <h2>Type:   {asteroidInfoDto?.type}</h2>
          <h3>Size:   {asteroidInfoDto?.size}</h3>
          <h3>Weight: {asteroidInfoDto?.weight}</h3>
          <h3>Speed:  {asteroidInfoDto?.speed}</h3>
        </div>
      </div>
      <div className="actions">
        <button className="edit-btn" disabled>Edit</button>
        <button className="post-btn" disabled>Post</button>
        <button className="delete-btn" disabled>Delete</button>
      </div>
    </div>
  );
};

export default AsteroidCard;
