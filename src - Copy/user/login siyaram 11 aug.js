import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 shadow-lg rounded p-4">
                    <h3 className="text-center"> <i className="fa fa-lock text-info"></i> Login </h3>
                    
                    <div className="mb-3">
                        <label> e-Mail Id </label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label> Password </label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="text-center mb-3">
                        <button className="btn btn-danger"> Login </button>
                    </div>
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