import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const {
    authState: { isLogin, userData ,token},
  } = useAuth();
  console.log(isLogin);
  console.log(userData);
  console.log(token);
  return (
    <>
      <div className="header">
        <div className="bars">
          <h2>
            {" "}
            <Link className="brand-name" to="/">
              MusicXclub
            </Link>{" "}
          </h2>
        </div>
        
        <div>
          <Link to="/login">
            <span className="h3">{(isLogin)?`Hi ,${userData.lastName}`:"Login"}</span>
          </Link>
        </div>
        <div className="nav-icon ">
          <span className="material-icons md-48">face</span>
        </div>
      </div>
    </>
  );
};

export { Navbar };
