import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({username:"", password: ""});
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/kanbas/account");
    };
    return (
        <div>
            <h1>Signin</h1>
            <input className="form-control mb-2 ms-4" value={credentials.username} onChange={(e) => setCredentials({...credentials, username:e.target.value})}/>
            <input className="form-control mb-2 ms-4" value={credentials.password} onChange={(e) => setCredentials({...credentials, password:e.target.value})}/>
            <button className="btn btn-primary ms-4" onClick={signin}> Signin </button>
            <hr/>
            <p>Don't have an account?</p>
           <Link className="btn btn-primary ms-4" to="/kanbas/signup">
                Signup
            </Link> 
        </div>
    );
}
export default Signin;