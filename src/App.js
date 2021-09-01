import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import GameTable from './GameTable/GameTable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Switch
          location={location}
          key={location.pathname}
        >
          <Route path="/game" component={GameTable}/>
          <Route path='' exact component={Homepage} />
        </Switch>
    </AnimatePresence>
  );
}

export default App;
