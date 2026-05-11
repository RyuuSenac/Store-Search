import './Form.css'

export default function Form({ titulo, setTitulo, img, setImg, descricao, setDescricao, ref_, setRef, handleSubmit }) {
  return (
    <div id="form">
      <form onSubmit={handleSubmit} className="form__container">

        <div className="form__group">
          <label htmlFor="title" className="form__label">
            <i className="bi bi-input-cursor-text"></i>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="form__input"
            placeholder='Titulo' style={{ textAlign: 'center' }}
            />
            
        </div>

        <div className="form__group">
          <label htmlFor="img" className="form__label">
            <i class="bi bi-images"></i>
          </label>
          <input
            type="text"
            name="img"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="form__input"
            placeholder='URL da Imagem' style={{ textAlign: 'center' }}
          />
        </div>

        <div className="form__group">
          <label htmlFor="descricao" className="form__label">
            <i class="bi bi-file-richtext"></i>
          </label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="form__input"
            placeholder='Descrição' style={{ textAlign: 'center' }}
          />
        </div>

        <div className="form__group">
          <label htmlFor="ref" className="form__label">
            <i class="bi bi-link-45deg"></i>
          </label>
          <input
            type="text"
            name="ref"
            id="ref"
            value={ref_}
            onChange={(e) => setRef(e.target.value)}
            className="form__input"
            placeholder='Link de Referência' style={{ textAlign: 'center' }}
          />
        </div>

        <button type="submit" className="form__button">Adicionar à biblioteca</button>
      </form>
    </div>
  )
}
