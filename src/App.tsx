import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import { client } from './apollo_client/client';
import { GlobalStyles } from './GlobalStyle';
import Layout from './shared/Layout';

interface IHistory {
  id: string;
  compField: string;
  winner: number;
  winningValue: number;
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
      <GlobalStyles />
      <ApolloProvider client={client}>
        <HistoryContext.Provider value={value}>
          <Layout />
        </HistoryContext.Provider>
      </ApolloProvider>
    </div>
  );
};

export default App;
