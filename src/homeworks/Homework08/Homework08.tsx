import { ChangeEvent, useState } from "react"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button";

function Homework08(){
const [password, setPassword] = useState<string>("");
const [showPassword, setShowPassword] = useState<boolean>(false);

const passwordChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
};

const toogleShowPassword = () => {
    setShowPassword(!showPassword);
};

    return (
        <div className="homework08-container">
        <h2>Change password</h2>
        <Input name="passwordInput" label="Password" placeholder="Enter your password" type="password" value={password} onChange={passwordChangeHandle}/>
        <Button name="SHOW PASSWORD" onClick={toogleShowPassword}></Button>
        {showPassword && <div>{password}</div>}
        </div>);
    }
        

export default Homework08;