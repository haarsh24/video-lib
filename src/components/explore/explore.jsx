import { Link } from "react-router-dom"
import exploreImage from "../../assets/explore.gif"

const Explore = () => {
    return (
        <>
            <div className="heading flex-column p2">
                Nothing here
            
            <Link to="/"> <button className="btn m1">Explore</button> </Link>
                <img src={exploreImage} className="gif"/>
                </div>
        </>
    )
}

export {Explore}