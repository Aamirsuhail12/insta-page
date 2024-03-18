
import Input from "../Input/Input";
import './Form.css'
function Form(){

    return (
        <div className="form">
        <Input type="email" placeholder="Mobile Number or Email"/>
        <Input type="text" placeholder="Full Name"/>
        <Input type="text" placeholder="Phone number,username or email"/>
        <Input type="password" placeholder="Password"/>
        <button className="btn">Sign up</button>
        </div>
    )
}

export default Form;