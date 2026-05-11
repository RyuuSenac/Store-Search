import './App.css'
import Icon from './assets/iconSearchStore.png'
import { useState } from "react"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Form from './components/Form'
import Cards from './components/Cards'



export default function App() {

  const [games, setGame] = useState([
    {
      id: 1,
      titulo: 'ASTRONEER',
      descricao: 'Interaja de modo inédito e tátil com mundos novos e estranhos...',
      img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/361420/1c44099d86c824a6fd1098a4215097878d68664e/header.jpg?t=1770767049',
      ref: 'https://store.steampowered.com/app/361420/ASTRONEER/'
    },
    {
      id: 2,
      titulo: 'Forza Horizon 5',
      descricao: 'Explore um mundo aberto vibrante nas terras mexicanas...',
      img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1746471508',
      ref: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/'
    },
    {
      id: 3,
      titulo: 'Elden Ring',
      descricao: 'RPG de ação desenvolvido pela FromSoftware...',
      img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1767883716',
      ref: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
    }
  ])

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [img, setImg] = useState("")
  const [ref, setRef] = useState("")
  const [showAlert, setShowAlert] = useState(false)

  const addGame = ({ titulo, img, ref, descricao }) => {
    const id = Math.floor(Math.random() * 100)
    const game = { id, titulo, img, ref, descricao }
    setGame(state => [...state, game])
  }

  const removeGame = (id) => {
    setGame(state => state.filter(game => game.id !== id))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (titulo && img && ref) {
      addGame({ titulo, img, ref, descricao })
      setTitulo("")
      setImg("")
      setRef("")
      setDescricao("")
    } else {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
    }
  }

  return (
    <div id="app">
      <header className='app__header' >
        {showAlert && (
  <div className="alert alert-dark" role="alert">
    Preencha todos os campos antes de adicionar!
    <button
      type="button"
      className="btn-close"
      onClick={() => setShowAlert(false)}
    />
  </div>
)}
        <div className="app__logo">
          <img src={Icon} alt="Ícone da loja" width={100} />
          <span>SearchStore</span>
        </div>
        <p className='app__subtitle'>Melhores Jogos</p>
      </header>

      <Form
        titulo={titulo}
        setTitulo={setTitulo}
        img={img}
        setImg={setImg}
        descricao={descricao}
        setDescricao={setDescricao}
        ref_={ref}
        setRef={setRef}
        handleSubmit={handleSubmit}
      />

      <Cards
        games={games}
        removeGame={removeGame}
      />
    </div>
    
    
  )
}
