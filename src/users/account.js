import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Account (){
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async  () => {
        const account = await client.account();
        setAccount(account);
    }
    const findUserWithId = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    }
    useEffect(() => {
        if (id){
            findUserWithId(id);
        } else {
            fetchAccount();
        }
    }, []);
    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/kanbas/signin");
    }
    return (
        <div className="w-50">
            <h1>Account</h1> 
            {account && (
                <div>
                    <input className="form-control mb-3" value={account.password} type="text" onChange={(e) => setAccount({...account, password: e.target.value})}/>
                    <input className="form-control mb-3" value={account.firstName} type="text" onChange={(e) => setAccount({...account, firstName:e.target.value})}/>
                    <input className="form-control mb-3" value={account.lastName} type="text" onChange={(e) => setAccount({...account, lastName: e.target.value})}/>
                    <input className="form-control mb-3" value={account.dob} type="date" onChange={(e) => setAccount({...account, dob: e.target.value})}/>
                    <input className="form-control mb-3" value={account.email} type="email" onChange={(e) => setAccount({...account, email:e.target.value})}/>
                    <select className="form-select mb-3" onChange={(e) => setAccount({...account, role: e.target.value})}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save} className="btn wd-btn mb-3">
                        Save
                    </button>
                    <button onClick={signout} className="btn wd-btn mb-3">Signout</button>
                    <Link to="../admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;