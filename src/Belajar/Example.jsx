import React from "react";
class ExampleClass extends React.Component {
    // handleClick = (nama) => {
    //     console.log("Button ini diklik oleh : " + nama)
    // }

    // handleClick(nama){
    //     console.log("Halooo " + nama);
    // }

    handleClick(){
        console.log("Button Clicked")
    }

    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        return(
            <div className="flex justify-center items-center min-h-screen flex-col">
                <button className="p-2 text-white bg-black font-bold text-2xl rounded-md hover:bg-gray-300 hover:text-black"
                onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default ExampleClass;