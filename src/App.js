import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Title from './components/Title/Title';
import MyPosts from './components/MyPosts/MyPosts'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Title />
      <Logo />
      <MyPosts />
      <Footer />
    </div>
  );
}



export default App;
