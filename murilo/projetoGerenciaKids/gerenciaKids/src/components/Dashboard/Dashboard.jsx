import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalendarDay, faUsers, faEnvelopeOpenText, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="painel-container">
      <header className="painel-cabecalho">
        <div>
          <h1>Bem-vindo, Professor Murilo!</h1>
          <p>Painel de controle da turma 2025/1.</p>
        </div>
        <div>
          <button className="fazer-chamada">
            <FontAwesomeIcon icon={faPlus} />
            <span>Realizar chamada</span>
          </button>
        </div>
      </header>

      <section className="painel-resumo">
        <div className="cartao-resumo alunos">
          <h3>Alunos</h3>
          <p className="valor-resumo">22 / 25</p>
        </div>
        <div className="cartao-resumo notificacoes">
          <h3>Novos Avisos</h3>
          <p className="valor-resumo">3</p>
        </div>
        <div className="cartao-resumo mensagens">
          <h3>Mensagens</h3>
          <p className="valor-resumo">5 não lidas</p>
        </div>
      </section>

      <main className="conteudo-principal">
        <div className="conteudo-esquerda">
          <div className="cartao">
            <h2>Atividades do Dia</h2>
            <ul className="lista-atividades">
              <li className="item-atividade">
                <FontAwesomeIcon icon={faCalendarDay} />
                <div>
                  <p className="titulo-atividade">Reunião com pais</p>
                  <small className="acao-pequena">15:00h - Sala 3</small>
                </div>
              </li>
              <li className="item-atividade">
                <FontAwesomeIcon icon={faCalendarDay} />
                <div>
                  <p className="titulo-atividade">Dia do brinquedo</p>
                  <small className="acao-pequena">Durante o turno</small>
                </div>
              </li>
            </ul>
          </div>
          <div className="cartao">
            <h2>Aniversariantes da Semana</h2>
            <ul className="lista-aniversarios">
              <li className="item-aniversario">
                <FontAwesomeIcon icon={faBirthdayCake} />
                <span>Maria (29/08)</span>
              </li>
              <li className="item-aniversario">
                <FontAwesomeIcon icon={faBirthdayCake} />
                <span>Pedro (30/08)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="conteudo-direita">
          <div className="cartao">
            <h2>Ações Rápidas</h2>
            <div className="acoes-rapidas">
              <button className="botao-acao">
                <FontAwesomeIcon icon={faPlus} />
                <span>Criar Aviso</span>
              </button>
              <button className="botao-acao">
                <FontAwesomeIcon icon={faUsers} />
                <span>Gerenciar Alunos</span>
              </button>
              <button className="botao-acao">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                <span>Ler Mensagens</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;