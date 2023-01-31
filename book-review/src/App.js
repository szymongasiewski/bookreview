import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";
import Favourites from "./pages/Favourites";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/reviews' element={<Reviews/>}></Route>
            <Route path='/favourites' element={<Favourites/>}></Route>
            <Route path='/:id' element={<BookDetails/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
