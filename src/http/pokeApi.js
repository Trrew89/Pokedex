import axios from "axios"

export const getPokemonById = async (index) => {
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`).catch(function (error) {
            console.log(error);
            if(error.response.status === 404) {
                return "Pokémon Not Found...... Try again"
            }
        });
}