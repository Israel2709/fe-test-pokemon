import useDbData from '../../hooks/useDbData'
import { useNavigate } from 'react-router-dom'
const Detail = () => {
  const { selectedPokemon } = useDbData()
  const { abilities, height, id, name, types, sprites } = selectedPokemon
  const navigate = useNavigate()
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card mb-3'>
          <div className='row g-0'>
            <div className='col-md-4 d-flex align-items-center justify-content-center'>
              <img src={sprites.front_default} className='w-100' alt='...' />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title text-capitalize'>{name}</h5>
                <ul className='list-group mb-3'>
                  <li className='list-group-item'>ID: {id}</li>
                  <li className='list-group-item'>Altura: {height}</li>
                  <li className='list-group-item'>
                    Habilidades:{' '}
                    {abilities.map(ability => (
                      <span className='badge bg-success me-3 text-capitalize'>
                        {ability.ability.name}
                      </span>
                    ))}
                  </li>
                  <li className='list-group-item'>
                    Tipo(s):{' '}
                    {types.map(type => (
                      <span className='badge bg-success me-3 text-capitalize'>
                        {type.type.name}
                      </span>
                    ))}
                  </li>
                </ul>
                <button
                  className='btn btn-primary d-inline-block'
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
