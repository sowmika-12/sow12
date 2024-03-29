
import './App.css';
import CustomButton from './components/function components/button';
//  import ButtonComponent from './components/class-components/button';
// import ButtonComponent from './class-components/button.js';
// import ButtonComponent from '../ClassComponents/button';
import ButtonComponent from './ClassComponents/button';
import CustomImage from './components/function components/image';
import ImageComponent from './ClassComponents/image';
import ListSow from './ClassComponents/list';
import Tables from './components/function components/tables';
import Forms from './ClassComponents/form';
function App() {
  return (
    <div className="App">
   
        <CustomButton/>
        <CustomButton/>
        <CustomButton/>
        <CustomButton/>
        <ButtonComponent/>
        <CustomImage/>
        <ImageComponent/>
        <ListSow/>
        <Tables/>
        <Forms/>
    </div>
  );
}

export default App;

