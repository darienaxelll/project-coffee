import ProductCard from "../../components/productCards/ProductCard";
import useFetch from "../../hooks/useFetch";

const Home = () => {

    const {data: products, isPending, error} = useFetch("http://localhost:8080/api/products");

    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isPending &&   <div id="loader-wrapper">
                            <div id="loader"></div>
                            <div className="loader-section section-left"></div>
                            <div className="loader-section section-right"></div>
                            </div>}
            {products && <ProductCard products={products}/>}
        </div>
    );
}

export default Home;