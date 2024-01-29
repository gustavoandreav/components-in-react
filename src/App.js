import Title from './components/App/Title';
import ButtonList from './components/Button/ButtonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title text={'Buttons'}/>
      <ButtonList />
    </div>
  );
}

export default App;