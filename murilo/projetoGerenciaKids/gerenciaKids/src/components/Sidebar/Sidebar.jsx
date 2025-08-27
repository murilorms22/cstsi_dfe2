import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faBell, faEnvelope, faCalendar, faGear } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Importe o arquivo CSS aqui

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* Logo */}
        GerenciaKids
      </div>

      {/* Menu */}
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Alunos</span>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faBell} />
            <span>Avisos</span>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Mensagens</span>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faCalendar} />
            <span>Agenda</span>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faGear} />
            <span>Configurações</span>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;