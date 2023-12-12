import { useContext } from 'react';
import NumberButtons from '../NumberButtons/NumberButtons';
import PokedexScreen from '../PokedexScreen/PokedexScreen';
import './PokedexRight.css'
import { Pokemon } from '../PokedexWrapper/PokedexWrapper';

const PokedexRight = () => {
    const { pokemon, numbers } = useContext(Pokemon);
    console.log(pokemon);
    return (
        <div className="pokedex__right">
            <div className='pokedex__right-wrapper'>
                <PokedexScreen className={"pokedex__right-screen"}>{
                    
                    numbers[0] ?
                        <p>Seeking pokemon...{numbers}</p>
                        :
                        pokemon ? <p>There is your pokemon!</p>
                        :
                        <p>Hello there! Welcome to the world of pokémon! This is your pokedex a tool to find any pokémon..</p>}
                </PokedexScreen>
                <NumberButtons />
            </div>
        </div>
    );
};

export default PokedexRight;