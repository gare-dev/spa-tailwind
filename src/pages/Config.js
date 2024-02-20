import React, { Component } from "react";

class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= 768,
            showButtons: false 
        };
        this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
        this.toggleButtonsVisibility = this.toggleButtonsVisibility.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.toggleMenuVisibility);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.toggleMenuVisibility);
    }

    toggleMenuVisibility() {
        this.setState({ isMobile: window.innerWidth <= 768 });
    }

    toggleButtonsVisibility() {
        this.setState(prevState => ({
            showButtons: !prevState.showButtons
        }));
    }

    render() {
        const { isMobile, showButtons } = this.state;

        return (
            <div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div id="" className="">
                    <table>
                        <tbody>
                            <tr>
                                <td id="list">
                                    <button onClick={this.toggleButtonsVisibility} className="rounded-xl border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300">O</button>
                                </td>
                            </tr>
                            {showButtons && (
                                <>
                                    <tr>
                                        <td id="bt1">
                                            <button className={`rounded-xl border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300`}>Botao 1</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="bt2">
                                            <button className={`rounded-xl border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300`}>Botao 2</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="bt3">
                                            <button className={`rounded-xl border bg-white py-1 px-4 focus:outline-none hover:bg-slate-300`}>Botao 3</button>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Config;
