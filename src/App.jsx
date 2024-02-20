import React, { Component } from "react";
import logoImg from './img/logoHeader.png';
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import style from "./style.css";
import Config from "./pages/Config";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <header className="bg-gray-700 h-24 flex items-center justify-between">
                    <div>
                        <NavLink to=""> <img src={logoImg} className="h-24 w-56 p-0" alt="Logo" /></NavLink>
                    </div>
                    
                    <div>

                        <button className="rounded-xl border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300"> <NavLink to="/config">Configurações</NavLink></button>

                    </div>

                    <div className="flex items-center space-x-4 pr-16">
                        <NavLink to="/login">
                            <button className="rounded-xl border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300">Entrar</button>
                        </NavLink>
                        <NavLink to="/signup">
                            <button className="rounded-xl  border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300 ">Registrar-se</button>
                        </NavLink>
                    

                    </div>


                </header>

                
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/config" element={<Config />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default App;
