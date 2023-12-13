import { createContext, useState } from 'react';
import PokedexLeft from '../PokedexLeft/PokedexLeft';
import PokedexRight from '../PokedexRight/PokedexRight';
import devider from '../../assets/devider.svg'
import './PokedexWrapper.css'

export const Pokemon = createContext(null);
const PokedexWrapper = () => {
    const [pokemon, setPokemon] = useState(null);
    const [numbers, setNumbers] = useState([]);
    return (
        <Pokemon.Provider value={{pokemon, setPokemon, numbers, setNumbers}}>
            <div className="pokedex">
                <PokedexLeft/>
                <img className='devider' src={devider} alt="devider" />
                <PokedexRight/>
            </div>
        </Pokemon.Provider>
    );
};

export default PokedexWrapper;