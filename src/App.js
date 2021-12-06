import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import Dialogs from './components/Dialogs/Dialogs';
import MyPosts from './components/MyPosts/MyPosts'
import {BrowserRouter, Route, Routes} from "react-router-dom";

// fetch('https://api.sampleapis.com/countries/countries')
//     .then(data => data.json())
//     // .then(data2 => console.log(giveMeLength(data2)))
//     .then(data => {
//         let allIndex = data.map((item, index) => index);
//         some(data, allIndex);
//     })
//
// // const giveMeLength = (data) => data.length;
//
// const some = (data, nums) => {
//     const countries = document.getElementById('root');
//     countries.innerHTML = nums.map(num => `${data[num].name}`).join('; ');
//     countries.style.fontSize = '60px';
//     countries.style.color = 'blue';
// }

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Logo/>
                <Routes>
                    <Route path='/profile' element={<MyPosts state={props.state}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs state={props.state} addPost={props.addPost}/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
export default App;
