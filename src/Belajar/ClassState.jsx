import React from "react";
class ClassState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen gap-3">
                <p className="text-md font-semibold">State Class Komponen</p>
                <p className=" text-3xl font-bold">Nilai Count: {this.state.count}</p>
                <button className="py-2 px-6 bg-blue-600 rounded-md font-bold text-lg  text-white hover:bg-blue-400" onClick={this.incrementCount}>Tambah</button>
            </div>
        )
    }
}
export default ClassState