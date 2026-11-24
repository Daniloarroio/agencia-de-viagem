function Card({ destino, pais, descricao, preco, imagem, etiqueta }) {
  return (
    <article className="destination-card">
      <div className="destination-image" style={{ backgroundImage: `url("${imagem}")` }} role="img" aria-label={`Paisagem de ${destino}`}>
        {etiqueta && <span className="destination-tag">{etiqueta}</span>}
        <span className="image-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="destination-info">
        <div className="destination-location"><h3>{destino}</h3><span>{pais}</span></div>
        <p>{descricao}</p>
        <div className="destination-bottom"><span>A partir de <strong>{preco}</strong><small> / pessoa</small></span><a href="#contato" aria-label={`Ver detalhes de ${destino}`}>Ver detalhes <span aria-hidden="true">→</span></a></div>
      </div>
    </article>
  )
}

export default Card
