import PokedexLeft from '../PokedexLeft/PokedexLeft';
import PokedexRight from '../PokedexRight/PokedexRight';
import './PokedexWrapper.css'

const PokedexWrapper = () => {
    return (
        <div className="pokedex">
            <PokedexLeft/>
            <PokedexRight/>
        </div>
    );
};

export default PokedexWrapper;