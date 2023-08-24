import { Fragment } from "react";
import { Outlet} from "react-router-dom";
import CartIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext} from '../../contexts/cart.context.jsx'
import { signOutUser } from "../../utils/firebase/firebase";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles.jsx";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN -IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
          {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
