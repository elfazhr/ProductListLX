import React from "react"
import Label from "./components/Element/Input/Label"
import Input from "./components/Element/Input/Input"
import InputForm from "./components/Element/Input"
import ButtonKomponen from "./components/Element/Button/Index"
import FormLogin from "./components/Fragments/FormLogin"
import FormRegister from "./components/Fragments/FormRegister"
import AuthLayouts from "./components/Layouts/AuthLayouts"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"

class Button extends React.Component {
  render() {
    return (
      <button style={{ 'backgroundColor': 'black', 'color': 'white' }}>Halo StudentX</button>
    )
  }
}

function ButtonBlue() {
  return <button style={{ 'backgroundColor': 'blue', 'color': 'white' }}>This Button is Blue</button>
}

const ButtonRed = () => {
  return <button style={{ 'backgroundColor': 'red', 'color': 'white' }}>This Button is Red</button>
}

const ButtonFunction = (props) => {
  return (
    <button style={{ 'backgroundColor': props.bgColor, 'color': 'white' }}>This Button</button>
  )
}

class ParagraphClass extends React.Component {
  render() {
    return (
      <p>{this.props.teks}</p>
    )
  }
}

const ParagraphFunction = (props) => {
  return (
    <p>{props.teks}</p>
  )
}

const Card = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        {props.children}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* <p>Latihan Class Komponen:</p>
      <ButtonFunction bgColor="black" />
      <ButtonFunction bgColor="black" />
      <ButtonFunction bgColor="black" />

      <p>Latihan Function Komponen:</p>
      <ButtonFunction bgColor="blue" />

      <p>Latihan Function Komponen dengan Arrow Function:</p>
      <ButtonFunction bgColor="red" />

      <ParagraphClass teks="Latihan Props Pada Class Komponen" />
      <ParagraphFunction teks="Latihan Props Pada Function Komponen" />

      <Card title="Latihan Children Props">
        <h1>Hallo Ini Penerapan dari Children Props</h1>
      </Card>

      <Card title="Latihan Children Props Button">
        <ButtonFunction bgColor="green" />
      </Card>

      <p className="text-3xl font-bold underline">
        Hello world!
      </p> */}

      {/* <Label htmlFor="Email">
        <p className="text-green-300">Email Ini</p>
      </Label>

      <Input type="email" placeholder="example@gmail.com" name="email" id="email"/>
      <Input type="password" placeholder="****" name="password" id="password"/> */}

      {/* <LoginPage/> */}
      <RegisterPage/>
    </div>
  )
}

export default App
