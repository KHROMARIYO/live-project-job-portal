import { useState, useEffect } from "react";
import swal from "sweetalert";

const Education = () =>{
    let[education, pickEducation] = useState("");
    let[year, pickYear] = useState("");
    let[grade, pickGrade] = useState("");
    let[college, pickCollege] = useState("");
   
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
            pickEducation( info.educationame );
            pickYear( info.passingyear );
            pickGrade( info.grade );
            pickCollege( info.college );
        })
    }

    useEffect(()=>{
        getUserDetails();
    }, []);

    const updateinfo = () =>{
        let url = "https://easytohire.in/webapi/jobseeker/updateeducation";
        let userdata = {
            passingyear:year, 
            educationame:education, 
            grade:grade, 
            college:college,
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
                    <h3 className="text-center mb-3 text-primary"> Edit Education </h3>
                    <div className="row mb-4">
                        <div className="col-lg-12 mb-4">
                            <p> Education Name </p>
                            <input type="text" className="form-control" value={education} onChange={obj=>pickEducation(obj.target.value)}/>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <p> Year of Passing </p>
                            <input type="number" className="form-control" value={year} onChange={obj=>pickYear(obj.target.value)}/>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <p> Grade / Marks % </p>
                            <input type="text" className="form-control" value={grade} onChange={obj=>pickGrade(obj.target.value)}/>
                        </div>
                        <div className="col-lg-12 mb-4">
                            <p> College / University Name </p>
                            <input type="text" className="form-control" value={college} onChange={obj=>pickCollege(obj.target.value)}/>
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

export default Education;
