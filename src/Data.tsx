import { useNavigate } from "react-router-dom";
import "./index.css";

const Data = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="space-y-4">
                <h1 className="text-3xl text-yellow-600 font-bold">About me</h1>
                <div className="bg-sky-500 w-[900px] m-auto rounded-xl m-auto mb-2 py-4">
                    <h2 className="name">Name: Oscar Law</h2>
                    <h2 className="ign">In-game name: NeedSupport</h2>
                    <h2 className="intro">Description: </h2>
                    <pre className="text-left indent-8 mx-6 my-4 text-wrap">
                        I am a Year 3 computer science student who enjoys learning
                        the latest technology or cool stuffs in the Internet. I am also 
                        passionate on programming and willing to self-learn many coding
                        techniques.
                    </pre>
                </div>
                <div className="go-back">
                    <button className="back-to-main" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </>
    )
}

export default Data;