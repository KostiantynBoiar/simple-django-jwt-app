import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
            <PrivateRoutes component={Home} path='/' exact/>
            <Route component={Login} path='/login'/>
      </Router>
    </div>
  );
}

export default App;
