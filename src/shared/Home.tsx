import React from 'react';
import { Link } from 'react-router-dom';

export const HOME_MESSAGE = 'STAR WARS';

const Home: React.FC = () => {
  return <Link to={'/'}>{HOME_MESSAGE}</Link>;
};

export default Home;
