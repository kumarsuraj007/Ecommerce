import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'

function Navigation() {
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
            <Link className="nav-link" to='/auth'>
                SIGN -IN
            </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
