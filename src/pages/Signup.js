import React, { Component } from "react";
import style from "../style.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Login from "./Login";

class Signup extends Component {

  verify = () => {
    let passwordValue = document.getElementById("password").value;
    let usernameValue = document.getElementById("user").value;
    let emailValue = document.getElementById("email").value;

    let login = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
    }

    console.log(login);

  }




  componentDidMount() {
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let button = document.getElementById("sendButton");
    let name = document.getElementById("user");


    button.addEventListener("click", this.verify);

    [password, email, name].forEach((item) => {
      item.addEventListener("input", () => {
        if (password.value.length > 0 && email.value.length > 0 && name.value.length > 0) {
          button.removeAttribute("disabled");
        } else {
          button.setAttribute("disabled", true);
        }
      });
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
                    Nome:
                  </span>
                  <input
                    autoComplete="true"
                    required
                    id="user"
                    type="text"
                    className="placeholder-black focus:border-white  mt-1 w-64 px-3 py-2 bg-transparent text-sm outline-none border-b-2 border-gray-500 border-solid transition ease-linear focus:-translate-y-1"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-medium text-slate-900">
                    Email:
                  </span>
                  <input
                    autoComplete="true"
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
                    autoComplete="true"
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
                Já tem uma conta?{" "}
                <NavLink
                  className="text-blue-100 hover:text-blue-500"
                  to="/login"
                >
                  Entrar.
                </NavLink>
              </h5>
            </div>
          </form>
        </div>

        <Routes>
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </div>
    );
  }
}

export default Signup;
