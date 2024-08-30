import React from "react";
import ButtonKomponen from "../components/Element/Button/Index";

class EventReactClass extends React.Component {
    handleClick(){
        console.log('Class Based Event Handling')
    } 
    render() {
        return(
            <div className="flex justify-center items-center min-h-screen flex-col">
                <h3 className="text-xl font-bold">This is Based Class Component</h3>
                <ButtonKomponen classname="bg-red-500 my-4" onClick={this.handleClick}>Click Me</ButtonKomponen>
            </div>
        )
    }
}

export default EventReactClass;