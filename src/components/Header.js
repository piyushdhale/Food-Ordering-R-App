import { useState } from "react";
import constants from "../utils/constants";

const Header = () => {

  const [btnName,setBtnName] = useState("Login")
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo'
          src= {constants.LOGO_URL}
          />
        </div>
        <div className='nav-items'>
          
          <ul>
  
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button className="login-btn" onClick={()=>{
                btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login")
              }}>{btnName}</button>
          </ul>klsdjfkjhfkodjhf
  
        </div>
      </div>
    )
  
  }

  export default Header;