import { Link } from "react-router-dom";
import  errorImage  from "../../assets/error.gif"

const Error = () => {
    return (
        <div className="error flex-column">
        
            <div class="image-responsive ">
            <h1>Error</h1>
        <div className="h3 p2">
            Sorry, something went wrong. Please try again later.
            </div>
                <img src={errorImage} className="gif"/>
            </div>
            <Link to="/">
        <button className="btn m1">Go Back</button></Link>  
        </div>
    );
}

export {Error};
