import './App.css';
import Profile  from './profile/profile';
import Photot from './profile/photot';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Photot> <img src='./image/props.jpeg' alt=''/> </Photot>
    </div>
  );
}

export default App;
