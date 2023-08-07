import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase/firebase";

function Navigation() {
  const { currentUser} = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
        <CrownLogo className="logo" />
        </Link>
        <div className="nav-link-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
              ) : (
                <Link className="nav-link" to='/auth'>
                SIGN -IN
            </Link>
              )
            }
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
