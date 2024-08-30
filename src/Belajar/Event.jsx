import React from "react";
import ButtonKomponen from "../components/Element/Button/Index";
class EventClassPractice extends React.Component {
    constructor() {
        super();
        this.state={
            nama: 'StudentX'
        }
    }

    greeting(e){
        this.setState({nama : e.target.value})
    }
    handleParameter(name) {
        alert("Helloo, " + name)
    }

    changeMsg(e) {
        e.target.innerHTML = 'LearningX'
    }

    changeMsgAgain(e) {
        e.target.innerHTML = 'Click Me'
    }

    

    render() {
        return (
            <div className="flex justify-center items-center min-h-screen flex-col">
                <ButtonKomponen classname="bg-blue-500" onClick={this.handleParameter.bind(this, 'StudentX')}>Click Me</ButtonKomponen>
                <button className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white" onMouseEnter={(e) => this.changeMsg(e)} onMouseOut={(e) => this.changeMsgAgain(e)}>Click Me</button>
                <div className="w-full max-w-sm flex flex-col">
                    <h1 className="text-3xl font-bold my-5 text-blue-700">Selamat Datang, {this.state.nama}</h1>
                    <input type="text" className="text-sm border rounded-md w-full py-2 px-2 text-slate-700 placeholder: opacity-50"
                    placeholder="Masukkan Nama"
                    name="name"
                    onChange={(e) => this.greeting(e)}/>
                </div>
            </div>
        )
    }
}

export default EventClassPractice;