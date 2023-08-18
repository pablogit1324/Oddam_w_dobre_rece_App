import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './scss/main.scss';
import Home from './Components/Home';
import Form from './Components/Form';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step2Opened from './Components/Step2Opened';
import Step3 from './Components/Step3';
import Step3Opened from './Components/Step3Opened';
import Step4 from './Components/Step4';
import Summary from './Components/Summary';
import ThankYou from './Components/ThankYou';
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout';
import NotFound from './Components/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/oddaj-rzeczy" element={<Form/>}/>
                <Route path="/step1" element={<Step1/>}/>
                <Route path="/step2" element={<Step2/>}/>
                <Route path="/step2-opened" element={<Step2Opened/>}/>
                <Route path="/step3" element={<Step3/>}/>
                <Route path="/step3-opened" element={<Step3Opened/>}/>
                <Route path="/step4" element={<Step4/>}/>
                <Route path="/summary" element={<Summary/>}/>
                <Route path="/thank-you" element={<ThankYou/>}/>


                <Route path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Register/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;

