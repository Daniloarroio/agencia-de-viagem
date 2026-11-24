
import React, { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

// Lista de destinos turísticos
const destinos = [
  {
    destino: 'Rio de Janeiro',
    pais: 'Brasil',
    descricao: 'Entre o mar, o samba e paisagens que tiram o fôlego.',
    preco: 'R$ 1.890',
    etiqueta: 'MAIS QUERIDO',
    imagem: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=85'
  },
  {
    destino: 'Fernando de Noronha',
    pais: 'Brasil',
    descricao: 'Um paraíso preservado para se reconectar com a natureza.',
    preco: 'R$ 3.450',
    imagem: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85'
  },
  {
    destino: 'Gramado',
    pais: 'Brasil',
    descricao: 'Charme europeu, fondue e aconchego na Serra Gaúcha.',
    preco: 'R$ 1.590',
    imagem: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85'
  },
  {
    destino: 'Paris',
    pais: 'França',
    descricao: 'Arte, bons cafés e passeios que parecem cena de filme.',
    preco: 'R$ 5.290',
    etiqueta: 'ROMÂNTICO',
    imagem: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85'
  },
  {
    destino: 'Maldivas',
    pais: 'Maldivas',
    descricao: 'Dias sem pressa em águas cristalinas e bangalôs sobre o mar.',
    preco: 'R$ 8.990',
    imagem: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85'
  },
  {
    destino: 'Orlando',
    pais: 'Estados Unidos',
    descricao: 'Diversão para todas as idades, do primeiro ao último parque.',
    preco: 'R$ 4.790',
    imagem: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85'
  }
]

// Lista de serviços
const servicos = [
  {
    icone: '✳',
    titulo: 'Pacotes de viagens',
    texto: 'Roteiros completos, pensados para combinar com o seu ritmo.'
  },
  {
    icone: '⌂',
    titulo: 'Reservas de hotéis',
    texto: 'Estadias escolhidas a dedo para você se sentir em casa.'
  },
  {
    icone: '✈',
    titulo: 'Passagens aéreas',
    texto: 'As melhores rotas e horários para sua viagem começar bem.'
  },
  {
    icone: '⌖',
    titulo: 'Passeios turísticos',
    texto: 'Experiências locais para conhecer cada destino de verdade.'
  }
]

// Lista de diferenciais
const diferenciais = [
  {
    numero: '01',
    titulo: 'Do seu jeito',
    texto: 'Cada roteiro começa ouvindo o que faz seus olhos brilharem.'
  },
  {
    numero: '02',
    titulo: 'Boas escolhas',
    texto: 'A gente pesquisa e compara para encontrar oportunidades reais.'
  },
  {
    numero: '03',
    titulo: 'Pode contar',
    texto: 'Acompanhamento próximo antes, durante e depois da viagem.'
  }
]

function App() {
  const [enviado, setEnviado] = useState(false)

  // Função para enviar o formulário
  function enviarFormulario(evento) {
    evento.preventDefault()

    setEnviado(true)

    evento.currentTarget.reset()
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* SEÇÃO DE DESTINOS */}
        <section className="destinations section-pad" id="destinos">
          <div className="container">

            <div className="section-heading heading-row">
              <div>
                <span className="eyebrow">
                  <span /> PARA ONDE VAMOS?
                </span>

                <h2>
                  Tem um mundo
                  <br />
                  inteiro <em>te esperando.</em>
                </h2>
              </div>

              <p>
                De um fim de semana perto de casa àquela viagem que você
                sonha há anos. O próximo capítulo é seu.
              </p>
            </div>

            <div className="destination-grid">
              {destinos.map((item) => (
                <Card
                  key={item.destino}
                  {...item}
                />
              ))}
            </div>

            <div className="section-footnote">
              <span>Não encontrou o seu lugar?</span>

              <a href="#contato">
                A gente monta uma viagem só sua
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>

          </div>
        </section>

        {/* SEÇÃO DE SERVIÇOS */}
        <section className="services section-pad" id="servicos">
          <div className="container">

            <div className="section-heading services-heading">
              <span className="eyebrow">
                <span /> TUDO NO SEU TEMPO
              </span>

              <h2>
                Viajar leve começa
                <br />
                com <em>um bom plano.</em>
              </h2>

              <p>
                Você escolhe o destino. A gente deixa cada detalhe no lugar.
              </p>
            </div>

            <div className="service-grid">
              {servicos.map((servico, index) => (
                <article className="service-card" key={servico.titulo}>
                  <span className="service-icon" aria-hidden="true">
                    {servico.icone}
                  </span>

                  <span className="service-number">
                    0{index + 1}
                  </span>

                  <h3>{servico.titulo}</h3>

                  <p>{servico.texto}</p>

                  <a
                    href="#contato"
                    aria-label={`Saiba mais sobre ${servico.titulo}`}
                  >
                    ↗
                  </a>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* SEÇÃO SOBRE */}
        <section className="about section-pad" id="sobre">
          <div className="container about-layout">

            <div className="about-visual">
              <div
                className="about-image"
                role="img"
                aria-label="Viajante contemplando uma paisagem montanhosa"
              />

              <div className="about-stamp">
                <span>
                  O mundo
                  <br />
                  é todo seu
                </span>

                <b>✳</b>
              </div>

              <div className="about-caption">
                Bergen, Noruega
                <span>60°23' N — 5°19' E</span>
              </div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">
                <span /> PRAZER, SOMOS A VIAMUNDO
              </span>

              <h2>
                Mais que destinos.
                <br />
                <em>Boas histórias.</em>
              </h2>

              <p>
                A ViaMundo nasceu de uma ideia simples: viajar muda a forma
                como a gente enxerga o mundo — e a nós mesmos.
              </p>

              <p>
                Por isso, cada viagem é feita com cuidado, escuta e aquele
                olhar de quem conhece o caminho. Do primeiro plano à volta
                pra casa, estamos com você.
              </p>

              <a className="text-link" href="#contato">
                Vamos planejar juntos?
                <span aria-hidden="true"> ↗</span>
              </a>

              <div className="about-signoff">
                <span className="sign-line" />
                <span>Com carinho, equipe ViaMundo</span>
              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO DE DIFERENCIAIS */}
        <section className="difference section-pad">
          <div className="container">

            <div className="difference-heading">
              <span className="eyebrow">
                <span /> O JEITO VIAMUNDO
              </span>

              <h2>
                Você vai. A gente
                <br />
                <em>vai junto.</em>
              </h2>
            </div>

            <div className="difference-grid">
              {diferenciais.map((item) => (
                <article className="difference-card" key={item.numero}>
                  <span>{item.numero}</span>

                  <h3>{item.titulo}</h3>

                  <p>{item.texto}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* SEÇÃO DE CONTATO */}
        <section className="contact section-pad" id="contato">
          <div className="container contact-layout">

            <div className="contact-copy">
              <span className="eyebrow">
                <span /> SUA PRÓXIMA HISTÓRIA
              </span>

              <h2>
                Vamos tirar
                <br />
                essa viagem
                <br />
                <em>do papel?</em>
              </h2>

              <p>
                Conta pra gente o que você está imaginando.
                A primeira conversa é por nossa conta.
              </p>

              <div className="contact-detail">
                <span className="contact-detail-icon">✉</span>

                <span>
                  <small>ESCREVA PRA GENTE</small>

                  <a href="mailto:oi@viamundoviagens.com.br">
                    oi@viamundoviagens.com.br
                  </a>
                </span>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">⌕</span>

                <span>
                  <small>LIGUE OU MANDE UMA MENSAGEM</small>

                  <a href="tel:+551140044025">
                    +55 11 4004-4025
                  </a>
                </span>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={enviarFormulario}
            >
              <div className="form-heading">
                <span>01 — 04</span>

                <h3>Comece por aqui</h3>

                <p>
                  Preencha os campos e a gente continua a conversa.
                </p>
              </div>

              <label>
                Seu nome

                <input
                  name="nome"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  required
                />
              </label>

              <label>
                Seu e-mail

                <input
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                  required
                />
              </label>

              <label>
                Destino dos sonhos

                <input
                  name="destino"
                  type="text"
                  placeholder="Pode ser só uma ideia..."
                  required
                />
              </label>

              <label>
                Conta um pouquinho mais

                <textarea
                  name="mensagem"
                  rows="3"
                  placeholder="Quando quer viajar? Quem vai com você?"
                  required
                />
              </label>

              <button className="button button-dark" type="submit">
                Enviar mensagem
                <span aria-hidden="true"> ↗</span>
              </button>

              {enviado && (
                <p className="form-success" role="status">
                  Obrigada! Sua mensagem foi recebida.
                  Vamos falar com você em breve.
                </p>
              )}

              <small className="form-privacy">
                Seus dados ficam só com a gente. Prometemos.
              </small>
            </form>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default App
