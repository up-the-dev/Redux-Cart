import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/cartSlice"

const Cart = () => {
    const items = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const removeFromCart = (item) => {
        console.log(item)
        dispatch(remove(item))
    }
    return (
        <>
            <div>Cart Page</div>
            <div className="flex flex-col gap-10 container mx-auto" >
                {
                    items.map((item) => {
                        return (

                            <div key={item.id} className="flex flex-row justify-between w-1/2 bg-white px-5 py-2 items-center mx-auto">
                                <img src={item.image} className=" w-20" alt="itemlogo" />
                                <h2>{item.title}</h2>
                                <h1>{item.price}</h1>
                                <button onClick={() => removeFromCart(item)} className="bg-violet-600 h-fit w-fit px-2 py-1 font-semibold text-white">Remove</button>

                            </div >
                        )
                    })

                }
            </div>

        </>
    )
}
export default Cart 