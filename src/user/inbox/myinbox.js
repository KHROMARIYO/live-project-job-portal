
import ManageProfile from "./myprofile";
import ManageEmp from "./employee";
import Skill from "./skill";
import Education from"./education";
const InboxModule=()=>{
    return(
        <>
        <div className="container mt-5 text-center">
            <h1>Welcome - {localStorage.getItem("fullname")}</h1>
            <button onClick={logout}> Logout </button>
        </div>
        <ManageProfile/>
        <ManageEmp/>
        <Education/>
        <Skill/>
        </>
    )
}
export default InboxModule;


const logout=()=>{
    localStorage.clear();
    window.location.reload();
}