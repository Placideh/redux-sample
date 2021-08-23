import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
function App() {
  const state=useSelector((state)=>state);
  const dispatch=useDispatch();
  const {depositAction,withdrawAction}=bindActionCreators(actionCreators,dispatch);
  // console.log(AC);
  // console.log(state.account);
  return (
    <div className="App">
      <header className="App-header">
        <label>{state.account}</label>
        <button onClick={()=>depositAction(1000)}>Deposit</button>
        <button onClick={()=>withdrawAction(1000)}>Withdraw</button>
      </header>
    </div>
  );
}

export default App;
