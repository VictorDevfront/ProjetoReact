import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'


function App() {
  return (
    <Router>
      <div>
    <Link to="/">Home</Link>
    <Link to="/contact">Contato</Link>
    <Link to="/company">Empresa</Link>
    <Link to="/newproject">Novo projeto</Link>   
      </div>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/company">
      <Home />
    </Route>
    <Route exact path="/contact">
      <Home />
    </Route>
    <Route exact path="/newproject">
      <NewProject />
    </Route>
    <p>Footer</p>
    </Router>
  )
}

export default App