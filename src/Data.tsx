import { Link } from "react-router-dom";

const Data = () => {
    return(
        <div className="data">
            <p>NeedSupport's CV</p>
            <Link to={`/${process.env.NODE_ENV === "production" ? "personal-web": ""}`}>Go back</Link>
        </div>
    )
}

export default Data;