import {useState} from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import swal from "sweetalert";

const CreateAccount=()=>{
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        mobile: ""
    });

    const Mydata = (obj) => {
        setFormData({ ...formData,[obj.target.name]: obj.target.value  });
    };

    const save = async () => {
        try {
            const response = await fetch('http://localhost:1234/account', 
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                swal('Created', 'Account Created Successfully!', "success");
                setFormData({
                    fullName: "",
                    email: "",
                    password: "",
                    mobile: ""
                });
            } else {
                toast('Failed to create account.');
            }
        } catch (error) {
            toast("Error occur during account creation")
        }
    };

   
return(
    <div className="container mt-5">
        <ToastContainer/>
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 shadow-lg rounded p-4">
                <h3 className="text-center"> <i className="fa fa-user-plus text-info"></i> Create Account</h3>
 
 
                <div className="mb-3">
                        <label>Full Name </label>
                        <input type="text" className="form-control"  name="fullName"  value={formData.fullName}  onChange={Mydata}/>
                    </div>
                <div className="mb-3">
                        <label>E-Mail Id </label>
                        <input type="text" className="form-control"  name="email" value={formData.email}
                            onChange={Mydata}/>
                    </div>
                    <div className="mb-3">
                        <label>Password </label>
                        <input type="password" className="form-control"  name="password" value={formData.password} onChange={Mydata}/>
                    </div>
                    
                <div className="mb-3">
                        <label>Mobile No </label>
                        <input type="number" className="form-control"  name="mobile" value={formData.mobile} onChange={Mydata}/>
                    </div> 
                    <div className="text-center mb-3">
                        <button  onClick={save} className="btn btn-danger">Submit </button>
                    </div>

                <p className="text-center">
                        <Link to="/"> Registered? Create Account</Link>
                    </p>
            </div>
           <div className="col-lg-4"></div>
        </div>
    </div>

)



}


export default CreateAccount;