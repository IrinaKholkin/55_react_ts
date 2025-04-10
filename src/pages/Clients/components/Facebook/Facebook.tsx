import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { CompanyWrapper } from "./styles";

function Facebook (){
    const navigate = useNavigate();

    return (
        <CompanyWrapper>
            <h2>Facebook</h2>
            <p>Industry: Social Media</p>
            <p>Founded: 2004</p>
            <p>Employees: 60,000+</p>
            <Button name="Switch to Google" onClick={() => navigate('/clients/google')}/>
        </CompanyWrapper>
    );
}

export default Facebook;