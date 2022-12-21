import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'


const DashFooter = () => {

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleHomeClick = () => navigate('/dash');

  let goHomeButton = null;

  if (pathname !== '/dash') {
    goHomeButton = (
        <button className="dash-footer__home-button" title="Home" onClick={handleHomeClick}>
            <FontAwesomeIcon icon={faHouse} />
        </button>
    )
    }

  const content = (
    <footer className="dash-footer">
        {goHomeButton}
        <p>Current User:</p>
        <p>Status:</p>
    </footer>
  )
  return (
    <div>DashFooter</div>
  )
}

export default DashFooter