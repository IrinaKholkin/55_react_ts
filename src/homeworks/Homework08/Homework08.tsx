import { ChangeEvent, useState } from "react"

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button";
import './styles.css'

function Homework08(){
const [passwordValue, setPasswordValue] = useState<string>("");
const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
};

const showPassword = () => {
    setIsShowPassword(true);
};

const hidePassword = () => {
    setIsShowPassword(false)
}

    return (
        <div className="homework08-container">
        <h1>Change password</h1>
        <Input 
        name="password" result-container
        label="Password" 
        id="password_id"
        placeholder="Enter your password" 
        type="password" 
        value={passwordValue} 
        onChange={onChangePassword}/>
        <Button name="SHOW PASSWORD" onClick={showPassword}></Button>
        <Button name="HIDE PASSWORD" onClick={hidePassword} />
        {/* Оператор условного рендеринга {isShowPassword && <div className="result-container">{passwordValue}</div>} */}
        {isShowPassword && <div className="result-container">{passwordValue}</div>}
        </div>);
    }
        

export default Homework08;