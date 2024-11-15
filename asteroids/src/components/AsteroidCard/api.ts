import axios from "axios";

export const fetchImagePath = async (asteroidName: string): Promise<string> => {

    const asteroidImage = axios.create({
        baseURL: 'https://localhost:7155/api/AsteroidImage/asteroid-image',
        method: 'get',
        responseType: 'json',
    });

    try{
        return (await asteroidImage.get(`new ${asteroidName}`)).data;
    }
    catch{
        return 'https://docfiles.blob.core.windows.net/files/images/404.png';
    }
}