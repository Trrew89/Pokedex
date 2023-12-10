import NumberButtons from '../NumberButtons/NumberButtons';
import PokedexScreen from '../PokedexScreen/PokedexScreen';
import './PokedexRight.css'

const PokedexRight = () => {
    return (
        <div className="pokedex__right">
            <div className='pokedex__right-wrapper'>
                <PokedexScreen className={"pokedex__right-screen"}>Hello there! Welcome to the world of pokémon!</PokedexScreen>
                <NumberButtons/>
            </div>
        </div>
    );
};

export default PokedexRight;