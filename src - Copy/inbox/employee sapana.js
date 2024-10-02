import { useState, useEffect } from "react";
import swal from "sweetalert";

const ManageEmp = () => {
    let [Ename, pickName] = useState("");
    let [Mobile, pickMobile] = useState("");
    let [Email, pickEmail] = useState("");
    let [Password, pickPassword] = useState("");
    let [Designation, pickDesignation] = useState("");
    let [employees,setemployees]=useState([]);

    const getUserDetails = () => {
        let url = "http://localhost:3000/EmpAccont/" + localStorage.getItem("id");
        fetch(url)
            .then(response => response.json())
            .then(info => {
                pickName(info.Empname);
                pickMobile(info.Mobile);
                pickEmail(info.Email);
                pickPassword(info.Password);
                pickDesignation(info.Designation);
            });
 }
 const fetchEmployees = () => {
    const url = "http://localhost:3000/EmpAccont/";
    fetch(url)
        .then(response => response.json())
        .then(data => setemployees(data))
        
};
    useEffect(() => {
        getUserDetails();
        fetchEmployees();
    }, []);
    const saveinfo = () => {
        let url =  "http://localhost:3000/EmpAccont/"
        let userdata = {
            Empname: Ename,
            Empemail: Email,
            Password: Password,
            Mobile: Mobile,
            Designation: Designation
        }
        let postData = {
            headers: { 'Content-Type': 'application/json' },
            method: "post", 
            body: JSON.stringify(userdata)
        }
    
        fetch(url, postData)
           .then(response=>response.json())
            .then(response=>{
            swal("Data save successfully","Your profile has been save successfully.", "success");
            localStorage.setItem("Empname", Ename);
          setTimeout(pageReload, 3000);
           
           })
        }

    const Delete = (id) => {
        let url = "http://localhost:3000/EmpAccont/" + id ;
    
        let deleteData = {
            headers: { 'Content-Type': 'application/json' },
            method: "DELETE"
        }
    
        fetch(url, deleteData)
            .then(response =>response.json())
            .then(response=>{
               
         swal("Profile Deleted", "Your profile has been deleted successfully.", "success");
                    localStorage.setItem("Empname", Ename);
                    setTimeout(pageReload, 3000);
                         
            })    
    }
const pageReload = () => {
       window.location.reload();
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4">
                    <div className="p-3 border shadow rounded">
                        <h3 className="text-center mb-1 text-primary">Employee Details</h3>
                        <div className="row mb-6">
                            <div className="col-lg-12 mb-4">
                                <p>Employee Name</p>
                                <input type="text" className="form-control" value={Ename} onChange={obj => pickName(obj.target.value)} />
                            </div>
                            <div className="col-lg-12 mb-4">
                                <p>Employee E-mail</p>
                                <input type="email" className="form-control" value={Email} onChange={obj => pickEmail(obj.target.value)} />
                            </div>
                            <div className="col-lg-12 mb-4">
                                <p>Password</p>
                                <input type="password" className="form-control" value={Password} onChange={obj => pickPassword(obj.target.value)} />
                            </div>
                            <div className="col-lg-12 mb-4">
                                <p>Mobile No</p>
                                <input type="text" className="form-control" value={Mobile} onChange={obj => pickMobile(obj.target.value)} />
                            </div>
                            <div className="col-lg-12 mb-4">
                                <p>Designation</p>
                                <select className="form-control" value={Designation} onChange={obj => pickDesignation(obj.target.value)}>
                                    <option value="">Choose</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>
                            <div className="col-lg-12 text-center">
                                <button className="btn btn-primary" onClick={saveinfo}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="p-3 border shadow rounded">
                        <h3 className="text-center mb-3 text-primary">View Profile</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                     <th>Name</th>
                                     <th>Email</th>
                                     <th>Password</th>
                                     <th>Mobile</th>
                                     <th>Designation</th>
                                     <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.Empname}</td>
                                        <td>{employee.Empemail}</td>
                                        <td>{employee.Password}</td>
                                        <td>{employee.Mobile}</td>
                                        <td>{employee.Designation}</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => Delete(employee.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  ManageEmp;
