import { Link } from "react-router-dom";

const CreateAccount = () =>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 shadow-lg rounded p-4">
                    <h3 className="text-center"> <i className="fa fa-user-plus text-info"></i> Create Account </h3>
                    <div className="mb-3">
                        <label> Full Name </label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label> e-Mail Id </label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label> Password </label>
                        <input type="password" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label> Mobile No </label>
                        <input type="number" className="form-control"/>
                    </div>

                    <p className="text-center">
                        <Link to="/"> 
                            Registered ? Login
                        </Link>
                    </p>

                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}

export default CreateAccount;