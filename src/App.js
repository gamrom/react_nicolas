import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Nav from './routes/Nav';
import Detail from './routes/Detail';

function App() {
 return(
  <HashRouter>
   <Nav />
   <Route path="/" exact={true} component={Home} />
   <Route path="/about" component={About} />
   <Route path="/movie-detail" component={Detail} />
  </HashRouter>
 );
}

export default App;