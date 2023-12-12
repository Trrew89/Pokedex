import { useContext, useEffect, useState } from "react";
import MyButton from "../Button/MyButton";
import './NumberButtons.css'
import { getPokemonById } from "../../http/pokeApi";
import { Pokemon } from "../PokedexWrapper/PokedexWrapper";

const NumberButtons = () => {
    const { setPokemon, numbers, setNumbers} = useContext(Pokemon);
    const buttons = [];
    for (let i = 0; i < 10; i++) {
        buttons.push(<MyButton key={i} className="pokedex__right-btn-num" onClick={() => setNumbers([...numbers, i])} >{i}</MyButton>);
    }

    const [timerRef, setTimerRef] = useState(null);

    useEffect(() => {
        if (+numbers.join('')) {
            if (timerRef) {
                clearTimeout(timerRef);
            }

            setTimerRef(setTimeout(async () => {
                const result = (await getPokemonById(+numbers.join(''))).data;
                setPokemon(result);
                setNumbers([]);
            }, 2000));
        }
    }, [numbers]);

    return (
        <div className="pokedex__right-btn-num-wrapper">
            {buttons}
        </div>

    );
};

export default NumberButtons;