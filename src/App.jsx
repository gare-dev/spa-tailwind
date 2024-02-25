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
        const td0Bt = document.getElementById('td0Bt');

        const td1Bt = document.getElementById('td1Bt');


        td1.setAttribute('hidden', true);
        td2.setAttribute('hidden', true);
        td3.setAttribute('hidden', true);

        td0Bt.classList.add('rounded-xl');

        [td0Bt].forEach((item) => {

            item.classList.remove('bg-transparent');
            item.classList.remove('text-transparent');
            item.classList.add('hover:bg-slate-300');
            item.classList.remove('cursor-default');

        });



    };

    openTable = () => {
        const td1 = document.getElementById('td1');
        const td2 = document.getElementById('td2');
        const td3 = document.getElementById('td3');
        const td0Bt = document.getElementById('td0Bt');

        const td1Bt = document.getElementById('td1Bt')

        td1.removeAttribute('hidden');
        td2.removeAttribute('hidden');
        td3.removeAttribute('hidden');


        [td0Bt].forEach((item) => {


        item.classList.remove('rounded-xl');
        item.classList.add('bg-transparent');
        item.classList.add('text-transparent');
        item.classList.remove('hover:bg-slate-300');
        item.classList.add('cursor-default');
        
        });


        


        
    };

    handleMenuButtonClick = () => {

        const td1 = document.getElementById('td1');



        if (td1.hasAttribute('hidden')) {
            // Se estiver fechado, abre
            this.openTable();
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
                                        <button id="td0Bt" className=" bg-white py-1 px-4 h-10 w-full rounded-xl focus:outline-none hover:bg-slate-300" onClick={this.handleMenuButtonClick}>Menu</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td id="td1" hidden className="p-0">
                                        <button id="" className=" bg-white py-1 px-4 h-10 focus:outline-none w-full rounded-tl-md rounded-tr-md hover:bg-slate-300"> <NavLink to="/config">Configurações</NavLink></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="td2" hidden className="p-0">
                                        <NavLink to="/login">
                                            <button className=" bg-white py-1 px-4 h-10 focus:outline-none w-full hover:bg-slate-300">Entrar</button>
                                        </NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="td3" hidden className="p-0">
                                        <NavLink to="/signup">
                                            <button id="btSignup" className=" bg-white py-1 px-4 h-10 rounded-bl-md rounded-br-md focus:outline-none w-full hover:bg-slate-300 ">Registrar-se</button>
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
