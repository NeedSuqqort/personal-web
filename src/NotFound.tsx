import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="NotFound">
            <h1>Sorry,the page you are looking for does not exist</h1>
            <Link className="back-to-main" to={"/"}>
                <button className="go-back-button">
                    Go back to the main page
                </button>
            </Link>
        </div>
    )
}

export default NotFound;