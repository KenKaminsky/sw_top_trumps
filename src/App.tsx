import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { client } from './apollo_client/client';
import Layout from './shared/Layout';

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

interface IHistory {
  id: string;
  suit: 'starships' | 'people';
  winner: number;
  date: Date;
}
interface IHistoryContext {
  history: IHistory[];
  setHistory: React.Dispatch<React.SetStateAction<IHistory[]>>;
}

export const HistoryContext = React.createContext<IHistoryContext>({
  history: [],
  setHistory: () => void 0,
});

const App: React.FC = () => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const value = { history, setHistory };

  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <HistoryContext.Provider value={value}>
          <Layout />
        </HistoryContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
