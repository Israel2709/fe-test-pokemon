import PokeTable from '../../Components/PokeTable'
import useDbData from '../../hooks/useDbData'
const Home = () => {
  const data = useDbData()
  return (
    <div className='row'>
      <div className='col-12 col-md-8'>
        <PokeTable />
      </div>
      <div className='col-12 col-md-4'>
        <img
          className='w-100'
          src={
            data.selectedPokemon
              ? data.selectedPokemon.sprites.front_default
              : 'http://www.deculture.es/wp-content/uploads/2015/07/pokemon.png'
          }
          alt=''
        />
      </div>
    </div>
  )
}

export default Home
