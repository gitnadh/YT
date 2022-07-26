import Navigationbar from './Components/Navigationbar';
import M from './Components/Mainvideo'
import Sugg,{Comments,Footery} from './Components/Sugg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <div className='row'>
        <div className='col-8'>
          <M />
          <Comments />
        </div>
        <div className='col-4'><Sugg /></div>
      </div>
      <Footery />


      



    </div>
  );
}

export default App;
