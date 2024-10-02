import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";

const Login = () =>{
    let[msg, setMessage] = useState("Enter Login Details");
    let[emailid, setEmail] = useState("");
    let[mypassword, setPassword] = useState("");

    const userCheck = (obj) =>{
        obj.preventDefault();
        let url = "http://localhost:1234/account?email="+emailid+"&password="+mypassword;
        fetch(url)
        .then(response=>response.json())
        .then(userinfo=>{
            if(userinfo.length > 0){
                setMessage("Success : Please Wait Redirecting...");
                localStorage.setItem("id", userinfo[0].id);
                localStorage.setItem("fullname", userinfo[0].fullname);
                window.location.reload();
            }else{
                swal("Invalid", "Invalid or Not Exists", "error");
            }
        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 shadow-lg rounded p-4">
                    <h3 className="text-center"> <i className="fa fa-lock text-info"></i> Login </h3>
                    <p className="text-danger text-center"> { msg } </p>
                    <form onSubmit={userCheck}>
                        <div className="mb-3">
                            <label> e-Mail Id </label>
                            <input type="text" className="form-control" onChange={obj=>setEmail(obj.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label> Password </label>
                            <input type="password" className="form-control" onChange={obj=>setPassword(obj.target.value)}/>
                        </div>
                        <div className="text-center mb-3">
                            <button className="btn btn-danger"> Login </button>
                        </div>
                    </form>
                    <p className="text-center">
                        <Link to="/signup"> 
                            New ? Create Account
                        </Link>
                    </p>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}

export default Login;