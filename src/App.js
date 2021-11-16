import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Title from './components/Title/Title';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Title />
      <Logo />
      <Footer />
    </div>
  );
}



export default App;
