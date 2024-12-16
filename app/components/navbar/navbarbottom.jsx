import "./navbarbottom.css"
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";





export default function Navbarbottom() {
  return (
    <div className="Navbarbottom">
        <div className="navbarbottom-logo">
            <h1 className="navbarbottom-logo-1">COLO</h1>
            <h1 className="navbarbottom-logo-2">SHOP</h1>
        </div>

        <div className="navbarbottom-anchors">
            <div className="navbarbottom-anchors-1">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Promotion</a>
                <a href="">Pages</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>

            <div className="navbarbottom-anchors-2">

                <div className="anchoricons1"><FaSearch className="icons-navbarbottom" /></div>

                <div className="anchoricons1"><IoPersonSharp className="icons-navbarbottom" /></div>

                <div className="anchoricons1"><BsCartFill className="icons-navbarbottom" /></div>
            </div>
        </div>
        

    </div>
  );
}
