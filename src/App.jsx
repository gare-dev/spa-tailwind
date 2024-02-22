import React, { Component } from "react";
import logoImg from './img/logoHeader.png';
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import style from "./style.css";
import Config from "./pages/Config";


class App extends Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.tableRef.current && !this.tableRef.current.contains(event.target)) {
            // Clicou fora da tabela, então fecha
            this.closeTable();
        }
    };

    closeTable = () => {
        const td1 = document.getElementById('td1');
        const td2 = document.getElementById('td2');
        const td3 = document.getElementById('td3');
        const listBt = document.getElementById('buttonBg');


        td1.setAttribute('hidden', true);
        td2.setAttribute('hidden', true);
        td3.setAttribute('hidden', true);

    };

    handleMenuButtonClick = () => {
        const td1 = document.getElementById('td1');
        const td2 = document.getElementById('td2');
        const td3 = document.getElementById('td3');
        const td0 = document.getElementById('td0');

        const listBt = document.getElementById('buttonBg');

        const header = document.getElementById('headerPlace');

        if (td1.hasAttribute('hidden')) {
            // Se estiver fechado, abre
            td1.removeAttribute('hidden');
            td2.removeAttribute('hidden');
            td3.removeAttribute('hidden');

        } else {
            // Se estiver aberto, fecha
            this.closeTable();
        }
    };

    render() {
        return (
            <HashRouter>
                <header id="headerPlace" className="bg-gray-700 h-24 flex justify-between pr-10">
                    <div>
                        <NavLink to=""> <img src={logoImg} className="h-24 w-56 p-0" alt="Logo" /></NavLink>
                    </div>

                    <div ref={this.tableRef} className="flex">
                        <table id="tableList" className="">
                            <tbody className="rounded-xl">

                             

                                <tr>
                                    <td id="td0" className="p-0">
                                        <button id="" className=" bg-white h-10 w-full focus:outline-none hover:bg-slate-300" onClick={this.handleMenuButtonClick}>Menu</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td id="td1" hidden className="p-0">
                                        <button className=" bg-white py-1 px-4 focus:outline-none w-full hover:bg-slate-300"> <NavLink to="/config">Configurações</NavLink></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="td2" hidden className="p-0">
                                        <NavLink to="/login">
                                            <button className=" bg-white py-1 px-4 focus:outline-none w-full hover:bg-slate-300">Entrar</button>
                                        </NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="td3" hidden className="p-0">
                                        <NavLink to="/signup">
                                            <button id="btSignup" className=" bg-white py-1 px-4 focus:outline-none w-full hover:bg-slate-300 ">Registrar-se</button>
                                        </NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </header>

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/config" element={<Config />} />
                </Routes>
            </HashRouter >
        );
    }
}

export default App;
