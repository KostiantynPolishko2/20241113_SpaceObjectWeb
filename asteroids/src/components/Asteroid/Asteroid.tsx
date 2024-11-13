import React, {FC, useState, createContext} from "react";
import AsteroidTable from "../AsteroidTable/AsteroidTable";
import AsteroidCard from "../AsteroidCard/AsteroidCard";

interface IAsteroid {
}

export const HandleNameContext = createContext((e: React.FormEvent<HTMLElement> | null):void=>{});

const Asteroid: FC<IAsteroid> = () => {

    const [name, setName] = useState<string | null>(null);

    const handleName = (e: React.FormEvent<HTMLElement> | null):void => {
        e?.preventDefault();
        setName(e?.currentTarget.firstElementChild?.nextElementSibling?.textContent || null);
    }

    return (
        <>
            <HandleNameContext.Provider value={handleName}>
                <AsteroidTable/>
                <AsteroidCard name={name}/>
            </HandleNameContext.Provider>
        </>
    );
}

export default Asteroid