import './PokedexScreen.css'
const PokedexScreen = ({children, className}) => {
    return (
        <div className={`${className} pokedex__screen `}>
            <p>{children}</p>
        </div>
    );
};

export default PokedexScreen;