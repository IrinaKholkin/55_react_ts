import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { CompanyWrapper } from "./styles";

function Amazon (){
    const navigate = useNavigate();

    const goToGooglePage = ()=>{
        navigate('/clients/google')
      }

    return (
        <CompanyWrapper>
            <h2>Amazon</h2>
            <p>Industry: Market Trade</p>
            <p>Founded: 1994</p>
            <p>Employees: 1 541 000+</p>
            <Button name="Switch to Google" onClick={goToGooglePage }/>
        </CompanyWrapper>
    );
}

export default Amazon;