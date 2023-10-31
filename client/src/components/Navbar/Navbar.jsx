import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import languageImg from "../../assets/mzn-flag.png";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link className="link" to="/">
          <span className="logo">Kruppbooking</span>
        </Link>
        <div className="right">
          <div className="navbarRightItem">
            <span className="currency">MZN</span>
          </div>
          <div className="navbarRightItem">
            <div className="imgContainer">
              <img src={languageImg} alt="" className="languageImg" />
            </div>
          </div>
          <div className="navbarRightItem">
            <div className="help">
              <span>?</span>
            </div>
          </div>
          {!user ? (
            <>
              <button className="navButton">Register</button>
              <Link className="link" to="/login">
                <button className="navButton">Login</button>
              </Link>
            </>
          ) : (
            <>
              {user.username}
              <button className="navButton" onClick={handleClick}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
