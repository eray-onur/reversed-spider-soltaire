import './App.css';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import GameTable from './GameTable/GameTable';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Switch
          location={location}
          key={location.pathname}
        >
          <Route path="/deck" component={GameTable}/>
          <Route path='' exact component={Homepage} />
        </Switch>
    </AnimatePresence>
  );
}

export default App;