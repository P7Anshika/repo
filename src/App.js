import React from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import FormComponent from './FormComponent';
import SuccessComponent from './SuccessComponent';

const App = () => {
    return (
        /*<BrowserRouter>*/
         /* <Switch>*/
          <Routes>
            <Route path="/" element={<FormComponent/>} />
            <Route path="/success" element={<SuccessComponent/>} />
            </Routes>
                
          /* </Switch> */
        /* </BrowserRouter> */
    );
};

export default App;
