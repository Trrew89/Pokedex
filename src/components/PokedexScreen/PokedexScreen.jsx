import './PokedexScreen.css'
const PokedexScreen = ({children, className}) => {
    return (
        <div className={`${className} pokedex__screen `}>
            {children}
        </div>
    );
};

export default PokedexScreen;