import './Cards.css'

export default function Cards({ games, removeGame }) {
  return (
    <div className="games">
      {games.map((game) => (
        <div key={game.id}>
          <a href={game.ref} className="card__title">
            {game.titulo}
          </a>
          <div className="card">
            <img src={game.img} alt={game.titulo} className="card__img" />
            <p className="card__description">{game.descricao}</p>
            <button onClick={() => removeGame(game.id)} className='card__remove' style={{ textAlign: 'center' }}>
              Remover
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
