import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useDbData from '../../hooks/useDbData'
import PokeButton from '../PokeButton'
import pokemonApi from '../../api/pokemon'

const PokeTable = () => {
  const data = useDbData()
  const navigate = useNavigate()
  const timer = useRef(null)
  const singleClick = event => {
    timer.current = setTimeout(async () => {
      const result = await pokemonApi.getPokemonById(event.target.dataset.name)
      data.setSelectedPokemon(result)
      clearTimeout(timer.current)
    }, 500)
  }
  const doubleClick = async event => {
    const result = await pokemonApi.getPokemonById(event.target.dataset.name)
    data.setSelectedPokemon(result)
    clearTimeout(timer.current)
    navigate(`/detail/${event.target.dataset.name}`)
  }
  const updateList = async url => {
    let result = await fetch(url)
    data.setPokemonList(await result.json())
  }

  return (
    <>
      <div className='row row-cols-1 row-cols-md-4 g-4 mb-3'>
        {data.pokemonList.results.map((pokemon, index) => {
          const { name } = pokemon
          return (
            <PokeButton
              key={index}
              name={name}
              handlers={{ singleClick, doubleClick }}
            />
          )
        })}
      </div>
      <div className='d-flex justify-content-between'>
        {
          <button
            className={`btn ${
              data.pokemonList.previous
                ? 'btn-primary'
                : 'btn-secondary disabled'
            }`}
            onClick={
              data.pokemonList.previous
                ? async () => {
                    updateList(data.pokemonList.previous)
                  }
                : () => false
            }
          >
            Anterior
          </button>
        }

        <button
          className='btn btn-primary'
          onClick={() => {
            updateList(data.pokemonList.next)
          }}
        >
          Siguiente
        </button>
      </div>
    </>
  )
}

export default PokeTable
