import { useNavigate } from "react-router-dom";
import "./index.css";

const Data = () => {
    const navigate = useNavigate();
    const topicsInterested = ["C/C++","Python","Javascript/Typescript","React.js","AI(machine learning)"
    ,"...any front-end/backend stuff"];

    return(
        <>
            <div className="space-y-4">
                <h1 className="text-3xl text-yellow-600 font-bold">About me</h1>
                <div className="infobox">
                    <p className="justify-self-center text-3xl font-bold mt-4">Personal info</p>
                    <h2 className="name">Name: Oscar Law</h2>
                    <h2 className="ign">In-game name: NeedSupport</h2>
                    <h2 className="intro">Description: </h2>
                    <pre className="text-left indent-8 mx-6 my-4 text-wrap">
                        I am a Year 3 computer science student who enjoys learning
                        the latest technology or cool stuffs in the Internet. I am also 
                        passionate on programming and motivated to self-learn different coding
                        techniques.
                    </pre>
                    <pre className="text-left indent-8 mx-6 my-4 text-wrap">
                        Interested fields:
                        <ul>
                            {topicsInterested.map((item,index) => (
                                <li className="list-disc mx-16" key={`${index}`}>{item}</li>
                            ))}
                        </ul>
                    </pre>
                </div>
                <div className="infobox">
                    <p className="justify-self-center text-3xl font-bold mt-4">Education</p>
                </div>
                <div className="go-back">
                    <button className="back-to-main" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </>
    )
}

export default Data;