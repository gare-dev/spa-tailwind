import React, { Component } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import style from "../style.css";








class Login extends Component {

    componentDidMount() {

        const user = document.getElementById("user");
        const button = document.getElementById("sendButton");

        user.addEventListener("input", () => {
         
            if (user.value.length > 0) {
               
                button.removeAttribute('disabled');
            } else {
      
                button.setAttribute('disabled', true);
            }
        });
    }
    render() {


        return (



            <div className="">

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>



                <div className="flex bg-transparent bg-opacity-10 border mx-auto max-w-sm rounded-xl py-10 flex-col">


                    <form className="flex flex-col mx-auto space-y-10">

                        <div className="">
                            <div className="flex flex-col space-y-5">
                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Nome:</span>
                                    <input
                                        required
                                        id="user"
                                        type="text"
                                        className="placeholder-black focus:border-white  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1" />
                                </label>

                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Email:</span>
                                    <input
                                        required
                                        id="email"
                                        type="email"
                                        className="placeholder-black focus:border-white  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1" />
                                </label>

                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-700">Senha:</span>
                                    <input
                                        required
                                        id="password"
                                        type="password"
                                        className="placeholder-black focus:border-white placeholder-opacity-  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-600 border-solid transition ease-linear focus:-translate-y-1 " />

                                </label>


                            </div>
                        </div>

                        <div className="flex flex-col space-y-5">

                            <button
                                id="sendButton"
                                disabled
                                className="bg-white shadow-xl mx-auto rounded-xl h-12 w-24 trans">Entrar</button>

                            <h5 className="mx-auto">Não tem uma conta? <NavLink className="text-blue-700 hover:text-blue-500" to="/signup">Registre-se.</NavLink></h5>


                        </div>
                    </form>




                </div>


                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>

            </div>




        );
    }
}

export default Login;