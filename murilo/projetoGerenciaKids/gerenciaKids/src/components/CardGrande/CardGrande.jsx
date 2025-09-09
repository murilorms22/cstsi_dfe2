import React from 'react'
import '../Dashboard/Dashboard.css'
import CardAtividades from '../CardAtividades/CardAtividades'

function CardGrande({ titulo, icone }) {
  return (
    <div className="cartao">
            <h2>{titulo}</h2>
            <ul className="lista-atividades">
              <CardAtividades titulo="Reunião com pais" horario="15h" numeroSala={3} icone={faCalendarDay} />
              <CardAtividades titulo="Dia do brinquedo" horario="16h" numeroSala={2} icone={faCalendarDay} />
            </ul>
          </div>
  )
}

export default CardGrande