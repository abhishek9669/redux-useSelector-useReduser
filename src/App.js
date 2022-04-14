import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { changeNametoAbhishek, changeNametoAbhishek2, changeNametoAbhishek3 } from './Actioncreate/Action';
import App2 from './App2';

function App(props) {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{props.mydata.name}</h1>
        <button onClick={()=>{props.chane1()}}>chang1</button>
        <button onClick={()=>{props.chane2()}}>chang2</button>
        <button onClick={()=>{props.chane3()}}>chang3</button>
      </header>
      <App2 />
    </div>
   
  );
}
let mapstateToProps = (state) => {
  return {
    mydata:state
  }

}
let mapdispatchToProps =(dispatch) => {
  return {
    chane1:()=>{dispatch(changeNametoAbhishek())},
    chane2:()=>{dispatch(changeNametoAbhishek2())},
    chane3:()=>{dispatch(changeNametoAbhishek3())}

  }
}

export default connect(mapstateToProps, mapdispatchToProps) (App);
