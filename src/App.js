import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard'
import AddAuthor from './views/AddAuthor'
import Edit from './views/Edit'

function App() {
  return (
    <div>
      <h1>Favorite authors</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          
          <Route exact path="/new">
            <AddAuthor />
          </Route>

          <Route exact path="/edit/:id">
            <Edit />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;