import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import Title from './components/Title/Title';
import MyPosts from './components/MyPosts/MyPosts'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Logo/>
                <Routes>
                    <Route path='/profile' element={<Title/>}/>
                    <Route path='/dialogs' element={<MyPosts/>}/>
                </Routes>
                {/*<Title/>*/}
                {/*<MyPosts/>*/}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
