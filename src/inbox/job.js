import { useState, useEffect } from "react";
import swal from "sweetalert";

const Job = () =>{
    let[joblist, pickJob] = useState([]); // change
    const alljob = () =>{
        let url = "https://easytohire.in/webapi/jobseeker/alljobs";
        let logindata = {userid:localStorage.getItem("id")};
        let postData = {
            headers:{'Content-Type':'application/json'},
            method:'post',
            body:JSON.stringify(logindata)
        };

        fetch(url, postData)
        .then(response=>response.json())
        .then(info=>{
            pickJob( info ); // change
        })
    }

    useEffect(()=>{
        alljob();
    }, []);

   const applynow = (jobid) =>{
    let url = "https://easytohire.in/webapi/jobseeker/jobapply";
        let userdata = {
            jid:jobid,
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
            swal(info);
        })
   }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="p-3">
                    <h3 className="text-center mb-3 text-primary"> Recent Jobs : {joblist.length} </h3>
                        {
                            joblist.map((job, index)=>{
                                return(
                                    <div className="border rounded p-3 mb-4" key={index}>
                                        <h4> {job.jobtitle}</h4>
                                        <div className="input-group">
                                            <p className="me-4 text-info"> Salary : {job.minsal} - {job.maxsal}/ LPA</p>
                                            <p className="me-4 text-warning"> Experience : {job.minexp} - {job.maxexp} Years</p>
                                            <p className="text-secondary"> Location : {job.location} </p>
                                        </div>
                                        <p> {job.jd} </p>
                                        <button className="btn btn-info btn-sm m-2 text-white" onClick={obj=>applynow(job.jobid)}><i class="fa fa-edit"></i> Apply</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default Job;
