import React, { Component } from "react";

class Config extends Component {

    componentDidMount() {

        const bt1 = document.getElementById('bt1');
        const bt2 = document.getElementById('bt2');
        const bt3 = document.getElementById('bt3');

        const list1 = document.getElementById('list1');

        const list = document.getElementById('list');

        let isClicked = false;



        [list].forEach(item => {
            item.addEventListener("click", () => {

                if (item.click && isClicked === false) {

                    bt1.removeAttribute('hidden');
                    bt2.removeAttribute('hidden');
                    bt3.removeAttribute('hidden');
                    
                    isClicked = true;
                }
                else if (item.click && isClicked === true) {
                    bt1.setAttribute('hidden', true);
                    bt2.setAttribute('hidden', true);
                    bt3.setAttribute('hidden', true);

                    isClicked = false

                }

            }

            )
        });

        /*     [list1].forEach(item3 => {
                 item3.addEventListener("", () => {
        
                     bt1.setAttribute('hidden', true);
                     bt2.setAttribute('hidden', true);
                     bt3.setAttribute('hidden', true);
        
                 })
             });
        
        */


    }

    render() {

        return (
            <div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div id="" className="">
                    <table id="list1">
                        <tbody>
                            <tr>
                                <td className="p-0" id="list">
                                    <button className=" border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300">O</button>
                                </td>
                            </tr>

                            <tr>
                                <td className="p-0" hidden id="bt1">
                                    <button id="signup" className={` bg-white py-1 p-0 px-4 hover:bg-slate-300`}>Botao 1</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-0" hidden id="bt2">
                                    <button id="login" className={` bg-white py-1 px-4 hover:bg-slate-300`}>Botao 2</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-0" hidden id="bt3">
                                    <button id="config" className={` bg-white py-1 px-4 hover:bg-slate-300`}>Botao 3</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Config;
