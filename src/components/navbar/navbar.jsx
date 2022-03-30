import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="bars">
          <h2>
            {" "}
            <a className="brand-name" href="/">
              MusicXClub
            </a>{" "}
          </h2>
        </div>
        <input className="input-text input-search" placeholder="Search" />
        <div className="nav-icon ">
          <span className="material-icons md-48">face</span>
        </div>
      </div>
    </>
  );
};

export { Navbar };
