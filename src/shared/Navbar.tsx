import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Loby</Link>
          </li>
          <li>
            <Link to='/history'>History</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const StayledNavbar = styled(Navbar)`
  height: 50px;
`;

export default StayledNavbar;
