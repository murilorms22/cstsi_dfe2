import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalendarDay, faUsers, faEnvelopeOpenText, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import dadosMockados from '../dadosMockados';
import BotaoLaranja from '../BotaoLaranja/BotaoLaranja';
import CardGrande from '../CardGrande/CardGrande';

const { professor, alunos, turma } = dadosMockados;

function Dashboard() {
  return (
    <div className="painel-container">
      <header className="painel-cabecalho">
        <div>
          <h1>Bem-vindo, Professor {professor.nome}!</h1>
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
          <CardGrande titulo="Atividades do dia" />
        </div>

        <div className="conteudo-direita">
          <div className="cartao">
            <h2>Ações Rápidas</h2>
            <div className="acoes-rapidas">
              <BotaoLaranja mensagem="Criar aviso" icone={faPlus} />
              <BotaoLaranja mensagem="Gerenciar Alunos" icone={faUsers} />
              <BotaoLaranja mensagem="Ler Mensagens" icone={faEnvelopeOpenText} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;