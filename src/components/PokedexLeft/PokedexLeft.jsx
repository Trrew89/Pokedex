import { useContext } from 'react';
import PokedexScreen from '../PokedexScreen/PokedexScreen';
import './PokedexLeft.css'
import { Pokemon } from '../PokedexWrapper/PokedexWrapper';
import Logo from '../Logo/Logo';

const PokedexLeft = () => {
    const { pokemon } = useContext(Pokemon);
    
    return (
        <div className="pokedex__left">
            <Logo/>
            <div className='pokedex__left-wrapper'>
                <PokedexScreen className={"pokedex__left-screen"}>{
                    pokemon ?
                        <>
                            <img className='pokemon__image' src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <div>{pokemon.id}</div>
                        </>
                        :
                        <p className='initialization'>Initiating Pokédex......</p>}
                </PokedexScreen>
                <PokedexScreen className={"pokedex__left-screen__name"}>
                    {pokemon ? pokemon.name : "Pokemon"}
                </PokedexScreen>
            </div>
        </div>
    );
};

export default PokedexLeft;