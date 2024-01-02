import { useNavigate } from "react-router-dom";
import "./index.css";

const NotFound = () => {
    const navigate = useNavigate();

    return(
        <div className="NotFound">
            <h1 className="text-3xl text-blue-600 font-bold">
                Sorry, the page you are looking for does not exist.
            </h1>
            <button className="go-back-button" onClick={() => navigate(-1)}>
                Go back to the main page
            </button>
        </div>
    )
}

export default NotFound;