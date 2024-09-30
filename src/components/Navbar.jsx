import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const products = useSelector((state) => state.cart)
    return (

        <div className="flex justify-between">
            <NavLink to='/home' className="font-extralight text-4xl m-5">Redux-Cart</NavLink>
            <li className="flex justify-around  w-1/6 font-semibold text-xl my-auto ">
                <ul>
                    <NavLink to='/home'>HOME</NavLink>
                </ul>
                <ul>
                    <NavLink to='/cart'>CART : {products.length}</NavLink>
                </ul>
            </li>
        </div>
    )
}
export default Navbar