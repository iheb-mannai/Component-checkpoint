import css from './App.test'
import FullName from './Components/FullName'
import ProfilPhoto from './Components/ProfilPhoto'
import Address from './Components/Address'

function App() {
  return (
    <div >
      
     <ProfilPhoto className='profil'/>
     <FullName/>
     <Address/>
     
    </div>
  );
}

export default App;
