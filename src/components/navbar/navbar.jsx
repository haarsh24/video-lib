import { Link } from "react-router-dom";

const Navbar = () => {
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
        <input
          className="input-text input-search"
          placeholder="Search 
         "
        />
        <div className="nav-icon ">
          <span className="material-icons md-48">face</span>
        </div>
      </div>
    </>
  );
};

export { Navbar };