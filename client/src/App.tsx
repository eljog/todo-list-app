import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Container, Grid } from '@mui/material';
import TodoLists from './components/TodoLists';
import TodoAppBar from './components/AppBar';
import { getApiClient } from './api';
import { TodoItem } from '@todo-app/common';

function App() {
  const [todos, setTodos] = React.useState<TodoItem[]>([])
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const apis = getApiClient()
    fetchAllTodos()

    async function fetchAllTodos() {
      try {
        const data = await apis.fetchAll()
        setTodos(data)
      } catch (e) {
        if (typeof e === 'string') {
          setError(e)
        }
      }
    }
  }, [])

  const create = useCallback(async (title: string) => {
    const apis = getApiClient()
    try {
      const data = await apis.create(title)
      setTodos(todos => [...todos, data])
    } catch (e) {
      if (typeof e === 'string') {
        setError(e)
      }
    }
  }, [todos])

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Container>
        <TodoAppBar create={create} />
        <Grid>
          {error && <Alert severity="error">This is an error Alert.</Alert>}
          <TodoLists todos={todos} />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
