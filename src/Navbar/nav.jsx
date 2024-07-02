import React from "react";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AppleIcon from '@mui/icons-material/Apple';


class Nav extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isOpen: false
      };
   }

   togglePopup = () => {
      this.setState({ isOpen: !this.state.isOpen });

   };


   render() {

      return (
         <>
            <div className="flex justify-center h-16 bg-gray-300 items-center sticky top-0">
               <ul className="flex gap-4">
                  <p> <AppleIcon /></p>
                  <li>
                     <Link to='/'>Store</Link>
                  </li>
                  <li>
                     <Link to='/Mac'>Mac</Link>
                  </li>
                  <li>
                     <Link to='/Ipad'>Ipad</Link>
                  </li>
                  <li>
                     <Link to='/Iphone'>Iphone</Link>
                  </li>
                  <li>
                     <Link to='/Watch'>Watch</Link>
                  </li>
                  <li>
                     <Link to='/AirPods'>AirPods</Link>
                  </li>
                  <li>
                     <Link to='/Support'>Support</Link>
                  </li>
                  <li>
                     <Link to='/Cart'><ShoppingCartIcon /> {this.props.count}</Link>
                  </li>
                  <input className="" type="text" placeholder=" 🔍 Search " />
                  <Link to='Login'> <ManageAccountsIcon />Login</Link>
               </ul>
            </div>
         </>
      )
   }
}
export default Nav;