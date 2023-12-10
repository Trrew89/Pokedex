import axios from "axios"

export const getPokemonById = async(index) => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}