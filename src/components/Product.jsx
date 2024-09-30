import { useDispatch } from "react-redux"
import { add } from "../store/cartSlice"

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const addToCart = (event, product) => {
        dispatch(add(product))
    }

    return (
        <div className=" bg-white h-fit rounded-lg py-3 ">
            <img src={product.image} className="mx-auto h-32" alt="productLogo" />
            <div className="font-semibold mt-5 text-center">{product.title}</div>
            <div className="font-bold text-center text-xl my-5">{product.price}</div>
            <button onClick={() => { addToCart(event, product) }} className="w-fitx mx-auto text-center bg-violet-600 px-4 py-1 text-white font-semibold rounded">Add to cart</button>
        </div>
    )
}

export default Product