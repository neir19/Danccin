import './styles/App.css';
import Login from './pages/Login'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={Login} />
        
      </Switch>
      
    </Router>
  );
}

export default App;
