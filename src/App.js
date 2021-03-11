
import './App.css';
import {Link} from './Chatbox';

function App() {

  return (
    <div className="App">
      <div className= "App-header">
        Shiorin
      </div>
      <div className="App-chatroom">
        {

          lines.map (x=>{
            return <div className= "App-chatroom-text">
              {x}
              </div>
          })
        }
        
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value = {text} onChange ={onTextChange}/>
        <div className="App-textbox-send" onClick = {onSend}>Send</div>
      </div>
    </div>
  );
}

export default App;
