import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import { Homepage, Lannisters, Starks, Targaryens, SecretMessage, OtherHouses } from './components'
 
const App = () => {
    const [lannisters, setLannisters] = useState([]); 
    return (
        <div>
            <h2>This is Game of Thrones Routing</h2>
            <Router>
                <div className="navbar" style={{"display": "flex", "flexDirection": "space-evenly"}}>
                    <Link style={{"padding": "5px"}} to="/">Homepage</Link>
                    <Link style={{"padding": "5px"}} to="/lannisters">Lannisters</Link>
                    <Link style={{"padding": "5px"}} to="/starks">Starks</Link>
                    <Link style={{"padding": "5px"}} to="/targaryens">Targaryens</Link>
                </div>

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/lannisters" element={<Lannisters testMessage={'hi guys'} lannisters={lannisters}/>} />
                    <Route path="/starks" element={<Starks />} />
                    <Route path="/targaryens" element={<Targaryens />} />
                    <Route path="/faceless-men" element={<SecretMessage />} />
                    <Route path="*" element={<OtherHouses />} />
                </Routes>
            </Router>
        </div>
    )
};

const appElement = document.getElementById('app');
const root = ReactDOM.createRoot(appElement);
root.render(<App />)