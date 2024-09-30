import { useEffect, useState } from "react"
import Product from "../components/Product"
import { useDispatch, useSelector } from "react-redux"
import { STATES, fetchProduct } from "../store/productSlice"

const Home = () => {

    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const { products, currentState } = useSelector((state) => state.product)

    useEffect(() => {
        try {
            dispatch(fetchProduct())
        } catch (error) {
            console.error(error)
        }

    }, [])
    return (
        <>

            <div>Home Page</div>

            {currentState == STATES.pending ? <h2 className=" font-bold text-3xl">fetching products....</h2> :
                <div className=" grid grid-flow-row grid-cols-4 gap-10 mx-10">
                    {

                        products.map((product) => {
                            return (
                                <Product product={product} key={product.id}></Product>
                            )
                        })

                    }
                </div>
            }


        </>
    )
}

export default Home