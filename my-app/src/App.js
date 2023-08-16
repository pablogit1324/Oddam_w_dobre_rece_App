import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './scss/main.scss';
import Home from './Components_JS/Home';
import Organizations from './Components_JS/Organizations';
import Local from './Components_JS/Local';
import LoggedIn from './Components_JS/LoggedIn';
import Form from './Components_JS/Form';
import Step1 from './Components_JS/Step1';
import Step2 from './Components_JS/Step2';
import Step2Opened from './Components_JS/Step2Opened';
import Step3 from './Components_JS/Step3';
import Step3Opened from './Components_JS/Step3Opened';
import Step4 from './Components_JS/Step4';
import Summary from './Components_JS/Summary';
import ThankYou from './Components_JS/ThankYou';
import Login from './Components_JS/Login';
import Register from './Components_JS/Register';
import Logout from './Components_JS/Logout';
import NotFound from './Components_JS/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Organizations/>}/>
                <Route path="/" element={<Local/>}/>
                <Route path="/" element={<LoggedIn/>}/>

                <Route path="/oddaj-rzeczy" element={<Form/>}/>
                <Route path="/step1" element={<Step1/>}/>
                <Route path="/step2" element={<Step2/>}/>
                <Route path="/step2-opened" element={<Step2Opened/>}/>
                <Route path="/step3" element={<Step3/>}/>
                <Route path="/step3-opened" element={<Step3Opened/>}/>
                <Route path="/step4" element={<Step4/>}/>
                <Route path="/summary" element={<Summary/>}/>
                <Route path="/thank-you" element={<ThankYou/>}/>


                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;

