import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import ProductDescription from "./ProductDescription";

const ProductPage = () => {
    const {id} = useParams();
    const {data: products, isPending, error} = useFetch("http://localhost:8080/api/products/" + id);

        return (
            <div className="product-details">
                {isPending && <div id="loader-wrapper">
                    <div id="loader"></div>
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>}
                {error && <div>{error}</div>}
                {products && <ProductDescription product={products}/>}
            </div>
        );
}

export default ProductPage;