import PokedexScreen from '../PokedexScreen/PokedexScreen';
import './PokedexLeft.css'

const PokedexLeft = () => {
    return (
        <div className="pokedex__left">
            <div className='pokedex__left-wrapper'>
                <PokedexScreen className={"pokedex__left-screen"}>Initiating Pokédex......</PokedexScreen>
                
            </div>
        </div>
    );
};

export default PokedexLeft;