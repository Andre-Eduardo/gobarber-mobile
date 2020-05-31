import React from 'react';
import {useSelector} from 'react-redux';
// import { Container } from './styles';
import Routes from './routes';

const App = () => {
  const signed = useSelector((state) => state.auth.signed);
  //const Routes = CreateRouter(signed);

  return <Routes isSigned={signed} />;
};

export default App;
