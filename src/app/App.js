import './App.css';
import ResponsiveAppBar from "../layout/Navbar"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import ProductPage from "../pages/productPage/ProductPage";
import useFetch from "../hooks/useFetch";
import Login from "../pages/login/Login";


function App() {

    const {isPending, error} = useFetch("http://localhost:8080/");

    return (
        <Router>
            <div className="App">
                <ResponsiveAppBar/>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/products/:id" element={<ProductPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
                <div>
                    {error && <div>{error}</div>}
                    {isPending &&   <div id="loader-wrapper">
                        <div id="loader"></div>
                        <div className="loader-section section-left"></div>
                        <div className="loader-section section-right"></div>
                    </div>}
                </div>
            </div>
        </Router>
    );
}

export default App;
