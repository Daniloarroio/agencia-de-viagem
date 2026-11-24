import React from 'react'
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <span className="eyebrow hero-eyebrow"><span /> VIAJE PARA SENTIR</span>
        <h1>Sua próxima<br />aventura <em>começa aqui.</em></h1>
        <p>O mundo é grande demais para ficar só na vontade.<br className="desktop-break" /> A gente cuida dos detalhes, você coleciona histórias.</p>
        <a className="button button-primary" href="#destinos">Explore nossos destinos <span aria-hidden="true">↗</span></a>
        <div className="hero-note"><span className="note-line" /> Viagens feitas para você, do seu jeito</div>
      </div>
      <div className="hero-index"><span>01</span> / 06</div>
      <a className="scroll-cue" href="#destinos" aria-label="Desça para ver destinos">↓</a>
    </section>
  )
}

export default Hero
