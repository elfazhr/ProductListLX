import React from "react";
import ButtonKomponen from "../components/Element/Button/Index";
class BindingEventClass extends React.Component {
    constructor(){
        super();
        this.state= {
            count:0,
        }
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement(){
        this.setState({count: this.state.count + 1})
    }
    render(){
        return(
            <div className="flex justify-center items-center min-h-screen flex-col">
                <h3 className="text-3xl font-bold">Count value is: {this.state.count}</h3>
                <ButtonKomponen classname="bg-slate-800 my-5" onClick={this.handleIncrement}>Increment</ButtonKomponen>
            </div>
        )
    }
}

export default BindingEventClass;