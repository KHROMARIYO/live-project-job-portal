import { useState, useEffect } from "react";
import swal from "sweetalert";

const ManageProfile = () =>{
    let[fname, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[password, pickPassword] = useState("");
    let[dob, pickDOB] = useState("");
    let[gender, pickGender] = useState("");
    let[address, pickAddress] = useState("");
   
    const getUserDetails = () =>{
        let url = "https://easytohire.in/webapi/jobseeker/basic";
        let logindata = {userid:localStorage.getItem("id")};
        let postData = {
            headers:{'Content-Type':'application/json'},
            method:'post',
            body:JSON.stringify(logindata)
        };

        fetch(url, postData)
        .then(response=>response.json())
        .then(info=>{
            pickName( info.fullname );
            pickMobile( info.mobile );
            pickEmail( info.email );
            pickPassword( info.password );
            pickAddress( info.address );
            pickDOB(info.dob);
            pickGender(info.gender);
        })
    }

    useEffect(()=>{
        getUserDetails();
    }, []);

    const updateinfo = () =>{
        let url = "https://easytohire.in/webapi/jobseeker/updatebasic";
        let userdata = {
            fullname:fname, 
            email:email, 
            password:password, 
            mobile:mobile,
            dob:dob,
            gender:gender,
            address:address,
            userid:localStorage.getItem("id")
        };
        let postData = {
            headers:{'Content-Type':'application/json'},
            method:"post",
            body:JSON.stringify(userdata)
        }
        fetch(url, postData)
        .then(response=>response.text())
        .then(info=>{
            swal("Updated", info, "success");
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="p-3">
                    <h3 className="text-center mb-3 text-primary"> Edit Profile </h3>
                    <div className="row mb-4">
                        <div className="col-lg-6 mb-4">
                            <p> Full Name </p>
                            <input type="text" className="form-control" value={fname} onChange={obj=>pickName(obj.target.value)}/>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <p> Mobile No </p>
                            <input type="number" className="form-control" value={mobile} onChange={obj=>pickMobile(obj.target.value)}/>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <p> e-Mail Id </p>
                            <input type="email" className="form-control" value={email} onChange={obj=>pickEmail(obj.target.value)}/>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <p> Password </p>
                            <input type="text" className="form-control" value={password} onChange={obj=>pickPassword(obj.target.value)}/>
                        </div>
                        
                        <div className="col-lg-12 mb-4">
                            <p> Date of Birth </p>
                            <input type="date" className="form-control" value={dob} onChange={obj=>pickDOB(obj.target.value)}/>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <p> Gender </p>
                            <select className="form-select" value={gender} onChange={obj=>pickGender(obj.target.value)}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <p> Address </p>
                            <textarea className="form-control" value={address} onChange={obj=>pickAddress(obj.target.value)}></textarea>
                        </div>
                        <div className="col-lg-12 text-center">
                            <button className="btn btn-primary" onClick={ updateinfo }> Update </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default ManageProfile;



/*
    npm install bootstrap 
    npm install react-router-dom
    npm install sweetalert
    npm install react-toastify
*/