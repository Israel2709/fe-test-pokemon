import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import PokemonContext from './context/pokemonContext'
import pokemonApi from './api/pokemon'

function App () {
  const [pokemonList, setPokemonList] = useState()
  const [selectedPokemon, setSelectedPokemon] = useState()

  useEffect(() => {
    async function getAllPokemon () {
      const response = await pokemonApi.getAllPokemon()
      setPokemonList(response)
    }
    getAllPokemon()
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        selectedPokemon,
        setSelectedPokemon
      }}
    >
      <div className='App'>
        <div className='d-flex'>
          <Link to='/'>Home</Link>
          <Link to='/detail'>Detail</Link>
        </div>
        <div className='container'>
          <div className='row'>
            {pokemonList && (
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='detail/:id' element={<Detail />} />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </PokemonContext.Provider>
  )
}

export default App
