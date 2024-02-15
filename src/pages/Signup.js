import React, { Component } from "react";
import gut from "../img/gut.jpg";
import style from "../style.css";

class Signup extends Component {
  render() {
    return (
        <div id="container">
      <div className="py-3 px-8 max-w-sm mx-auto bg-blue-400 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          src={gut}
          alt=""
          class="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
        />

        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-1">
            <p className="text-lg text-black font-semibold">Gutemberg</p>
            <p className="text-slate-500 font-medium">Jogador profissional</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Contratar
          </button>
        </div>
      </div>


      


</div>
    );
  }
}

export default Signup;
