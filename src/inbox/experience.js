import { useState, useEffect } from "react";
import swal from "sweetalert";

const Experience = () =>{
    let[about, pickAbout] = useState(""); // change
    let[allexp, pickExp] = useState(""); // change
  
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
            pickAbout( info.aboutexp ); // change
            pickExp( info.totalexp );
        })
    }

    useEffect(()=>{
        getUserDetails();
    }, []);

    const updateinfo = () =>{
        let url = "https://easytohire.in/webapi/jobseeker/updateexp";
        let userdata = {
            aboutexp:about,
            totalexp:allexp,
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
                    <h3 className="text-center mb-3 text-primary"> Edit My Experience </h3>
                        <div className="row mb-4">
                            <div className="col-lg-12 mb-4">
                                <p> Enter Your Work Experience </p>
                                <textarea className="form-control" value={about} onChange={obj=>pickAbout(obj.target.value)}></textarea>
                            </div>
                            <div className="col-lg-12 mb-4">
                                <p> Your Total Work Experience </p>
                                <input type="text" className="form-control" value={allexp} onChange={obj=>pickExp(obj.target.value)}/>
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

export default Experience;
