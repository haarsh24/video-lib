import { Link } from "react-router-dom";
import  errorImage  from "../../assets/error.gif"

const Error = () => {
    return (
        <div className="error flex-column explore-error p2">
        
           
            <h1>Error</h1>
           <div className="h3 ">
            Sorry, something went wrong. Please try again later.
                </div>
                <Link to="/">
                <button className="btn m-tb-1">Go Back</button></Link>  
                <div class=" ">
                <img src={errorImage} className="image-responsive gif"/>
            </div>
           
        </div>
    );
}

export {Error};
