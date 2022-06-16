const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export default {
  getAllPokemon: async () => {
    let result = await fetch(`${BASE_URL}?offset=0&limit=20`)
    return await result.json()
  },
  getPokemonById: async pokemonId => {
    let result = await fetch(`${BASE_URL}/${pokemonId}`)
    return await result.json()
  }
}
