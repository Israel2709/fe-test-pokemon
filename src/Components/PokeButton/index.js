const PokeButton = props => {
  const { name, handlers } = props

  return (
    <div className='col'>
      <div
        className='p-3 border rounded bg-dark text-white pointer'
        onClick={handlers.singleClick}
        onDoubleClick={handlers.doubleClick}
        data-name={name}
      >
        {name}
      </div>
    </div>
  )
}
export default PokeButton
