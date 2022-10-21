import './App.css';
import ResponsiveAppBar from "../layout/Navbar"
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/productCards/ProductCard";

function App() {
    const {data: products, isPending, error} = useFetch("http://localhost:8080/api/products");

    return (
        <div className="App">
            <ResponsiveAppBar/>
            <div className="container">
                {error && <div>{error}</div>}
                {isPending &&   <div id="loader-wrapper">
                                <div id="loader"></div>
                                <div className="loader-section section-left"></div>
                                <div className="loader-section section-right"></div>
                                </div>}
                {products && <ProductCard products={products}/>}
            </div>
        </div>
    );
}

export default App;
