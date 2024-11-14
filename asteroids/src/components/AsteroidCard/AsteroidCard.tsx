import React, {FC, useEffect, useState, useMemo, useCallback} from 'react';
import './AsteroidCard.css';
import axios from 'axios';

type AsteroidInfoDto = {
  name: string,
  category: string, 
  size: number,
  weight: number,
  speed: number,
  image_path: string
}

interface IError {
  message: string,
}

type TAsteroidCard = {
  name: string | null,
}

const AsteroidCard: FC<TAsteroidCard> = (props) => {

  const [asteroidInfoDto, setAsteroidInfoDto] = useState<AsteroidInfoDto | null>(null);
  const [clientsError, setClientsError] = useState<IError | null>(null);

  const spaceObjectRequest = useMemo(() => 
    axios.create({
      baseURL: 'https://spaceobjectsserver.azurewebsites.net/api/SpaceObject',
      method: 'get',
      responseType: 'json',
    }), []
  );

  const handleRequest = useCallback(() => {
    if(props.name != null){
      spaceObjectRequest.get(`asteroid/${props.name}`)
      .then(responce => {
        setAsteroidInfoDto(responce.data);
        console.log(responce.data);
      })
      .catch(error => {
          setClientsError(error);
      });
    }
  }, [props.name, spaceObjectRequest]);

  useEffect(() => {
        handleRequest();
  }, [handleRequest]);

  if (props.name == null){
    return (<></>);
  }

  if (clientsError != null) {
    return (
      <div className="profile404-card">
        <img className="avatar" src={'https://docfiles.blob.core.windows.net/files/images/404.png'} alt='logo 404 NotFound'/>
        <h3>TRY NEW AGAIN</h3>
      </div>
    );
  }

  return (
    <div className="profile-card">
      <div className="profile-details">
        <img className="avatar" src={asteroidInfoDto?.image_path} alt={`${asteroidInfoDto?.name || 'none'}`}/>
        <div className="profile-info">
          <h2>Name:   {asteroidInfoDto?.name}</h2>
          <h2>Type:   {asteroidInfoDto?.category}</h2>
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
