import React, { Component } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import style from "../style.css";

class Login extends Component {
    componentDidMount() {
        const password = document.getElementById("password");
        const email = document.getElementById("email");
        const button = document.getElementById("sendButton");


        [password, email].forEach(item => {
            item.addEventListener('input', () => {

                if (password.value.length > 0 && email.value.length > 0) {

                    button.removeAttribute('disabled');
                } else {

                    button.setAttribute('disabled', true);
                }

            }

            )
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

                <div className="flex bg-transparent  backdrop-blur-md border mx-auto max-w-sm rounded-xl py-10 flex-col">
                    <form id="form" className="flex flex-col mx-auto space-y-10">
                        <div className="">
                            <div className="flex flex-col space-y-5">


                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-900">
                                        Email:
                                    </span>
                                    <input
                                        required
                                        id="email"
                                        type="email"
                                        className="placeholder-black focus:border-white  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-500 border-solid transition ease-linear focus:-translate-y-1"
                                    />
                                </label>

                                <label className="block">
                                    <span className="block text-sm font-medium text-slate-900">
                                        Senha:
                                    </span>
                                    <input
                                        required
                                        id="password"
                                        type="password"
                                        className="placeholder-black focus:border-white mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-500 border-solid transition ease-linear focus:-translate-y-1"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-5">
                            <button
                                id="sendButton"
                                disabled
                                className="bg-white shadow-xl mx-auto rounded-xl h-12 w-24 trans"
                            >
                                Entrar
                            </button>

                            <h5 className="mx-auto text-slate-900">
                                Não tem uma conta?{" "}
                                <NavLink
                                    className="text-blue-100 hover:text-blue-500"
                                    to="/signup"
                                >
                                    Registre-se.
                                </NavLink>
                            </h5>
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
